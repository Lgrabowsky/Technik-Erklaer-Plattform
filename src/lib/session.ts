import "server-only";
import { createHash, createHmac, randomBytes, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { connection } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Customer } from "@/payload-types";

/**
 * Anmeldung für Kundinnen und Kunden – ohne Passwort.
 * Das Sitzungs-Cookie ist signiert und damit fälschungssicher. Es ist technisch
 * notwendig (Anmeldung), daher ist kein Cookie-Banner erforderlich.
 */
const COOKIE = "sitzung";
const MAX_AGE = 60 * 60 * 24 * 180; // ein halbes Jahr angemeldet bleiben

const secret = () => {
  const s = process.env.PAYLOAD_SECRET;
  if (!s) throw new Error("PAYLOAD_SECRET fehlt in der .env-Datei");
  return s;
};

const sign = (data: string) => createHmac("sha256", secret()).update(data).digest("base64url");

export const hashToken = (token: string) => createHash("sha256").update(token).digest("hex");
export const newToken = () => randomBytes(32).toString("base64url");

export async function setSession(customer: Pick<Customer, "id" | "sessionVersion">) {
  const data = Buffer.from(
    JSON.stringify({ id: customer.id, v: customer.sessionVersion ?? 1, exp: Date.now() + MAX_AGE * 1000 }),
  ).toString("base64url");
  (await cookies()).set(COOKIE, `${data}.${sign(data)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearSession() {
  (await cookies()).delete(COOKIE);
}

/** Die angemeldete Person – oder null. Liest bei jedem Aufruf frisch aus der Datenbank. */
export async function getCustomer(): Promise<Customer | null> {
  await connection(); // immer zur Anfrage-Zeit, nie beim Vorab-Rendern
  const raw = (await cookies()).get(COOKIE)?.value;
  if (!raw) return null;
  const [data, sig] = raw.split(".");
  if (!data || !sig) return null;
  const expected = Buffer.from(sign(data));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  try {
    const { id, v, exp } = JSON.parse(Buffer.from(data, "base64url").toString()) as { id: number; v: number; exp: number };
    if (exp < Date.now()) return null;
    const payload = await getPayload({ config });
    const customer = await payload.findByID({ collection: "customers", id, depth: 1 }).catch(() => null);
    if (!customer || (customer.sessionVersion ?? 1) !== v) return null;
    return customer;
  } catch {
    return null;
  }
}
