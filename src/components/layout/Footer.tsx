import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerColumns } from "@/data/navigation";
import { cn } from "@/lib/utils";

type FooterProps = {
  siteName?: string;
  tagline?: string;
  className?: string;
};

const socialLinks = [
  { label: "Facebook", href: "#", abbr: "f" },
  { label: "Twitter", href: "#", abbr: "𝕏" },
  { label: "Instagram", href: "#", abbr: "ig" },
  { label: "LinkedIn", href: "#", abbr: "in" },
  { label: "YouTube", href: "#", abbr: "yt" },
];

export function Footer({
  siteName = "JR Medical College",
  tagline = "Advancing healthcare through education, research, and compassionate care.",
  className,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("bg-footer text-white/80", className)}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold text-white"
            >
              {siteName}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {tagline}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>123 University Avenue, Medical District, City 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a
                  href="mailto:info@jrmedical.edu"
                  className="hover:text-white transition-colors"
                >
                  info@jrmedical.edu
                </a>
              </li>
            </ul>

            <nav aria-label="Social media" className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, abbr }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 text-xs font-semibold uppercase text-white/60 transition-colors hover:border-accent hover:text-accent"
                >
                  {abbr}
                </a>
              ))}
            </nav>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} {siteName}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
