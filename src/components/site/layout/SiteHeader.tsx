"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { ChevronDown, Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { SiteLogo } from "@/components/site/layout/SiteLogo";
import {
  SiteMegaMenuPanel,
  SiteMegaMenuTrigger,
} from "@/components/site/layout/SiteMegaMenu";
import { getMobileNavSections, mainNavigation } from "@/data/navigation";

function SiteHeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { isHidden } = useStickyHeader({ transparent: false, menuOpen });
  const mobileSections = getMobileNavSections();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[10000] lg:hidden",
        isHidden && "-translate-y-full",
      )}
    >
      <div className="flex h-[var(--header-height)] transition-transform duration-500">
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
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="p-3 text-accent-6"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu className="h-[22px] w-[22px]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          className="site-mobile-nav max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-white/10 bg-accent-1 px-5 py-4"
          aria-label="Mobile"
        >
          {mobileSections.map((section) => {
            const hasGroups = section.groups && section.groups.length > 0;
            const isOpen = openSection === section.label;

            if (!hasGroups) {
              return (
                <Link
                  key={section.label}
                  href={section.href ?? "/"}
                  className="text-nav block py-2.5 transition-colors hover:text-accent-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {section.label}
                </Link>
              );
            }

            return (
              <div key={section.label} className="border-b border-white/10 py-1">
                <button
                  type="button"
                  className="text-nav flex w-full items-center justify-between py-2.5 text-left transition-colors hover:text-accent-2"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenSection((current) =>
                      current === section.label ? null : section.label,
                    )
                  }
                >
                  <span>{section.label}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>

                {isOpen ? (
                  <div className="pb-3 pl-3">
                    {section.href ? (
                      <Link
                        href={section.href}
                        className="site-mobile-nav-link site-mobile-nav-link--overview"
                        onClick={() => setMenuOpen(false)}
                      >
                        View all {section.label}
                      </Link>
                    ) : null}
                    {section.groups?.map((group) => (
                      <div key={group.label} className="mt-3">
                        <p className="site-mobile-nav-group-label">{group.label}</p>
                        <ul className="mt-1 space-y-0.5">
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="site-mobile-nav-link"
                                onClick={() => setMenuOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}

function SiteHeaderDesktop() {
  const pathname = usePathname();
  const menuId = useId();
  const { isHidden } = useStickyHeader({ transparent: false });
  const [openMegaLabel, setOpenMegaLabel] = useState<string | null>(null);

  const closeMega = useCallback(() => setOpenMegaLabel(null), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMega();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMega]);

  useEffect(() => {
    closeMega();
  }, [pathname, closeMega]);

  const openMegaItem = mainNavigation.find(
    (item): item is Extract<(typeof mainNavigation)[number], { type: "mega" }> =>
      item.type === "mega" && item.label === openMegaLabel,
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[10000] hidden lg:block",
        isHidden && "-translate-y-full",
      )}
      onMouseLeave={closeMega}
    >
      <div className="relative bg-accent-1 shadow-md">
        <div className="mx-auto flex h-[var(--header-height)] max-w-[var(--site-max-width)] items-center justify-between gap-2 px-[var(--site-gutter-mobile)] lg:px-[var(--site-gutter)]">
          <Link href="/" className="relative z-10 flex shrink-0 items-center">
            <SiteLogo priority />
          </Link>

          <nav
            className="flex min-w-0 flex-1 items-center justify-center"
            aria-label="Main"
            id={menuId}
          >
            {mainNavigation.map((item) => {
              if (item.type === "link") {
                const active = item.href === "/" ? pathname === "/" : false;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "site-nav-link text-nav whitespace-nowrap px-2.5 py-5 transition-colors hover:text-accent-2 xl:px-3",
                      active && "font-bold text-accent-2",
                      item.label === "Online Fee Payment" && "site-nav-link--fee",
                    )}
                    onMouseEnter={closeMega}
                  >
                    {item.label === "Online Fee Payment" ? "Fee Payment" : item.label}
                  </Link>
                );
              }

              const isOpen = openMegaLabel === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMegaLabel(item.label)}
                >
                  <SiteMegaMenuTrigger
                    item={item}
                    isOpen={isOpen}
                    isActive={false}
                    onToggle={() =>
                      setOpenMegaLabel((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                  />
                </div>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Search"
            className="shrink-0 p-3 text-white transition-colors hover:text-accent-2"
            onMouseEnter={closeMega}
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {openMegaItem ? (
          <SiteMegaMenuPanel item={openMegaItem} isOpen onClose={closeMega} />
        ) : null}
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
