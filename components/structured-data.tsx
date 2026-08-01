import type { Locale } from '@/lib/types';
import { profile } from '@/lib/mock-data';

export function StructuredData({ locale }: { locale: Locale }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role[locale],
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location[locale],
      addressCountry: 'CU',
    },
    knowsAbout: [
      'Laravel',
      'React',
      'React Native',
      'PHP',
      'TypeScript',
      'PostgreSQL',
    ],
    knowsLanguage: ['es', 'en'],
    nationality: 'CU',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
