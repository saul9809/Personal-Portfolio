import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { PortfolioPage } from '@/components/portfolio-page';

const locales: Locale[] = ['es', 'en'];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  const locale = (params.lang as Locale) || 'es';
  const dict = getDictionary(locale);
  const isEs = locale === 'es';

  return {
    title: isEs
      ? 'Saul Fuentes Fariñas — Desarrollador Full-Stack'
      : 'Saul Fuentes Fariñas — Full-Stack Developer',
    description: isEs
      ? 'Portafolio de Saul Fuentes Fariñas, Ingeniero en Ciencias Informáticas especializado en Laravel, React y React Native.'
      : 'Portfolio of Saul Fuentes Fariñas, Computer Science Engineer specialized in Laravel, React, and React Native.',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
      },
    },
    openGraph: {
      title: isEs
        ? 'Saul Fuentes Fariñas — Desarrollador Full-Stack'
        : 'Saul Fuentes Fariñas — Full-Stack Developer',
      description: isEs
        ? 'Ingeniero en Ciencias Informáticas especializado en Laravel, React y React Native.'
        : 'Computer Science Engineer specialized in Laravel, React, and React Native.',
      type: 'website',
      locale: isEs ? 'es_ES' : 'en_US',
    },
  };
}

export default function LangPage({ params }: { params: { lang: string } }) {
  const locale = params.lang as Locale;
  if (!locales.includes(locale)) notFound();
  const dict = getDictionary(locale);

  return <PortfolioPage locale={locale} dict={dict} />;
}
