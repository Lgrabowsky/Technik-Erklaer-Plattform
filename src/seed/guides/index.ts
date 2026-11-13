import type { Guide } from "../../content/types";
import { grundlagen } from "./grundlagen";
import { gesundheit } from "./gesundheit";
import { unterwegs } from "./unterwegs";
import { bezahlen } from "./bezahlen";
import { sicherheit } from "./sicherheit";

/** Ursprüngliche Anleitungen (vor dem Admin-Bereich). Werden mit `npm run seed` in die Datenbank übernommen. */
export const guides: Guide[] = [...grundlagen, ...gesundheit, ...unterwegs, ...bezahlen, ...sicherheit];
