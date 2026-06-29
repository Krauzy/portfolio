export const experienceByLocale = {
  pt: [
    {
      role: "Software Engineer",
      company: "Backend, Cloud & Architecture",
      period: "Atual",
      summary:
        "Atuação focada em arquitetura de software, sistemas backend e plataformas cloud-native com ênfase em confiabilidade e evolução sustentável.",
      highlights: [
        "Desenho de contratos, limites de domínio e integrações entre serviços.",
        "Arquiteturas orientadas a eventos com filas, brokers, consumidores e modelos de leitura.",
        "Decisões técnicas alinhadas à segurança, escala, custos e operação."
      ]
    },
    {
      role: "Backend Engineer",
      company: "Distributed Systems",
      period: "Anterior",
      summary:
        "Construção de APIs, serviços e integrações usando Java/Kotlin, Spring Boot, mensageria e persistência relacional.",
      highlights: [
        "Fluxos resilientes com idempotência, retries e comunicação assíncrona.",
        "Evolução de bases de código com testes, observabilidade e padrões simples.",
        "Colaboração entre produto e engenharia para transformar requisitos em entregas claras."
      ]
    },
    {
      role: "Solutions Architecture",
      company: "Cloud Platforms",
      period: "Base",
      summary:
        "Definição de soluções com foco em cloud, APIs, dados, segurança e operação de plataformas.",
      highlights: [
        "Mapeamento de requisitos em componentes, integrações e responsabilidades.",
        "Escolha pragmática de tecnologias conforme risco, maturidade e custo.",
        "Documentação de decisões arquiteturais e tradeoffs para evolução do sistema."
      ]
    }
  ],
  en: [
    {
      role: "Software Engineer",
      company: "Backend, Cloud & Architecture",
      period: "Current",
      summary:
        "Work focused on software architecture, backend systems and cloud-native platforms with emphasis on reliability and sustainable evolution.",
      highlights: [
        "Design of contracts, domain boundaries and service integrations.",
        "Event-driven architectures with queues, brokers, consumers and read models.",
        "Technical decisions aligned with security, scale, cost and operations."
      ]
    },
    {
      role: "Backend Engineer",
      company: "Distributed Systems",
      period: "Previous",
      summary:
        "Building APIs, services and integrations with Java/Kotlin, Spring Boot, messaging and relational persistence.",
      highlights: [
        "Resilient flows with idempotency, retries and asynchronous communication.",
        "Codebase evolution with tests, observability and simple patterns.",
        "Product and engineering collaboration to turn requirements into clear delivery increments."
      ]
    },
    {
      role: "Solutions Architecture",
      company: "Cloud Platforms",
      period: "Foundation",
      summary:
        "Solution design focused on cloud, APIs, data, security and platform operations.",
      highlights: [
        "Mapping requirements into components, integrations and responsibilities.",
        "Pragmatic technology choices based on risk, maturity and cost.",
        "Architecture decision records and tradeoff documentation for system evolution."
      ]
    }
  ]
} as const;
