import emailjs from "@emailjs/browser";
import {
  profile,
  skillCategories,
  experiences,
  education,
  projects,
  caseStudies,
  certifications,
  testimonials,
  trustedByLogos,
  navItems,
  allTechnologies,
} from "./mock-data";
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
} from "./types";

/**
 * API Layer — abstracts the backend.
 * Today it reads from the mock layer; in the future
 * these functions can be swapped to call a real backend
 * (REST, Supabase, etc.) without touching the service layer.
 */

const MOCK_LATENCY = 400;

function delay<T>(value: T, ms = MOCK_LATENCY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export const api = {
  async getProfile(): Promise<Profile> {
    return delay(profile);
  },
  async getNavItems(): Promise<NavItem[]> {
    return delay(navItems, 100);
  },
  async getSkillCategories(): Promise<SkillCategory[]> {
    return delay(skillCategories);
  },
  async getExperiences(): Promise<ExperienceItem[]> {
    return delay(experiences);
  },
  async getEducation(): Promise<EducationItem[]> {
    return delay(education, 200);
  },
  async getProjects(): Promise<Project[]> {
    return delay(projects);
  },
  async getCaseStudies(): Promise<CaseStudy[]> {
    return delay(caseStudies, 300);
  },
  async getCertifications(): Promise<Certification[]> {
    return delay(certifications, 200);
  },
  async getTestimonials(): Promise<Testimonial[]> {
    return delay(testimonials, 300);
  },
  async getTrustedBy(): Promise<TrustedByLogo[]> {
    return delay(trustedByLogos, 200);
  },
  async getAllTechnologies(): Promise<string[]> {
    return delay(allTechnologies, 100);
  },
  async submitContactMessage(
    message: Omit<ContactMessage, "id" | "createdAt">,
  ): Promise<{ success: true; id: string }> {
    try {
      // -- Credenciales de entorno de EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS configuration missing");
        throw new Error("Email configuration error");
      }

      // -- Inicializar EmailJS
      emailjs.init(publicKey);
      console.log("NOMBRE DEL EMAIL ", message.name);
      // -- Preparar los datos para el correo
      const templateParams = {
        from_name: message.name,
        from_email: message.email,
        subject: message.subject,
        message: message.message,
        date: new Date().toLocaleString("es-ES", {
          dateStyle: "full",
          timeStyle: "short",
        }),
      };

      // -- Enviar el correo silenciosamente
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
      );

      console.log("Email sent successfully:", response.status);

      // -- Pequeña pausa para que el usuario vea el spinner
      await delay({ success: true as const }, 800);

      return {
        success: true as const,
        id: crypto.randomUUID(),
      };
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  },
};
