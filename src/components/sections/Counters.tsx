"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export type CounterItem = {
  value: number;
  suffix?: string;
  label: string;
};

type CountersProps = {
  items: CounterItem[];
  className?: string;
};

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (value - start) * eased);
      setDisplay(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  const formatted =
    display >= 1000 ? display.toLocaleString() : display.toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export function Counters({ items, className }: CountersProps) {
  return (
    <section className={cn("bg-primary", className)} aria-label="Statistics">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-serif text-4xl font-semibold text-white md:text-5xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </dd>
              <dd className="mt-2 text-sm text-white/65 md:text-base">
                {item.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
