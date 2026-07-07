import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-text md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-secondary md:text-lg">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-0.5 w-16 bg-accent",
          align === "center" && "mx-auto",
        )}
        aria-hidden
      />
    </div>
  );
}
