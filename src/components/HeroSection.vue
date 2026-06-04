<template>
  <section id="home" class="hero" aria-label="Apresentação">
    <div class="container hero__grid">

      <!-- Content -->
      <div class="hero__content">
        <p class="hero__greeting reveal">Olá, eu sou</p>

        <h1 class="hero__name reveal reveal-delay-1">
          Antônio Junior
        </h1>

        <div class="hero__role-wrapper reveal reveal-delay-2">
          <span class="hero__role">Desenvolvedor Backend</span>
        </div>

        <p class="hero__description reveal reveal-delay-3">
          Construo APIs robustas, modelos de dados coerentes e sistemas
          que funcionam em produção — com Python, FastAPI e Docker.
        </p>

        <div class="hero__actions reveal reveal-delay-4">
          <a href="#projetos" class="btn btn-primary">
            Ver Projetos
          </a>
          <a
            href="/curriculo-antonio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary"
          >
            Currículo
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

        <div class="hero__socials reveal reveal-delay-5">
          <a
            href="https://github.com/afcj8"
            target="_blank"
            rel="noopener noreferrer"
            class="hero__social"
            aria-label="GitHub"
          >
            <IconGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/antoniojunior8/"
            target="_blank"
            rel="noopener noreferrer"
            class="hero__social"
            aria-label="LinkedIn"
          >
            <IconLinkedin />
          </a>
          <a
            href="https://instagram.com/antoniofcjr"
            target="_blank"
            rel="noopener noreferrer"
            class="hero__social"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>
        </div>
      </div>

      <!-- Photo -->
      <div class="hero__photo-wrapper reveal reveal-delay-2">
        <div class="hero__photo-frame">
          <img
            src="@/assets/perfil.jpg"
            alt="Foto de Antônio Junior"
            class="hero__photo"
            width="400"
            height="400"
            fetchpriority="high"
          />
        </div>
        <div class="hero__photo-meta">
          <span class="hero__location">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"/>
            </svg>
            Natal, RN · Brasil
          </span>
          <span class="hero__status">
            <span class="hero__status-dot" aria-hidden="true"></span>
            Disponível
          </span>
        </div>
      </div>

    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll" aria-hidden="true">
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollObserver } from '@/composables/useScrollObserver.js'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'

useScrollObserver()

onMounted(() => {
  document.querySelectorAll('#home .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 120 + i * 80)
  })
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: var(--nav-height);
  position: relative;
  overflow: hidden;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--sp-16);
  padding-top: var(--sp-12);
  padding-bottom: var(--sp-12);
}

/* Content */
.hero__greeting {
  font-size: 15px;
  color: var(--clr-text-3);
  font-weight: 400;
  letter-spacing: 0.02em;
  margin-bottom: var(--sp-3);
  line-height: 1;
}

.hero__name {
  font-size: clamp(2.4rem, 7vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--clr-text);
  margin-bottom: var(--sp-4);
}

.hero__role-wrapper {
  display: inline-flex;
  margin-bottom: var(--sp-6);
}

.hero__role {
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  font-weight: 400;
  color: var(--clr-text-2);
  padding: 4px 12px;
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  background: var(--clr-surface);
}

.hero__description {
  font-size: 16px;
  color: var(--clr-text-2);
  line-height: 1.75;
  max-width: 460px;
  margin-bottom: var(--sp-8);
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-8);
  flex-wrap: wrap;
}

.hero__socials {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}

.hero__social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--clr-text-3);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  transition: color var(--transition), border-color var(--transition), background var(--transition);
}

.hero__social:hover {
  color: var(--clr-text);
  border-color: var(--clr-border-hover);
  background: var(--clr-elevated);
}

/* Photo */
.hero__photo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-3);
}

.hero__photo-frame {
  width: 280px;
  height: 320px;
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  flex-shrink: 0;
  background: #111;
}

.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  transition: transform var(--transition-slow);
}

.hero__photo-frame:hover .hero__photo {
  transform: scale(1.02);
}

.hero__photo-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: var(--sp-3);
}

.hero__location {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--clr-text-3);
}

.hero__status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #4ade80;
}

.hero__status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: var(--sp-8);
  left: 50%;
  transform: translateX(-50%);
}

.hero__scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, transparent, var(--clr-border));
  margin: 0 auto;
  animation: scrollDown 2s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
  50% { transform: scaleY(1); opacity: 1; }
  100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
}

/* Responsive */
@media (max-width: 900px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-12);
  }

  .hero__photo-wrapper {
    order: -1;
    align-items: flex-start;
  }

  .hero__photo-frame {
    width: 160px;
    height: 180px;
  }
}

@media (max-width: 480px) {
  .hero__name {
    font-size: 2.2rem;
  }

  .hero__photo-frame {
    width: 130px;
    height: 148px;
  }
}
</style>
