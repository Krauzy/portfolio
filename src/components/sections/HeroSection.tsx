"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CodeTerminal } from "@/assets/svg/CodeTerminal";
import { NetworkOrb } from "@/assets/svg/NetworkOrb";
import { Button } from "@/components/ui/Button";
import { Glow } from "@/components/ui/Glow";
import { MetricCard } from "@/components/ui/MetricCard";
import { useI18n } from "@/components/providers/LanguageProvider";
import { iconMap } from "@/lib/icons";

export function HeroSection() {
  const { content } = useI18n();
  const { profile } = content;

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40"
    >
      <Glow className="left-1/2 top-16 h-72 w-72 -translate-x-1/2" />
      <div className="absolute inset-0 -z-20 bg-cyber-radial" aria-hidden />
      <div
        className="absolute inset-0 -z-20 bg-grid-lines bg-[length:64px_64px] opacity-[0.12]"
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div className="slide-on-scroll slide-from-left slide-range-soft min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-muted/35 bg-white/[0.05] px-4 py-2 text-sm text-text-secondary shadow-inner-glow">
            <FontAwesomeIcon icon={iconMap.shield} className="h-4 w-4 text-blue-muted" aria-hidden />
            {profile.hero.eyebrow}
          </div>
          <h1 className="mt-7 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] text-text-primary [overflow-wrap:anywhere] sm:text-6xl lg:text-7xl">
            {profile.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-text-secondary [overflow-wrap:anywhere] sm:text-lg">
            {profile.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={profile.hero.primaryCta.href} icon="arrowRight" className="w-full sm:w-auto">
              {profile.hero.primaryCta.label}
            </Button>
            <Button href={profile.hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {profile.hero.secondaryCta.label}
            </Button>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {profile.metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
        <div className="slide-on-scroll slide-from-right slide-range-soft relative grid min-w-0 gap-4 lg:gap-5">
          <div className="glass-card asset-panel relative min-h-[360px] overflow-hidden rounded-lg p-4 shadow-glow sm:min-h-[480px]">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(20,27,212,0.18),transparent_56%)]"
              aria-hidden
            />
            <div className="relative mx-auto h-[330px] max-w-[470px] animate-float sm:h-[430px]">
              <NetworkOrb />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card asset-panel h-44 rounded-lg p-2">
              <CodeTerminal />
            </div>
            <div className="glass-card slide-on-scroll slide-from-right flex h-44 min-w-0 flex-col justify-between rounded-lg p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
                {profile.hero.signal.label}
              </p>
              <div>
                <p className="font-display text-3xl font-bold text-text-primary [overflow-wrap:anywhere]">
                  {profile.hero.signal.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-text-secondary [overflow-wrap:anywhere]">
                  {profile.hero.signal.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
