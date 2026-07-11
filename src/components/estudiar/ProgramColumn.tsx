import { ThemeLink } from "./ThemeLink";

type ProgramLink = { label: string; href: string };

export type ProgramColumnProps = {
  title: string;
  badge: string;
  links: ProgramLink[];
};

export function ProgramColumn({ title, badge, links }: ProgramColumnProps) {
  return (
    <div className="border-t-2 border-accent-1 pt-8">
      <h3 className="font-display text-h4 font-extrabold text-accent-6">
        {title}
      </h3>
      <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wider text-accent-2">
        {badge}
      </span>
      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <ThemeLink href={link.href}>{link.label}</ThemeLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
