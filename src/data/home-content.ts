import { HOME, UNDER_CONSTRUCTION } from "@/data/routes";

export const siteInfo = {
  name: "JR Medical College and Hospital",
  shortName: "JRMCH",
  tagline: "The best of the best for everyone",
  motto: ["Arise", "Aspire", "Accomplish"],
  raggingHelpline: "1800-180-552",
  description:
    "JR Medical College & Hospital was started with the aim of providing excellent medical services come under the ambit of Bharath Institute Of Higher Education & Research.",
  footerTagline:
    "JR Medical College and Hospital was started with the aim of providing excellent medical education",
};

export const contactInfo = {
  address: [
    "Avanampattu, Kiledaiyalam Village",
    "Tindivanam Thaluk",
    "Villupuram District, Tamilnadu - 604302",
    "India",
  ],
  phone: "+91 4147 290 290",
  emails: ["info@jrmch.ac.in", "hr@jrmch.ac.in"],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5!2d79.65!3d12.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE1JzAwLjAiTiA3OcKwMzknMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
};

export const heroVideo = {
  src: "https://videos.pexels.com/video-files/4049658/4049658-sd_640_360_25fps.mp4",
  poster:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80",
};

/** Typographic hero — letter layout mirrors the reference LEADER pattern */
export const heroTypography = {
  left: "H",
  right: "ER",
  bottom: ["E", "A", "L"] as const,
  circle: {
    lines: [
      "Arise with purpose.",
      "Aspire to heal.",
      "The best for everyone.",
    ],
    cta: { label: "View Our Programs", href: HOME.departments },
  },
};

export const announcements = [
  {
    id: "1",
    title: "MBBS Admission Instructions After Allotment",
    href: UNDER_CONSTRUCTION,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    id: "2",
    title: "International Yoga Day 2025",
    href: UNDER_CONSTRUCTION,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
];

export const services = [
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Warm, patient-centered care in a welcoming environment.",
    icon: "heart-handshake",
  },
  {
    id: "emergency",
    title: "Emergency Services",
    description: "24/7 emergency care with rapid response teams.",
    icon: "siren",
  },
  {
    id: "endurance",
    title: "Endurance",
    description: "Sustained excellence in treatment and recovery support.",
    icon: "activity",
  },
  {
    id: "individual-care",
    title: "Take Individual Care",
    description: "Personalized attention for every patient we serve.",
    icon: "user-check",
  },
  {
    id: "doctors",
    title: "Experienced Doctors",
    description: "Skilled physicians dedicated to clinical excellence.",
    icon: "stethoscope",
  },
];

export const trustSection = {
  eyebrow: "What We Do",
  title: "Our Service",
  heading: "All of Our Patient Trust Their Success To Us",
  description:
    "We are committed to delivering the highest standards of medical education and patient care, building trust through compassion, expertise, and unwavering dedication.",
  image:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
};

export const aboutSection = {
  eyebrow: "About Us",
  title: "JR Medical College and Hospital",
  subtitle: "The best of the best for everyone",
  description: siteInfo.description,
  image:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
};

export const departmentsSection = {
  eyebrow: "Departments",
  title: "We provide high standard service to our patients",
  items: [
    {
      id: "microbiology",
      title: "Microbiology",
      description:
        "The Clinical Microbiology Department of JRMCH focuses on MBBS education. The Clinical Microbiology Laboratory serves as a backbone in UG teaching and Patient diagnosis and is adjunctive for excellence in Patient care and Management.",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9db3851ce?w=600&q=80",
      href: UNDER_CONSTRUCTION,
    },
    {
      id: "pharmacology",
      title: "Pharmacology",
      description:
        "The Department is with the goal to offer graduate study on Pharmacology. Since its inception it has been engaged in Teaching, Research, and patient care by offering Clinical Lab services.",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
      href: UNDER_CONSTRUCTION,
    },
    {
      id: "biochemistry",
      title: "Bio Chemistry",
      description:
        "The Department is with the goal of offering undergraduate study in Biochemistry. Since its inception it is engaged in Diagnostic, teaching and research.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
      href: UNDER_CONSTRUCTION,
    },
  ],
};

export const latestNews = {
  title: "Latest News",
  subtitle: "The Best in doctor",
  date: "June 16, 2022",
  href: UNDER_CONSTRUCTION,
  image:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
};
