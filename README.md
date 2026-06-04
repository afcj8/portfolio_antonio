# Antônio Junior — Portfólio

Portfólio profissional desenvolvido com Vue 3 + Vite.
Acesse em: [portfolio-antonio-ten.vercel.app](https://portfolio-antonio-ten.vercel.app/)

## Stack

- **Vue 3** + **Vite** — SPA estática com build otimizado
- **FormSubmit** — Formulário de contato sem backend
- **Vercel** — Deploy contínuo via Git

## Pré-requisitos

- Node.js ≥ 18
- npm ≥ 9

## Como rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:5173)
npm run dev

# Build de produção (gera a pasta dist/)
npm run build

# Preview do build local
npm run preview
```

## Deploy

O projeto já está configurado para o Vercel. Qualquer push para a branch `main` faz deploy automático.

Para deploy manual via CLI:

```bash
npm run build
npx vercel --prod
```

## Estrutura

```
src/
├── assets/          # Imagem de perfil
├── components/      # Seções e ícones SVG
│   ├── icons/
│   ├── AppNavbar.vue
│   ├── AppFooter.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── StackSection.vue
│   ├── ExperienceSection.vue
│   ├── ProjectsSection.vue
│   ├── EducationSection.vue
│   └── ContactSection.vue
├── composables/     # useScrollObserver, useNavScroll
├── data/            # skills.js, projects.js
├── App.vue
├── main.js
└── style.css        # Design system global
public/
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Contato

[contatoantoniojunior8@gmail.com](mailto:contatoantoniojunior8@gmail.com)
