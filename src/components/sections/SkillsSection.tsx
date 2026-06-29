"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/components/providers/LanguageProvider";
import { iconMap } from "@/lib/icons";

export function SkillsSection() {
  const { content } = useI18n();
  const { profile, skills } = content;

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-muted/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={profile.sections.skills.eyebrow}
          title={profile.sections.skills.title}
          description={profile.sections.skills.description}
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <Card key={group.category} className={index % 2 === 0 ? "slide-from-left" : "slide-from-right"}>
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-blue-muted/30 bg-indigo-700/15 text-blue-muted">
                  <FontAwesomeIcon icon={iconMap[group.icon]} className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary [overflow-wrap:anywhere]">
                  {group.category}
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-text-secondary [overflow-wrap:anywhere]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
