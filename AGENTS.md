# AGENTS.md — Portfolio Frontend Agent Rules

## Missão

Construir um portfolio frontend em Next.js inspirado em uma estética SaaS/cybersecurity premium: dark UI, azul intenso, cards glassmorphism, dashboards abstratos e foco em engenharia de software.

## Regras globais

- O projeto é exclusivamente frontend.
- Não criar backend, banco, autenticação, API route funcional ou serviços server-side.
- Usar Next.js App Router, TypeScript e Tailwind CSS.
- Usar FontAwesome para ícones comuns.
- Criar assets customizados em SVG/TSX/CSS quando necessário.
- Centralizar conteúdo editável em `src/data`.
- Priorizar componentes pequenos, previsíveis e reutilizáveis.
- Não copiar imagens, textos ou composição literal de referências externas.

## Padrões técnicos

- Server Components por padrão.
- Client Components somente quando houver interatividade real.
- `src/lib/cn.ts` para composição de classes.
- Componentes de seção em `src/components/sections`.
- Componentes genéricos em `src/components/ui`.
- Dados em `src/data`.
- Assets vetoriais como componentes React em `src/assets/svg`.

## Qualidade visual

- Fundo `#020207` com gradientes radiais discretos.
- Cards com bordas translúcidas, blur e sombras azuladas.
- Microinterações sóbrias.
- Responsividade mobile-first.
- Headings fortes com fonte display.
- Layout com bastante respiro visual.

## Critérios de aceite

- `npm run build` passa.
- TypeScript sem erros.
- Layout responsivo.
- Acessibilidade básica respeitada.
- README criado.
- Sem backend.
- Sem assets proprietários copiados.
