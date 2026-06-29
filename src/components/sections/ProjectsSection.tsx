"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MetricRadar } from "@/assets/svg/MetricRadar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/components/providers/LanguageProvider";
import { iconMap } from "@/lib/icons";

export function ProjectsSection() {
  const { content } = useI18n();
  const { profile, projects } = content;

  return (
    <section id="projetos" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow={profile.sections.projects.eyebrow}
            title={profile.sections.projects.title}
            description={profile.sections.projects.description}
          />
          <div className="asset-panel slide-on-scroll slide-from-right h-56 rounded-lg p-4">
            <MetricRadar />
          </div>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className={`overflow-hidden p-0 ${index % 2 === 0 ? "slide-from-left" : "slide-from-right"}`}
            >
              <div className="grid gap-0 md:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-64 border-b border-white/10 bg-surface-deep p-5 md:border-b-0 md:border-r">
                  <ProjectVisual index={index} statusLabel={profile.sections.projects.statusLabel} />
                </div>
                <div className="p-6">
                  <Badge>{profile.sections.projects.cardLabel} 0{index + 1}</Badge>
                  <h3 className="mt-5 font-display text-2xl font-bold text-text-primary [overflow-wrap:anywhere]">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-text-secondary [overflow-wrap:anywhere]">
                    {project.description}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-text-muted [overflow-wrap:anywhere]">
                    {project.impact}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-text-secondary [overflow-wrap:anywhere]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-text-primary transition hover:text-blue-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-muted"
                      >
                        {link.label}
                        <FontAwesomeIcon icon={iconMap.arrowRight} className="h-3 w-3" aria-hidden />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ index, statusLabel }: { index: number; statusLabel: string }) {
  const bars = [
    ["w-3/4", "w-1/2", "w-5/6"],
    ["w-2/3", "w-4/5", "w-1/2"],
    ["w-5/6", "w-2/5", "w-3/4"],
    ["w-1/2", "w-5/6", "w-2/3"]
  ][index % 4];

  return (
    <div className="absolute inset-5 overflow-hidden rounded-lg border border-white/10 bg-background/70 p-4 shadow-inner-glow">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-accent-warm" />
          <span className="h-2.5 w-2.5 rounded-full bg-blue-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-secondary/70" />
        </div>
        <span className="rounded-full border border-blue-muted/35 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-text-muted [overflow-wrap:anywhere]">
          {statusLabel}
        </span>
      </div>
      <div className="mt-8 grid gap-3">
        {bars.map((bar, itemIndex) => (
          <div key={bar} className="space-y-2">
            <div className={`${bar} h-2 rounded-full bg-blue-muted/60`} />
            <div className="h-2 w-full rounded-full bg-white/[0.06]">
              <div
                className="h-2 rounded-full bg-indigo-700/80"
                style={{ width: `${48 + itemIndex * 18}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-16 rounded-lg border border-white/10 bg-white/[0.04]" />
        ))}
      </div>
    </div>
  );
}
