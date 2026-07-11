import { HOME, UNDER_CONSTRUCTION } from "@/data/routes";

export type MegaMenuLink = {
  label: string;
  href: string;
  description?: string;
};

export type MegaMenuColumn = {
  title: string;
  links: MegaMenuLink[];
};

export type NavItem =
  | { label: string; href: string }
  | { label: string; href: string; megaMenu: MegaMenuColumn[] };

export const utilityLinks = [
  { label: "MBBS Course & Fee 2025-26", href: UNDER_CONSTRUCTION },
  { label: "Online Fee Payment", href: UNDER_CONSTRUCTION },
  { label: "MBBS Admission Instruction 2025-26", href: UNDER_CONSTRUCTION },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: HOME.about },
  { label: "Administration", href: UNDER_CONSTRUCTION },
  {
    label: "Departments",
    href: HOME.departments,
    megaMenu: [
      {
        title: "Clinical Departments",
        links: [
          { label: "Microbiology", href: UNDER_CONSTRUCTION, description: "MBBS education & diagnostics" },
          { label: "Pharmacology", href: UNDER_CONSTRUCTION, description: "Teaching, research & lab services" },
          { label: "Bio Chemistry", href: UNDER_CONSTRUCTION, description: "Diagnostic, teaching & research" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "All Departments", href: HOME.departments },
          { label: "Faculty", href: UNDER_CONSTRUCTION },
          { label: "Research", href: UNDER_CONSTRUCTION },
        ],
      },
    ],
  },
  { label: "Facilities", href: UNDER_CONSTRUCTION },
  { label: "Approvals", href: UNDER_CONSTRUCTION },
  { label: "NMC MARB", href: UNDER_CONSTRUCTION },
  { label: "Foundation Courses", href: UNDER_CONSTRUCTION },
  { label: "Contact", href: HOME.contact },
];

export const footerColumns = [
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
      { label: "Foundation Courses", href: UNDER_CONSTRUCTION },
    ],
  },
];
