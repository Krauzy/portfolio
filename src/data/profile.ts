import type { IconKey } from "@/lib/icons";

export const profileMeta = {
  name: "Caio Kraut",
  handle: "Krauzy",
  role: "Software Engineer",
  location: "Brazil",
  email: "your.email@example.com",
  github: "https://www.github.com/Krauzy",
  linkedin: "https://www.linkedin.com/in/caio-kraut/",
  summary:
    "Software engineer focused on software architecture, backend systems, cloud-native platforms and solution architecture."
};

export const profileByLocale = {
  pt: {
    ...profileMeta,
    accessibility: {
      primaryNavigation: "Navegação principal",
      home: "Início",
      techStack: "Stack de tecnologias"
    },
    navItems: [
      { label: "Sobre", href: "#sobre" },
      { label: "Competências", href: "#skills" },
      { label: "Projetos", href: "#projetos" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Contato", href: "#contato" }
    ],
    hero: {
      eyebrow: "Portfolio / Arquitetura de Software",
      title:
        "Olá, eu sou Caio Kraut. Projeto arquiteturas seguras para backend, cloud e soluções digitais.",
      description:
        "Atuo na construção de plataformas backend, arquiteturas orientadas a eventos, sistemas cloud-native e soluções escaláveis com Java, Kotlin, TypeScript, AWS e boas práticas de engenharia.",
      primaryCta: { label: "Ver projetos", href: "#projetos" },
      secondaryCta: { label: "Entrar em contato", href: "mailto:your.email@example.com" },
      signal: {
        label: "Sinal",
        value: "99.9",
        detail: "Mentalidade de confiabilidade aplicada à arquitetura, backend e cloud."
      }
    },
    metrics: [
      { label: "Foco de engenharia", value: "Arquitetura", detail: "Cloud, API, Security" },
      { label: "Stacks principais", value: "6+", detail: "Backend, cloud, soluções" },
      { label: "Modo arquitetural", value: "EDA", detail: "Eventos, serviços, dados" }
    ],
    techStack: [
      "Java",
      "Kotlin",
      "Spring Boot",
      "Quarkus",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "PostgreSQL",
      "RabbitMQ",
      "Kafka",
      "SQS"
    ],
    about: {
      eyebrow: "Perfil de engenharia",
      title: "Arquitetura, backend e cloud com foco em produtos escaláveis.",
      description:
        "Meu trabalho conecta decisão arquitetural e execução: definição de domínios, contratos de API, integrações assíncronas, infraestrutura cloud e operação confiável.",
      specialties: [
        {
          title: "Arquitetura backend",
          description:
            "Bounded contexts, contratos REST, modelagem de domínio e serviços sustentáveis.",
          icon: "server" as IconKey
        },
        {
          title: "Sistemas cloud-native",
          description:
            "Servicos preparados para cloud, containers, IaC e maturidade operacional.",
          icon: "cloud" as IconKey
        },
        {
          title: "Arquitetura event-driven",
          description:
            "Filas, brokers, eventos de domínio, idempotência, retries e consumidores assíncronos.",
          icon: "network" as IconKey
        },
        {
          title: "Arquitetura de soluções",
          description:
            "Desenho de tradeoffs entre produto, segurança, escala, custos e evolução técnica.",
          icon: "diagram" as IconKey
        }
      ]
    },
    sections: {
      skills: {
        eyebrow: "Matriz de competências",
        title: "Capacidades organizadas por arquitetura e operação.",
        description:
          "Um mapa prático das tecnologias, padrões e disciplinas que uso para transformar requisitos em plataformas confiáveis."
      },
      projects: {
        eyebrow: "Projetos em destaque",
        cardLabel: "Projeto",
        statusLabel: "Repositório",
        title: "Projetos reais do GitHub com sinais de arquitetura e backend.",
        description:
          "Entradas baseadas em repositórios públicos reais, com foco em cloud, backend, mensageria, APIs e desenho de soluções."
      },
      experience: {
        eyebrow: "Trajetória técnica",
        title: "Experiência orientada a impacto técnico e arquitetura.",
        description:
          "Esta seção resume os focos de atuação, destacando arquitetura de software, backend, cloud, sistemas distribuídos e decisões técnicas por fase da trajetória."
      }
    },
    architecture: {
      eyebrow: "Caso de arquitetura",
      title: "Caso event-driven: processamento de pedidos com eventos de domínio.",
      diagramLabel: "Diagrama visual de arquitetura orientada a eventos",
      description:
        "Representação visual de um fluxo em que comandos entram pela API, serviços publicam eventos, consumidores processam integrações assíncronas e modelos de leitura mantêm consultas rápidas e observáveis.",
      cta: { label: "Discutir arquitetura", href: "#contato" },
      nodes: [
        { label: "Client Apps", tone: "primary" },
        { label: "API Gateway", tone: "secondary" },
        { label: "Command API", tone: "primary" },
        { label: "Event Broker", tone: "warm" },
        { label: "Consumers", tone: "secondary" },
        { label: "Read Model", tone: "primary" }
      ]
    },
    contact: {
      eyebrow: "Contato",
      title: "Tem um desafio de arquitetura, backend ou cloud?",
      description:
        "Entre em contato para discutir arquitetura de software, sistemas backend, plataformas cloud-native ou desenho de soluções.",
      primaryCta: { label: "Enviar email", href: "mailto:your.email@example.com" },
      secondaryCta: { label: "Ver GitHub", href: "https://www.github.com/Krauzy" }
    },
    footer: {
      note: "Construído com Next.js, TypeScript e Tailwind CSS.",
      credits: "Portfolio com i18n local e conteúdo editável."
    },
    language: {
      label: "Alterar idioma",
      next: "EN"
    }
  },
  en: {
    ...profileMeta,
    accessibility: {
      primaryNavigation: "Primary navigation",
      home: "Home",
      techStack: "Technology stack"
    },
    navItems: [
      { label: "About", href: "#sobre" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projetos" },
      { label: "Experience", href: "#experiencia" },
      { label: "Contact", href: "#contato" }
    ],
    hero: {
      eyebrow: "Portfolio / Software Architecture",
      title:
        "Hi, I am Caio Kraut. I design secure architectures for backend, cloud and digital solutions.",
      description:
        "I build backend platforms, event-driven architectures, cloud-native systems and scalable solutions with Java, Kotlin, TypeScript, AWS and strong engineering practices.",
      primaryCta: { label: "View projects", href: "#projetos" },
      secondaryCta: { label: "Get in touch", href: "mailto:your.email@example.com" },
      signal: {
        label: "Signal",
        value: "99.9",
        detail: "Reliability mindset applied to architecture, backend and cloud."
      }
    },
    metrics: [
      { label: "Engineering focus", value: "Architecture", detail: "Cloud, API, Security" },
      { label: "Core stacks", value: "6+", detail: "Backend, cloud, solutions" },
      { label: "Architecture modes", value: "EDA", detail: "Events, services, data" }
    ],
    techStack: [
      "Java",
      "Kotlin",
      "Spring Boot",
      "Quarkus",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "PostgreSQL",
      "RabbitMQ",
      "Kafka",
      "SQS"
    ],
    about: {
      eyebrow: "Engineering profile",
      title: "Architecture, backend and cloud for scalable products.",
      description:
        "My work connects architectural decisions and delivery: domain boundaries, API contracts, async integrations, cloud infrastructure and reliable operations.",
      specialties: [
        {
          title: "Backend architecture",
          description:
            "Bounded contexts, REST contracts, domain modeling and sustainable service design.",
          icon: "server" as IconKey
        },
        {
          title: "Cloud-native systems",
          description:
            "Cloud-ready workloads, containers, infrastructure as code and operational maturity.",
          icon: "cloud" as IconKey
        },
        {
          title: "Event-driven architecture",
          description:
            "Queues, brokers, domain events, idempotency, retries and asynchronous consumers.",
          icon: "network" as IconKey
        },
        {
          title: "Solutions architecture",
          description:
            "Tradeoff design across product, security, scale, cost and technical evolution.",
          icon: "diagram" as IconKey
        }
      ]
    },
    sections: {
      skills: {
        eyebrow: "Skills matrix",
        title: "Capabilities grouped by architecture and operations.",
        description:
          "A practical map of the technologies, patterns and disciplines I use to turn requirements into reliable platforms."
      },
      projects: {
        eyebrow: "Featured projects",
        cardLabel: "Project",
        statusLabel: "Repository",
        title: "Real GitHub projects with architecture and backend signals.",
        description:
          "Entries based on public repositories, focused on cloud, backend, messaging, APIs and solution design."
      },
      experience: {
        eyebrow: "Experience timeline",
        title: "Experience centered on technical impact and architecture.",
        description:
          "Use this section to detail outcomes, architecture decisions, technical leadership and system operations."
      }
    },
    architecture: {
      eyebrow: "Architecture showcase",
      title: "Event-driven case: order processing with domain events.",
      diagramLabel: "Visual diagram of an event-driven architecture",
      description:
        "Visual representation of a flow where commands enter through an API, services publish events, consumers process asynchronous integrations and read models keep queries fast and observable.",
      cta: { label: "Discuss architecture", href: "#contato" },
      nodes: [
        { label: "Client Apps", tone: "primary" },
        { label: "API Gateway", tone: "secondary" },
        { label: "Command API", tone: "primary" },
        { label: "Event Broker", tone: "warm" },
        { label: "Consumers", tone: "secondary" },
        { label: "Read Model", tone: "primary" }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Have an architecture, backend or cloud challenge?",
      description:
        "Reach out to discuss software architecture, backend systems, cloud-native platforms or solution design.",
      primaryCta: { label: "Send email", href: "mailto:your.email@example.com" },
      secondaryCta: { label: "View GitHub", href: "https://www.github.com/Krauzy" }
    },
    footer: {
      note: "Built with Next.js, TypeScript and Tailwind CSS.",
      credits: "Portfolio with local i18n and editable content."
    },
    language: {
      label: "Change language",
      next: "PT"
    }
  }
} as const;

export const socials: Array<{ label: string; href: string; icon: IconKey }> = [
  { label: "GitHub", href: profileMeta.github, icon: "github" },
  { label: "LinkedIn", href: profileMeta.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profileMeta.email}`, icon: "email" }
];
