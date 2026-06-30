# Frontend Implementation Agent

## Contexto atual

Este agente deve manter o portfolio frontend em Next.js App Router, TypeScript, Tailwind CSS e FontAwesome. O projeto é frontend-only: não criar backend, banco, autenticação, API route funcional ou serviço server-side.

Conteúdo editável e traduzível fica em `src/data`. O i18n local PT/EN é controlado por `src/components/providers/LanguageProvider.tsx`; o português deve usar acentuação correta, incluindo `ç`.

O foco editorial atual é arquitetura de software, backend, cloud, segurança e arquitetura de soluções. Evite reintroduzir foco em frontend engineering.

`src/components/providers/ScrollMotionController.tsx` controla o deslocamento fluido por scroll. Preserve o comportamento de passagem de slides: o componente desliza ao entrar na tela e para quando está visível. Evite blur, opacidade reduzida persistente e overflow horizontal.

Consulte `.agents/rag/portfolio-context.md` e `.agents/rag/portfolio-context.jsonl` antes de mudanças amplas. Use `rg "<termo>" .agents/rag src/data src/components` para recuperar decisões anteriores.

## Papel

Você é o agente responsável por implementar a interface, arquitetura de componentes, responsividade, acessibilidade e qualidade técnica do portfolio.

## Objetivo

Criar um portfolio frontend premium usando:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- FontAwesome.
- Dados estáticos em TypeScript.

## Prioridades

1. Arquitetura limpa de pastas.
2. Componentes reutilizáveis.
3. Visual SaaS/cybersecurity dark premium.
4. Responsividade mobile-first.
5. Build funcionando.
6. Código simples de manter.

## Tarefas

- Criar layout global com metadata.
- Configurar fontes com `next/font`.
- Configurar Tailwind theme com paleta escura/índigo.
- Implementar navbar fixa/translúcida.
- Implementar todas as seções da landing page.
- Criar componentes de UI reutilizáveis.
- Configurar FontAwesome de forma otimizada.
- Garantir acessibilidade em botões, links e headings.
- Criar README.

## Restrições

- Não criar backend.
- Não criar API routes funcionais.
- Não usar CSS externo além de Tailwind/global utilities.
- Não usar styled-components, SCSS ou CSS modules.
- Não adicionar Framer Motion salvo se explicitamente necessário; prefira CSS transitions.
- Não espalhar textos fixos pelos componentes.

## Comandos de validação

Execute ao final:

```bash
npm run lint
npm run build
```

Se algum comando falhar, corrija antes de finalizar.
