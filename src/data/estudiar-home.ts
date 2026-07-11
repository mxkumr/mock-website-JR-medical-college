/** Homepage content mapped from Estudiar Home 2 (post 70) → JR Medical College */

const U = "/uploads";

export const ASSETS = {
  headerLogo: "/images/jrmedical.png",
  heroVideo: `${U}/2021/02/Intro-Short-Video-Edinboro-University.mp4`,
  heroPoster: "/images/hero.png",
  mobileHeroCover: "/images/hero.png",
  heroBackground: "/images/hero.png",
  heroEllipse: `${U}/2020/12/Ellipse-21.svg`,
  aboutImage: `${U}/2020/12/iStock-597958786.jpg`,
  applyImage: `${U}/2020/12/iStock-1147303275.jpg`,
  studentLife: [
    `${U}/2020/12/iStock-1210745478.jpg`,
    `${U}/2020/12/iStock-1214615121.jpg`,
    `${U}/2020/12/iStock-1176677792.jpg`,
  ],
  shapePurple: `${U}/2020/12/shape-purple.svg`,
  shape: `${U}/2020/11/shape.svg`,
  footerLogo: "/images/jrmedical.png",
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
  cta: { label: "View Our Programs", href: "#departments" },
};

export const aboutSection = {
  title: "About JR Medical\nCollege",
  body: "JR Medical College & Hospital was started with the aim of providing excellent medical services come under the ambit of Bharath Institute Of Higher Education & Research. The best of the best for everyone.",
  cta: { label: "University Overview", href: "#about" },
};

export const campusSection = {
  titleLeft: "CAMP",
  titleRight: "US",
  body: "Our campus provides world-class medical education facilities, a teaching hospital, and a supportive environment where students and patients receive the highest standard of care.",
  cta: { label: "Schedule a Tour", href: "#contact" },
  image: ASSETS.aboutImage,
};

export const statsSection = {
  links: [
    { label: "Overview", href: "#about" },
    { label: "Administration", href: "#" },
    { label: "Departments", href: "#departments" },
    { label: "Facilities", href: "#" },
    { label: "Approvals", href: "#" },
  ],
  stats: [
    { value: "95%", label: "of recent graduates placed in healthcare" },
    { value: "3+", label: "core medical departments" },
    { value: "#1", label: "priority on patient-centred care" },
  ],
};

export const programsSection = {
  titleLeft: "PROGR",
  titleRight: "AM",
  subtitle: "& Academics",
  columns: [
    {
      title: "Undergraduate",
      badge: "MBBS Program",
      links: [
        { label: "MBBS Course & Fee 2025-26", href: "#" },
        { label: "MBBS Admission Instruction 2025-26", href: "#" },
        { label: "Foundation Courses", href: "#" },
      ],
    },
    {
      title: "Clinical Departments",
      badge: "Teaching + Patient Care",
      links: [
        { label: "Microbiology", href: "#departments" },
        { label: "Pharmacology", href: "#departments" },
        { label: "Bio Chemistry", href: "#departments" },
        { label: "NMC MARB", href: "#" },
      ],
    },
    {
      title: "Hospital Services",
      badge: "24/7 Care",
      links: [
        { label: "Emergency Services", href: "#services" },
        { label: "Experienced Doctors", href: "#services" },
        { label: "Individual Patient Care", href: "#services" },
      ],
    },
  ],
  cta: { label: "More", href: "#departments" },
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
  image: ASSETS.applyImage,
  cta: { label: "View All Requirements", href: "#" },
};

export const leadersSection = {
  titleLeft: "LEADE",
  titleRight: "RS",
  subtitle: "Scholarship Programs",
  financialAid: { label: "Financial Aid", href: "#" },
  tuitionTitle: "Tuition & Fees",
  tuitionBody:
    "Transparent fee structure for MBBS and allied programs. Online fee payment available for enrolled students.",
  priceLists: [
    {
      period: "2025–2026",
      items: [
        { label: "MBBS Annual Fee", price: "As per NMC norms" },
        { label: "Hostel & Facilities", price: "On request" },
      ],
      total: "Contact Admissions",
    },
    {
      period: "2026–2027",
      items: [
        { label: "MBBS Annual Fee", price: "As per NMC norms" },
        { label: "Online Fee Payment", price: "Available" },
      ],
      total: "info@jrmch.ac.in",
    },
  ],
};

export const studentLifeSection = {
  titleLeft: "STUD",
  titleRight: "ENT",
  titleBottom: "LIFE",
  quote: "Our students create a vibrant and inclusive community",
  cta: { label: "More Information", href: "#" },
  images: ASSETS.studentLife,
};

export const newsSection = {
  title: "News & Events",
  cta: { label: "View All", href: "#" },
  posts: [
    {
      id: "1",
      title: "MBBS Admission Instructions After Allotment",
      date: "Mar 2026",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
      href: "#",
    },
    {
      id: "2",
      title: "International Yoga Day 2025",
      date: "Jun 2025",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
      href: "#",
    },
    {
      id: "3",
      title: "The Best in doctor",
      date: "June 16, 2022",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
      href: "#",
    },
  ],
};

export const experienceSection = {
  title: "The Campus Experience",
  body: "Experience state-of-the-art laboratories, clinical training at our teaching hospital, and a campus designed to support excellence in medical education and research.",
  cta: { label: "Discover More", href: "#about" },
};

export const formSection = {
  title: "FORM",
  subtitle:
    "Are you ready to take the next step toward your future career in medicine?",
  buttons: [
    { label: "Application Form", href: "#" },
    { label: "Request Info", href: "#contact" },
    { label: "Visit Campus", href: "#contact" },
  ],
};
