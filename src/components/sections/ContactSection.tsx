"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/components/providers/LanguageProvider";
import { socials } from "@/data/i18n";
import { iconMap } from "@/lib/icons";

export function ContactSection() {
  const { content } = useI18n();
  const { profile } = content;

  return (
    <section id="contato" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-8 shadow-card backdrop-blur-2xl sm:p-10 lg:p-14">
        <SectionHeader
          eyebrow={profile.contact.eyebrow}
          title={profile.contact.title}
          description={profile.contact.description}
          align="center"
          animate={false}
        />
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={profile.contact.primaryCta.href} icon="arrowRight">
            {profile.contact.primaryCta.label}
          </Button>
          <Button href={profile.contact.secondaryCta.href} variant="secondary">
            {profile.contact.secondaryCta.label}
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="inline-flex min-w-0 items-center gap-2 rounded-full border border-white/10 bg-background/50 px-4 py-2 text-sm font-medium text-text-secondary transition hover:-translate-y-0.5 hover:border-blue-muted/60 hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-muted"
            >
              <FontAwesomeIcon icon={iconMap[social.icon]} className="h-4 w-4" aria-hidden />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
