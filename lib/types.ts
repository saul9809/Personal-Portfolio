export type Locale = "es" | "en";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface Profile {
  name: string;
  role: Record<Locale, string>;
  tagline: Record<Locale, string>;
  bio: Record<Locale, string>;
  photoUrl: string;
  email: string;
  phone: string;
  location: Record<Locale, string>;
  availability: Record<Locale, string>;
  socials: SocialLink[];
  personalInfo: {
    label: Record<Locale, string>;
    value: string;
  }[];
  softSkills: Record<Locale, string>[];
}

export interface SkillCategory {
  id: string;
  title: Record<Locale, string>;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: Record<Locale, string>;
  startDate: string;
  endDate: string;
  description: Record<Locale, string>;
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: Record<Locale, string>;
  startDate: string;
  endDate: string;
  description: Record<Locale, string>;
}

export interface Project {
  id: string;
  title: Record<Locale, string>;
  category: Record<Locale, string>;
  description: Record<Locale, string>;
  longDescription: Record<Locale, string>;
  technologies: string[];
  imageUrl: string;
  gallery: string[];
  featured: boolean;
  links?: {
    live?: string;
    repo?: string;
  };
}

export interface CaseStudy {
  id: string;
  projectId: string;
  title: Record<Locale, string>;
  challenge: Record<Locale, string>;
  solution: Record<Locale, string>;
  result: Record<Locale, string>;
  metrics: {
    label: Record<Locale, string>;
    value: string;
  }[];
}

export interface Certification {
  id: string;
  name: Record<Locale, string>;
  issuer: string;
  date: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: Record<Locale, string>;
  company: string;
  avatarUrl: string;
  quote: Record<Locale, string>;
  rating: number;
}

export interface TrustedByLogo {
  id: string;
  name: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface NavItem {
  id: string;
  label: Record<Locale, string>;
  href: string;
}
