"use client";

import { ArchitectureDiagram } from "@/assets/svg/ArchitectureDiagram";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/components/providers/LanguageProvider";

export function ArchitectureSection() {
  const { content } = useI18n();
  const { profile } = content;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="slide-on-scroll slide-from-left slide-range-soft">
          <SectionHeader
            eyebrow={profile.architecture.eyebrow}
            title={profile.architecture.title}
            description={profile.architecture.description}
          />
          <div className="mt-8">
            <Button href={profile.architecture.cta.href} variant="secondary" icon="arrowRight">
              {profile.architecture.cta.label}
            </Button>
          </div>
        </div>
        <Card className="asset-panel slide-from-right slide-range-soft h-[420px] p-2 sm:h-[520px]">
          <ArchitectureDiagram
            ariaLabel={profile.architecture.diagramLabel}
            nodes={profile.architecture.nodes}
          />
        </Card>
      </div>
    </section>
  );
}
