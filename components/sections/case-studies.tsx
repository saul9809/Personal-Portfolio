/* eslint-disable @next/next/no-img-element */
'use client';

import { FadeIn, SlideUp } from '@/components/motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import type { LocalizedCaseStudy, LocalizedProject } from '@/lib/services';
import type { Dictionary } from '@/lib/i18n';

interface CaseStudiesProps {
  caseStudies: LocalizedCaseStudy[];
  projects: LocalizedProject[];
  dict: Dictionary;
}

export function CaseStudies({ caseStudies, projects, dict }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="section-padding bg-surface/50">
      <div className="container-portfolio">
        <FadeIn className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {dict.caseStudies.subtitle}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {dict.caseStudies.title}
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {caseStudies.map((cs, i) => {
            const project = projects.find((p) => p.id === cs.projectId);
            return (
              <SlideUp key={cs.id} delay={i * 0.1}>
                <Card className="overflow-hidden border-border bg-surface">
                  <div className="grid lg:grid-cols-5">
                    {project && (
                      <div className="relative aspect-video lg:col-span-2 lg:aspect-auto">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="h-full w-full object-cover saturate-[0.7]"
                        />
                      </div>
                    )}
                    <CardContent className="p-6 lg:col-span-3 md:p-8">
                      <h3 className="mb-6 font-display text-xl font-bold md:text-2xl">
                        {cs.title}
                      </h3>

                      <div className="space-y-5">
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <Target className="h-4 w-4 text-muted-foreground" />
                            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                              {dict.caseStudies.challenge}
                            </h4>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {cs.challenge}
                          </p>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-muted-foreground" />
                            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                              {dict.caseStudies.solution}
                            </h4>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {cs.solution}
                          </p>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                              {dict.caseStudies.result}
                            </h4>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {cs.result}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                        {cs.metrics.map((metric, mi) => (
                          <div key={mi} className="text-center">
                            <div className="font-display text-2xl font-bold md:text-3xl">
                              {metric.value}
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesSkeleton() {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container-portfolio">
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-2 h-4 w-32 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-10 w-40 animate-pulse rounded bg-muted" />
        </div>
        <div className="space-y-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-md bg-muted" />
          ))}
        </div>
      </div>
    </section>
  );
}
