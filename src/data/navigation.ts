import { HOME, UNDER_CONSTRUCTION } from "@/data/routes";

export type NavLink = {
  label: string;
  href: string;
};

export type NavLinkGroup = {
  label: string;
  links: NavLink[];
};

export type NavMegaColumn = {
  title: string;
  groups: NavLinkGroup[];
};

export type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "mega"; label: string; href?: string; columns: NavMegaColumn[] };

const placeholder = UNDER_CONSTRUCTION;

/** Desktop & mobile navigation — JR Medical College site map. */
export const mainNavigation: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  {
    type: "mega",
    label: "About Us",
    href: HOME.about,
    columns: [
      {
        title: "About Us",
        groups: [
          {
            label: "About Us",
            links: [
              { label: "Overview", href: HOME.about },
              { label: "Affiliation", href: placeholder },
              { label: "Vice Chancellor", href: placeholder },
              { label: "Registrar", href: placeholder },
            ],
          },
        ],
      },
      {
        title: "Administration",
        groups: [
          {
            label: "Administration",
            links: [{ label: "Dean", href: placeholder }],
          },
        ],
      },
      {
        title: "Approvals",
        groups: [
          {
            label: "Approvals",
            links: [{ label: "NMC MARB", href: placeholder }],
          },
        ],
      },
    ],
  },
  {
    type: "mega",
    label: "Departments",
    href: HOME.departments,
    columns: [
      {
        title: "Pre & Para Clinical",
        groups: [
          {
            label: "Pre & Para Clinical",
            links: [
              { label: "Anatomy", href: placeholder },
              { label: "Physiology", href: placeholder },
              { label: "Biochemistry", href: placeholder },
              { label: "Pharmacology", href: placeholder },
              { label: "Pathology", href: placeholder },
              { label: "Microbiology", href: placeholder },
              { label: "Forensic Medicine", href: placeholder },
              { label: "Community Medicine", href: placeholder },
            ],
          },
        ],
      },
      {
        title: "Clinical",
        groups: [
          {
            label: "Clinical",
            links: [
              { label: "General Medicine", href: placeholder },
              { label: "General Surgery", href: placeholder },
              { label: "Paediatrics", href: placeholder },
              { label: "Orthopaedics", href: placeholder },
              { label: "OBGYN", href: placeholder },
              { label: "ENT", href: placeholder },
              { label: "Opthalmology", href: placeholder },
              { label: "DVL", href: placeholder },
              { label: "Psychiatry", href: placeholder },
              { label: "Respiratory", href: placeholder },
              { label: "Anaesthesiology", href: placeholder },
              { label: "Radiodiagnosis", href: placeholder },
              { label: "Dentistry", href: placeholder },
              { label: "Emergency Medicine", href: placeholder },
            ],
          },
        ],
      },
      {
        title: "Edu-Tech",
        groups: [
          {
            label: "Edu-Tech",
            links: [
              { label: "Clinical Skill & Stimulation", href: placeholder },
              { label: "Infection Control", href: placeholder },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "mega",
    label: "Campus",
    columns: [
      {
        title: "Facilities",
        groups: [
          {
            label: "Facilities",
            links: [{ label: "Facilities Overview", href: placeholder }],
          },
        ],
      },
      {
        title: "Services",
        groups: [
          {
            label: "Services",
            links: [
              { label: "Appointments", href: placeholder },
              { label: "Patient & Family", href: placeholder },
              { label: "Ambulance", href: placeholder },
            ],
          },
        ],
      },
      {
        title: "Research & Utilities",
        groups: [
          {
            label: "Research & Utilities",
            links: [
              { label: "Central Library", href: placeholder },
              { label: "Blood Bank", href: placeholder },
              { label: "Transport", href: placeholder },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "mega",
    label: "Admissions",
    columns: [
      {
        title: "Admissions & Academics (2025–26)",
        groups: [
          {
            label: "MBBS",
            links: [
              { label: "Course & Fee", href: placeholder },
              { label: "Admission Instructions", href: placeholder },
            ],
          },
          {
            label: "Foundation Courses",
            links: [
              { label: "Course 2025–26", href: placeholder },
              { label: "BMW Handling & Disposal", href: placeholder },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "mega",
    label: "Governance",
    columns: [
      {
        title: "Committees",
        groups: [
          {
            label: "Committees",
            links: [
              { label: "Anti-ragging", href: placeholder },
              { label: "Gender Harassment", href: placeholder },
              { label: "College Council", href: placeholder },
              { label: "Curriculum", href: placeholder },
              { label: "Medical Education", href: placeholder },
              { label: "Pharmacovigilance", href: placeholder },
              { label: "Women Help Line", href: placeholder },
            ],
          },
        ],
      },
      {
        title: "Data & Compliance",
        groups: [
          {
            label: "Data & Compliance",
            links: [
              { label: "AEBAS Daily Attendance", href: placeholder },
              { label: "Clinical Material", href: placeholder },
              { label: "Unit Wise Bed Distribution", href: placeholder },
              {
                label: "Student Lists (Batch 24–25 & 25–26)",
                href: placeholder,
              },
            ],
          },
        ],
      },
    ],
  },
  { type: "link", label: "Contact", href: HOME.contact },
  { type: "link", label: "Online Fee Payment", href: placeholder },
];

/** Flatten mega menus for mobile accordion. */
export function getMobileNavSections(): {
  label: string;
  href?: string;
  groups?: NavLinkGroup[];
}[] {
  return mainNavigation.map((item) => {
    if (item.type === "link") {
      return { label: item.label, href: item.href };
    }

    const groups = item.columns.flatMap((column) => column.groups);
    return { label: item.label, href: item.href, groups };
  });
}
