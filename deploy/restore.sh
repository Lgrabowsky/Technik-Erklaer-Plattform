#!/usr/bin/env bash
# Spielt eine Sicherung zurück.
# Aufruf: ./restore.sh backups/db_2026-11-13_0315.sql.gz
set -euo pipefail

cd "$(dirname "$0")"
set -a; source ./.env; set +a

if [ ! -f "${1:-}" ]; then
  echo "Aufruf: $0 <datei.sql.gz>"
  exit 1
fi

read -r -p "Datenbank $POSTGRES_DB wirklich mit $1 überschreiben? (ja/nein) " ok
[ "$ok" = "ja" ] || exit 1

docker compose stop app
gunzip -c "$1" | docker compose exec -T db psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -v ON_ERROR_STOP=1
docker compose start app
echo "Fertig."
