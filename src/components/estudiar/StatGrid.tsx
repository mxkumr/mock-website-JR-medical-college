import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Stat = { value: string; label: string };
type NavLink = { label: string; href: string };

type StatGridProps = {
  stats: Stat[];
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
          <ul className="mb-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-accent-3/30 pb-6 md:mb-12 md:gap-x-8 md:gap-y-3 md:pb-10">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-accent-1 underline-offset-4 hover:text-accent-2 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <dl className="grid gap-6 sm:grid-cols-3 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold leading-none text-accent-1">
                {stat.value}
              </dt>
              <dd className="text-body-muted mt-3 max-w-xs">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
