<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const title = computed(() => (route.meta.title as string) ?? 'Página')
</script>

<template>
  <main class="page-stub container-col-md">
    <div class="container-text">
      <p class="text-eyebrow">Trivium</p>
      <h1>{{ title }}</h1>
      <p>Esta página aún no está maquetada. El layout compartido (Header y Footer) ya está activo.</p>
    </div>
  </main>
</template>

<style scoped>
.page-stub {
  min-height: 60vh;
  padding: 6rem 2rem;
  max-width: 1024px;
  margin-inline: auto;
}
</style>
