# AGENTS.md - Portfolio Frontend Agent Rules

## Missão

Manter e evoluir um portfolio frontend em Next.js com estética SaaS/cybersecurity premium: dark UI, azul intenso, cards glassmorphism, dashboards abstratos e foco em arquitetura de software, backend, cloud e arquitetura de soluções.

## Regras globais

- O projeto é exclusivamente frontend.
- Não criar backend, banco, autenticação, API route funcional ou serviços server-side.
- Usar Next.js App Router, TypeScript e Tailwind CSS.
- Usar FontAwesome para ícones comuns.
- Criar assets customizados em SVG/TSX/CSS quando necessário.
- Centralizar conteúdo editável em `src/data`.
- Preservar i18n local PT/EN em `src/data` e permitir acentuação correta no português.
- Priorizar componentes pequenos, previsíveis e reutilizáveis.
- Não copiar imagens, textos ou composição literal de referências externas.
- Não reintroduzir `PROMPT.md`; o contexto operacional fica nos arquivos de agente e no RAG local.

## Padrões técnicos

- Server Components por padrão.
- Client Components somente quando houver interatividade real, como troca de idioma ou animação por scroll.
- `src/lib/cn.ts` para composição de classes.
- Componentes de seção em `src/components/sections`.
- Componentes genéricos em `src/components/ui`.
- Providers/client controllers em `src/components/providers`.
- Dados em `src/data`.
- Assets vetoriais como componentes React em `src/assets/svg`.
- Assets públicos estáticos em `public`.

## Contexto atual do produto

- Perfil: Caio Kraut, software engineering com foco em arquitetura, backend, cloud, soluções e segurança.
- Idiomas: português como padrão e inglês alternável via botão na navbar.
- Projetos destacados: repositórios públicos reais do GitHub `Krauzy`.
- Architecture showcase: caso event-driven de processamento de pedidos com eventos de domínio.
- Motion: `ScrollMotionController` aplica deslocamento fluido por scroll e para o componente quando ele entra na tela.
- Icon page: `public/icon.svg` injetado via `metadata.icons`.

## RAG local

Antes de mudanças amplas, consulte:

- `.agents/rag/portfolio-context.md`: índice humano com decisões, arquivos, comandos e palavras-chave.
- `.agents/rag/portfolio-context.jsonl`: chunks curtos para busca textual por `rg`.

Use `rg "<termo>" .agents/rag src/data src/components` para recuperar contexto antes de alterar comportamento existente.

## Qualidade visual

- Fundo `#020207` com gradientes radiais discretos.
- Cards com bordas translúcidas, blur e sombras azuladas.
- Microinterações sóbrias.
- Responsividade mobile-first.
- Headings fortes com fonte display.
- Layout com respiro visual, sem espaçamentos artificiais entre seções.

## Critérios de aceite

- `npm run lint` passa.
- `npm run build` passa.
- TypeScript sem erros.
- Layout responsivo.
- Acessibilidade básica respeitada.
- README atualizado quando houver mudança operacional.
- Sem backend.
- Sem assets proprietários copiados.
