<template>
  <section id="experiencia" class="experience" aria-labelledby="exp-title">
    <div class="container">
      <span class="section-label">// experiência</span>
      <h2 id="exp-title" class="section-title">Experiência</h2>

      <div class="timeline" role="list">
        <article
          v-for="(item, i) in experiences"
          :key="item.company"
          class="timeline__item reveal"
          :class="`reveal-delay-${i + 1}`"
          role="listitem"
        >
          <div class="timeline__marker" aria-hidden="true">
            <div class="timeline__dot"></div>
            <div class="timeline__line"></div>
          </div>

          <div class="timeline__content">
            <div class="timeline__header">
              <div class="timeline__header-left">
                <h3 class="timeline__role">{{ item.role }}</h3>
                <p class="timeline__company">{{ item.company }}</p>
              </div>
              <div class="timeline__header-right">
                <span class="timeline__period">{{ item.period }}</span>
                <span
                  v-if="item.current"
                  class="timeline__badge"
                >Atual</span>
              </div>
            </div>

            <ul class="timeline__responsibilities" role="list">
              <li
                v-for="resp in item.responsibilities"
                :key="resp"
                class="timeline__resp-item"
              >
                {{ resp }}
              </li>
            </ul>

            <div v-if="item.tech.length" class="timeline__tech">
              <span
                v-for="t in item.tech"
                :key="t"
                class="mono-badge"
              >{{ t }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollObserver } from '@/composables/useScrollObserver.js'

useScrollObserver('#experiencia .reveal')

const experiences = [
  {
    company: 'Koda Tecnologia Ltda',
    role: 'Desenvolvedor Backend',
    period: 'Ago 2024 — Presente',
    current: true,
    responsibilities: [
      'Desenvolvimento e manutenção de APIs RESTful com Python e FastAPI',
      'Modelagem e administração de bancos de dados PostgreSQL',
      'Conteinerização de aplicações e ambientes com Docker',
      'Integração com APIs e serviços externos',
      'Colaboração com time de frontend Vue.js em ambiente ágil',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Vue.js'],
  },
  {
    company: 'Bolt 360 Assessoria',
    role: 'Desenvolvedor de Software',
    period: 'Out 2023 — Jul 2024',
    current: false,
    responsibilities: [
      'Desenvolvimento e manutenção de landing pages responsivas com HTML, CSS e JavaScript',
      'Automação de processos e integração de APIs com n8n, eliminando tarefas manuais repetitivas',
      'Testes e validação de APIs com Postman, garantindo qualidade das integrações',
      'Trabalho em equipe com metodologias ágeis (Scrum/Kanban)',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'n8n', 'Postman'],
  },
]
</script>

<style scoped>
.experience {
  border-top: 1px solid var(--clr-border);
  background: var(--clr-bg);
}

.timeline {
  max-width: 720px;
}

.timeline__item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: var(--sp-5);
}

.timeline__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
}

.timeline__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--clr-text);
  border: 2px solid var(--clr-bg);
  outline: 1px solid var(--clr-border-hover);
  flex-shrink: 0;
}

.timeline__line {
  flex: 1;
  width: 1px;
  background: var(--clr-border);
  margin-top: var(--sp-2);
}

.timeline__content {
  padding-bottom: var(--sp-10);
}

.timeline__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--sp-4);
  margin-bottom: var(--sp-5);
  flex-wrap: wrap;
}

.timeline__role {
  font-size: 17px;
  font-weight: 600;
  color: var(--clr-text);
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.timeline__company {
  font-size: 14px;
  color: var(--clr-text-3);
}

.timeline__header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--sp-2);
  flex-shrink: 0;
}

.timeline__period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--clr-text-3);
  white-space: nowrap;
}

.timeline__badge {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border-radius: 100px;
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.25);
}

.timeline__responsibilities {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
  margin-bottom: var(--sp-5);
}

.timeline__resp-item {
  display: flex;
  gap: var(--sp-3);
  font-size: 14px;
  color: var(--clr-text-2);
  line-height: 1.6;
}

.timeline__resp-item::before {
  content: '—';
  color: var(--clr-text-3);
  flex-shrink: 0;
  margin-top: 0;
}

.timeline__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
}

@media (max-width: 600px) {
  .timeline__header {
    flex-direction: column;
  }

  .timeline__header-right {
    align-items: flex-start;
    flex-direction: row;
    gap: var(--sp-3);
  }
}
</style>
