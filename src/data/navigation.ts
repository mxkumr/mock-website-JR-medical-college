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

export const topBarLinks = [
  { label: "Student Portal", href: "#" },
  { label: "Faculty Login", href: "#" },
  { label: "Alumni", href: "#" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Academics",
    href: "/academics",
    megaMenu: [
      {
        title: "Programs",
        links: [
          { label: "Undergraduate", href: "#", description: "Bachelor's degrees" },
          { label: "Postgraduate", href: "#", description: "Master's & doctoral" },
          { label: "Diploma Courses", href: "#", description: "Professional diplomas" },
          { label: "Online Learning", href: "#", description: "Flexible study options" },
        ],
      },
      {
        title: "Departments",
        links: [
          { label: "Medicine", href: "#" },
          { label: "Nursing", href: "#" },
          { label: "Pharmacy", href: "#" },
          { label: "Public Health", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Academic Calendar", href: "#" },
          { label: "Library", href: "#" },
          { label: "Research Centers", href: "#" },
          { label: "Student Handbook", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    megaMenu: [
      {
        title: "Apply",
        links: [
          { label: "How to Apply", href: "#", description: "Step-by-step guide" },
          { label: "Requirements", href: "#", description: "Eligibility criteria" },
          { label: "Tuition & Fees", href: "#", description: "Cost breakdown" },
          { label: "Scholarships", href: "#", description: "Financial aid options" },
        ],
      },
      {
        title: "Visit",
        links: [
          { label: "Campus Tours", href: "#" },
          { label: "Open Days", href: "#" },
          { label: "Virtual Tour", href: "#" },
          { label: "Contact Admissions", href: "#" },
        ],
      },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Campus Life", href: "/campus" },
  { label: "News", href: "/news" },
];

export const footerColumns = [
  {
    title: "Academics",
    links: [
      { label: "Programs", href: "#" },
      { label: "Departments", href: "#" },
      { label: "Faculty", href: "#" },
      { label: "Library", href: "#" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "How to Apply", href: "#" },
      { label: "Tuition & Fees", href: "#" },
      { label: "Scholarships", href: "#" },
      { label: "Visit Campus", href: "#" },
    ],
  },
  {
    title: "Campus",
    links: [
      { label: "Student Life", href: "#" },
      { label: "Housing", href: "#" },
      { label: "Events", href: "#" },
      { label: "Gallery", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Alumni", href: "#" },
      { label: "News & Media", href: "#" },
    ],
  },
];
