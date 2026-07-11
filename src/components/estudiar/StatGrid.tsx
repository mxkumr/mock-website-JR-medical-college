import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { StatCard, type StatCardData } from "./StatCard";

type NavLink = { label: string; href: string };

/** Staggered 5-link layout matching Estudiar stats nav (post-70). */
const STAT_NAV_SLOTS = [
  { muted: true, full: false },
  { muted: false, full: false },
  { muted: false, full: true },
  { muted: false, full: false },
  { muted: true, full: false },
] as const;

type StatGridProps = {
  stats: StatCardData[];
  links?: NavLink[];
  className?: string;
};

export function StatGrid({ stats, links, className }: StatGridProps) {
  return (
    <section
      className={cn(
        "border-y border-accent-3/40 bg-accent-4 py-8 md:py-20",
        className,
      )}
    >
      <Container className="max-lg:flex max-lg:w-full max-lg:flex-1 max-lg:flex-col max-lg:justify-center">
        {links && links.length > 0 && (
          <nav className="stat-nav-grid" aria-label="Section navigation">
            {links.map((link, index) => {
              const slot = STAT_NAV_SLOTS[index] ?? { muted: false, full: false };

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "stat-nav-link",
                    slot.muted && "stat-nav-link--muted",
                    slot.full && "stat-nav-link--full",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
