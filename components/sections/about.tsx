"use client";

import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FolderGit2, Cpu, Check } from "lucide-react";
import type { LocalizedProfile } from "@/lib/services";
import type { Dictionary } from "@/lib/i18n";

interface AboutProps {
  profile: LocalizedProfile;
  dict: Dictionary;
  projectCount: number;
  techCount: number;
}

export function About({ profile, dict, projectCount, techCount }: AboutProps) {
  const stats = [
    { icon: Briefcase, value: "6+", label: dict.about.stats.experience },
    { icon: FolderGit2, value: "12", label: dict.about.stats.projects },
    { icon: Cpu, value: `${techCount}+`, label: dict.about.stats.technologies },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-portfolio">
        <FadeIn className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {dict.about.subtitle}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {dict.about.title}
          </h2>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <SlideUp className="lg:col-span-2">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.bio}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="border-border bg-surface">
                    <CardContent className="flex flex-col items-center gap-2 p-5 text-center">
                      <s.icon className="h-6 w-6 text-muted-foreground" />
                      <span className="font-display text-2xl font-bold">
                        {s.value}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {s.label}
                      </span>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </SlideUp>

          <div className="grid gap-6">
            <SlideUp delay={0.1}>
              <Card className="border-border bg-surface">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-display text-lg font-semibold">
                    {dict.about.personalInfo}
                  </h3>
                  <ul className="space-y-3">
                    {profile.personalInfo.map((info, i) => (
                      <li
                        key={i}
                        className="flex flex-col gap-0.5 sm:flex-row sm:justify-between"
                      >
                        <span className="text-sm text-muted-foreground">
                          {info.label}
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {info.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </SlideUp>

            <SlideUp delay={0.2}>
              <Card className="border-border bg-surface">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-display text-lg font-semibold">
                    {dict.about.softSkills}
                  </h3>
                  <StaggerContainer className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {profile.softSkills.map((skill, i) => (
                      <StaggerItem key={i}>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {skill}
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSkeleton() {
  return (
    <section className="section-padding">
      <div className="container-portfolio">
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-2 h-4 w-24 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-10 w-48 animate-pulse rounded bg-muted" />
        </div>
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-4 lg:col-span-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-4 w-full animate-pulse rounded bg-muted"
              />
            ))}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-24 animate-pulse rounded-md bg-muted"
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="h-48 animate-pulse rounded-md bg-muted" />
            <div className="h-48 animate-pulse rounded-md bg-muted" />
          </div>
        </div>
      </div>
    </section>
  );
}
