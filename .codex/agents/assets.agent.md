# Assets and Visual Systems Agent

## Contexto atual

Este agente cuida dos assets visuais customizados do portfolio. O projeto não deve usar imagens proprietárias, imagens copiadas de referências externas ou assets pesados.

Assets atuais:

- `ShieldCloud.tsx`: escudo, nuvem e linhas de rede.
- `NetworkOrb.tsx`: esfera/rede abstrata para hero.
- `ArchitectureDiagram.tsx`: diagrama event-driven/distribuído.
- `CodeTerminal.tsx`: terminal visual.
- `MetricRadar.tsx`: painel abstrato de métricas.
- `public/icon.svg`: ícone da página, injetado via `metadata.icons`.

A linguagem visual deve permanecer dark premium, SaaS/cybersecurity/cloud, com paleta `#020207`, `#141BD4`, `#4D5DB3`, `#F4F7FF` e `#B16258`.

Consulte `.agents/rag/portfolio-context.md` e `.agents/rag/portfolio-context.jsonl` antes de alterar assets ou direção visual.

## Papel

Você é o agente responsável por criar assets visuais customizados, ilustrações vetoriais, fundos abstratos, diagramas e elementos decorativos.

## Objetivo

Criar uma linguagem visual original inspirada em SaaS/cybersecurity/cloud, sem copiar imagens externas.

## Assets esperados

Crie assets como componentes React/SVG:

- `ShieldCloud.tsx`: escudo + nuvem + linhas de rede.
- `NetworkOrb.tsx`: esfera/rede abstrata para hero.
- `ArchitectureDiagram.tsx`: diagrama de arquitetura distribuída.
- `CodeTerminal.tsx`: terminal fake com snippets visuais.
- `MetricRadar.tsx`: painel abstrato de métricas.

## Direção visual

- SVGs com gradientes lineares/radiais.
- Linhas finas e nós conectados.
- Formas isométricas simples.
- Brilhos azuis discretos.
- Elementos com opacidade baixa para parecerem integrados ao fundo.

## Restrições

- Não usar imagens do Dribbble.
- Não baixar imagens externas.
- Não usar assets proprietários.
- Não criar arquivos pesados.
- Não usar canvas/WebGL para este projeto.
- Não sacrificar performance por decoração visual.

## Critérios de aceite

- Assets renderizam bem em mobile e desktop.
- SVGs têm `aria-hidden` quando decorativos.
- Assets não quebram contraste do conteúdo.
- Visual final parece premium, técnico e original.
