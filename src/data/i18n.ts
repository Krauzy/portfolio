import { experienceByLocale } from "@/data/experience";
import { profileByLocale, profileMeta, socials } from "@/data/profile";
import { projectsByLocale } from "@/data/projects";
import { skillsByLocale } from "@/data/skills";

export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN"
};

export const content = {
  pt: {
    profile: profileByLocale.pt,
    projects: projectsByLocale.pt,
    skills: skillsByLocale.pt,
    experience: experienceByLocale.pt
  },
  en: {
    profile: profileByLocale.en,
    projects: projectsByLocale.en,
    skills: skillsByLocale.en,
    experience: experienceByLocale.en
  }
} as const;

export type SiteContent = (typeof content)[Locale];

export { profileMeta, socials };
