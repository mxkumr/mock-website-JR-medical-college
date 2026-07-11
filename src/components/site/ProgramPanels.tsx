"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronUp, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProgramPanelData = {
  title: string;
  body: string;
  badge: string;
  variant: "green" | "gold" | "blue";
  links: { label: string; href: string }[];
};

const variantStyles = {
  green: {
    panel: "programs-panel--green",
  },
  gold: {
    panel: "programs-panel--gold",
  },
  blue: {
    panel: "programs-panel--blue",
  },
} as const;

function isDarkPanel(variant: ProgramPanelData["variant"]) {
  return variant === "green" || variant === "blue";
}

function PanelContent({ column }: { column: ProgramPanelData }) {
  const darkPanel = isDarkPanel(column.variant);
  const linkClass = darkPanel
    ? "programs-panel-link programs-panel-link--light"
    : "programs-panel-link programs-panel-link--dark";

  return (
    <>
      <p className="programs-panel-body">{column.body}</p>
      <div className="programs-panel-links">
        {column.links.map((link) => (
          <Link key={link.label} href={link.href} className={linkClass}>
            {link.label}
          </Link>
        ))}
      </div>
      <p className="programs-panel-meta">
        <Clock className="programs-panel-meta-icon" aria-hidden />
        <span>{column.badge}</span>
      </p>
    </>
  );
}

export function ProgramPanels({ columns }: { columns: ProgramPanelData[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div className="md:hidden">
        {columns.map((column, index) => {
          const styles = variantStyles[column.variant];
          const isOpen = openIndex === index;

          return (
            <div key={column.title}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`program-panel-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={cn(
                  "programs-accordion-trigger flex w-full items-center justify-between text-left",
                  styles.panel,
                )}
              >
                <h3 className="programs-panel-title mb-0">{column.title}</h3>
                <ChevronUp
                  className={cn(
                    "size-[18px] shrink-0 text-accent-6 transition-transform duration-200",
                    !isOpen && "rotate-180",
                  )}
                  strokeWidth={2.5}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <div
                  id={`program-panel-${index}`}
                  className={cn(styles.panel, "programs-panel-inner programs-panel-inner--content")}
                >
                  <PanelContent column={column} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="hidden md:grid md:grid-cols-3 md:items-start">
        {columns.map((column, index) => {
          const styles = variantStyles[column.variant];

          return (
            <div
              key={column.title}
              className={cn(
                styles.panel,
                "programs-panel-inner",
                index === 0 && "md:mb-[83px]",
                index === 2 && "md:mb-[145px]",
              )}
            >
              <h3 className="programs-panel-title">{column.title}</h3>
              <PanelContent column={column} />
            </div>
          );
        })}
      </div>
    </>
  );
}
