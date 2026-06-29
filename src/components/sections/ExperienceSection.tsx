"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/components/providers/LanguageProvider";
import { iconMap } from "@/lib/icons";

export function ExperienceSection() {
  const { content } = useI18n();
  const { profile, experience } = content;

  return (
    <section id="experiencia" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={profile.sections.experience.eyebrow}
          title={profile.sections.experience.title}
          description={profile.sections.experience.description}
        />
        <div className="mt-12 grid gap-5">
          {experience.map((item, index) => (
            <Card
              key={`${item.role}-${item.company}`}
              className={`relative overflow-hidden ${index % 2 === 0 ? "slide-from-left" : "slide-from-right"}`}
            >
              <div
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-700 via-blue-muted to-accent-warm"
                aria-hidden
              />
              <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-text-primary [overflow-wrap:anywhere]">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-text-secondary [overflow-wrap:anywhere]">{item.company}</p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-text-secondary [overflow-wrap:anywhere]">
                    {item.summary}
                  </p>
                  <ul className="mt-5 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-text-secondary">
                        <FontAwesomeIcon icon={iconMap.check} className="mt-1 h-4 w-4 shrink-0 text-blue-muted" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className="absolute right-6 top-6 font-display text-5xl font-bold text-white/[0.035]" aria-hidden>
                0{index + 1}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
