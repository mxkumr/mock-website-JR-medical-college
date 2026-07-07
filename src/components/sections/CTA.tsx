import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type CTAProps = {
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function CTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTAProps) {
  return (
    <section
      className={cn("relative overflow-hidden bg-footer", className)}
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #B68C3A 0%, transparent 50%), radial-gradient(circle at 80% 50%, #355070 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  variant="accent"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
