import type { Step } from "@/content/types";

export function StepContent({ step }: { step: Step }) {
  return (
    <div className="space-y-5">
      <p className="text-[1.35rem] leading-relaxed">{step.text}</p>
      {step.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={step.image.src} alt={step.image.alt} className="max-h-[60vh] rounded-3xl" />
      )}
      {step.tip && (
        <div className="flex gap-4 rounded-3xl bg-mint p-5 text-lg">
          <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-ink" aria-hidden="true" />
          <p>
            <strong>Tipp: </strong>
            {step.tip}
          </p>
        </div>
      )}
      {step.warning && (
        <div role="note" className="flex gap-4 rounded-3xl bg-danger-soft p-5 text-lg text-danger">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-danger text-base font-bold text-white" aria-hidden="true">!</span>
          <p>
            <strong>Achtung: </strong>
            {step.warning}
          </p>
        </div>
      )}
    </div>
  );
}

export function stepSpeechText(step: Step) {
  return [step.title, step.text, step.tip && `Tipp: ${step.tip}`, step.warning && `Achtung: ${step.warning}`]
    .filter(Boolean)
    .join(". ");
}
