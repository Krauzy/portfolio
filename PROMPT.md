# Prompt para Agente — Portfolio Frontend Next.js inspirado em SkyFort

## Objetivo

Crie um **portfolio frontend de desenvolvedor de software** com estética inspirada no design **[SkyFort — Corporate Cyber Security SaaS Website Web Design](https://dribbble.com/shots/15711117-SkyFort-Corporate-Cyber-Security-SaaS-Website-Web-Design)**, do Dribbble, sem copiar literalmente o layout, imagens, textos ou composição original.

A referência visual sugere uma landing page SaaS corporativa/cyber com:

- Fundo escuro profundo.
- Paleta azul/índigo intensa.
- Cards tecnológicos com brilho, bordas translúcidas e sensação de dashboard.
- Visual futurista, limpo e premium.
- Ilustrações 3D/isométricas ou assets abstratos de segurança/cloud.
- Estrutura de landing page com hero forte, seções modulares, métricas e CTA.

Use essa direção para criar um portfolio pessoal de engenharia de software, voltado a destacar senioridade técnica, arquitetura, cloud, backend, frontend e projetos.

---

## Stack obrigatória

- **Next.js** com App Router.
- **TypeScript**.
- **Tailwind CSS** para toda estilização.
- **FontAwesome** para ícones comuns.
- Projeto **exclusivamente frontend**.
- Sem backend, sem banco, sem API própria, sem autenticação.
- Dados mockados/estáticos em arquivos TypeScript.
- Assets customizados podem ser gerados como SVG, CSS art, gradientes, ilustrações vetoriais ou imagens locais.

---

## Restrições importantes

1. Não copie fielmente o design do Dribbble.
2. Não use imagens proprietárias do shot original.
3. Não implemente backend.
4. Não use bibliotecas pesadas sem necessidade.
5. Não misture CSS modules, styled-components ou SCSS; use Tailwind.
6. Não coloque conteúdo hardcoded espalhado pelos componentes; centralize dados em arquivos como `src/data/profile.ts`.
7. Não gere um portfolio genérico. O resultado deve parecer um site premium de engenheiro de software.

---

## Direção visual

### Paleta base

Use uma variação da paleta observada na referência:

```ts
const palette = {
  background: '#020207',
  surfaceDeep: '#080A1A',
  surface: '#111338',
  indigo900: '#0C11A2',
  indigo700: '#141BD4',
  blueMuted: '#4D5DB3',
  textPrimary: '#F4F7FF',
  textSecondary: '#B9C3D6',
  textMuted: '#7B8197',
  accentWarm: '#B16258'
}
```

### Sensação estética

- Cyber corporate.
- SaaS security.
- Dark premium.
- Cards com glassmorphism discreto.
- Gradientes radiais azuis.
- Linhas finas, grids, halos, partículas e formas orbitais.
- Ilustrações abstratas: escudo, cloud, rede, nós, servidor, terminal, arquitetura distribuída.

### Tipografia

Use fontes do `next/font`, preferencialmente:

- `Inter` para corpo.
- `Space_Grotesk` ou `Sora` para títulos.

---

## Estrutura de páginas

Crie uma landing page única em `/` com as seguintes seções:

1. **Navbar fixa/translúcida**
   - Logo textual ou símbolo abstrato.
   - Links: Sobre, Skills, Projetos, Experiência, Contato.
   - CTA: “Ver projetos”.

2. **Hero section**
   - Headline forte, exemplo:
     - “Software Engineer building secure, scalable and cloud-native products.”
   - Subheadline com foco em arquitetura, Java/Kotlin/TypeScript, AWS, microsserviços e produtos digitais.
   - CTAs:
     - “Ver projetos”
     - “Baixar currículo” ou “Entrar em contato”
   - Visual lateral com dashboard/terminal/arquitetura abstrata.
   - Métricas como anos de experiência, projetos, stacks, cloud services.

3. **Trusted/Tech strip**
   - Lista visual de tecnologias:
     - Java, Kotlin, Spring Boot, TypeScript, Next.js, AWS, Docker, Kubernetes, Terraform, PostgreSQL, RabbitMQ, SQS.

4. **Sobre / Engineering profile**
   - Texto curto, técnico e direto.
   - Cards com especialidades:
     - Backend architecture.
     - Cloud-native systems.
     - Event-driven design.
     - Frontend engineering.

5. **Skills matrix**
   - Organize por categorias:
     - Languages.
     - Backend.
     - Frontend.
     - Cloud & DevOps.
     - Data & Messaging.
     - Observability.
   - Use cards com ícones FontAwesome.

6. **Featured projects**
   - Cards premium com:
     - Nome.
     - Descrição.
     - Stack.
     - Impacto técnico.
     - Links para GitHub/demo.
   - Pelo menos 4 projetos mockados.
   - Crie visual tipo SaaS cards, com mini dashboards ou diagramas SVG.

7. **Experience timeline**
   - Timeline vertical ou cards horizontais.
   - Mostrar empresas/cargos mockados ou placeholders editáveis.
   - Foco em impacto, arquitetura, cloud e escala.

8. **Architecture showcase**
   - Seção visual com um diagrama frontend-only em SVG ou CSS:
     - Client/UI.
     - API Gateway fake.
     - Services.
     - Queue.
     - Database.
     - Observability.
   - Deixe claro que é uma representação de competências, não um backend real.

9. **Contact CTA**
   - CTA final com email, LinkedIn, GitHub.
   - Formulário opcional apenas visual ou usando `mailto:`; não criar endpoint.

10. **Footer**
   - Links sociais.
   - Créditos técnicos.
   - Nota: “Built with Next.js, TypeScript and Tailwind CSS.”

---

## Componentização esperada

Use uma arquitetura limpa:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      TechStrip.tsx
      AboutSection.tsx
      SkillsSection.tsx
      ProjectsSection.tsx
      ExperienceSection.tsx
      ArchitectureSection.tsx
      ContactSection.tsx
    ui/
      Button.tsx
      Card.tsx
      SectionHeader.tsx
      Glow.tsx
      Badge.tsx
      MetricCard.tsx
  data/
    profile.ts
    projects.ts
    skills.ts
    experience.ts
  lib/
    cn.ts
  assets/
    svg/
      ShieldCloud.tsx
      NetworkOrb.tsx
      ArchitectureDiagram.tsx
```

---

## Requisitos de implementação

### Next.js

- Use App Router.
- Use Server Components por padrão.
- Use Client Components apenas se necessário para animações/interações.
- Configure metadata no `layout.tsx`.
- Use `next/font`.
- Garanta responsividade mobile-first.

### Tailwind

- Configure tema com cores customizadas.
- Crie utilities para:
  - Background radial.
  - Glass card.
  - Border glow.
  - Grid background.
- Não abuse de classes inline gigantes quando um padrão puder virar componente.

### Acessibilidade

- Contraste adequado.
- Botões e links com estados `focus-visible`.
- `aria-label` em ícones sociais.
- Hierarquia semântica correta de headings.

### Performance

- Evite libs pesadas.
- Use SVG/CSS para assets abstratos quando possível.
- Minimize Client Components.
- Evite animações custosas.

### Ícones

Use FontAwesome para ícones comuns:

- GitHub.
- LinkedIn.
- Email.
- Cloud.
- Shield.
- Code.
- Server.
- Database.
- Terminal.
- Docker-like/container quando disponível.

Configure FontAwesome corretamente em Next.js, evitando imports globais desnecessários.

---

## Conteúdo base sugerido

Use placeholders fáceis de editar:

```ts
export const profile = {
  name: 'Caio Kraut',
  role: 'Software Engineer',
  headline: 'Building secure, scalable and cloud-native software products.',
  location: 'Brazil',
  email: 'your.email@example.com',
  github: 'https://github.com/your-user',
  linkedin: 'https://linkedin.com/in/your-user',
  summary: 'Software engineer focused on backend architecture, distributed systems, cloud-native applications and polished frontend experiences.'
}
```

Utilize o link do linkedin e do github para complementar informação

- Linkedin: https://www.linkedin.com/in/caio-kraut/
- Github: https://www.github.com/Krauzy

---

## Qualidade esperada

O resultado deve parecer:

- Premium.
- Moderno.
- Técnico.
- Madura o suficiente para um desenvolvedor sênior.
- Visualmente próximo de uma landing page SaaS de cybersecurity/cloud.
- Totalmente editável.
- Pronto para deploy estático em Vercel.

---

## Checklist final obrigatório

Antes de encerrar, valide:

- [ ] `npm run dev` funciona.
- [ ] `npm run build` funciona.
- [ ] Sem backend criado.
- [ ] Sem dependências desnecessárias.
- [ ] Sem imagens copiadas do Dribbble.
- [ ] Layout responsivo.
- [ ] Lighthouse-friendly.
- [ ] Conteúdo centralizado em `src/data`.
- [ ] FontAwesome configurado.
- [ ] Tailwind theme customizado.
- [ ] README com instruções de instalação, desenvolvimento e deploy.

