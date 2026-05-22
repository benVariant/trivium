<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },

  variant: {
    type: String,
    default: 'primary'
  },

  disabled: {
    type: Boolean,
    default: false
  }
})

const sizeClasses = {
  sm: 'button-sm',
  md: 'button-md',
  lg: 'button-lg'
}

const variantClasses = {
  primary: `button-primary`,
  primaryOutline: `button-primaryOutline`,
  neutral: `button-neutral`,
  neutralOutline: `button-neutralOutline`,
}
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      `
        inline-flex
        items-center
        justify-center

        font-bold

        rounded-md
        transition-colors

        focus:outline-none
        focus:ring-2
        focus:ring-(var(--color-border-action))
        focus:ring-offset-2

        disabled:pointer-events-none
        disabled:opacity-50
      `,

      sizeClasses[size],
      variantClasses[variant]
    ]"
  >
    <slot />
  </button>
</template>

<style scoped>

/* Tamaños */
.button-sm {
    width: fit-content;
    padding: 0 9px;
    height: 44px;
    font-size: var(--font-size-body-sm);
}

.button-md {
    width: fit-content;
    padding: 0 18px;
    height: 60px;
    font-size: var(--font-size-body-md);
}

.button-lg {  
    width: fit-content;
    padding: 0 27px;
    height: 68px;
    font-size: var(--font-size-body-lg);
}

/* Variantes */
.button-primary {
    background-color: var(--color-surface-action);
    color: var(--color-label-on-action);

    &:hover {
        background-color: var(--color-surface-action-hover);
    }
}

</style>
