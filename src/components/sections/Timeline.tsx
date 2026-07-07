"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  events: TimelineEvent[];
  className?: string;
};

export function Timeline({ events, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute left-4 top-0 bottom-0 w-px bg-secondary/20 md:left-1/2 md:-translate-x-px"
        aria-hidden
      />

      <ol className="space-y-12">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.li
              key={event.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative grid gap-4 md:grid-cols-2 md:gap-12",
                !isEven && "md:[&>*:first-child]:order-2",
              )}
            >
              {/* Year marker */}
              <div
                className={cn(
                  "flex items-start gap-4 md:justify-end",
                  !isEven && "md:justify-start",
                )}
              >
                <div
                  className={cn(
                    "relative z-10 flex w-full flex-col md:max-w-md",
                    isEven ? "md:items-end md:text-right" : "md:items-start md:text-left",
                  )}
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-xs font-bold text-accent md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                    <span className="sr-only">Year </span>
                  </span>
                  <span className="font-serif text-2xl font-semibold text-accent md:mt-0 md:pl-0 pl-12 md:pl-0">
                    {event.year}
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-text pl-12 md:pl-0">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary pl-12 md:pl-0">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block" aria-hidden />
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
