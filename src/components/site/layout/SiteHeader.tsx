"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { SiteLogo } from "@/components/site/layout/SiteLogo";
import { HOME, UNDER_CONSTRUCTION } from "@/data/routes";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: HOME.about },
  { label: "Administration", href: UNDER_CONSTRUCTION },
  { label: "Departments", href: HOME.departments, children: true },
  { label: "Facilities", href: UNDER_CONSTRUCTION },
  { label: "Approvals", href: UNDER_CONSTRUCTION },
  { label: "NMC MARB", href: UNDER_CONSTRUCTION },
  { label: "Foundation Courses", href: UNDER_CONSTRUCTION },
  { label: "Contact", href: HOME.contact },
];

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: HOME.about },
  { label: "Academics", href: HOME.departments },
  { label: "Admission", href: UNDER_CONSTRUCTION },
  { label: "Student Life", href: UNDER_CONSTRUCTION },
];

function SiteHeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isHidden } = useStickyHeader({ transparent: false, menuOpen });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[10000] h-[var(--header-height)] transition-transform duration-500 lg:hidden",
        isHidden && "-translate-y-full",
      )}
    >
      <div className="flex h-full">
        <div className="flex min-w-0 flex-[7] items-center bg-accent-1 pl-4">
          <Link href="/" className="flex min-w-0 items-center">
            <SiteLogo priority />
          </Link>
        </div>

        <div className="flex flex-[1.5] items-center justify-center bg-accent-4">
          <button type="button" aria-label="Search" className="p-3 text-accent-6">
            <Search className="h-[22px] w-[22px]" strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-[1.5] items-center justify-center bg-accent-5">
          <button
            type="button"
            aria-label="Menu"
            className="p-3 text-accent-6"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu className="h-[22px] w-[22px]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-white/10 bg-accent-1 px-5 py-4"
          aria-label="Mobile"
        >
          {mobileNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-nav block py-2.5 transition-colors hover:text-accent-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function SiteHeaderDesktop() {
  const pathname = usePathname();
  const { isHidden } = useStickyHeader({ transparent: false });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[10000] hidden h-[var(--header-height)] bg-accent-1 shadow-md transition-transform duration-500 lg:block",
        isHidden && "-translate-y-full",
      )}
    >
      <div className="mx-auto flex h-full max-w-[var(--site-max-width)] items-center justify-between px-[var(--site-gutter-mobile)] lg:px-[var(--site-gutter)]">
        <Link href="/" className="relative z-10 flex shrink-0 items-center">
          <SiteLogo priority />
        </Link>

        <nav className="flex items-center" aria-label="Main">
          {navItems.slice(0, 5).map((item) => {
            const active = item.href === "/" ? pathname === "/" : false;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-nav flex items-center gap-1 px-4 py-5 transition-colors hover:text-accent-2",
                  active && "font-bold",
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-80" />}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Search"
          className="p-3 text-white transition-colors hover:text-accent-2"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

export function SiteHeader() {
  return (
    <>
      <SiteHeaderMobile />
      <SiteHeaderDesktop />
    </>
  );
}
