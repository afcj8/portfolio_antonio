<template>
  <section id="sobre" class="about" aria-labelledby="about-title">
    <div class="container">
      <span class="section-label">// sobre</span>
      <h2 id="about-title" class="section-title">Sobre mim</h2>

      <div class="about__grid">
        <div class="about__bio">
          <p class="reveal">
            Desenvolvedor Backend com foco em Python e FastAPI, atuando na
            <strong>Koda Tecnologia</strong> desde agosto de 2024. Trabalho com
            construção de APIs RESTful, modelagem de bancos de dados com
            PostgreSQL e conteinerização de aplicações via Docker.
          </p>
          <p class="reveal reveal-delay-1">
            Graduado em Análise e Desenvolvimento de Sistemas pelo
            <strong>IFRN</strong> (2025), tenho base sólida em estruturas de
            dados, algoritmos e engenharia de software — conceitos que aplico
            diariamente em sistemas de produção.
          </p>
          <p class="reveal reveal-delay-2">
            Acredito que bom código é aquele que outro desenvolvedor consegue
            entender, manter e evoluir — sem surpresas. Quando o projeto exige,
            também contribuo no frontend com Vue.js.
          </p>
        </div>

        <div class="about__pillars">
          <div
            v-for="(pillar, i) in pillars"
            :key="pillar.title"
            class="pillar reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="pillar__icon" aria-hidden="true">{{ pillar.icon }}</div>
            <h3 class="pillar__title">{{ pillar.title }}</h3>
            <p class="pillar__desc">{{ pillar.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollObserver } from '@/composables/useScrollObserver.js'

useScrollObserver('#sobre .reveal')

const pillars = [
  {
    icon: '⬡',
    title: 'APIs & Backend',
    desc: 'Design de APIs RESTful com FastAPI e Python — autenticação, autorização, serialização e documentação automática.',
  },
  {
    icon: '◫',
    title: 'Banco de Dados',
    desc: 'Modelagem relacional com PostgreSQL, escrita de queries eficientes e gerenciamento de migrações.',
  },
  {
    icon: '⬜',
    title: 'DevOps & Containers',
    desc: 'Conteinerização com Docker, Docker Compose para ambientes de desenvolvimento e produção, controle de versão com Git.',
  },
]
</script>

<style scoped>
.about {
  background: var(--clr-bg);
  border-top: 1px solid var(--clr-border);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-16);
  align-items: start;
}

.about__bio {
  display: flex;
  flex-direction: column;
  gap: var(--sp-5);
}

.about__bio p {
  font-size: 15px;
  color: var(--clr-text-2);
  line-height: 1.8;
}

.about__bio strong {
  color: var(--clr-text);
  font-weight: 500;
}

.about__pillars {
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
}

.pillar {
  padding: var(--sp-5);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  background: var(--clr-surface);
  transition: border-color var(--transition), background var(--transition);
}

.pillar:hover {
  border-color: var(--clr-border-hover);
  background: var(--clr-elevated);
}

.pillar__icon {
  font-size: 18px;
  margin-bottom: var(--sp-3);
  color: var(--clr-text-3);
}

.pillar__title {
  font-size: 14px;
  font-weight: 600;
  color: var(--clr-text);
  letter-spacing: -0.01em;
  margin-bottom: var(--sp-2);
}

.pillar__desc {
  font-size: 13px;
  color: var(--clr-text-2);
  line-height: 1.65;
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-10);
  }
}
</style>
