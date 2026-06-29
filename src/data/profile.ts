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
      primaryNavigation: "Navegacao principal",
      home: "Inicio",
      techStack: "Stack de tecnologias"
    },
    navItems: [
      { label: "Sobre", href: "#sobre" },
      { label: "Competencias", href: "#skills" },
      { label: "Projetos", href: "#projetos" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Contato", href: "#contato" }
    ],
    hero: {
      eyebrow: "Portfolio / Arquitetura de Software",
      title:
        "Ola, eu sou Caio Kraut. Projeto arquiteturas seguras para backend, cloud e solucoes digitais.",
      description:
        "Atuo na construcao de plataformas backend, arquiteturas orientadas a eventos, sistemas cloud-native e solucoes escalaveis com Java, Kotlin, TypeScript, AWS e boas praticas de engenharia.",
      primaryCta: { label: "Ver projetos", href: "#projetos" },
      secondaryCta: { label: "Entrar em contato", href: "mailto:your.email@example.com" },
      signal: {
        label: "Sinal",
        value: "99.9",
        detail: "Mentalidade de confiabilidade aplicada a arquitetura, backend e cloud."
      }
    },
    metrics: [
      { label: "Foco de engenharia", value: "Arquitetura", detail: "Cloud, API, Security" },
      { label: "Stacks principais", value: "6+", detail: "Backend, cloud, solucoes" },
      { label: "Modo arquitetural", value: "EDA", detail: "Eventos, servicos, dados" }
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
      title: "Arquitetura, backend e cloud com foco em produtos escalaveis.",
      description:
        "Meu trabalho conecta decisao arquitetural e execucao: definicao de dominios, contratos de API, integracoes assincronas, infraestrutura cloud e operacao confiavel.",
      specialties: [
        {
          title: "Arquitetura backend",
          description:
            "Bounded contexts, contratos REST, modelagem de dominio e servicos sustentaveis.",
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
            "Filas, brokers, eventos de dominio, idempotencia, retries e consumidores assincronos.",
          icon: "network" as IconKey
        },
        {
          title: "Arquitetura de solucoes",
          description:
            "Desenho de tradeoffs entre produto, seguranca, escala, custos e evolucao tecnica.",
          icon: "diagram" as IconKey
        }
      ]
    },
    sections: {
      skills: {
        eyebrow: "Matriz de competencias",
        title: "Capacidades organizadas por arquitetura e operacao.",
        description:
          "Um mapa pratico das tecnologias, padroes e disciplinas que uso para transformar requisitos em plataformas confiaveis."
      },
      projects: {
        eyebrow: "Projetos em destaque",
        cardLabel: "Projeto",
        statusLabel: "Repositorio",
        title: "Projetos reais do GitHub com sinais de arquitetura e backend.",
        description:
          "Entradas baseadas em repositorios publicos reais, com foco em cloud, backend, mensageria, APIs e desenho de solucoes."
      },
      experience: {
        eyebrow: "Trajetoria tecnica",
        title: "Experiencia orientada a impacto tecnico e arquitetura.",
        description:
          "Use esta secao para detalhar resultados, decisoes arquiteturais, lideranca tecnica e operacao de sistemas."
      }
    },
    architecture: {
      eyebrow: "Caso de arquitetura",
      title: "Caso event-driven: processamento de pedidos com eventos de dominio.",
      diagramLabel: "Diagrama visual de arquitetura orientada a eventos",
      description:
        "Representacao visual de um fluxo em que comandos entram pela API, servicos publicam eventos, consumidores processam integracoes assincronas e modelos de leitura mantem consultas rapidas e observaveis.",
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
        "Entre em contato para discutir arquitetura de software, sistemas backend, plataformas cloud-native ou desenho de solucoes.",
      primaryCta: { label: "Enviar email", href: "mailto:your.email@example.com" },
      secondaryCta: { label: "Ver GitHub", href: "https://www.github.com/Krauzy" }
    },
    footer: {
      note: "Construido com Next.js, TypeScript e Tailwind CSS.",
      credits: "Portfolio com i18n local e conteudo editavel."
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
