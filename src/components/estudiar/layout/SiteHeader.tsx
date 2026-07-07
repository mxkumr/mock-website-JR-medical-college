"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { ASSETS } from "@/data/estudiar-home";

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

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isTransparent, isHidden, hasBackground } = useStickyHeader({
    menuOpen,
  });

  const onHero = isTransparent && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[10000] h-[var(--header-height)] transition-[transform,background-color,box-shadow] duration-500",
        hasBackground ? "bg-[var(--sticky-header-bg)] shadow-md" : "bg-transparent",
        isHidden && "-translate-y-full",
      )}
    >
      <div className="mx-auto flex h-full max-w-[var(--site-max-width)] items-center justify-between px-[30px]">
        <Link href="/" className="relative z-10 flex shrink-0 items-center">
          <Image
            src={ASSETS.headerLogo}
            alt="JR Medical College and Hospital"
            width={163}
            height={43}
            className={cn(
              "h-[43px] w-auto transition-[filter]",
              onHero ? "brightness-0 invert" : "brightness-0 invert",
            )}
            priority
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main">
          {navItems.slice(0, 5).map((item) => {
            const active = item.href === "/" ? pathname === "/" : false;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-5 text-[15px] font-semibold transition-colors",
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

        <div className="flex items-center">
          <button
            type="button"
            aria-label="Search"
            className="hidden p-3 text-white sm:block"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="p-3 text-white lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[var(--sticky-header-bg)] px-[30px] py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-2.5 text-sm font-medium text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

/** @deprecated Use SiteHeader */
export const EstudiarHeader = SiteHeader;
