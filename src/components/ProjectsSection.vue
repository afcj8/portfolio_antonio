<template>
  <section id="projetos" class="projects" aria-labelledby="proj-title">
    <div class="container">
      <span class="section-label">// projetos</span>
      <h2 id="proj-title" class="section-title">Projetos</h2>

      <div class="projects__grid" role="list">
        <article
          v-for="(project, i) in projects"
          :key="project.id"
          class="project-card reveal"
          :class="[`reveal-delay-${(i % 3) + 1}`, { 'project-card--featured': project.featured }]"
          role="listitem"
        >
          <div class="project-card__header">
            <span class="project-card__category mono-badge">
              {{ project.categoryLabel }}
            </span>
            <span
              v-if="project.stars"
              class="project-card__stars"
              :aria-label="`${project.stars} estrelas no GitHub`"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {{ project.stars }}
            </span>
          </div>

          <h3 class="project-card__title">{{ project.title }}</h3>

          <p class="project-card__desc">{{ project.description }}</p>

          <div class="project-card__tech" aria-label="Tecnologias">
            <span
              v-for="t in project.tech"
              :key="t"
              class="mono-badge"
            >{{ t }}</span>
          </div>

          <div class="project-card__footer">
            <a
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card__link"
              :aria-label="`Ver repositório de ${project.title} no GitHub`"
            >
              <IconGithub />
              <span>Repositório</span>
              <svg class="project-card__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
      </div>

      <div class="projects__more reveal">
        <a
          href="https://github.com/afcj8"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          aria-label="Ver todos os repositórios no GitHub"
        >
          <IconGithub />
          Ver todos no GitHub
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollObserver } from '@/composables/useScrollObserver.js'
import { projects } from '@/data/projects.js'
import IconGithub from '@/components/icons/IconGithub.vue'

useScrollObserver('#projetos .reveal')
</script>

<style scoped>
.projects {
  border-top: 1px solid var(--clr-border);
  background: var(--clr-surface);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-4);
  margin-bottom: var(--sp-10);
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
  padding: var(--sp-6);
  background: var(--clr-elevated);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition), background var(--transition);
}

.project-card:hover {
  border-color: var(--clr-border-hover);
  background: var(--clr-hover);
}

.project-card--featured {
  border-color: var(--clr-border-hover);
}

.project-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-2);
}

.project-card__stars {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: #FBBF24;
}

.project-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--clr-text);
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.project-card__desc {
  font-size: 13px;
  color: var(--clr-text-2);
  line-height: 1.7;
  flex: 1;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-1);
}

.project-card__footer {
  margin-top: auto;
  padding-top: var(--sp-3);
  border-top: 1px solid var(--clr-border);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--clr-text-2);
  transition: color var(--transition);
}

.project-card__link:hover {
  color: var(--clr-text);
}

.project-card__arrow {
  transition: transform var(--transition);
}

.project-card__link:hover .project-card__arrow {
  transform: translate(2px, -2px);
}

.projects__more {
  display: flex;
  justify-content: center;
}

@media (max-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
