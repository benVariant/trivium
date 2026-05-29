<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { NavLink, Button } from '@trivium/design-system'
import { PhList, PhX, PhGlobe } from '@phosphor-icons/vue'
import logoUrl from '@/assets/trivium-logo.svg'

const router = useRouter()
const mobileOpen = ref(false)

const navItems = [
  { label: 'Trivium', to: '/trivium' },
  { label: 'Membresía', to: '/membresia' },
  { label: 'Espacios', to: '/espacios' },
  { label: 'Eventos', to: '/eventos' },
  { label: 'Empresas y patrocinios', to: '/empresas-y-patrocinios' },
]

function goToContact() {
  mobileOpen.value = false
  router.push('/solicitar-informacion')
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="app-header">
    <div class="app-header__bar">
      <!-- Logo -->
      <RouterLink to="/" class="app-header__logo" @click="closeMobile">
        <img :src="logoUrl" alt="Trivium" />
      </RouterLink>

      <!-- Menú: navegación + acciones (inline en desktop, panel desplegable en mobile) -->
      <div class="app-header__menu" :class="{ 'is-open': mobileOpen }">
        <nav class="app-header__nav">
          <NavLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            variant="neutral"
            size="sm"
            @click="closeMobile"
          >
            {{ item.label }}
          </NavLink>
        </nav>

        <div class="app-header__actions">
          <Button variant="primary" size="sm" @click="goToContact">
            Contactar
          </Button>
          <Button
            variant="neutralOutline"
            size="sm"
            :icon="PhGlobe"
            :iconSize="18"
            aria-label="Cambiar idioma"
          >
            ES
          </Button>
        </div>
      </div>

      <!-- Botón hamburguesa (mobile) -->
      <button
        type="button"
        class="app-header__toggle"
        :aria-expanded="mobileOpen"
        aria-label="Abrir menú"
        @click="mobileOpen = !mobileOpen"
      >
        <PhX v-if="mobileOpen" :size="28" />
        <PhList v-else :size="28" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--color-surface-default);
}

.app-header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  height: 72px;
  padding-inline: 1.5rem;
}

@media (min-width: 64rem) {
  .app-header__bar {
    height: 92px;
    padding-inline: 2.5rem;
  }
}

/* Logo */
.app-header__logo {
  display: inline-flex;
  flex-shrink: 0;
}

.app-header__logo img {
  height: 32px;
  width: auto;
}

@media (min-width: 64rem) {
  .app-header__logo img {
    height: 38px;
  }
}

/* Menú: contenedor que agrupa navegación + acciones */
.app-header__menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Hamburguesa */
.app-header__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--color-icon-default);
  cursor: pointer;
}

@media (min-width: 64rem) {
  .app-header__toggle {
    display: none;
  }
}

/* =========================================================
   Mobile (< 64rem): el menú se despliega como panel
   por debajo del header bar.
========================================================= */
@media (max-width: 63.999rem) {
  .app-header__menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: var(--color-surface-default);
    border-top: 1px solid var(--color-border-secondary);

    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  }

  .app-header__menu.is-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .app-header__nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .app-header__actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
