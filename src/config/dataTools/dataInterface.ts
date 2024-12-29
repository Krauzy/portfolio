import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default interface DataLocale {
  title: string;
  menu: {
    home: string;
    about: string;
    articles: string;
    tools: string;
  },
  helloMessage: {
    morning: string;
    afternoon: string;
    night: string;
    explainingMessage: (value: string) => string;
  },
  openingMessage: string;
  secondaryOpeningMessage: string;
  warningOpeningMessage: string;
  resume: {
    about: {
      title: string;
      description: string[];
    },
    do: {
      title: string;
      languages: {
        logo: IconProp;
        name: string;
        color: string;
      }[];
      metrics: {
        title: string;
        value: number;
      }[],
      warningMetricMessage: string;
    },
    done: {
      title: string;
      timeline: {
        logo: string;
        title: string;
        tiers: {
          description: string;
          beginDate: Date;
          endDate?: Date;
          actualMessage?: string;
          topics: string[];
        }[];
      }[];
    },
    creations: {
      title: string;
      repos: {
        title: string;
        description: string;
        language: string;
        languageColor: string;
        branches?: number;
        stars?: number;
        link: string;
      }[];
    },
    footer: {
      title: string;
      description: string;
      location: string;
      socialMedias: {
        logo: IconProp;
        color: string;
        link: string;
      }[],
      assignment: string;
      photo: string;
      endMessage: string;
    }
  },
  tools: {
    title: string;
    description: string;
    categoryTitle: string;
    anchorDescription: string;
    dateDescription: string;
    backMessage: string;
    categoryTypeList: {
      name: string;
      index: number;
    }[];
    categoryTools: {
      title: string;
      subtitle: string;
      description: string;
      foreColor: string;
      backgroundColor: string;
      icon: IconProp;
      slug: string;
      categories: number[];
      link: string;
      date: Date;
    }[];
  },
  about: {
    title: string;
    subtitle: string;
    finalWarning: string;
    ip: string;
    browser: string;
    browserVersion: string;
    os: string;
    networkProvider: string;
    timeZone: string;
    location: string;
    resolution: string;
    screen: string;
    language: string;
    cookies: string;
    processors: string;
    javascript: string;
    silverLight: string;
    flash: string;
    adBlocker: string;
  }
}
