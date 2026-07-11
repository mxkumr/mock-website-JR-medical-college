import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Shared CTA / content link style (matches About → University Overview). */
export const themeLinkClassName =
  "inline-flex w-fit items-center gap-2 font-sans text-lg font-medium capitalize underline decoration-1 underline-offset-4 transition-colors";

export function ThemeLink({
  href,
  children,
  className,
  light = false,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** White underline variant for dark backgrounds (footer, contact). Same typography as default. */
  light?: boolean;
  /** Hero CTA — white text, no underline, arrow icon. */
  variant?: "default" | "hero";
}) {
  const isHero = variant === "hero";

  return (
    <Link
      href={href}
      className={cn(
        isHero
          ? "group inline-flex items-center gap-2 font-sans text-lg font-medium capitalize transition-colors"
          : themeLinkClassName,
        isHero &&
          "text-white no-underline decoration-transparent hover:text-accent-2 hover:decoration-transparent",
        !isHero &&
          light &&
          "text-white decoration-white/80 hover:text-accent-2 hover:decoration-accent-2",
        !isHero &&
          !light &&
          "text-accent-1 decoration-accent-1 hover:text-accent-2 hover:decoration-accent-2",
        className,
      )}
    >
      {children}
      {isHero && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
