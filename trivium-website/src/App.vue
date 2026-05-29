<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const route = useRoute()

// Algunas vistas (p. ej. el Home con su hero a pantalla completa) montan su
// propio header dentro del layout, así que aquí omitimos el header global.
const showGlobalHeader = computed(() => !route.meta.ownHeader)
</script>

<template>
  <AppHeader v-if="showGlobalHeader" />
  <RouterView />
  <AppFooter />
</template>
