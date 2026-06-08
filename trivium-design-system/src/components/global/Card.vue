<script setup lang="ts">
interface Props {
  variant?: 'default' | 'deep'
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <div :class="['card', `card--${variant}`]">
    <slot />
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem;
  gap: 2rem;
}

.card--default {
  background-color: var(--color-surface-default);
  box-shadow: var(--shadow-lg);
}

.card--deep {
  background-color: var(--color-surface-default-deep);
  box-shadow: var(--shadow-lg);
}
</style>
