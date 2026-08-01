'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { LocalizedTestimonial } from '@/lib/services';
import type { Dictionary } from '@/lib/i18n';

interface TestimonialsProps {
  testimonials: LocalizedTestimonial[];
  dict: Dictionary;
}

const AUTOPLAY_INTERVAL = 5000;

export function Testimonials({ testimonials, dict }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next, reduce]);

  if (count === 0) return null;

  return (
    <section id="testimonials" className="section-padding bg-surface/50">
      <div className="container-portfolio">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {dict.testimonials.subtitle}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {dict.testimonials.title}
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-12">
              <Quote className="absolute right-6 top-6 h-16 w-16 text-foreground/5" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={reduce ? false : { opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
                    ))}
                  </div>

                  <blockquote className="mb-6 text-lg leading-relaxed text-foreground md:text-xl">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].avatarUrl}
                      alt={testimonials[current].name}
                      className="h-14 w-14 rounded-full border border-border object-cover saturate-[0.7]"
                    />
                    <div>
                      <div className="font-display font-semibold">{testimonials[current].name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[current].role} · {testimonials[current].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label={dict.testimonials.previous}
                className="h-10 w-10 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      current === i ? 'w-8 bg-foreground' : 'w-2 bg-muted-foreground/40'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label={dict.testimonials.next}
                className="h-10 w-10 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container-portfolio">
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-2 h-4 w-32 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-10 w-40 animate-pulse rounded bg-muted" />
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="h-64 animate-pulse rounded-2xl bg-muted" />
        </div>
      </div>
    </section>
  );
}
