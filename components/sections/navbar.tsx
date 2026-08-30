"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme, useLanguage } from "@/components/theme-provider";
import type { Locale } from "@/lib/types";
import type { Dictionary } from "@/lib/i18n";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
  navItems: { id: string; label: string; href: string }[];
}

export function Navbar({ locale, dict, navItems }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const [, setLocale] = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    // Cerrar el menú primero
    setMobileOpen(false);

    // Esperar a que la animación de cierre comience
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Pequeño delay para que el menú comience a cerrarse
  };

  const switchLang = (l: Locale) => {
    setLocale(l);
    setLangOpen(false);
    setMobileOpen(false); // También cerrar menú móvil al cambiar idioma
    window.location.href = `/${l}`;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="container-portfolio flex h-16 items-center justify-between md:h-20">
        <button
          onClick={() => handleNavClick("#home")}
          className="font-display text-lg font-bold tracking-tight"
          aria-label="Home"
        >
          <span className="text-foreground">Saul</span>
          <span className="text-muted-foreground">.dev</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLangOpen((o) => !o)}
              aria-label={dict.language.label}
              className="h-9 w-9"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-32 rounded-md border border-border bg-popover p-1 shadow-lg"
                >
                  {(["es", "en"] as Locale[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLang(l)}
                      className={cn(
                        "flex w-full items-center px-3 py-2 text-sm rounded-sm transition-colors",
                        locale === l
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                      )}
                    >
                      {l === "es" ? "Español" : "English"}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={dict.theme.toggle}
            className="h-9 w-9"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg"
          >
            <div className="container-portfolio flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="py-3 text-left text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
