import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const noFlashScript = `
(function() {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: "Saul Fuentes Fariñas — Full-Stack Developer",
  description:
    "Portafolio de Saul Fuentes Fariñas, Ingeniero en Ciencias Informáticas y Full-Stack Developer.",
  openGraph: {
    title: "Saul Fuentes Fariñas — Full-Stack Developer",
    description:
      "Ingeniero en Ciencias Informáticas especializado en Soluciones y Desarrollo de Software.",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
