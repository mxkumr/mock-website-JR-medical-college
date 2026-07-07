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
  { label: "MBBS Course & Fee 2025-26", href: "#" },
  { label: "Online Fee Payment", href: "#" },
  { label: "MBBS Admission Instruction 2025-26", href: "#" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Administration", href: "#" },
  {
    label: "Departments",
    href: "#departments",
    megaMenu: [
      {
        title: "Clinical Departments",
        links: [
          { label: "Microbiology", href: "#", description: "MBBS education & diagnostics" },
          { label: "Pharmacology", href: "#", description: "Teaching, research & lab services" },
          { label: "Bio Chemistry", href: "#", description: "Diagnostic, teaching & research" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "All Departments", href: "#departments" },
          { label: "Faculty", href: "#" },
          { label: "Research", href: "#" },
        ],
      },
    ],
  },
  { label: "Facilities", href: "#" },
  { label: "Approvals", href: "#" },
  { label: "NMC MARB", href: "#" },
  { label: "Foundation Courses", href: "#" },
  { label: "Contact", href: "#contact" },
];

export const footerColumns = [
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
      { label: "Foundation Courses", href: "#" },
    ],
  },
];
