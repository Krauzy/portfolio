import type { IconKey } from "@/lib/icons";

export const skillsByLocale = {
  pt: [
    {
      category: "Arquitetura",
      icon: "diagram" as IconKey,
      items: ["Domain-driven design", "Desenho de solucoes", "Tradeoffs", "Security by design"]
    },
    {
      category: "Backend",
      icon: "server" as IconKey,
      items: ["Java", "Kotlin", "Spring Boot", "Quarkus", "REST APIs"]
    },
    {
      category: "Cloud & DevOps",
      icon: "cloud" as IconKey,
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      category: "Dados & Mensageria",
      icon: "database" as IconKey,
      items: ["PostgreSQL", "RabbitMQ", "Kafka", "SQS", "Arquitetura orientada a eventos"]
    },
    {
      category: "Observabilidade",
      icon: "eye" as IconKey,
      items: ["Metricas", "Traces", "Logs", "SLOs", "Revisao de incidentes"]
    },
    {
      category: "Qualidade de engenharia",
      icon: "shield" as IconKey,
      items: ["Estrategia de testes", "Contratos de API", "Confiabilidade", "Manutenibilidade"]
    }
  ],
  en: [
    {
      category: "Architecture",
      icon: "diagram" as IconKey,
      items: ["Domain-driven design", "Solution design", "Tradeoffs", "Security by design"]
    },
    {
      category: "Backend",
      icon: "server" as IconKey,
      items: ["Java", "Kotlin", "Spring Boot", "Quarkus", "REST APIs"]
    },
    {
      category: "Cloud & DevOps",
      icon: "cloud" as IconKey,
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      category: "Data & Messaging",
      icon: "database" as IconKey,
      items: ["PostgreSQL", "RabbitMQ", "Kafka", "SQS", "Event-driven design"]
    },
    {
      category: "Observability",
      icon: "eye" as IconKey,
      items: ["Metrics", "Tracing", "Logging", "SLOs", "Incident review"]
    },
    {
      category: "Engineering Quality",
      icon: "shield" as IconKey,
      items: ["Testing strategy", "API contracts", "Reliability", "Maintainability"]
    }
  ]
} as const;
