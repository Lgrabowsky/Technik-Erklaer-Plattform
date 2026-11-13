import { NextResponse, type NextRequest } from "next/server";
import { timingSafeEqual } from "crypto";
import { getPayload } from "payload";
import config from "@payload-config";
import { hashToken, setSession } from "@/lib/session";

/** Link aus der Anmelde-E-Mail. Gilt 30 Minuten. */
export async function GET(req: NextRequest) {
  const id = Number(req.nextUrl.searchParams.get("k"));
  const token = req.nextUrl.searchParams.get("t") ?? "";
  const weiter = req.nextUrl.searchParams.get("weiter") ?? "/konto";
  const target = weiter.startsWith("/") && !weiter.startsWith("//") ? weiter : "/konto";

  const payload = await getPayload({ config });
  const customer = id ? await payload.findByID({ collection: "customers", id, depth: 0, showHiddenFields: true }).catch(() => null) : null;
  const expected = Buffer.from(customer?.loginTokenHash ?? "");
  const given = Buffer.from(hashToken(token));
  const valid =
    customer &&
    expected.length === given.length &&
    timingSafeEqual(expected, given) &&
    customer.loginTokenExpires &&
    new Date(customer.loginTokenExpires) > new Date();

  if (!valid) return NextResponse.redirect(new URL("/anmelden?fehler=abgelaufen", req.url));
  await setSession(customer);
  return NextResponse.redirect(new URL(`${target}${target.includes("?") ? "&" : "?"}angemeldet=1`, req.url));
}
