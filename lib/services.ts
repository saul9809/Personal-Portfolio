import { api } from "./api";
import { getLocalizedValue } from "./mock-data";
import type {
  Profile,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  Project,
  CaseStudy,
  Certification,
  Testimonial,
  TrustedByLogo,
  NavItem,
  ContactMessage,
  Locale,
} from "./types";

/**
 * Service Layer — obtains and transforms data.
 * UI components call these hooks/functions, never the API layer directly.
 * This is where localization mapping happens.
 */

export interface LocalizedProfile extends Omit<
  Profile,
  | "role"
  | "tagline"
  | "bio"
  | "location"
  | "availability"
  | "personalInfo"
  | "softSkills"
> {
  role: string;
  tagline: string;
  bio: string;
  location: string;
  availability: string;
  personalInfo: { label: string; value: string }[];
  softSkills: string[];
}

export interface LocalizedSkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface LocalizedExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface LocalizedEducation {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface LocalizedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  gallery: string[];
  featured: boolean;
  links?: { live?: string; repo?: string };
}

export interface LocalizedCaseStudy {
  id: string;
  projectId: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export interface LocalizedCertification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface LocalizedTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

export interface LocalizedNavItem {
  id: string;
  label: string;
  href: string;
}

function loc(value: Record<Locale, string>, locale: Locale): string {
  return getLocalizedValue(value, locale);
}

export const services = {
  async getProfile(locale: Locale): Promise<LocalizedProfile> {
    const p = await api.getProfile();
    return {
      ...p,
      role: loc(p.role, locale),
      tagline: loc(p.tagline, locale),
      bio: loc(p.bio, locale),
      location: loc(p.location, locale),
      availability: loc(p.availability, locale),
      personalInfo: p.personalInfo.map((i) => ({
        label: loc(i.label, locale),
        value: i.value,
      })),
      softSkills: p.softSkills.map((s) => loc(s, locale)),
    };
  },
  async getNavItems(locale: Locale): Promise<LocalizedNavItem[]> {
    const items = await api.getNavItems();
    return items.map((i) => ({ ...i, label: loc(i.label, locale) }));
  },
  async getSkillCategories(locale: Locale): Promise<LocalizedSkillCategory[]> {
    const cats = await api.getSkillCategories();
    return cats.map((c) => ({ ...c, title: loc(c.title, locale) }));
  },
  async getExperiences(locale: Locale): Promise<LocalizedExperience[]> {
    const exps = await api.getExperiences();
    return exps.map((e) => ({
      ...e,
      role: loc(e.role, locale),
      description: loc(e.description, locale),
    }));
  },
  async getEducation(locale: Locale): Promise<LocalizedEducation[]> {
    const edus = await api.getEducation();
    return edus.map((e) => ({
      ...e,
      degree: loc(e.degree, locale),
      description: loc(e.description, locale),
    }));
  },
  async getProjects(locale: Locale): Promise<LocalizedProject[]> {
    const projs = await api.getProjects();
    return projs.map((p) => ({
      ...p,
      title: loc(p.title, locale),
      category: loc(p.category, locale),
      description: loc(p.description, locale),
      longDescription: loc(p.longDescription, locale),
    }));
  },
  async getCaseStudies(locale: Locale): Promise<LocalizedCaseStudy[]> {
    const cs = await api.getCaseStudies();
    return cs.map((c) => ({
      ...c,
      title: loc(c.title, locale),
      challenge: loc(c.challenge, locale),
      solution: loc(c.solution, locale),
      result: loc(c.result, locale),
      metrics: c.metrics.map((m) => ({ ...m, label: loc(m.label, locale) })),
    }));
  },
  async getCertifications(locale: Locale): Promise<LocalizedCertification[]> {
    const certs = await api.getCertifications();
    return certs.map((c) => ({ ...c, name: loc(c.name, locale) }));
  },
  async getTestimonials(locale: Locale): Promise<LocalizedTestimonial[]> {
    const ts = await api.getTestimonials();
    return ts.map((t) => ({
      ...t,
      role: loc(t.role, locale),
      quote: loc(t.quote, locale),
    }));
  },
  async getTrustedBy(): Promise<TrustedByLogo[]> {
    return api.getTrustedBy();
  },
  async getAllTechnologies(): Promise<string[]> {
    return api.getAllTechnologies();
  },
  async submitContactMessage(
    message: Omit<ContactMessage, "id" | "createdAt">,
  ): Promise<{ success: true; id: string }> {
    return api.submitContactMessage(message);
  },
};
