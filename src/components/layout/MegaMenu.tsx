"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { MegaMenuColumn } from "@/data/navigation";

type MegaMenuProps = {
  columns: MegaMenuColumn[];
  onClose?: () => void;
};

export function MegaMenu({ columns, onClose }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute left-0 right-0 top-full border-b border-secondary/10 bg-white shadow-lg"
      role="region"
      aria-label="Mega menu"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              {column.title}
            </h3>
            <ul className="space-y-1">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group block rounded-sm px-2 py-2 transition-colors hover:bg-surface"
                  >
                    <span className="block text-sm font-medium text-text group-hover:text-primary">
                      {link.label}
                    </span>
                    {link.description && (
                      <span className="mt-0.5 block text-xs text-secondary">
                        {link.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-secondary/10 bg-surface/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <p className="text-sm text-secondary">
            Need help choosing a program?{" "}
            <Link href="#" className="font-medium text-primary hover:underline">
              Talk to an advisor
            </Link>
          </p>
          <Link
            href="#"
            className="text-sm font-medium text-accent hover:underline"
          >
            View all programs →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
