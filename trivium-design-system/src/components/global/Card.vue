<script setup lang="ts">
import { PhDiamond } from '@phosphor-icons/vue'

interface Props {
  variant?: 'default' | 'secondary' | 'action' | 'deep-default' | 'deep-secondary' | 'deep-action'
  cornerIcon?: 'default' | 'primary' | 'action'
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  cornerIcon: undefined,
})

const iconColors = {
  default: 'var(--color-icon-default)',
  primary: 'var(--color-primary-500)',
  action:  'var(--color-icon-action)',
}
</script>

<template>
  <div :class="['card', `card--${variant}`]">
    <template v-if="cornerIcon">
      <PhDiamond class="card-icon card-icon--tl" weight="fill" :size="12" :color="iconColors[cornerIcon]" />
      <PhDiamond class="card-icon card-icon--tr" weight="fill" :size="12" :color="iconColors[cornerIcon]" />
      <PhDiamond class="card-icon card-icon--bl" weight="fill" :size="12" :color="iconColors[cornerIcon]" />
      <PhDiamond class="card-icon card-icon--br" weight="fill" :size="12" :color="iconColors[cornerIcon]" />
    </template>
    <slot />
  </div>
</template>

<style scoped>
.card {
  position: relative;
  padding: 1.5rem;
}

.card--default {
  background-color: var(--color-surface-default);
  border: 1px solid var(--color-border-default);
}

.card--secondary {
  background-color: var(--color-surface-default);
  border: 1px solid var(--color-border-secondary);
}

.card--action {
  background-color: var(--color-surface-default);
  border: 1px solid var(--color-border-action);

}

.card--deep-default {
  background-color: var(--color-surface-default-deep);
  border: 1px solid var(--color-border-default);
}

.card--deep-secondary {
  background-color: var(--color-surface-default-deep);
  border: 1px solid var(--color-border-secondary);
}

.card--deep-action {
  background-color: var(--color-surface-default-deep);
  border: 1px solid var(--color-border-action);
}

.card-icon {
  position: absolute;
}

.card-icon--tl { top:    -6px; left:  -6px; }
.card-icon--tr { top:    -6px; right: -6px; }
.card-icon--bl { bottom: -6px; left:  -6px; }
.card-icon--br { bottom: -6px; right: -6px; }

</style>


