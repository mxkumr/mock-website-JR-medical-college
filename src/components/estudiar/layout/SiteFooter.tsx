import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/estudiar/Container";
import { ASSETS } from "@/data/estudiar-home";
import { contactInfo, siteInfo } from "@/data/home-content";

const footerMenus = [
  {
    title: "Useful Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Service", href: "#services" },
      { label: "Departments", href: "#departments" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Our Office",
    links: [
      { label: "Administration", href: "#" },
      { label: "Facilities", href: "#" },
      { label: "Approvals", href: "#" },
      { label: "NMC MARB", href: "#" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "MBBS Course & Fee 2025-26", href: "#" },
      { label: "Online Fee Payment", href: "#" },
      { label: "MBBS Admission Instruction 2025-26", href: "#" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-accent-6 text-white/70">
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src={ASSETS.footerLogo}
              alt={siteInfo.name}
              width={180}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              {siteInfo.footerTagline}
            </p>
            <p className="mt-4 text-sm">
              {contactInfo.address.join(", ")}
            </p>
            <p className="mt-2 text-sm">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="text-white/70 hover:text-accent-3"
              >
                {contactInfo.phone}
              </a>
            </p>
            <p className="mt-2 text-sm">
              {contactInfo.emails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="block text-white/70 hover:text-accent-3"
                >
                  {e}
                </a>
              ))}
            </p>
          </div>

          {footerMenus.map((menu) => (
            <div key={menu.title} className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                {menu.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {menu.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm capitalize text-white/70 transition-colors hover:text-accent-3"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>
            Copyright {year} © {siteInfo.name}
          </p>
          <p className="text-white/40">
            Our Location — Villupuram District, Tamilnadu
          </p>
        </Container>
      </div>
    </footer>
  );
}

/** @deprecated Use SiteFooter */
export const EstudiarFooter = SiteFooter;
