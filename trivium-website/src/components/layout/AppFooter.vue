<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { NavLink } from '@trivium/design-system'
import { PhInstagramLogo, PhLinkedinLogo, PhMapPin } from '@phosphor-icons/vue'
import logoUrl from '@/assets/trivium-logo.svg'

const columns = [
  {
    title: 'Trivium',
    links: [
      { label: 'Nosotros', to: '/nosotros' },
      { label: 'Eventos', to: '/eventos' },
      { label: 'Espacios', to: '/espacios' },
      { label: 'Empresas y patrocinios', to: '/empresas-y-patrocinios' },
    ],
  },
  {
    title: 'Membresía',
    links: [
      { label: 'Membresía', to: '/membresia' },
      { label: 'Solicitar acceso', to: '/solicitar-acceso' },
      { label: 'Proceso de admisión', to: '/proceso-de-admision' },
      { label: 'Tipos de miembro', to: '/tipos-de-miembro' },
    ],
  },
  {
    title: 'Contenido',
    links: [
      { label: 'Noticias', to: '/noticias' },
      { label: 'Actualidad del club', to: '/actualidad' },
      { label: 'Suscríbete al boletín', to: '/boletin' },
      { label: 'Preguntas frecuentes', to: '/preguntas-frecuentes' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Aviso legal', to: '/aviso-legal' },
      { label: 'Privacidad', to: '/privacidad' },
      { label: 'Cookies', to: '/cookies' },
    ],
  },
]
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
      <!-- Columnas de enlaces -->
      <div class="app-footer__columns">
        <div v-for="col in columns" :key="col.title" class="footer-col">
          <p class="footer-col__title">{{ col.title }}</p>
          <ul class="footer-col__links">
            <li v-for="link in col.links" :key="link.to">
              <NavLink :to="link.to" variant="neutral">{{ link.label }}</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bloque de marca -->
      <div class="app-footer__brand">
        <RouterLink to="/" class="app-footer__logo">
          <img :src="logoUrl" alt="Trivium" />
        </RouterLink>

        <p class="app-footer__tagline text-heading">
          Club privado de networking, negocios e inversión.
        </p>

        <div class="app-footer__contact">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            class="social-icon"
            aria-label="Instagram"
          >
            <PhInstagramLogo :size="18" weight="fill" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            class="social-icon"
            aria-label="LinkedIn"
          >
            <PhLinkedinLogo :size="18" weight="fill" />
          </a>
          <span class="app-footer__address">
            <PhMapPin :size="18" weight="fill" />
            Calle Serrano 6, 28001, Madrid
          </span>
        </div>
      </div>

      <!-- Copyright -->
      <p class="app-footer__copyright">
        © 2026 Trivium - Todos los derechos reservados
      </p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--color-surface-default);
}

.app-footer__inner {
  max-width: 1024px;
  margin-inline: auto;
  padding: 3.5rem 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

@media (min-width: 64rem) {
  .app-footer__inner {
    padding: 4rem 0 2.5rem;
  }
}

/* Columnas */
.app-footer__columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 40rem) {
  .app-footer__columns {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 64rem) {
  .app-footer__columns {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-col__title {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: var(--font-size-body-sm);
  color: var(--color-text-heading-tertiary);
}

.footer-col__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Bloque de marca */
.app-footer__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.app-footer__logo img {
  height: 44px;
  width: auto;
}

.app-footer__tagline {
  font-size: var(--font-size-heading-lg);
  margin: 0;
}

.app-footer__contact {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: var(--color-surface-action);
  color: var(--color-label-on-action);
  transition: background-color 0.2s ease;
}

.social-icon:hover {
  background-color: var(--color-surface-action-hover);
}

.app-footer__address {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-left: 0.5rem;
  color: var(--color-label-action);
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: var(--font-size-body-sm);
}

/* Copyright */
.app-footer__copyright {
  text-align: center;
  color: var(--color-text-body-tertiary);
  font-size: var(--font-size-body-xsm);
  margin: 0;
}
</style>
