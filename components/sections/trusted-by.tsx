'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { TrustedByLogo } from '@/lib/types';
import type { Dictionary } from '@/lib/i18n';

interface TrustedByProps {
  logos: TrustedByLogo[];
  dict: Dictionary;
}

export function TrustedBy({ logos, dict }: TrustedByProps) {
  const reduce = useReducedMotion();
  const doubled = [...logos, ...logos];

  return (
    <section className="border-y border-border bg-surface/30 py-12 md:py-16">
      <div className="container-portfolio">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {dict.trustedBy.title}
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />
          <div
            className={`flex items-center gap-12 ${reduce ? '' : 'animate-marquee'}`}
            style={{ width: 'max-content' }}
          >
            {doubled.map((logo, i) => (
              <div
                key={`${logo.id}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-foreground md:text-xl"
              >
                <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustedBySkeleton() {
  return (
    <section className="border-y border-border bg-surface/30 py-12 md:py-16">
      <div className="container-portfolio">
        <div className="mx-auto mb-8 h-4 w-32 animate-pulse rounded bg-muted" />
        <div className="flex justify-center gap-12">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-6 w-24 animate-pulse rounded bg-muted" />
          ))}
        </div>
      </div>
    </section>
  );
}
