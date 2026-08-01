'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/sections/navbar';
import { Hero, HeroSkeleton } from '@/components/sections/hero';
import { About, AboutSkeleton } from '@/components/sections/about';
import { Resume, ResumeSkeleton } from '@/components/sections/resume';
import { Portfolio, PortfolioSkeleton } from '@/components/sections/portfolio';
import { TrustedBy, TrustedBySkeleton } from '@/components/sections/trusted-by';
import { CaseStudies, CaseStudiesSkeleton } from '@/components/sections/case-studies';
import { Certifications, CertificationsSkeleton } from '@/components/sections/certifications';
import { Testimonials, TestimonialsSkeleton } from '@/components/sections/testimonials';
import { Contact, ContactSkeleton } from '@/components/sections/contact';
import { Footer, FooterSkeleton } from '@/components/sections/footer';
import { StructuredData } from '@/components/structured-data';
import { services } from '@/lib/services';
import type { Dictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

interface PortfolioPageProps {
  locale: Locale;
  dict: Dictionary;
}

export function PortfolioPage({ locale, dict }: PortfolioPageProps) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    profile: Awaited<ReturnType<typeof services.getProfile>>;
    navItems: Awaited<ReturnType<typeof services.getNavItems>>;
    skills: Awaited<ReturnType<typeof services.getSkillCategories>>;
    experiences: Awaited<ReturnType<typeof services.getExperiences>>;
    education: Awaited<ReturnType<typeof services.getEducation>>;
    projects: Awaited<ReturnType<typeof services.getProjects>>;
    caseStudies: Awaited<ReturnType<typeof services.getCaseStudies>>;
    certifications: Awaited<ReturnType<typeof services.getCertifications>>;
    testimonials: Awaited<ReturnType<typeof services.getTestimonials>>;
    trustedBy: Awaited<ReturnType<typeof services.getTrustedBy>>;
    technologies: Awaited<ReturnType<typeof services.getAllTechnologies>>;
  } | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const [
        profile,
        navItems,
        skills,
        experiences,
        education,
        projects,
        caseStudies,
        certifications,
        testimonials,
        trustedBy,
        technologies,
      ] = await Promise.all([
        services.getProfile(locale),
        services.getNavItems(locale),
        services.getSkillCategories(locale),
        services.getExperiences(locale),
        services.getEducation(locale),
        services.getProjects(locale),
        services.getCaseStudies(locale),
        services.getCertifications(locale),
        services.getTestimonials(locale),
        services.getTrustedBy(),
        services.getAllTechnologies(),
      ]);

      if (!active) return;
      setData({
        profile,
        navItems,
        skills,
        experiences,
        education,
        projects,
        caseStudies,
        certifications,
        testimonials,
        trustedBy,
        technologies,
      });
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [locale]);

  if (loading || !data) {
    return (
      <>
        <Navbar locale={locale} dict={dict} navItems={[]} />
        <main>
          <HeroSkeleton />
          <AboutSkeleton />
          <ResumeSkeleton />
          <PortfolioSkeleton />
          <TrustedBySkeleton />
          <CaseStudiesSkeleton />
          <CertificationsSkeleton />
          <TestimonialsSkeleton />
          <ContactSkeleton />
        </main>
        <FooterSkeleton />
      </>
    );
  }

  return (
    <>
      <StructuredData locale={locale} />
      <Navbar locale={locale} dict={dict} navItems={data.navItems} />
      <main>
        <Hero profile={data.profile} dict={dict} />
        <About
          profile={data.profile}
          dict={dict}
          projectCount={data.projects.length}
          techCount={data.technologies.length}
        />
        <Resume
          experiences={data.experiences}
          education={data.education}
          skills={data.skills}
          dict={dict}
        />
        <Portfolio
          projects={data.projects}
          technologies={data.technologies}
          dict={dict}
        />
        <TrustedBy logos={data.trustedBy} dict={dict} />
        <CaseStudies
          caseStudies={data.caseStudies}
          projects={data.projects}
          dict={dict}
        />
        <Certifications certifications={data.certifications} dict={dict} />
        <Testimonials testimonials={data.testimonials} dict={dict} />
        <Contact profile={data.profile} dict={dict} />
      </main>
      <Footer profile={data.profile} dict={dict} />
    </>
  );
}
