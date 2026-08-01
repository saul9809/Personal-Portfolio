'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { LocalizedProject } from '@/lib/services';
import type { Dictionary } from '@/lib/i18n';

interface PortfolioProps {
  projects: LocalizedProject[];
  technologies: string[];
  dict: Dictionary;
}

export function Portfolio({ projects, technologies, dict }: PortfolioProps) {
  const [filter, setFilter] = useState<string>('all');
  const [selected, setSelected] = useState<LocalizedProject | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.technologies.includes(filter));
  }, [filter, projects]);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-portfolio">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {dict.portfolio.subtitle}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {dict.portfolio.title}
          </h2>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="sr-only">{dict.portfolio.filterLabel}</span>
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
            {dict.portfolio.filterAll}
          </FilterButton>
          {technologies.map((tech) => (
            <FilterButton key={tech} active={filter === tech} onClick={() => setFilter(tech)}>
              {tech}
            </FilterButton>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.button
                key={project.id}
                layout
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setSelected(project)}
                className="group relative overflow-hidden rounded-lg border border-border bg-surface text-left transition-all hover:border-foreground/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover saturate-[0.7] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {project.category}
                    </Badge>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs text-muted-foreground/70">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground/70">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl border-border bg-surface p-0 max-h-[90vh] overflow-y-auto">
          {selected && (
            <ProjectLightbox project={selected} dict={dict} onClose={() => setSelected(null)} />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
        active
          ? 'bg-foreground text-background'
          : 'border border-border text-muted-foreground hover:border-foreground hover:text-foreground'
      }`}
    >
      {children}
    </button>
  );
}

function ProjectLightbox({
  project,
  dict,
  onClose,
}: {
  project: LocalizedProject;
  dict: Dictionary;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const gallery = project.gallery.length > 0 ? project.gallery : [project.imageUrl];

  useEffect(() => {
    setActiveImage(0);
  }, [project.id]);

  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <img
          src={gallery[activeImage]}
          alt={project.title}
          className="h-full w-full object-cover saturate-[0.7]"
        />
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {gallery.length > 1 && (
        <div className="flex gap-2 p-3">
          {gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`h-16 w-24 overflow-hidden rounded-md border-2 transition-all ${
                activeImage === i ? 'border-foreground' : 'border-transparent opacity-60'
              }`}
            >
              <img src={img} alt="" className="h-full w-full object-cover saturate-[0.7]" />
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4 p-6">
        <div>
          <Badge variant="secondary" className="mb-2">
            {project.category}
          </Badge>
          <DialogTitle className="font-display text-2xl font-bold">{project.title}</DialogTitle>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>

        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {dict.portfolio.technologies}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {project.links && (project.links.live || project.links.repo) && (
          <div className="flex gap-3 pt-2">
            {project.links.live && (
              <Button size="sm" asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {dict.portfolio.liveDemo}
                </a>
              </Button>
            )}
            {project.links.repo && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  {dict.portfolio.sourceCode}
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function PortfolioSkeleton() {
  return (
    <section className="section-padding">
      <div className="container-portfolio">
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-2 h-4 w-24 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-10 w-32 animate-pulse rounded bg-muted" />
        </div>
        <div className="mb-10 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-9 w-20 animate-pulse rounded-full bg-muted" />
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-border">
              <div className="aspect-[4/3] animate-pulse bg-muted" />
              <div className="space-y-2 p-4">
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                <div className="h-3 w-full animate-pulse rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
