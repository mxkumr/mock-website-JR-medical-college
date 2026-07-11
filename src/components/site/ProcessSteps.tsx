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
    <ol className={cn("apply-steps", className)}>
      {steps.map((step) => (
        <li key={step.num} className="apply-step">
          <div className="apply-step-header">
            <span className="apply-step-num">{step.num}</span>
            <h4 className="apply-step-title">{step.title}</h4>
          </div>
          <p className="apply-step-body">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
