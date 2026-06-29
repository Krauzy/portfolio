export const experienceByLocale = {
  pt: [
    {
      role: "Software Engineer",
      company: "Backend, Cloud & Architecture",
      period: "Atual",
      summary:
        "Atuacao focada em arquitetura de software, sistemas backend e plataformas cloud-native com enfase em confiabilidade e evolucao sustentavel.",
      highlights: [
        "Desenho de contratos, limites de dominio e integracoes entre servicos.",
        "Arquiteturas orientadas a eventos com filas, brokers, consumidores e modelos de leitura.",
        "Decisoes tecnicas alinhadas a seguranca, escala, custos e operacao."
      ]
    },
    {
      role: "Backend Engineer",
      company: "Distributed Systems",
      period: "Anterior",
      summary:
        "Construcao de APIs, servicos e integracoes usando Java/Kotlin, Spring Boot, mensageria e persistencia relacional.",
      highlights: [
        "Fluxos resilientes com idempotencia, retries e comunicacao assincrona.",
        "Evolucao de bases de codigo com testes, observabilidade e padroes simples.",
        "Colaboracao entre produto e engenharia para transformar requisitos em entregas claras."
      ]
    },
    {
      role: "Solutions Architecture",
      company: "Cloud Platforms",
      period: "Base",
      summary:
        "Definicao de solucoes com foco em cloud, APIs, dados, seguranca e operacao de plataformas.",
      highlights: [
        "Mapeamento de requisitos em componentes, integracoes e responsabilidades.",
        "Escolha pragmatica de tecnologias conforme risco, maturidade e custo.",
        "Documentacao de decisoes arquiteturais e tradeoffs para evolucao do sistema."
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
