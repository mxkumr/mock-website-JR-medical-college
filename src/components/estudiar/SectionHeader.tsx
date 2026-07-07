import { cn } from "@/lib/utils";
import { AccentTitle } from "./AccentTitle";
import { ThemeLink } from "./ThemeLink";

type SectionHeaderProps = {
  title?: string;
  subtitle?: string;
  accentParts?: string[];
  accentInline?: boolean;
  accentLight?: boolean;
  cta?: { label: string; href: string };
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  accentParts,
  accentInline = false,
  accentLight = false,
  cta,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className,
      )}
    >
      {accentParts && accentParts.length > 0 && (
        <AccentTitle
          parts={accentParts}
          inline={accentInline}
          light={accentLight}
          className={align === "center" ? "justify-center" : undefined}
        />
      )}
      {title && (
        <h2
          className={cn(
            "font-display text-h2 font-bold text-accent-6",
            accentParts && "mt-2",
          )}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-accent-8">
          {subtitle}
        </p>
      )}
      {cta && (
        <ThemeLink href={cta.href} className="mt-6">
          {cta.label}
        </ThemeLink>
      )}
    </div>
  );
}
