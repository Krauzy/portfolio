"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShieldCloud } from "@/assets/svg/ShieldCloud";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/components/providers/LanguageProvider";
import { iconMap } from "@/lib/icons";

export function AboutSection() {
  const { content } = useI18n();
  const { profile } = content;

  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="slide-on-scroll slide-from-left slide-range-soft">
          <SectionHeader
            eyebrow={profile.about.eyebrow}
            title={profile.about.title}
            description={profile.about.description}
          />
          <div className="asset-panel mt-8 h-64 rounded-lg p-4 sm:h-80">
            <ShieldCloud />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.about.specialties.map((item, index) => (
            <Card key={item.title} className={index % 2 === 0 ? "slide-from-left" : "slide-from-right"}>
              <div className="grid h-12 w-12 place-items-center rounded-lg border border-blue-muted/30 bg-indigo-700/15 text-blue-muted">
                <FontAwesomeIcon icon={iconMap[item.icon]} className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-text-primary [overflow-wrap:anywhere]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary [overflow-wrap:anywhere]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
