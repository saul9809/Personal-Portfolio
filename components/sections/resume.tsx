'use client';

import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';
import type { LocalizedExperience, LocalizedEducation, LocalizedSkillCategory } from '@/lib/services';
import type { Dictionary } from '@/lib/i18n';

interface ResumeProps {
  experiences: LocalizedExperience[];
  education: LocalizedEducation[];
  skills: LocalizedSkillCategory[];
  dict: Dictionary;
}

export function Resume({ experiences, education, skills, dict }: ResumeProps) {
  return (
    <section id="resume" className="section-padding bg-surface/50">
      <div className="container-portfolio">
        <FadeIn className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {dict.resume.subtitle}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {dict.resume.title}
          </h2>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SlideUp>
              <div className="mb-6 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-display text-xl font-semibold">{dict.resume.experience}</h3>
              </div>
            </SlideUp>

            <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
              {experiences.map((exp, i) => (
                <SlideUp key={exp.id} delay={i * 0.1}>
                  <div className="relative flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Card className="flex-1 border-border bg-surface">
                      <CardContent className="p-5">
                        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-display font-semibold">{exp.role}</h4>
                          <span className="text-xs text-muted-foreground">
                            {exp.startDate} — {exp.endDate}
                          </span>
                        </div>
                        <p className="mb-3 text-sm font-medium text-muted-foreground">{exp.company}</p>
                        <p className="mb-3 text-sm text-muted-foreground">{exp.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs font-normal">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </SlideUp>
              ))}
            </div>

            <SlideUp delay={0.3}>
              <div className="mb-6 mt-10 flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-display text-xl font-semibold">{dict.resume.education}</h3>
              </div>
            </SlideUp>

            <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
              {education.map((edu, i) => (
                <SlideUp key={edu.id} delay={i * 0.1}>
                  <div className="relative flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Card className="flex-1 border-border bg-surface">
                      <CardContent className="p-5">
                        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-display font-semibold">{edu.degree}</h4>
                          <span className="text-xs text-muted-foreground">
                            {edu.startDate} — {edu.endDate}
                          </span>
                        </div>
                        <p className="mb-2 text-sm font-medium text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>

          <div>
            <SlideUp>
              <div className="mb-6 flex items-center gap-3">
                <Code2 className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-display text-xl font-semibold">{dict.resume.skills}</h3>
              </div>
            </SlideUp>

            <StaggerContainer className="space-y-6">
              {skills.map((cat) => (
                <StaggerItem key={cat.id}>
                  <Card className="border-border bg-surface">
                    <CardContent className="p-5">
                      <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {cat.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:border-foreground hover:text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResumeSkeleton() {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container-portfolio">
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-2 h-4 w-32 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-10 w-32 animate-pulse rounded bg-muted" />
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 animate-pulse rounded-md bg-muted" />
            ))}
          </div>
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 animate-pulse rounded-md bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
