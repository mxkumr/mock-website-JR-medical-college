import Image from "next/image";
import { cn } from "@/lib/utils";

export type StatCardData = {
  value: string;
  label: string;
  labelLines: [string, string];
  image: string;
};

const CARD_THEMES = [
  {
    bg: "bg-accent-1",
    valueClass: "text-white",
    labelClass: "text-white",
    align: "items-end text-right",
    imagePosition: "object-bottom object-left",
    imageAlign: "left-0",
  },
  {
    bg: "bg-accent-2",
    valueClass: "text-accent-6",
    labelClass: "text-accent-6",
    align: "items-start text-left",
    imagePosition: "object-bottom object-right",
    imageAlign: "right-0",
  },
  {
    bg: "bg-accent-3",
    valueClass: "text-accent-6",
    labelClass: "text-accent-6",
    align: "items-start text-left",
    imagePosition: "object-bottom object-right",
    imageAlign: "right-0",
  },
] as const;

type StatCardProps = {
  stat: StatCardData;
  index: number;
};

export function StatCard({ stat, index }: StatCardProps) {
  const theme = CARD_THEMES[index] ?? CARD_THEMES[0];

  return (
    <article
      className={cn(
        "stat-card relative flex min-h-[clamp(280px,72vw,380px)] flex-col overflow-hidden",
        theme.bg,
        theme.align,
      )}
    >
      <dl className={cn("relative z-10 m-0 flex flex-col p-[30px]", theme.align)}>
        <dt
          className={cn(
            "font-display text-[clamp(2.75rem,12vw,5rem)] font-black leading-none",
            theme.valueClass,
          )}
        >
          {stat.value}
        </dt>
        <dd
          className={cn(
            "mt-5 max-w-[9.5rem] text-[14px] font-semibold uppercase leading-[1.5] tracking-[0.0125em]",
            theme.labelClass,
          )}
        >
          {stat.labelLines[0]}
          <br />
          {stat.labelLines[1]}
        </dd>
      </dl>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 h-[min(62%,250px)] w-[min(75%,220px)]",
          theme.imageAlign,
        )}
      >
        <Image
          src={stat.image}
          alt=""
          fill
          className={cn("object-contain", theme.imagePosition)}
          sizes="(max-width: 768px) 220px, 33vw"
          aria-hidden
        />
      </div>
    </article>
  );
}
