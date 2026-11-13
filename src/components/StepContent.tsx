import type { Step } from "@/content/types";

export function StepContent({ step }: { step: Step }) {
  return (
    <div className="space-y-5">
      <p className="text-xl leading-relaxed">{step.text}</p>
      {step.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={step.image.src}
          alt={step.image.alt}
          className="max-h-[60vh] rounded-xl border-2 border-border"
        />
      )}
      {step.tip && (
        <div className="rounded-xl border-l-8 border-success bg-success-soft p-4 text-lg">
          <p>
            <strong>Tipp: </strong>
            {step.tip}
          </p>
        </div>
      )}
      {step.warning && (
        <div role="note" className="rounded-xl border-l-8 border-danger bg-danger-soft p-4 text-lg">
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
