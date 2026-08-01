'use client';

import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import type { LocalizedProfile } from '@/lib/services';
import type { Dictionary } from '@/lib/i18n';

interface FooterProps {
  profile: LocalizedProfile;
  dict: Dictionary;
}

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
};

const socialColors: Record<string, string> = {
  github: 'hover:text-sky-400 hover:border-sky-400/50',
  linkedin: 'hover:text-sky-500 hover:border-sky-500/50',
  mail: 'hover:text-blue-400 hover:border-blue-400/50',
};

export function Footer({ profile, dict }: FooterProps) {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="container-portfolio py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <button
              onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-display text-lg font-bold tracking-tight"
            >
              <span className="text-foreground">Saul</span>
              <span className="text-muted-foreground">.dev</span>
            </button>
            <p className="mt-2 text-sm text-muted-foreground">{dict.footer.builtWith}</p>
          </div>

          <div className="flex items-center gap-3">
            {profile.socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 ${socialColors[s.icon] || ''}`}
              >
                {socialIcons[s.icon]}
              </a>
            ))}
          </div>

          <button
            onClick={backToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label={dict.footer.backToTop}
          >
            <span className="hidden sm:inline">{dict.footer.backToTop}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all hover:border-foreground">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}. {dict.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FooterSkeleton() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="container-portfolio py-12">
        <div className="flex items-center justify-center">
          <div className="h-6 w-24 animate-pulse rounded bg-muted" />
        </div>
      </div>
    </footer>
  );
}
