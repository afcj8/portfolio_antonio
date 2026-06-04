<template>
  <footer class="footer" role="contentinfo">
    <div class="divider"></div>
    <div class="container footer__inner">
      <a href="#home" class="footer__logo" aria-label="Voltar ao topo">
        <span>AJ</span>
      </a>

      <p class="footer__copy">
        Desenvolvido por Antônio Junior · {{ currentYear }}
      </p>

      <nav class="footer__socials" aria-label="Redes sociais">
        <a
          href="https://github.com/afcj8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="footer__social-link"
        >
          <IconGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/antoniojunior8/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="footer__social-link"
        >
          <IconLinkedin />
        </a>
        <a
          href="https://instagram.com/antoniofcjr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="footer__social-link"
        >
          <IconInstagram />
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: var(--sp-8) 0;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);
  padding-top: var(--sp-8);
}

.footer__logo span {
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 500;
  color: var(--clr-text-3);
  transition: color var(--transition);
}

.footer__logo:hover span {
  color: var(--clr-text);
}

.footer__copy {
  font-size: 13px;
  color: var(--clr-text-3);
  line-height: 1;
}

.footer__socials {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--clr-text-3);
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);
}

.footer__social-link:hover {
  color: var(--clr-text);
  background: var(--clr-elevated);
}

@media (max-width: 480px) {
  .footer__inner {
    flex-direction: column;
    align-items: center;
    gap: var(--sp-4);
    text-align: center;
  }
}
</style>
