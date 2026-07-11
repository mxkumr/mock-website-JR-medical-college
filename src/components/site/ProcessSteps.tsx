import { cn } from "@/lib/utils";

type Step = { num: string; title: string; body: string };

export function ProcessSteps({
  steps,
  className,
}: {
  steps: Step[];
  className?: string;
}) {
  return (
    <ol className={cn("space-y-10", className)}>
      {steps.map((step) => (
        <li key={step.num} className="flex gap-6">
          <span className="font-display text-4xl font-bold text-accent-2">
            {step.num}
          </span>
          <div>
            <h4 className="font-display text-h4 font-extrabold text-accent-6">
              {step.title}
            </h4>
            <p className="text-body-muted mt-2">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
