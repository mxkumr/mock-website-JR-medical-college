"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/data/navigation";

type SiteMegaMenuProps = {
  item: Extract<NavItem, { type: "mega" }>;
  isOpen: boolean;
  isActive: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function SiteMegaMenuTrigger({
  item,
  isOpen,
  isActive,
  onToggle,
}: Pick<SiteMegaMenuProps, "item" | "isOpen" | "isActive" | "onToggle">) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-haspopup="true"
      className={cn(
        "site-nav-trigger text-nav flex items-center gap-1 px-2.5 py-5 transition-colors hover:text-accent-2 xl:px-3",
        (isOpen || isActive) && "text-accent-2",
      )}
      onClick={onToggle}
    >
      {item.label}
      <ChevronDown
        className={cn(
          "h-3.5 w-3.5 opacity-80 transition-transform duration-200",
          isOpen && "rotate-180",
        )}
        aria-hidden
      />
    </button>
  );
}

export function SiteMegaMenuPanel({
  item,
  isOpen,
  onClose,
}: Pick<SiteMegaMenuProps, "item" | "isOpen" | "onClose">) {
  if (!isOpen) return null;

  return (
    <div className="site-mega-menu" role="region" aria-label={`${item.label} menu`}>
      <div className="site-mega-menu-inner site-container">
        {item.href ? (
          <div className="site-mega-menu-overview">
            <Link href={item.href} className="site-mega-menu-overview-link" onClick={onClose}>
              View all {item.label}
            </Link>
          </div>
        ) : null}

        <div
          className="site-mega-menu-grid"
          style={{ "--mega-cols": item.columns.length } as CSSProperties}
        >
          {item.columns.map((column) => (
            <div key={column.title} className="site-mega-menu-column">
              <p className="site-mega-menu-column-title">{column.title}</p>
              {column.groups.map((group) => (
                <div key={group.label} className="site-mega-menu-group">
                  {column.groups.length > 1 || group.label !== column.title ? (
                    <p className="site-mega-menu-group-label">{group.label}</p>
                  ) : null}
                  <ul className="site-mega-menu-links">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="site-mega-menu-link"
                          onClick={onClose}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
