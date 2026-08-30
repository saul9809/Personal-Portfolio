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
  Locale,
} from "./types";

export const navItems: NavItem[] = [
  { id: "home", label: { es: "Inicio", en: "Home" }, href: "#home" },
  { id: "about", label: { es: "Acerca", en: "About" }, href: "#about" },
  { id: "resume", label: { es: "CV", en: "Resume" }, href: "#resume" },
  {
    id: "portfolio",
    label: { es: "Portafolio", en: "Portfolio" },
    href: "#portfolio",
  },
  {
    id: "case-studies",
    label: { es: "Casos", en: "Cases" },
    href: "#case-studies",
  },
  {
    id: "certifications",
    label: { es: "Certificaciones", en: "Certifications" },
    href: "#certifications",
  },
  {
    id: "testimonials",
    label: { es: "Testimonios", en: "Testimonials" },
    href: "#testimonials",
  },
  { id: "contact", label: { es: "Contacto", en: "Contact" }, href: "#contact" },
];

export const profile: Profile = {
  name: "Saul Fuentes Fariñas",
  role: {
    es: "Ingeniero en Ciencias Informáticas · Full-Stack Developer",
    en: "Computer Science Engineer · Full-Stack Developer",
  },
  tagline: {
    es: "Soluciones escalables y sistemas ajustado a su necesidad.",
    en: "Scalable solutions and systems tailored to your needs.",
  },
  bio: {
    es: "Soy ingeniero en Ciencias Informáticas con experiencia en desarrollo full-stack, inteligencia de negocios y gestión de equipos técnicos. Especializado en Laravel, React y React Native, me apasiona crear soluciones que combinan rendimiento, claridad y valor real para el usuario. He liderado departamentos de informática, diseñado sistemas de reclutamiento con IA y construido aplicaciones móviles offline-first usadas en producción.",
    en: "I am a Computer Science Engineer with experience in full-stack development, business intelligence, and technical team management. Specialized in Laravel, React, and React Native, I am passionate about building solutions that combine performance, clarity, and real user value. I have led IT departments, designed AI-powered recruitment systems, and built offline-first mobile apps used in production.",
  },
  photoUrl:
    "https://res.cloudinary.com/blchkvte/image/upload/f_auto,q_auto/work_profile",
  email: "saulfuentesfariñas@gmail.com",
  phone: "+53 56888556",
  location: { es: "La Habana, Cuba", en: "Havana, Cuba" },
  availability: {
    es: "Disponible para nuevos proyectos",
    en: "Available for new projects",
  },
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/saul9809",
      icon: "github",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/saulfuentes",
      icon: "linkedin",
    },
    {
      id: "email",
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=saulfuentesfarinas@gmail.com",
      icon: "mail",
    },
  ],
  personalInfo: [
    { label: { es: "Ubicación", en: "Location" }, value: "La Habana, Cuba" },
    {
      label: { es: "Correo", en: "Email" },
      value: "saulfuentesfarinas@gmail.com",
    },
    { label: { es: "Teléfono", en: "Phone" }, value: "+53 56888556" },
    {
      label: { es: "Idiomas", en: "Languages" },
      value: "Español (Nativo), Inglés (Intermedio-Alto)",
    },
    {
      label: { es: "Disponibilidad", en: "Availability" },
      value: "Remoto / Híbrido",
    },
  ],
  softSkills: [
    { es: "Liderazgo de equipos técnicos", en: "Technical team leadership" },
    { es: "Comunicación efectiva", en: "Effective communication" },
    { es: "Resolución de problemas", en: "Problem solving" },
    { es: "Pensamiento analítico", en: "Analytical thinking" },
    { es: "Adaptabilidad", en: "Adaptability" },
    { es: "Gestión del tiempo", en: "Time management" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: { es: "Lenguajes", en: "Languages" },
    skills: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    id: "frameworks",
    title: { es: "Frameworks", en: "Frameworks" },
    skills: ["Laravel", "React", "Livewire", "React Native (Expo)"],
  },
  {
    id: "databases",
    title: { es: "Bases de Datos", en: "Databases" },
    skills: ["PostgreSQL", "MariaDB", "MySQL"],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools" },
    skills: ["Retool", "Appsmith", "Git", "Docker", "Figma"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "jv-cerveceria",
    company: "Cervecería Cubana S.A.",
    role: {
      es: "Especialista B en Inteligencia de Negocios",
      en: "Business Intelligence Specialist B",
    },
    startDate: "2023",
    endDate: "Presente",
    description: {
      es: "Diseño e implementación de dashboards y reportes de inteligencia de negocios. Creación de pipelines de datos y visualizaciones interactivas para la toma de decisiones estratégicas.",
      en: "Design and implementation of business intelligence dashboards and reports. Creation of data pipelines and interactive visualizations for strategic decision-making.",
    },
    technologies: ["SQL", "PostgreSQL", "Retool", "Appsmith"],
  },
  {
    id: "ecm",
    company: "ECM Empresa de Construcción y Montaje",
    role: {
      es: "Jefe de Departamento / Especialista B en Informática",
      en: "Department Head / IT Specialist B",
    },
    startDate: "2021",
    endDate: "2023",
    description: {
      es: "Liderazgo del departamento de informática. Gestión de infraestructura, desarrollo de sistemas internos y supervisión de un equipo técnico. Implementación de soluciones para automatizar procesos empresariales.",
      en: "Leadership of the IT department. Infrastructure management, internal systems development, and supervision of a technical team. Implementation of solutions to automate business processes.",
    },
    technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "HTML", "CSS"],
  },
  {
    id: "seimpres",
    company: "SEIMPRES",
    role: { es: "Técnico de Informática", en: "IT Technician" },
    startDate: "2016",
    endDate: "2020",
    description: {
      es: "Soporte técnico, mantenimiento de equipos y redes. Asistencia en el desarrollo de soluciones informáticas para procesos internos. Atención a usuarios y resolución de incidencias.",
      en: "Technical support, equipment and network maintenance. Assistance in developing IT solutions for internal processes. User support and incident resolution.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "SQL"],
  },
];

export const education: EducationItem[] = [
  {
    id: "uci",
    institution: "Universidad de las Ciencias Informáticas (UCI)",
    degree: {
      es: "Ingeniería en Ciencias Informáticas",
      en: "Computer Science Engineering",
    },
    startDate: "2016",
    endDate: "2021",
    description: {
      es: "Formación integral en ingeniería de software, arquitecturas y metodologías, bases de datos, redes y sistemas distribuidos. Especialización en desarrollo web y móvil.",
      en: "Comprehensive training in software engineering, databases, networks, and distributed systems. Specialization in web and mobile development.",
    },
  },
];

export const projects: Project[] = [
  {
    id: "recruitment-ai",
    title: {
      es: "Sistema de Selección y Reclutamiento con IA",
      en: "AI-powered Selection and Recruitment System",
    },
    category: { es: "Recursos Humanos", en: "Human Resources" },
    description: {
      es: "Plataforma de reclutamiento que usa IA para clasificar candidatos y generar descripciones de puesto.",
      en: "Recruitment platform using AI to rank candidates and generate job descriptions.",
    },
    longDescription: {
      es: "Sistema completo de selección de personal con integración de IA. Permite publicar vacantes, recibir candidatos, clasificarlos automáticamente mediante el SDK de IA de Laravel, y generar descripciones de puesto optimizadas. Incluye panel de administración, dashboard de métricas y notificaciones en tiempo real.",
      en: "Complete personnel selection system with AI integration. Allows posting vacancies, receiving candidates, automatically ranking them using Laravel AI SDK, and generating optimized job descriptions. Includes admin panel, metrics dashboard, and real-time notifications.",
    },
    technologies: ["Laravel", "React", "PHP", "TypeScript", "PostgreSQL"],
    imageUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80",
    ],
    featured: true,
    links: { repo: "https://github.com/saul9809/RecruitmentSystem" },
  },
  {
    id: "mobile-recharges",
    title: {
      es: "App de Recargas y Servicios Móviles",
      en: "Mobile Recharges and Services App",
    },
    category: { es: "Aplicaciones Móviles", en: "Mobile Apps" },
    description: {
      es: "App móvil para recargas telefónicas y pago de servicios.",
      en: "Mobile app for phone recharges and service payments.",
    },
    longDescription: {
      es: "Aplicación móvil desarrollada con React Native y Expo que permite a los usuarios realizar recargas telefónicas, pagar servicios y gestionar sus transacciones. Incluye autenticación, historial de operaciones y pasarela de pago integrada.",
      en: "Mobile application developed with React Native and Expo that allows users to make phone recharges, pay for services, and manage their transactions. Includes authentication, transaction history, and integrated payment gateway.",
    },
    technologies: ["React Native", "Expo", "TypeScript", "PostgreSQL"],
    imageUrl:
      "https://res.cloudinary.com/blchkvte/image/upload/v1788024165/qvioytfqdjwjybhwcolj.png",
    gallery: [
      "https://res.cloudinary.com/blchkvte/image/upload/v1788024165/qvioytfqdjwjybhwcolj.png",
    ],
    featured: false,
  },

  {
    id: "sales-management",
    title: {
      es: "App de Gestión de Ventas y Mercado",
      en: "Sales and Market Management App",
    },
    category: { es: "Negocios", en: "Business" },
    description: {
      es: "Sistema de gestión de ventas, inventario y mercado.",
      en: "Sales, inventory, and market management system.",
    },
    longDescription: {
      es: "Plataforma web para la gestión completa de ventas: control de inventario, toma de pedidos, reportes de mercado y análisis de desempeño comercial. Construida con React Native Expo, Laravel como backend.",
      en: "Web platform for complete sales management: inventory control, invoicing, market reports, and commercial performance analysis. Built with React Native Expo, Laravel has backend.",
    },
    technologies: ["React Native", "Expo", "Laravel", "Neon DB", "TypeScript"],
    imageUrl:
      "https://res.cloudinary.com/blchkvte/image/upload/v1788023174/Screenshot_2026-08-29_125213.png",
    gallery: [
      "https://res.cloudinary.com/blchkvte/image/upload/v1788023174/Screenshot_2026-08-29_125213.png",
    ],
    featured: false,
  },
  {
    id: "route-tracing",
    title: {
      es: "Sitio de Cálculo y Trazado de Rutas",
      en: "Route Calculation and Tracing Site",
    },
    category: { es: "Logística", en: "Logistics" },
    description: {
      es: "Herramienta de cálculo y optimización de rutas de entrega.",
      en: "Route calculation and delivery optimization tool.",
    },
    longDescription: {
      es: "Aplicación web para el cálculo y trazado de rutas óptimas de entrega. Integra mapas interactivos, optimización de trayectos y estimación de tiempos. Construida con React y APIs de mapas.",
      en: "Web application for calculating and plotting optimal delivery routes. Integrates interactive maps, route optimization, and time estimation. Built with React and map APIs.",
    },
    technologies: ["React", "TypeScript", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/blchkvte/image/upload/v1788025793/Screenshot_2026-08-29_133208.png",
    gallery: [
      "https://res.cloudinary.com/blchkvte/image/upload/v1788025793/Screenshot_2026-08-29_133208.png",
    ],
    featured: false,
  },
  {
    id: "shopping-list",
    title: {
      es: "ShoppingList (Offline-First)",
      en: "ShoppingList (Offline-First)",
    },
    category: { es: "Aplicaciones Móviles", en: "Mobile Apps" },
    description: {
      es: "App de listas de compra offline-first con sincronización en la nube.",
      en: "Offline-first shopping list app with cloud sync.",
    },
    longDescription: {
      es: "Aplicación móvil offline-first para gestionar listas de compras. Funciona sin conexión y sincroniza automáticamente con la nube al recuperar conexión. Construida con React Native y Expo, con almacenamiento local y sincronización bidireccional.",
      en: "Offline-first mobile app to manage shopping lists. Works offline and automatically syncs with the cloud when connection is restored. Built with React Native and Expo, with local storage and bidirectional sync.",
    },
    technologies: ["React Native", "Expo", "TypeScript"],
    imageUrl:
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&h=600&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&h=600&fit=crop&q=80",
    ],
    featured: true,
  },
  {
    id: "dashboard-analytics",
    title: {
      es: "Herramienta, dashboard y análicis",
      en: "Tool, dashboard and analytics",
    },
    category: { es: "Negocios", en: "Business" },
    description: {
      es: "Sistema de gestión de ventas, inventario y mercado.",
      en: "Sales, inventory, and market management system.",
    },
    longDescription: {
      es: "Plataforma web para la gestión completa de ventas: control de inventario, facturación, reportes de mercado y análisis de desempeño comercial. Construida con Appsmith para una agil entrega de producto final.",
      en: "Web platform for complete sales management: inventory control, invoicing, market reports, and commercial performance analysis. Built with Appsmith for agil system delivered.",
    },
    technologies: ["JavaScript", "Neon DB", "Appsmith", "Retool"],
    imageUrl:
      "https://res.cloudinary.com/blchkvte/image/upload/v1788056677/Screenshot_2026-08-27_095213.png",
    gallery: [
      "https://res.cloudinary.com/blchkvte/image/upload/v1788056677/Screenshot_2026-08-27_095213.png",
    ],
    featured: false,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-recruitment",
    projectId: "recruitment-ai",
    title: {
      es: "Reclutamiento inteligente con IA",
      en: "Intelligent recruitment with AI",
    },
    challenge: {
      es: "El proceso de selección manual era lento y generaba cuellos de botella: los reclutadores revisaban cientos de CVs a mano, sin criterios consistentes, lo que prolongaba los tiempos de contratación y perdía candidatos cualificados.",
      en: "The manual selection process was slow and created bottlenecks: recruiters reviewed hundreds of CVs by hand, without consistent criteria, which extended hiring times and lost qualified candidates.",
    },
    solution: {
      es: "Diseñé una plataforma con Laravel en el backend y React en el frontend, integrando el SDK de IA de Laravel para clasificar candidatos automáticamente según el puesto. El sistema genera descripciones optimizadas, prioriza perfiles y envía notificaciones en tiempo real.",
      en: "I designed a platform with Laravel on the backend and React on the frontend, integrating the Laravel AI SDK to automatically rank candidates by position. The system generates optimized descriptions, prioritizes profiles, and sends real-time notifications.",
    },
    result: {
      es: "El tiempo de cribado se redujo de días a minutos. Los reclutadores ahora se enfocan en entrevistas, no en filtrado manual, y la tasa de respuesta a candidatos mejoró significativamente.",
      en: "Screening time was reduced from days to minutes. Recruiters now focus on interviews, not manual filtering, and the candidate response rate improved significantly.",
    },
    metrics: [
      {
        label: {
          es: "Reducción de tiempo de cribado",
          en: "Screening time reduction",
        },
        value: "85%",
      },
      {
        label: { es: "Candidatos procesados", en: "Candidates processed" },
        value: "1,200+",
      },
      {
        label: {
          es: "Tiempo medio de contratación",
          en: "Average hiring time",
        },
        value: "-40%",
      },
    ],
  },
  {
    id: "cs-shopping-list",
    projectId: "shopping-list",
    title: {
      es: "Listas de compra que funcionan sin conexión",
      en: "Shopping lists that work offline",
    },
    challenge: {
      es: "Los usuarios necesitaban una app de listas de compra que funcionara en zonas con conectividad intermitente, sin perder datos ni duplicar elementos al recuperar la red.",
      en: "Users needed a shopping list app that worked in areas with intermittent connectivity, without losing data or duplicating items when regaining network.",
    },
    solution: {
      es: "Construí una app con React Native y Expo usando un patrón offline-first: almacenamiento local persistente y sincronización bidireccional con resolución de conflictos basada en timestamps al recuperar la conexión.",
      en: "I built an app with React Native and Expo using an offline-first pattern: persistent local storage and bidirectional sync with timestamp-based conflict resolution when regaining connection.",
    },
    result: {
      es: "La app funciona sin interrupciones incluso sin red. La sincronización automática eliminó la pérdida de datos y los usuarios reportaron una experiencia confiable en cualquier condición.",
      en: "The app works without interruptions even offline. Automatic sync eliminated data loss and users reported a reliable experience in any condition.",
    },
    metrics: [
      {
        label: { es: "Disponibilidad sin red", en: "Offline availability" },
        value: "100%",
      },
      {
        label: { es: "Conflictos resueltos", en: "Conflicts resolved" },
        value: "0",
      },
      {
        label: { es: "Satisfacción de usuarios", en: "User satisfaction" },
        value: "4.8/5",
      },
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-laravel",
    name: {
      es: "Desarrollo Web con Laravel",
      en: "Web Development with Laravel",
    },
    issuer: "Universidad de las Ciencias Informáticas",
    date: "2022",
  },
  {
    id: "cert-react",
    name: {
      es: "React: De principiante a avanzado",
      en: "React: From Beginner to Advanced",
    },
    issuer: "Platzi",
    date: "2023",
  },
  {
    id: "cert-bi",
    name: {
      es: "Inteligencia de Negocios con Appsmith - Retool",
      en: "Business Intelligence with Appsmith - Retool",
    },
    issuer: "Cervecería Cubana",
    date: "2023",
  },
  {
    id: "cert-react-native",
    name: {
      es: "React Native y Expo: Apps móviles multiplataforma",
      en: "React Native & Expo: Cross-platform Mobile Apps",
    },
    issuer: "Udemy",
    date: "2024",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Carlos Martínez",
    role: { es: "Director de Tecnología", en: "CTO" },
    company: "ECM",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    quote: {
      es: "Saul transformó nuestro departamento de informática. Su capacidad para liderar equipos y entregar soluciones técnicas sólidas fue clave para la modernización de nuestros procesos.",
      en: "Saul transformed our IT department. His ability to lead teams and deliver solid technical solutions was key to modernizing our processes.",
    },
    rating: 5,
  },
  {
    id: "t2",
    name: "Ana Rodríguez",
    role: { es: "Gerente de RRHH", en: "HR Manager" },
    company: "Cervecería Cubana",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    quote: {
      es: "El sistema de reclutamiento con IA que Saul desarrolló redujo drásticamente nuestros tiempos de selección. Una herramienta que realmente impacta en el negocio.",
      en: "The AI recruitment system Saul developed drastically reduced our selection times. A tool that truly impacts the business.",
    },
    rating: 5,
  },
  {
    id: "t3",
    name: "Javier López",
    role: { es: "Product Manager", en: "Product Manager" },
    company: "Freelance",
    avatarUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&q=80",
    quote: {
      es: "Trabajar con Saul es garantía de calidad. Entiende el producto, propone mejoras y entrega a tiempo. Su app offline-first superó todas las expectativas.",
      en: "Working with Saul is a guarantee of quality. He understands the product, proposes improvements, and delivers on time. His offline-first app exceeded all expectations.",
    },
    rating: 5,
  },
];

export const trustedByLogos: TrustedByLogo[] = [
  { id: "l1", name: "SEIMPRES" },
  { id: "l2", name: "Empresa de Construcción y Montaje - ECM" },
  { id: "l3", name: "Cervecería Cubana S.A" },
  { id: "l4", name: "UCI" },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies)),
).sort();

export function getLocalizedValue(
  value: Record<Locale, string>,
  locale: Locale,
): string {
  return value[locale] || value.en;
}
