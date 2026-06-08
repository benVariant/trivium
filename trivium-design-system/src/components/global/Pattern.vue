<script setup lang="ts">
interface Props {
  reveal?:
    | 'full'
    | 'left'
    | 'right'
    | 'sides'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
}

withDefaults(defineProps<Props>(), {
  reveal: 'full',
})
</script>

<template>
  <div :class="['pattern', `pattern--${reveal}`]" aria-hidden="true" />
</template>

<style scoped>
.pattern {
  /* Ancho del tile; controla la densidad. La altura es auto → conserva el
     aspecto del SVG (140×80) para que el mosaico calce sin costuras. */
  --pattern-size: 140px;

  position: absolute;
  inset: 0;
  pointer-events: none;

  background-image: url('../../assets/pattern.svg');
  background-repeat: repeat;
  background-size: var(--pattern-size) auto;
}

/* ── Reveal: máscara que muestra el patrón solo en una zona ── */

/* Laterales (left / right / sides): fade horizontal intersectado con un
   fade vertical (transparente arriba y abajo). */
.pattern--left,
.pattern--right,
.pattern--sides {
  --pattern-fade-v: linear-gradient(to bottom, transparent, #000, transparent);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}

.pattern--left {
  -webkit-mask-image: linear-gradient(to right, #000, transparent 35%), var(--pattern-fade-v);
  mask-image: linear-gradient(to right, #000, transparent 35%), var(--pattern-fade-v);
}

.pattern--right {
  -webkit-mask-image: linear-gradient(to left, #000, transparent 35%), var(--pattern-fade-v);
  mask-image: linear-gradient(to left, #000, transparent 35%), var(--pattern-fade-v);
}

.pattern--sides {
  -webkit-mask-image: linear-gradient(to right, #000, transparent 30%, transparent 70%, #000), var(--pattern-fade-v);
  mask-image: linear-gradient(to right, #000, transparent 30%, transparent 70%, #000), var(--pattern-fade-v);
}

/* Esquinas: fade DIAGONAL → el patrón se concentra en una esquina. */
.pattern--top-left {
  -webkit-mask-image: linear-gradient(to bottom right, #000, transparent 45%);
  mask-image: linear-gradient(to bottom right, #000, transparent 45%);
}

.pattern--top-right {
  -webkit-mask-image: linear-gradient(to bottom left, #000, transparent 45%);
  mask-image: linear-gradient(to bottom left, #000, transparent 45%);
}

.pattern--bottom-left {
  -webkit-mask-image: linear-gradient(to top right, #000, transparent 45%);
  mask-image: linear-gradient(to top right, #000, transparent 45%);
}

.pattern--bottom-right {
  -webkit-mask-image: linear-gradient(to top left, #000, transparent 45%);
  mask-image: linear-gradient(to top left, #000, transparent 45%);
}
</style>
