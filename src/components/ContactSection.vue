<template>
  <section id="contato" class="contact" aria-labelledby="contact-title">
    <div class="container">
      <span class="section-label">// contato</span>
      <h2 id="contact-title" class="section-title">Contato</h2>

      <div class="contact__grid">
        <!-- Info -->
        <div class="contact__info">
          <p class="contact__subtitle reveal">
            Tem um projeto em mente, uma oportunidade ou só quer trocar uma ideia
            sobre tecnologia? Me envie uma mensagem.
          </p>

          <div class="contact__links reveal reveal-delay-1">
            <a
              href="mailto:contatoantoniojunior8@gmail.com"
              class="contact__link"
              aria-label="Enviar e-mail"
            >
              <span class="contact__link-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M22 6L12 13 2 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="contact__link-text">contatoantoniojunior8@gmail.com</span>
              <svg class="contact__link-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/antoniojunior8/"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__link"
              aria-label="Perfil LinkedIn"
            >
              <span class="contact__link-icon" aria-hidden="true">
                <IconLinkedin />
              </span>
              <span class="contact__link-text">linkedin.com/in/antoniojunior8</span>
              <svg class="contact__link-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>

            <a
              href="https://github.com/afcj8"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__link"
              aria-label="Perfil GitHub"
            >
              <span class="contact__link-icon" aria-hidden="true">
                <IconGithub />
              </span>
              <span class="contact__link-text">github.com/afcj8</span>
              <svg class="contact__link-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Form -->
        <div class="contact__form-wrapper reveal reveal-delay-2">
          <form
            action="https://formsubmit.co/contatoantoniojunior8@gmail.com"
            method="POST"
            class="contact__form"
            @submit="handleSubmit"
            novalidate
          >
            <input type="hidden" name="_subject" value="Novo contato pelo portfólio" />
            <input type="hidden" name="_next" value="https://portfolio-antonio-ten.vercel.app/" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" class="contact__honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />

            <div class="form-group">
              <label for="contact-name" class="form-label">Nome</label>
              <input
                id="contact-name"
                type="text"
                name="Nome"
                class="form-input"
                placeholder="Seu nome completo"
                required
                autocomplete="name"
              />
            </div>

            <div class="form-group">
              <label for="contact-email" class="form-label">E-mail</label>
              <input
                id="contact-email"
                type="email"
                name="E-mail"
                class="form-input"
                placeholder="seu@email.com"
                required
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="contact-message" class="form-label">Mensagem</label>
              <textarea
                id="contact-message"
                name="Mensagem"
                class="form-input form-textarea"
                placeholder="Sua mensagem..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary contact__submit">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollObserver } from '@/composables/useScrollObserver.js'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'

useScrollObserver('#contato .reveal')

function handleSubmit() {
  // FormSubmit handles the submission natively
}
</script>

<style scoped>
.contact {
  border-top: 1px solid var(--clr-border);
  background: var(--clr-surface);
  padding-bottom: var(--sp-24);
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-16);
  align-items: start;
}

.contact__subtitle {
  font-size: 15px;
  color: var(--clr-text-2);
  line-height: 1.75;
  margin-bottom: var(--sp-8);
}

.contact__links {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.contact__link {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  padding: var(--sp-4) 0;
  border-bottom: 1px solid var(--clr-border);
  color: var(--clr-text-2);
  transition: color var(--transition);
}

.contact__link:last-child {
  border-bottom: none;
}

.contact__link:hover {
  color: var(--clr-text);
}

.contact__link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: var(--clr-text-3);
  flex-shrink: 0;
}

.contact__link:hover .contact__link-icon {
  color: var(--clr-text-2);
}

.contact__link-text {
  flex: 1;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact__link-arrow {
  flex-shrink: 0;
  opacity: 0;
  transition: opacity var(--transition), transform var(--transition);
}

.contact__link:hover .contact__link-arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}

/* Form */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--sp-5);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}

.form-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--clr-text-2);
  letter-spacing: 0.01em;
}

.form-input {
  background: var(--clr-elevated);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  padding: 10px var(--sp-4);
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--clr-text);
  outline: none;
  transition: border-color var(--transition), background var(--transition);
  resize: none;
  -webkit-appearance: none;
}

.form-input::placeholder {
  color: var(--clr-text-3);
}

.form-input:focus {
  border-color: var(--clr-text-2);
  background: var(--clr-hover);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.contact__submit {
  align-self: flex-start;
  padding: 11px var(--sp-6);
}

.contact__honeypot {
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}

@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-10);
  }

  .contact__submit {
    width: 100%;
    justify-content: center;
  }
}
</style>
