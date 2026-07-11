import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  light?: boolean;
  variant?: "default" | "hero";
}) {
  const isHero = variant === "hero";

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-sans text-lg capitalize underline decoration-1 underline-offset-4 transition-colors",
        isHero ? "font-medium" : "font-normal",
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
