import Link from "next/link";
import { Container } from "@/components/site/Container";
import { SiteLogo } from "@/components/site/layout/SiteLogo";
import { cn } from "@/lib/utils";
import { contactInfo, siteInfo } from "@/data/home-content";
import { HOME, UNDER_CONSTRUCTION } from "@/data/routes";

const footerMenus = [
  {
    title: "Useful Links",
    links: [
      { label: "About Us", href: HOME.about },
      { label: "Our Service", href: HOME.services },
      { label: "Departments", href: HOME.departments },
      { label: "Contact", href: HOME.contact },
    ],
  },
  {
    title: "Our Office",
    links: [
      { label: "Administration", href: UNDER_CONSTRUCTION },
      { label: "Facilities", href: UNDER_CONSTRUCTION },
      { label: "Approvals", href: UNDER_CONSTRUCTION },
      { label: "NMC MARB", href: UNDER_CONSTRUCTION },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "MBBS Course & Fee 2025-26", href: UNDER_CONSTRUCTION },
      { label: "Online Fee Payment", href: UNDER_CONSTRUCTION },
      { label: "MBBS Admission Instruction 2025-26", href: UNDER_CONSTRUCTION },
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
            <SiteLogo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              {siteInfo.footerTagline}
            </p>
            <p className="mt-4 text-sm">
              {contactInfo.address.join(", ")}
            </p>
            <p className="mt-2 text-sm">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className={cn("footer-link", "footer-link--plain")}
              >
                {contactInfo.phone}
              </a>
            </p>
            <p className="mt-2 space-y-1 text-sm">
              {contactInfo.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className={cn("footer-link", "footer-link--plain block")}
                >
                  {email}
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
                    <Link href={link.href} className="footer-link">
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
            Copyright {year} © The CRUD Studio
          </p>
          <p className="text-white/40">
            Our Location — Villupuram District, Tamilnadu
          </p>
        </Container>
      </div>
    </footer>
  );
}
