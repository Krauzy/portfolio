"use client";

import { Button } from "@/components/ui/Button";
import { profileMeta } from "@/data/i18n";
import { useI18n } from "@/components/providers/LanguageProvider";

export function Navbar() {
  const { content, nextLocaleLabel, toggleLocale } = useI18n();
  const { profile } = content;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label={profile.accessibility.primaryNavigation}
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-muted"
          aria-label={`${profileMeta.name} ${profile.accessibility.home}`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-blue-muted/45 bg-indigo-700/20 shadow-inner-glow">
            <span className="h-3.5 w-3.5 rounded-sm bg-text-primary shadow-glow transition group-hover:rotate-45" />
          </span>
          <span className="hidden font-display text-sm font-bold text-text-primary sm:block">
            {profileMeta.name}
          </span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {profile.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full text-sm font-medium text-text-secondary transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-muted"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={profile.language.label}
            className="inline-flex h-10 min-w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] px-3 text-xs font-bold text-text-primary transition hover:-translate-y-0.5 hover:border-blue-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-muted"
          >
            {nextLocaleLabel}
          </button>
          <Button href={profile.hero.primaryCta.href} variant="secondary" className="hidden sm:inline-flex">
            {profile.hero.primaryCta.label}
          </Button>
        </div>
      </nav>
    </header>
  );
}
