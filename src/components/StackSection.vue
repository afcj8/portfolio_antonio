<template>
  <section id="stack" class="stack" aria-labelledby="stack-title">
    <div class="container">
      <span class="section-label">// stack tecnológica</span>
      <h2 id="stack-title" class="section-title">Tecnologias</h2>

      <div class="stack__categories">
        <div
          v-for="(category, ci) in skillCategories"
          :key="category.id"
          class="stack__category reveal"
          :class="`reveal-delay-${ci + 1}`"
        >
          <h3 class="stack__category-title">{{ category.label }}</h3>
          <div class="stack__items" role="list">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="stack__item"
              role="listitem"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="stack__item-icon"
                width="28"
                height="28"
                loading="lazy"
              />
              <span class="stack__item-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollObserver } from '@/composables/useScrollObserver.js'
import { skillCategories } from '@/data/skills.js'

useScrollObserver('#stack .reveal')
</script>

<style scoped>
.stack {
  border-top: 1px solid var(--clr-border);
  background: var(--clr-surface);
}

.stack__categories {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-8);
}

.stack__category-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clr-text-3);
  margin-bottom: var(--sp-4);
  padding-bottom: var(--sp-3);
  border-bottom: 1px solid var(--clr-border);
}

.stack__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
}

.stack__item {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: 8px 12px;
  background: var(--clr-elevated);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  transition: border-color var(--transition), background var(--transition);
  cursor: default;
}

.stack__item:hover {
  border-color: var(--clr-border-hover);
  background: var(--clr-hover);
}

.stack__item-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex-shrink: 0;
}

.stack__item-name {
  font-size: 13px;
  font-weight: 400;
  color: var(--clr-text-2);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .stack__categories {
    grid-template-columns: 1fr;
    gap: var(--sp-8);
  }
}
</style>
