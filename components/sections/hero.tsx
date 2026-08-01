'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { LocalizedProfile } from '@/lib/services';
import type { Dictionary } from '@/lib/i18n';

interface HeroProps {
  profile: LocalizedProfile;
  dict: Dictionary;
}

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

const socialColors: Record<string, string> = {
  github: 'hover:text-sky-400 hover:border-sky-400/50',
  linkedin: 'hover:text-sky-500 hover:border-sky-500/50',
  mail: 'hover:text-blue-400 hover:border-blue-400/50',
};

export function Hero({ profile, dict }: HeroProps) {
  const reduce = useReducedMotion();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-sky-500/10 via-blue-600/5 to-transparent blur-3xl" />
        <div className="absolute right-10 top-20 h-[400px] w-[400px] rounded-full bg-gradient-radial from-indigo-500/8 to-transparent blur-3xl" />
        <div className="absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-gradient-radial from-blue-600/8 to-transparent blur-3xl" />
      </div>

      <div className="container-portfolio relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.8 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-2xl" />
            <img
              src={profile.photoUrl}
              alt={profile.name}
              width={160}
              height={160}
              className="relative h-32 w-32 rounded-full border-2 border-sky-500/30 object-cover md:h-40 md:w-40 lg:h-48 lg:w-48"
            />
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-sky-400/80 md:text-base"
          >
            {dict.hero.greeting}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 max-w-xl text-sm text-muted-foreground/80 md:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 text-sky-400/70" />
            <span>{profile.location}</span>
            <span className="mx-1 h-1 w-1 rounded-full bg-sky-400/50" />
            <span className="text-foreground/90">{profile.availability}</span>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              onClick={() => scrollTo('#portfolio')}
              className="min-w-[160px] bg-sky-600 hover:bg-sky-500 text-white"
            >
              {dict.hero.ctaProjects}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo('#contact')}
              className="min-w-[160px] border-sky-500/30 hover:border-sky-400/60 hover:bg-sky-500/10"
            >
              {dict.hero.ctaContact}
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex items-center gap-3"
          >
            {profile.socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 ${socialColors[s.icon] || ''}`}
              >
                {socialIcons[s.icon]}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky-400/60"
        aria-label={dict.hero.scroll}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}

export function HeroSkeleton() {
  return (
    <section className="flex min-h-screen items-center justify-center pt-16 md:pt-20">
      <div className="container-portfolio flex flex-col items-center text-center">
        <div className="mb-8 h-32 w-32 animate-pulse rounded-full bg-muted md:h-40 md:w-40 lg:h-48 lg:w-48" />
        <div className="mb-2 h-4 w-32 animate-pulse rounded bg-muted" />
        <div className="h-12 w-72 animate-pulse rounded bg-muted md:w-96" />
        <div className="mt-4 h-6 w-64 animate-pulse rounded bg-muted md:w-80" />
        <div className="mt-3 h-4 w-48 animate-pulse rounded bg-muted" />
        <div className="mt-8 flex gap-3">
          <div className="h-12 w-40 animate-pulse rounded-md bg-muted" />
          <div className="h-12 w-40 animate-pulse rounded-md bg-muted" />
        </div>
        <div className="mt-8 flex gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-10 w-10 animate-pulse rounded-full bg-muted" />
          ))}
        </div>
      </div>
    </section>
  );
}
