<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from '@trivium/design-system'
import { PhArrowRight } from '@phosphor-icons/vue'
import AppHeader from '@/components/layout/AppHeader.vue'

const router = useRouter()

// --- Datos de muestra (se reemplazarán por contenido/CMS real) ---

// Sección "Qué ofrece Trivium"
const offerItems = [
  {
    title: 'Networking curado',
    description:
      'Conexiones intencionales entre miembros seleccionados por afinidad e intereses comunes.',
  },
  {
    title: 'Eventos privados',
    description:
      'Cenas, charlas y encuentros exclusivos diseñados para crear vínculos de valor.',
  },
  {
    title: 'Comunidad selecta',
    description:
      'Un círculo cerrado de profesionales, líderes e inversores que comparten visión.',
  },
]

// Beneficios de la tarjeta "Espacio premium"
const premiumFeatures = [
  {
    title: 'Concierge dedicado',
    description: 'Atención personalizada para cada necesidad dentro y fuera del club.',
  },
  {
    title: 'Mesas reservadas exclusivas',
    description: 'Espacios privados garantizados para tus reuniones más importantes.',
  },
  {
    title: 'Presentaciones de inversión',
    description: 'Acceso a oportunidades y rondas presentadas en primicia a la comunidad.',
  },
  {
    title: 'Experiencia de marca',
    description: 'Un entorno cuidado al detalle que refleja el prestigio del club.',
  },
]

// Galería de espacios (placeholders por ahora)
const spaces = [
  { name: 'Salón principal' },
  { name: 'Terraza' },
  { name: 'Sala de reuniones' },
]

// Noticias y actualidad
const news = [
  { category: 'Comunidad', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '12 May 2026' },
  { category: 'Eventos', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '08 May 2026' },
  { category: 'Negocios', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '02 May 2026' },
]

// Assets del hero (colócalos en /public). Se enlazan en runtime para no
// resolverlos en build mientras los archivos todavía no existen.
const heroVideo = '/hero.mp4'
const heroPoster = '/hero-poster.jpg'

function requestAccess() {
  router.push('/solicitar-acceso')
}
</script>

<template>
  <main class="home">
    <!-- ===================== Hero =====================
         Header + hero comparten contenedor: el video es el
         fondo y el header (variante transparente) se monta
         encima. Este layout solo existe aquí, por eso vive
         en el scoped del componente y no en una utility. -->
    <section class="home-hero">
      <!-- Fondo en video (con fallback de color si aún no hay asset) -->
      <video
        class="home-hero__video"
        autoplay
        muted
        loop
        playsinline
        :poster="heroPoster"
        aria-hidden="true"
      >
        <source :src="heroVideo" type="video/mp4" />
      </video>
      <div class="home-hero__overlay" aria-hidden="true"></div>

      <!-- Header propio del Home, transparente sobre el video -->
      <AppHeader transparent />

      <!-- Contenido del hero -->
      <div class="home-hero__body site-container">
        <div class="home-hero__inner">
          <h1 class="home-hero__title text-heading">
            Un club privado donde las relaciones se convierten en oportunidades.
          </h1>
          <p class="home-hero__lead">
            Trivium reúne a una comunidad selecta de líderes, profesionales e
            inversores en un entorno diseñado para crear vínculos que importan.
          </p>
          <div class="home-hero__actions">
            <Button variant="primary" size="lg" @click="requestAccess">
              Solicitar acceso
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============== Más que un espacio ============== -->
    <section class="home-intro site-section">
      <div class="site-container home-intro__inner">
        <div class="home-intro__monogram" aria-hidden="true">T</div>
        <div class="home-intro__content container-text">
          <h2 class="text-heading text-3xl">
            Más que un espacio,
            <span class="home-accent">una comunidad.</span>
          </h2>
          <p>
            Trivium nace de la idea de que las mejores oportunidades surgen
            entre personas que comparten ambición y valores. No es solo un lugar:
            es el punto de encuentro de quienes están construyendo el futuro.
          </p>
        </div>
      </div>
    </section>

    <!-- ================ Qué ofrece Trivium ============= -->
    <section class="home-offer site-section">
      <div class="site-container home-offer__inner">
        <div class="home-offer__features">
          <h2 class="text-heading text-3xl home-offer__title">Qué ofrece Trivium.</h2>
          <ul class="home-offer__list">
            <li v-for="item in offerItems" :key="item.title" class="home-offer__item">
              <h3 class="home-offer__item-title">{{ item.title }}</h3>
              <p class="home-offer__item-desc">{{ item.description }}</p>
            </li>
          </ul>
        </div>

        <!-- Tarjeta destacada "Espacio premium" -->
        <aside class="home-premium">
          <h3 class="text-heading text-xl home-premium__title">
            Espacio <span class="home-accent">premium</span>
          </h3>
          <ul class="home-premium__list">
            <li v-for="f in premiumFeatures" :key="f.title" class="home-premium__feature">
              <h4 class="home-premium__feature-title">{{ f.title }}</h4>
              <p class="home-premium__feature-desc">{{ f.description }}</p>
            </li>
          </ul>
          <Button variant="primary" size="md" :icon="PhArrowRight" iconPosition="right">
            Conocer más
          </Button>
        </aside>
      </div>
    </section>

    <!-- ==================== Espacios ==================== -->
    <section class="home-spaces site-section">
      <div class="site-container home-spaces__inner">
        <div class="container-text home-spaces__intro">
          <h2 class="text-heading text-3xl">Espacios</h2>
          <p>
            Cada ambiente ha sido pensado para acompañar cada momento: trabajar,
            celebrar, reunirse o desconectar con el nivel que mereces.
          </p>
        </div>
        <div class="home-spaces__grid">
          <figure v-for="space in spaces" :key="space.name" class="home-spaces__item">
            <span class="home-spaces__placeholder" aria-hidden="true"></span>
            <figcaption class="home-spaces__caption">{{ space.name }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- =============== Noticias y Actualidad ============ -->
    <section class="home-news site-section">
      <div class="site-container home-news__inner">
        <h2 class="text-heading text-3xl home-news__title">Noticias y Actualidad</h2>
        <div class="home-news__grid">
          <article v-for="(post, i) in news" :key="i" class="home-news__card">
            <span class="home-news__thumb" aria-hidden="true"></span>
            <div class="home-news__body">
              <span class="home-news__tag">{{ post.category }}</span>
              <h3 class="home-news__card-title">{{ post.title }}</h3>
              <time class="home-news__date">{{ post.date }}</time>
            </div>
          </article>
        </div>
        <div class="home-news__actions">
          <Button variant="neutralOutline" size="md" @click="router.push('/noticias')">
            Ver todas las noticias
          </Button>
        </div>
      </div>
    </section>

    <!-- ==================== Aliados ===================== -->
    <section class="home-partners">
      <div class="site-container home-partners__inner">
        <p class="home-partners__label">Confían en Trivium</p>
        <div class="home-partners__grid">
          <span v-for="n in 6" :key="n" class="home-partners__logo" aria-hidden="true"></span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* =========================================================
   Layout base
========================================================= */
.home {
  background-color: var(--color-page-default);
}

/* Acento dorado reutilizable */
.home-accent {
  color: var(--color-text-heading-action);
}

/* =========================================================
   Hero
========================================================= */
.home-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  isolation: isolate;
  /* Fallback mientras no exista el video */
  background-color: var(--color-surface-default-deep);
}

/* Fondo: video + overlay ocupan todo el hero, detrás del contenido.
   Se clipan con object-fit/inset (sin overflow:hidden) para no romper
   el position:sticky del header. */
.home-hero__video,
.home-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.home-hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-hero__overlay {
  background-color: var(--color-overlay-hard);
}

/* Cuerpo del hero: ocupa el alto restante bajo el header y centra
   el contenido verticalmente. */
.home-hero__body {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  align-items: center;
}

.home-hero__inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 720px;
}

.home-hero__title {
  font-size: 2.5rem;
  color: var(--color-text-heading-default);
}

.home-hero__lead {
  color: var(--color-text-body-secondary);
  font-size: var(--font-size-body-lg);
  max-width: 48ch;
}

.home-hero__actions {
  margin-top: 0.5rem;
}

@media (min-width: 64rem) {
  .home-hero__title {
    font-size: 3.5rem;
  }
}

/* =========================================================
   Más que un espacio
========================================================= */
.home-intro__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.home-intro__monogram {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 160px;
  height: 200px;
  font-family: latienne-pro, serif;
  font-size: 6rem;
  color: var(--color-text-heading-action);
  border: 2px solid var(--color-border-action);
  border-radius: 4px;
}

.home-intro__content {
  color: var(--color-text-body-default);
}

@media (min-width: 64rem) {
  .home-intro__inner {
    flex-direction: row;
    align-items: center;
    gap: 5rem;
  }
}

/* =========================================================
   Qué ofrece Trivium (sección clara)
========================================================= */
.home-offer {
  background-color: var(--color-surface-alt);
}

.home-offer__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.home-offer__title {
  color: var(--color-text-heading-default-on-alt);
  margin-bottom: 2rem;
}

.home-offer__list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.home-offer__item {
  border-top: 1px solid var(--color-border-tertiary);
  padding-top: 1.25rem;
}

.home-offer__item-title {
  font-family: latienne-pro, serif;
  font-size: var(--font-size-heading-lg);
  color: var(--color-text-heading-default-on-alt);
  margin-bottom: 0.5rem;
}

.home-offer__item-desc {
  color: var(--color-text-body-secondary-on-alt);
}

/* Tarjeta premium */
.home-premium {
  background-color: var(--color-surface-default);
  border: 1px solid var(--color-border-action);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.home-premium__title {
  color: var(--color-text-heading-default);
}

.home-premium__list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.home-premium__feature-title {
  font-weight: 700;
  color: var(--color-text-heading-default);
  margin-bottom: 0.25rem;
}

.home-premium__feature-desc {
  font-size: var(--font-size-body-sm);
  color: var(--color-text-body-secondary);
}

@media (min-width: 64rem) {
  .home-offer__inner {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }

  .home-offer__features {
    flex: 1 1 55%;
  }

  .home-premium {
    flex: 1 1 45%;
  }
}

/* =========================================================
   Espacios
========================================================= */
.home-spaces__inner {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.home-spaces__intro {
  color: var(--color-text-body-default);
  max-width: 52ch;
}

.home-spaces__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.home-spaces__item {
  margin: 0;
}

.home-spaces__placeholder {
  display: block;
  aspect-ratio: 4 / 3;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--color-surface-default-deep), var(--color-surface-default));
}

.home-spaces__caption {
  margin-top: 0.75rem;
  color: var(--color-text-body-secondary);
  font-size: var(--font-size-body-sm);
}

@media (min-width: 48rem) {
  .home-spaces__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* =========================================================
   Noticias y Actualidad (sección clara)
========================================================= */
.home-news {
  background-color: var(--color-surface-alt);
}

.home-news__inner {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.home-news__title {
  color: var(--color-text-heading-default-on-alt);
}

.home-news__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.home-news__card {
  display: flex;
  flex-direction: column;
  background-color: var(--color-page-alt);
  border: 1px solid var(--color-border-secondary);
  border-radius: 8px;
  overflow: hidden;
}

.home-news__thumb {
  display: block;
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, var(--color-surface-default), var(--color-surface-default-deep));
}

.home-news__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
}

.home-news__tag {
  align-self: flex-start;
  font-size: var(--font-size-body-xsm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-text-eyebrow-default);
}

.home-news__card-title {
  font-family: latienne-pro, serif;
  font-size: var(--font-size-heading-md);
  color: var(--color-text-heading-default-on-alt);
}

.home-news__date {
  font-size: var(--font-size-body-sm);
  color: var(--color-text-body-tertiary-on-alt);
}

.home-news__actions {
  display: flex;
  justify-content: center;
}

@media (min-width: 48rem) {
  .home-news__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* =========================================================
   Aliados
========================================================= */
.home-partners__inner {
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.home-partners__label {
  color: var(--color-text-body-tertiary);
  font-size: var(--font-size-body-sm);
}

.home-partners__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: 100%;
  max-width: 720px;
}

.home-partners__logo {
  height: 48px;
  border-radius: 4px;
  background-color: var(--color-surface-default-deep);
  opacity: 0.5;
}

@media (min-width: 48rem) {
  .home-partners__grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
