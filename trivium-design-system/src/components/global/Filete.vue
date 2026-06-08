<script setup>
import { computed } from 'vue'
import { PhStarFour } from '@phosphor-icons/vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'secondary'].includes(value)
  },

  iconPosition: {
    type: String,
    default: 'start',
    validator: (value) => ['start', 'center', 'end'].includes(value)
  }
})

const showLeftLine = computed(() => props.iconPosition !== 'start')
const showRightLine = computed(() => props.iconPosition !== 'end')
</script>

<template>
  <div class="filete" :class="{ 'filete--secondary': variant === 'secondary' }" role="separator">

    <!-- línea fina superior (solo secondary) -->
    <div v-if="variant === 'secondary'" class="filete-line filete-line--full" />

    <!-- fila central -->
    <div class="filete-row">

      <div v-if="showLeftLine" class="filete-line filete-line--left" />

      <PhStarFour
        weight="fill"
        :size="12"
        color="currentColor"
        class="filete-icon"
      />

      <div v-if="showRightLine" class="filete-line filete-line--right" />

    </div>

    <!-- línea fina inferior (solo secondary) -->
    <div v-if="variant === 'secondary'" class="filete-line filete-line--full" />

  </div>
</template>

<style scoped>

.filete {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  color: var(--color-border-action);
}

.filete-row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.filete-line {
  height: 1px;
}

/* Degradado: transparente en el extremo exterior → border-action junto al adorno */
.filete-line--left {
  flex: 1;
  background-image: linear-gradient(to right, transparent, var(--color-border-action));
}

.filete-line--right {
  flex: 1;
  background-image: linear-gradient(to right, var(--color-border-action), transparent);
}

/* Líneas finas superior/inferior (secondary): degradado simétrico a todo lo ancho */
.filete-line--full {
  width: 100%;
  background-image: linear-gradient(to right, transparent, var(--color-border-action), transparent);
}

/* secondary: las líneas centrales duplican su grosor */
.filete--secondary .filete-line--left,
.filete--secondary .filete-line--right {
  height: 2px;
}

.filete-icon {
  flex-shrink: 0;
}

</style>
