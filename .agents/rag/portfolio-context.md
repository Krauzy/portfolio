# Portfolio Context RAG

Use este arquivo como índice de recuperação de contexto para futuras sessões. Ele substitui o antigo `PROMPT.md` como fonte operacional de contexto do projeto.

## Identidade do projeto

- Repositório: `portfolio`.
- Tipo: frontend-only.
- Stack: Next.js App Router, TypeScript, Tailwind CSS, FontAwesome.
- Objetivo visual: portfolio premium dark UI inspirado em SaaS/cybersecurity, sem copiar composições externas.
- Persona do conteúdo: Caio Kraut, foco em arquitetura de software, backend, cloud, segurança e arquitetura de soluções.

## Regras persistentes

- Não criar backend, banco, autenticação, API routes funcionais ou serviços server-side.
- Centralizar conteúdo editável em `src/data`.
- Preservar i18n PT/EN e usar português com acentuação correta.
- Não usar imagens proprietárias ou copiadas de referências.
- Validar com `npm run lint` e `npm run build`.

## Arquivos principais

- `src/app/layout.tsx`: metadata, fontes, FontAwesome CSS, providers, navbar/footer e icon metadata.
- `src/app/page.tsx`: ordem das seções da landing page.
- `src/app/globals.css`: tokens globais, glass cards, animações SVG e transform por scroll.
- `src/components/providers/LanguageProvider.tsx`: estado do idioma, localStorage e `document.documentElement.lang`.
- `src/components/providers/ScrollMotionController.tsx`: deslocamento fluido por scroll com ponto de parada quando o componente entra na tela.
- `src/data/profile.ts`: textos de perfil, nav, hero, métricas, seções, arquitetura, contato e footer.
- `src/data/projects.ts`: featured projects com repositórios públicos reais do GitHub.
- `src/data/skills.ts`: matriz de competências.
- `src/data/experience.ts`: trajetória técnica.
- `public/icon.svg`: ícone da página.

## Decisões de conteúdo

- Hero em PT apresenta Caio Kraut e arquitetura segura para backend, cloud e soluções digitais.
- Engineering Focus deve permanecer como `Arquitetura`/`Architecture`, com detalhe `Cloud, API, Security`.
- Conteúdo deve evitar foco em frontend engineering e priorizar backend, cloud, arquitetura de software e arquitetura de soluções.
- Architecture showcase deve usar caso event-driven de processamento de pedidos com eventos de domínio.
- Featured Projects usa projetos reais: `order-flow-platform`, `noizy`, `mt-rabbit`, `Warn`.
- Trajetória técnica explica os focos de atuação da seção, por fase: arquitetura, backend, cloud, sistemas distribuídos e decisões técnicas.

## Decisões de motion

- Motion deve parecer passagem de slides: componente se desloca enquanto entra e para quando está visível.
- `ScrollMotionController` calcula `entryStart`, `entryStop`, `entryProgress` e `travel`.
- Mobile zera movimento horizontal e rotação para evitar overflow.
- Contato e footer não devem receber motion que altere blur, opacidade ou transform.
- Não reintroduzir `animation-timeline` se o efeito pedido for dependente de progresso de scroll com parada.

## Deploy e qualidade

- `npm run lint` usa ESLint.
- `npm run build` usa Next build.
- Em Windows, pare `next dev` antes do build se houver lock em `.next`.

## Palavras-chave para busca

- i18n, português, acentuação, LanguageProvider, locale, PT, EN.
- scroll, slide, passagem de slides, ScrollMotionController, entryStop, overflow.
- architecture showcase, event-driven, eventos de domínio, ArchitectureDiagram.
- featured projects, GitHub real, order-flow-platform, noizy, mt-rabbit, Warn.
- icon page, favicon, `public/icon.svg`, metadata icons.
