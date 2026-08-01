import es from './es.json';
import en from './en.json';
import type { Locale } from '../types';

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export const localeLabels: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
};
