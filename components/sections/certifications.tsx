'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Calendar } from 'lucide-react';
import type { LocalizedCertification } from '@/lib/services';
import type { Dictionary } from '@/lib/i18n';

interface CertificationsProps {
  certifications: LocalizedCertification[];
  dict: Dictionary;
}

export function Certifications({ certifications, dict }: CertificationsProps) {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-portfolio">
        <FadeIn className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {dict.certifications.subtitle}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {dict.certifications.title}
          </h2>
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <StaggerItem key={cert.id}>
              <Card className="h-full border-border bg-surface transition-all hover:border-foreground/30">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border">
                    <Award className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold leading-snug">
                    {cert.name}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">{cert.issuer}</p>
                  <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function CertificationsSkeleton() {
  return (
    <section className="section-padding">
      <div className="container-portfolio">
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-2 h-4 w-32 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-10 w-40 animate-pulse rounded bg-muted" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-md bg-muted" />
          ))}
        </div>
      </div>
    </section>
  );
}
