"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { navItems, topBarLinks, type MegaMenuColumn, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

type NavbarProps = {
  siteName?: string;
  logoHref?: string;
};

function hasMegaMenu(
  item: NavItem,
): item is Extract<NavItem, { megaMenu: MegaMenuColumn[] }> {
  return "megaMenu" in item;
}

export function Navbar({
  siteName = "JR Medical College",
  logoHref = "/",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const activeItem = navItems.find(
    (item) => hasMegaMenu(item) && item.label === activeMega,
  );

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-primary text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p>Admissions Open for Fall 2026</p>
          <nav aria-label="Utility navigation" className="flex gap-6">
            {topBarLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={cn(
          "border-b border-secondary/10 bg-white transition-shadow duration-300",
          scrolled && "shadow-md",
        )}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link
            href={logoHref}
            className="font-serif text-xl font-semibold tracking-tight text-primary"
          >
            {siteName}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  hasMegaMenu(item) ? setActiveMega(item.label) : setActiveMega(null)
                }
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium text-text transition-colors hover:text-primary",
                    activeMega === item.label && "text-primary",
                  )}
                >
                  {item.label}
                  {hasMegaMenu(item) && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        activeMega === item.label && "rotate-180",
                      )}
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              aria-label="Search"
              className="rounded-sm p-2 text-text transition-colors hover:bg-surface hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button href="#" size="sm" variant="accent">
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            className="rounded-sm p-2 text-text lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mega menu dropdown */}
        {activeItem && hasMegaMenu(activeItem) && (
          <MegaMenu
            columns={activeItem.megaMenu}
            onClose={() => setActiveMega(null)}
          />
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[57px] z-40 overflow-y-auto bg-white lg:hidden">
          <div className="px-6 py-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-sm px-3 py-3 text-base font-medium text-text hover:bg-surface"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {hasMegaMenu(item) && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-secondary/10 pl-4">
                      {item.megaMenu.flatMap((col) =>
                        col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="block py-2 text-sm text-secondary hover:text-primary"
                              onClick={() => setMobileOpen(false)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        )),
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-secondary/10 pt-6">
              <Button href="#" variant="accent" className="w-full">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
