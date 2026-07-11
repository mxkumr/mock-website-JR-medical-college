"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { SiteLogo } from "@/components/estudiar/layout/SiteLogo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Administration", href: "#" },
  { label: "Departments", href: "#departments", children: true },
  { label: "Facilities", href: "#" },
  { label: "Approvals", href: "#" },
  { label: "NMC MARB", href: "#" },
  { label: "Foundation Courses", href: "#" },
  { label: "Contact", href: "#contact" },
];

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#departments" },
  { label: "Admission", href: "#" },
  { label: "Student Life", href: "#" },
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
              className="text-nav block py-2.5 text-white"
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { isTransparent, isHidden, hasBackground } = useStickyHeader({
    menuOpen,
  });

  const onHero = isTransparent && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[10000] hidden h-[var(--header-height)] transition-[transform,background-color,box-shadow] duration-500 lg:block",
        hasBackground ? "bg-[var(--sticky-header-bg)] shadow-md" : "bg-transparent",
        isHidden && "-translate-y-full",
      )}
    >
      <div className="mx-auto flex h-full max-w-[var(--site-max-width)] items-center justify-between px-[30px]">
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
                  "text-nav flex items-center gap-1 px-4 py-5 transition-colors",
                  active
                    ? "rounded-full bg-accent-2 text-accent-6"
                    : onHero
                      ? "text-white hover:text-accent-2"
                      : "text-white/90 hover:text-accent-2",
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-80" />}
              </Link>
            );
          })}
        </nav>

        <button type="button" aria-label="Search" className="p-3 text-white">
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

/** @deprecated Use SiteHeader */
export const EstudiarHeader = SiteHeader;
