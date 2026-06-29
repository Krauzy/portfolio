export const projectsByLocale = {
  pt: [
    {
      name: "order-flow-platform",
      description:
        "Estudo de arquitetura de plataforma e soluções cloud para fluxo de pedidos.",
      stack: ["Java", "Spring Boot", "Arquitetura cloud", "API Gateway", "Terraform"],
      impact:
        "Demonstra desenho de serviços, contratos de API, segurança e caminhos de deploy para uma plataforma distribuída.",
      links: [
        { label: "GitHub", href: "https://github.com/Krauzy/order-flow-platform" }
      ]
    },
    {
      name: "noizy",
      description:
        "Plataforma fullstack de streaming de música com workflows inspirados em produtos reais, sem usar marcas ou assets protegidos.",
      stack: ["Kotlin", "Angular", "Kafka", "Eventos", "Streaming"],
      impact:
        "Evidencia arquitetura de produto, eventos, domínios de streaming, backend Kotlin e integrações orientadas a mensagens.",
      links: [{ label: "GitHub", href: "https://github.com/Krauzy/noizy" }]
    },
    {
      name: "mt-rabbit",
      description:
        "Exemplo de publicação e consumo de filas e exchanges com RabbitMQ e MassTransit.",
      stack: ["C#", ".NET", "RabbitMQ", "MassTransit", "Mensageria"],
      impact:
        "Foca em mensageria, produtores, consumidores, exchanges e padrões de comunicação assíncrona.",
      links: [{ label: "GitHub", href: "https://github.com/Krauzy/mt-rabbit" }]
    },
    {
      name: "Warn",
      description:
        "Projeto web e mobile usando Java Spring Boot, Java Android, PostgreSQL e APIs REST.",
      stack: ["Java", "Spring Boot", "REST API", "PostgreSQL", "Android"],
      impact:
        "Mostra integração entre backend, mobile, persistência relacional e exposição de APIs para produto multiplataforma.",
      links: [{ label: "GitHub", href: "https://github.com/Krauzy/Warn" }]
    }
  ],
  en: [
    {
      name: "order-flow-platform",
      description:
        "A platform architecture and cloud solutions study case for order-flow systems.",
      stack: ["Java", "Spring Boot", "Cloud Architecture", "API Gateway", "Terraform"],
      impact:
        "Shows service design, API contracts, security and deployment paths for a distributed platform.",
      links: [
        { label: "GitHub", href: "https://github.com/Krauzy/order-flow-platform" }
      ]
    },
    {
      name: "noizy",
      description:
        "A fullstack music streaming platform inspired by common product workflows without protected brands or assets.",
      stack: ["Kotlin", "Angular", "Kafka", "Event-driven", "Streaming"],
      impact:
        "Highlights product architecture, events, streaming domains, Kotlin backend work and message-driven integrations.",
      links: [{ label: "GitHub", href: "https://github.com/Krauzy/noizy" }]
    },
    {
      name: "mt-rabbit",
      description:
        "A sample for publishing and consuming queues and exchanges with RabbitMQ and MassTransit.",
      stack: ["C#", ".NET", "RabbitMQ", "MassTransit", "Messaging"],
      impact:
        "Focuses on messaging, producers, consumers, exchanges and asynchronous communication patterns.",
      links: [{ label: "GitHub", href: "https://github.com/Krauzy/mt-rabbit" }]
    },
    {
      name: "Warn",
      description:
        "A web and mobile project using Java Spring Boot, Java Android, PostgreSQL and REST APIs.",
      stack: ["Java", "Spring Boot", "REST API", "PostgreSQL", "Android"],
      impact:
        "Shows integration between backend, mobile, relational persistence and API exposure for a multiplatform product.",
      links: [{ label: "GitHub", href: "https://github.com/Krauzy/Warn" }]
    }
  ]
} as const;
