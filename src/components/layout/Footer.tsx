"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "@/lib/icons";
import { socials } from "@/data/i18n";
import { useI18n } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { content } = useI18n();
  const { profile } = content;

  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-text-secondary">{profile.footer.note}</p>
          <p className="mt-2">{profile.footer.credits}</p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-text-secondary transition hover:-translate-y-0.5 hover:border-blue-muted/60 hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-muted"
            >
              <FontAwesomeIcon icon={iconMap[social.icon]} className="h-4 w-4" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
