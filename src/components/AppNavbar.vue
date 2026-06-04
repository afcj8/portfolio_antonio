<template>
  <header :class="['navbar', { 'navbar--scrolled': scrolled }]" role="banner">
    <div class="container navbar__inner">
      <a href="#home" class="navbar__logo" aria-label="Voltar ao topo">
        <span class="navbar__logo-text">AJ</span>
      </a>

      <nav class="navbar__nav" aria-label="Navegação principal">
        <ul class="navbar__links" role="list">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="navbar__link"
              :class="{ 'navbar__link--active': activeSection === link.id }"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="/curriculo-antonio.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="navbar__resume btn btn-secondary"
        aria-label="Abrir currículo em nova aba"
      >
        Currículo
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <button
        class="navbar__burger"
        :class="{ 'navbar__burger--open': menuOpen }"
        :aria-expanded="menuOpen.toString()"
        aria-label="Alternar menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div
      class="navbar__mobile"
      :class="{ 'navbar__mobile--open': menuOpen }"
      role="dialog"
      aria-label="Menu mobile"
    >
      <nav>
        <ul role="list">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="navbar__mobile-link"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              href="/curriculo-antonio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="navbar__mobile-link navbar__mobile-link--accent"
              @click="closeMenu"
            >
              Currículo ↗
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useNavScroll } from '@/composables/useNavScroll.js'

const navLinks = [
  { id: 'sobre',      label: 'Sobre' },
  { id: 'stack',      label: 'Stack' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos',   label: 'Projetos' },
  { id: 'contato',    label: 'Contato' },
]

const menuOpen = ref(false)
const { scrolled, activeSection } = useNavScroll(navLinks.map((l) => l.id))

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  z-index: 100;
  transition: background var(--transition), border-color var(--transition);
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  background: rgba(12, 12, 12, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: var(--clr-border);
}

.navbar__inner {
  height: var(--nav-height);
  display: flex;
  align-items: center;
  gap: var(--sp-8);
}

/* Logo */
.navbar__logo {
  flex-shrink: 0;
  text-decoration: none;
}

.navbar__logo-text {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 500;
  color: var(--clr-text);
  letter-spacing: -0.02em;
  transition: color var(--transition);
}

.navbar__logo:hover .navbar__logo-text {
  color: var(--clr-accent);
}

/* Desktop Nav */
.navbar__nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.navbar__links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: var(--sp-1);
}

.navbar__link {
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  color: var(--clr-text-3);
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);
}

.navbar__link:hover {
  color: var(--clr-text);
  background: var(--clr-elevated);
}

.navbar__link--active {
  color: var(--clr-text);
}

/* Resume button */
.navbar__resume {
  flex-shrink: 0;
  font-size: 13px;
  padding: 7px 14px;
}

/* Burger */
.navbar__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.navbar__burger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--clr-text-2);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition), width var(--transition);
  transform-origin: center;
}

.navbar__burger--open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.navbar__burger--open span:nth-child(2) {
  opacity: 0;
  width: 0;
}
.navbar__burger--open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile menu */
.navbar__mobile {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  right: 0;
  background: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
  padding: var(--sp-4) 0;
  transform: translateY(-8px);
  opacity: 0;
  pointer-events: none;
  transition: transform var(--transition-slow), opacity var(--transition-slow);
  z-index: 99;
}

.navbar__mobile--open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.navbar__mobile ul {
  list-style: none;
  padding: 0 var(--sp-5);
}

.navbar__mobile-link {
  display: block;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--clr-text-2);
  border-bottom: 1px solid var(--clr-border);
  transition: color var(--transition);
}

.navbar__mobile-link:hover,
.navbar__mobile-link--accent {
  color: var(--clr-text);
}

.navbar__mobile ul li:last-child .navbar__mobile-link {
  border-bottom: none;
}

@media (max-width: 768px) {
  .navbar__nav,
  .navbar__resume {
    display: none;
  }

  .navbar__burger {
    display: flex;
  }
}
</style>
