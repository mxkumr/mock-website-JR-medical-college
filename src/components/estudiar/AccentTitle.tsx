import { cn } from "@/lib/utils";

type AccentTitleProps = {
  parts: string[];
  className?: string;
  light?: boolean;
  inline?: boolean;
};

/** Estudiar giant split heading — typography 151358a (200px Work Sans uppercase). */
export function AccentTitle({
  parts,
  className,
  light = false,
  inline = false,
}: AccentTitleProps) {
  return (
    <div
      className={cn(
        inline
          ? "inline-flex flex-wrap items-baseline gap-x-4"
          : "flex flex-wrap items-baseline gap-x-4 md:gap-x-8",
        className,
      )}
      aria-hidden={parts.join("").length <= 3}
    >
      {parts.map((part, i) => (
        <span
          key={`${part}-${i}`}
          className={cn(
            "text-accent-title",
            light ? "text-white" : "text-accent-1",
          )}
        >
          {part}
        </span>
      ))}
    </div>
  );
}

export function AccentTitleSplit({
  left,
  right,
  bottom,
  light = true,
}: {
  left: string;
  right: string;
  bottom?: readonly string[];
  light?: boolean;
}) {
  return (
    <div className="relative w-full">
      <span
        className={cn(
          "absolute left-0 top-[8%] text-accent-title sm:left-[4%]",
          light ? "text-white" : "text-accent-1",
        )}
      >
        {left}
      </span>
      <span
        className={cn(
          "absolute right-0 top-[6%] text-accent-title sm:right-[4%]",
          light ? "text-white" : "text-accent-1",
        )}
      >
        {right}
      </span>
      {bottom && (
        <div className="absolute bottom-[8%] left-1/2 flex -translate-x-1/2 gap-[clamp(1rem,7vw,5rem)]">
          {bottom.map((letter, i) => (
            <span
              key={`${letter}-${i}`}
              className={cn(
                "text-accent-title",
                light ? "text-white" : "text-accent-1",
              )}
            >
              {letter}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
