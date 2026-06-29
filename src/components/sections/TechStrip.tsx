"use client";

import { useI18n } from "@/components/providers/LanguageProvider";

export function TechStrip() {
  const { content } = useI18n();
  const { profile } = content;

  return (
    <section
      aria-label={profile.accessibility.techStack}
      className="border-y border-white/10 bg-white/[0.025] px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
        {profile.techStack.map((tech) => (
          <span
            key={tech}
            className="slide-on-scroll slide-from-bottom rounded-full border border-white/10 bg-surface-deep/80 px-4 py-2 text-sm font-medium text-text-secondary shadow-inner-glow [overflow-wrap:anywhere]"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
