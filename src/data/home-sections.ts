/** Homepage section content for JR Medical College */

import type { ProgramPanelData } from "@/components/site/ProgramPanels";
import type { StatCardData } from "@/components/site/StatCard";
import type { StudentLifeCardData } from "@/components/site/StudentLifeCards";
import { HOME, UNDER_CONSTRUCTION } from "@/data/routes";

const U = "/uploads";

export const ASSETS = {
  headerLogo: "/images/jrmedical.png",
  heroBackground: "/images/hero.png",
  aboutImage: `${U}/2020/12/iStock-597958786.jpg`,
  statGraduates: "/images/stat-graduates.png",
  statDepartments: "/images/stat-departmetns.png",
  statPatientCare: "/images/stat-patient-care.png",
  shapePurple: `${U}/2020/12/shape-purple.svg`,
} as const;

export const heroSection = {
  mobileTitle: "JR\nMCH",
  left: "J",
  right: "RM",
  bottom: ["C", "", "H"] as const,
  taglines: [
    "Arise with purpose.",
    "Aspire to heal.",
    "The best for everyone.",
  ],
  cta: { label: "View Our Programs", href: HOME.departments },
};

export const aboutSection = {
  title: "About JR Medical\nCollege",
  body: "JR Medical College & Hospital was started with the aim of providing excellent medical services come under the ambit of Bharath Institute Of Higher Education & Research. The best of the best for everyone.",
  cta: { label: "University Overview", href: HOME.about },
};

export const campusSection = {
  titleLeft: "CAMP",
  titleRight: "US",
  body: "Our campus provides world-class medical education facilities, a teaching hospital, and a supportive environment where students and patients receive the highest standard of care.",
  cta: { label: "Schedule a Tour", href: HOME.contact },
  image: ASSETS.aboutImage,
};

export const statsSection = {
  links: [
    { label: "Overview", href: HOME.about },
    { label: "Administration", href: UNDER_CONSTRUCTION },
    { label: "Departments", href: HOME.departments },
    { label: "Facilities", href: UNDER_CONSTRUCTION },
    { label: "Approvals", href: UNDER_CONSTRUCTION },
  ],
  stats: [
    {
      value: "95%",
      label: "of recent graduates placed in healthcare",
      labelLines: ["of recent graduates", "placed in healthcare"],
      image: ASSETS.statGraduates,
    },
    {
      value: "3+",
      label: "core medical departments",
      labelLines: ["core medical", "departments"],
      image: ASSETS.statDepartments,
    },
    {
      value: "#1",
      label: "priority on patient-centred care",
      labelLines: ["priority on", "patient-centred care"],
      image: ASSETS.statPatientCare,
    },
  ] satisfies StatCardData[],
};

export const programsSection = {
  titleLeft: "PROGR",
  titleRight: "AM",
  subtitle: "& Academics",
  body: "At JR Medical College & Hospital, we prepare you to launch your medical career by providing a supportive, clinical, and professional environment from which to learn practical skills, build a network of healthcare contacts, and gain real-world experience.",
  columns: [
    {
      title: "Undergraduate",
      body: "MBBS and foundation programs for aspiring physicians, with structured clinical exposure from the early years of study.",
      badge: "On Campus + Clinical",
      variant: "green",
      links: [
        { label: "MBBS Course & Fee 2025-26", href: UNDER_CONSTRUCTION },
        { label: "MBBS Admission Instruction 2025-26", href: UNDER_CONSTRUCTION },
        { label: "Foundation Courses", href: UNDER_CONSTRUCTION },
      ],
    },
    {
      title: "Clinical Departments",
      body: "Teaching departments that combine academic instruction with patient care across core medical specialties.",
      badge: "Teaching + Patient Care",
      variant: "gold",
      links: [
        { label: "Microbiology", href: HOME.departments },
        { label: "Pharmacology", href: HOME.departments },
        { label: "Bio Chemistry", href: HOME.departments },
        { label: "NMC MARB", href: UNDER_CONSTRUCTION },
      ],
    },
    {
      title: "Hospital Services",
      body: "Round-the-clock hospital services supporting students, faculty, and the communities we serve.",
      badge: "24/7 Care",
      variant: "blue",
      links: [
        { label: "Emergency Services", href: HOME.services },
        { label: "Experienced Doctors", href: HOME.services },
        { label: "Individual Patient Care", href: HOME.services },
      ],
    },
  ] satisfies ProgramPanelData[],
  cta: { label: "More", href: HOME.departments },
};

export const applySection = {
  title: "APPLY",
  steps: [
    {
      num: "01",
      title: "You Apply",
      body: "Submit your MBBS application with required documents as per admission instructions for 2025-26.",
    },
    {
      num: "02",
      title: "We Connect",
      body: "Our admissions team reviews your application and guides you through the allotment process.",
    },
    {
      num: "03",
      title: "You Get Ready",
      body: "Complete fee payment, receive joining instructions, and begin your medical education journey.",
    },
  ],
  cta: { label: "View All Requirements", href: UNDER_CONSTRUCTION },
};

export const leadersSection = {
  tuitionTitle: "Tuition & Fees",
  tuitionBody:
    "Transparent fee structure for MBBS and allied programs. Online fee payment is available for enrolled students, with guidance from our admissions team at every step.",
  cta: { label: "Fee Structure", href: UNDER_CONSTRUCTION },
  priceLists: [
    {
      period: "Tuition Costs,\n2025–2026",
      items: [
        { label: "MBBS Annual Fee", price: "As per NMC norms" },
        { label: "Hostel & Facilities", price: "On request" },
      ],
      detailsCta: { label: "More Details", href: UNDER_CONSTRUCTION },
    },
    {
      period: "Tuition Costs,\n2026–2027",
      items: [
        { label: "MBBS Annual Fee", price: "As per NMC norms" },
        { label: "Online Fee Payment", price: "Available" },
      ],
      detailsCta: { label: "More Details", href: UNDER_CONSTRUCTION },
    },
  ],
};

export const studentLifeSection = {
  titleLeft: "STUD",
  titleRight: "ENT",
  titleBottom: "LIFE",
  quote: "Our students create a vibrant and inclusive community",
  cta: { label: "More Information", href: UNDER_CONSTRUCTION },
  cards: [
    {
      icon: "learning",
      title: "Learning Environment",
      body: "Modern classrooms, digital resources, and faculty mentorship support focused academic growth.",
    },
    {
      icon: "campus",
      title: "Campus Life",
      body: "A safe, active campus with hostels, sports, cultural events, and spaces to unwind between classes.",
    },
    {
      icon: "community",
      title: "Student Community",
      body: "Clubs, peer networks, and inclusive activities that help every student feel connected and supported.",
    },
    {
      icon: "practicals",
      title: "Clinical Practicals",
      body: "Hands-on training in labs and hospital settings to build real-world skills from the early years.",
    },
  ] satisfies StudentLifeCardData[],
};

export const newsSection = {
  title: "News & Events",
  cta: { label: "View All", href: UNDER_CONSTRUCTION },
  posts: [
    {
      id: "1",
      title: "Top Student Honored for Complex Surgery That Saved Countless Lives",
      date: "Mar 2026",
      excerpt:
        "A final-year MBBS student led a high-risk procedure at JR Medical College Hospital, earning national recognition for skill, composure, and patient-centred care.",
      href: UNDER_CONSTRUCTION,
    },
    {
      id: "2",
      title: "JR Medical College Marks a Milestone Year in Medical Education",
      date: "Feb 2026",
      excerpt:
        "From upgraded simulation labs to new faculty partnerships, the college celebrates a year of academic growth, research output, and student achievement.",
      href: UNDER_CONSTRUCTION,
    },
    {
      id: "3",
      title: "Hospital Team Delivers Round-the-Clock Care During Regional Health Drive",
      date: "Jan 2026",
      excerpt:
        "JR Medical College Hospital expanded emergency and outreach services, treating hundreds of patients and strengthening community trust in clinical excellence.",
      href: UNDER_CONSTRUCTION,
    },
  ],
};

export const formSection = {
  title: "FORM",
  subtitle:
    "Are you ready to take the next step toward your future career?",
  buttons: [
    { label: "Application Form", href: UNDER_CONSTRUCTION },
    { label: "Request Info", href: HOME.contact },
    { label: "Visit", href: HOME.contact },
  ],
};
