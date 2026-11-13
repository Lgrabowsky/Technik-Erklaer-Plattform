"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Icon } from "./Icon";

const noop = () => () => {};

/**
 * Liest einen Text mit der Sprachausgabe des Geräts vor (keine Kosten, kein Server).
 * Bei neuem Text bitte mit key={text} neu einbinden, damit der Zustand zurückgesetzt wird.
 */
export function ReadAloud({ text }: { text: string }) {
  const supported = useSyncExternalStore(
    noop,
    () => "speechSynthesis" in window,
    () => false,
  );
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  if (!supported) return null;

  function toggle() {
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.9;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    synth.speak(u);
    setSpeaking(true);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="no-print inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-bg px-5 font-semibold text-ink hover:bg-signal"
    >
      <Icon name="speaker" className="h-6 w-6" />
      {speaking ? "Vorlesen stoppen" : "Vorlesen"}
    </button>
  );
}
