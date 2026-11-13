/**
 * Legt den ersten Admin an (alternativ: einfach http://localhost:3000/admin öffnen –
 * beim allerersten Aufruf fragt Payload selbst nach dem ersten Admin-Konto).
 * Aufruf: npm run admin:anlegen -- name@beispiel.de geheimesPasswort
 */
import { getPayload } from "payload";
import config from "@payload-config";

const [email, password] = process.argv.slice(2);
if (!email || !password) {
  console.error("Bitte so aufrufen: npm run admin:anlegen -- name@beispiel.de geheimesPasswort");
  process.exit(1);
}
const payload = await getPayload({ config });
await payload.create({ collection: "users", data: { email, password, name: email.split("@")[0] } });
payload.logger.info(`Admin ${email} angelegt. Anmelden unter /admin`);
process.exit(0);
