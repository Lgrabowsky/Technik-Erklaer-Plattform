#!/usr/bin/env bash
# Tägliche Datenbank-Sicherung. Einrichten per Cron (als Benutzer deploy, "crontab -e"):
#   15 3 * * * /opt/technik-plattform/backup.sh >> /opt/technik-plattform/backups/backup.log 2>&1
set -euo pipefail

cd "$(dirname "$0")"
set -a; source ./.env; set +a

KEEP_DAYS="${KEEP_DAYS:-14}"
STAMP="$(date +%Y-%m-%d_%H%M)"
FILE="backups/db_${STAMP}.sql.gz"

mkdir -p backups
docker compose exec -T db pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" --clean --if-exists | gzip > "$FILE"

# Leere oder kaputte Sicherung erkennen
if ! gzip -t "$FILE" || [ "$(stat -c %s "$FILE")" -lt 200 ]; then
  echo "$(date) FEHLER: Sicherung $FILE ist leer oder defekt" >&2
  exit 1
fi

# Alte Sicherungen aufräumen (nur Dateien db_*.sql.gz im Ordner backups)
find backups -maxdepth 1 -type f -name 'db_*.sql.gz' -mtime +"$KEEP_DAYS" -delete

# Optional: Kopie außer Haus auf die Hetzner Storage Box
if [ -n "${STORAGEBOX:-}" ]; then
  rsync -a -e "ssh -p 23" backups/db_*.sql.gz "${STORAGEBOX}:technik-plattform/"
fi

echo "$(date) OK: $FILE"
