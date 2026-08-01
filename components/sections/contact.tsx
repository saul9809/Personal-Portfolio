'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { services } from '@/lib/services';
import type { LocalizedProfile } from '@/lib/services';
import type { Dictionary } from '@/lib/i18n';

interface ContactProps {
  profile: LocalizedProfile;
  dict: Dictionary;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact({ profile, dict }: ContactProps) {
  const reduce = useReducedMotion();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const e: FormErrors = {};
    const d = dict.contact.errors;

    if (!formData.name.trim()) e.name = d.nameRequired;
    else if (formData.name.trim().length < 2) e.name = d.nameMin;

    if (!formData.email.trim()) e.email = d.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = d.emailInvalid;

    if (!formData.subject.trim()) e.subject = d.subjectRequired;
    else if (formData.subject.trim().length < 3) e.subject = d.subjectMin;

    if (!formData.message.trim()) e.message = d.messageRequired;
    else if (formData.message.trim().length < 10) e.message = d.messageMin;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      await services.submitContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactItems = [
    { icon: Mail, label: dict.contact.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: dict.contact.name === 'Nombre' ? 'Teléfono' : 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: profile.personalInfo[0]?.label || 'Location', value: profile.personalInfo[0]?.value || '', href: undefined },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-portfolio">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {dict.contact.subtitle}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {dict.contact.title}
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 font-display text-xl font-semibold">{dict.contact.directContact}</h3>
            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-foreground hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-foreground">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {profile.socials.map((s) => {
                const colorClass =
                  s.icon === 'github'
                    ? 'hover:text-sky-400 hover:border-sky-400/50'
                    : s.icon === 'linkedin'
                    ? 'hover:text-sky-500 hover:border-sky-500/50'
                    : s.icon === 'mail'
                    ? 'hover:text-blue-400 hover:border-blue-400/50'
                    : '';
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 ${colorClass}`}
                  >
                    <span className="text-xs font-bold uppercase">{s.id.slice(0, 2)}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 lg:col-span-3"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{dict.contact.name}</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder={dict.contact.namePlaceholder}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{dict.contact.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder={dict.contact.emailPlaceholder}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">{dict.contact.subject}</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                placeholder={dict.contact.subjectPlaceholder}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="text-xs text-destructive">{errors.subject}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{dict.contact.message}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder={dict.contact.messagePlaceholder}
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {dict.contact.sending}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {dict.contact.send}
                </>
              )}
            </Button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 rounded-md border border-border bg-surface p-3 text-sm text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  {dict.contact.success}
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {dict.contact.error}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton() {
  return (
    <section className="section-padding">
      <div className="container-portfolio">
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-2 h-4 w-24 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-10 w-32 animate-pulse rounded bg-muted" />
        </div>
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-4 lg:col-span-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-12 animate-pulse rounded-md bg-muted" />
            ))}
          </div>
          <div className="space-y-5 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-16 animate-pulse rounded-md bg-muted" />
              ))}
            </div>
            <div className="h-16 animate-pulse rounded-md bg-muted" />
            <div className="h-32 animate-pulse rounded-md bg-muted" />
            <div className="h-12 w-40 animate-pulse rounded-md bg-muted" />
          </div>
        </div>
      </div>
    </section>
  );
}
