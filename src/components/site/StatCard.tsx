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
    valueClass: "text-white",
    labelClass: "text-white",
    align: "items-end text-right",
  },
  {
    valueClass: "text-accent-6",
    labelClass: "text-accent-6",
    align: "items-start text-left",
  },
  {
    valueClass: "text-accent-6",
    labelClass: "text-accent-6",
    align: "items-start text-left",
  },
] as const;

type StatCardProps = {
  stat: StatCardData;
  index: number;
};

export function StatCard({ stat, index }: StatCardProps) {
  const theme = CARD_THEMES[index] ?? CARD_THEMES[0];

  return (
    <article className="stat-card relative flex min-h-[clamp(280px,72vw,380px)] flex-col overflow-hidden">
      <Image
        src={stat.image}
        alt=""
        fill
        className="object-cover object-center"
        sizes="(max-width: 640px) 100vw, 33vw"
        priority={index === 0}
        aria-hidden
      />

      <dl
        className={cn(
          "relative z-10 m-0 flex flex-1 flex-col justify-end p-[30px]",
          theme.align,
        )}
      >
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
    </article>
  );
}
