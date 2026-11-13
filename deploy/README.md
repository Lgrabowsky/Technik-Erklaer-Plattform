# Betrieb auf dem eigenen Server (Hetzner)

Kurzfassung. Die ausführliche Schritt-für-Schritt-Anleitung steht im Projekt-Dokument
„Plattform auf dem Hetzner-Server hosten“.

| Datei | Zweck |
| --- | --- |
| `../Dockerfile` | Produktions-Image (Next.js `output: "standalone"`, läuft nicht als root) |
| `compose.yaml` | App, PostgreSQL und optional Caddy (`COMPOSE_PROFILES=caddy`) |
| `Caddyfile` | HTTPS per Let's Encrypt, www-Weiterleitung, Sicherheits-Header |
| `nginx-site.conf.example` | Alternative, wenn auf dem Server schon nginx läuft |
| `.env.example` | Vorlage für alle Einstellungen und Geheimnisse |
| `backup.sh` / `restore.sh` | Nächtliche Datenbank-Sicherung und Zurückspielen |
| `../.github/workflows/deploy.yml` | Bauen und Ausrollen bei Push auf `main` |

## Auf dem Server (Ordner `/opt/technik-plattform`)

```bash
cp .env.example .env && chmod 600 .env   # dann ausfüllen
docker compose up -d                     # starten
docker compose ps                        # Zustand
docker compose logs -f app               # Protokoll
./backup.sh                              # Sicherung von Hand
```

Zurück auf eine ältere Version:

```bash
APP_IMAGE=ghcr.io/lgrabowsky/technik-erklaer-plattform:<commit> docker compose up -d app
```

## Lokal testen

```bash
docker build -t technik-test .
cd deploy && cp .env.example .env   # DOMAIN=localhost, Passwort setzen
APP_IMAGE=technik-test docker compose up -d
# https://localhost (Caddy nutzt für localhost ein eigenes Zertifikat)
```
