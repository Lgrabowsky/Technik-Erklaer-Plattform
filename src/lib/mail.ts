import "server-only";
import { getPayload } from "payload";
import config from "@payload-config";

export const mailConfigured = () => Boolean(process.env.SMTP_HOST);

/** Schlichte E-Mail: großer Text, ein klarer Knopf. */
export async function sendMail({ to, subject, lines, button }: { to: string; subject: string; lines: string[]; button?: { label: string; url: string } }) {
  const payload = await getPayload({ config });
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const html = `<div style="font-family:Arial,sans-serif;font-size:19px;line-height:1.5;color:#0d0f14;max-width:560px">
${lines.map((l) => `<p>${esc(l)}</p>`).join("\n")}
${button ? `<p style="margin:32px 0"><a href="${button.url}" style="background:#0d0f14;color:#ffffff;padding:18px 28px;border-radius:999px;text-decoration:none;font-weight:bold;display:inline-block">${esc(button.label)}</a></p><p style="font-size:15px;color:#555">Falls der Knopf nicht funktioniert, kopieren Sie diese Adresse in den Browser:<br>${esc(button.url)}</p>` : ""}
<p style="font-size:15px;color:#555">Schritt für Schritt – Technik einfach erklärt</p></div>`;
  const text = [...lines, button ? `${button.label}: ${button.url}` : ""].join("\n\n");
  await payload.sendEmail({ to, subject, html, text });
}

export async function notifyAdmin(subject: string, lines: string[]) {
  if (!process.env.ADMIN_EMAIL) return;
  await sendMail({ to: process.env.ADMIN_EMAIL, subject, lines }).catch(() => undefined);
}
