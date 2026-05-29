<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'primaryOutline' | 'neutral' | 'neutralOutline'
  disabled?: boolean
  icon?: Component | null
  iconPosition?: 'left' | 'right'
  iconSize?: number
  ariaExpanded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'primary',
  disabled: false,
  icon: null,
  iconPosition: 'left',
  iconSize: 20,
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
    :aria-expanded="ariaExpanded"
    :class="[
      `
        inline-flex
        items-center
        justify-center

        gap-2

        font-bold

        transition-colors

        focus:outline-none
        focus:ring-2
        focus:ring-var(--color-border-action)
        focus:ring-offset-0

        disabled:pointer-events-none
        disabled:cursor-not-allowed
      `,

      sizeClasses[size],
      variantClasses[variant]
    ]"
  >
    <component
    v-if="icon && iconPosition === 'left'"
    :is="icon"
    :size="iconSize"
    weight="fill"
    color="currentColor"
  />

  <slot />

  <component
    v-if="icon && iconPosition === 'right'"
    :is="icon"
    :size="iconSize"
    weight="fill"
    color="currentColor"
  />
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
    height: 52px;
    font-size: var(--font-size-body-base);
}

.button-lg {  
    width: fit-content;
    padding: 0 27px;
    height: 60px;
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

.button-primaryOutline {
    background-color: transparent;
    color: var(--color-surface-action);
    border: 1px solid var(--color-surface-action);

    &:hover {
        background-color: var(--color-surface-action);
        color: var(--color-label-on-action);
    }
}

.button-neutral {
    background-color: var(--color-surface-default);
    color: var(--color-label-default);

    &:hover {
        background-color: var(--color-surface-default-hover);
    }
}

.button-neutralOutline {
    background-color: transparent;
    color: var(--color-label-default);
    border: 1px solid var(--color-border-default);

    &:hover {
        border-color: var(--color-border-default-hover);
    }
}

button:disabled {
    background-color: var(--color-surface-disabled);
    color: var(--color-label-disabled);
    border-color: var(--color-border-disabled);
}

</style>
