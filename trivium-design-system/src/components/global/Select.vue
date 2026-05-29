<script setup>
import { PhCaretDown } from '@phosphor-icons/vue'

defineProps({
  size: {
    type: String,
    default: 'md'
  },

  disabled: {
    type: Boolean,
    default: false
  },

  invalid: {
    type: Boolean,
    default: false
  },

  label: {
    type: String,
    default: ''
  },

  options: {
    type: Array,
    default: () => []
  },

  placeholderText: {
    type: String,
    default: 'Selecciona una opción'
  }
})

const sizeClasses = {
  sm: 'select-sm',
  md: 'select-md',
  lg: 'select-lg'
}
</script>

<template>
  <div class="flex flex-col gap-2">

    <label v-if="label" class="text-sm">{{ label }}</label>

    <div class="select-wrapper">
      <select
        :disabled="disabled"
        :aria-invalid="invalid"
        :class="['select-field', sizeClasses[size]]"
        v-bind="$attrs"
      >
        <option value="" disabled selected>{{ placeholderText }}</option>
        <option
          v-for="opt in options"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>

      <PhCaretDown
        :size="16"
        weight="bold"
        color="currentColor"
        class="select-arrow"
      />
    </div>

  </div>
</template>

<style scoped>

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.select-field {
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;

  padding-left: 1rem;
  padding-right: 2.5rem;

  border: 1px solid var(--color-border-secondary);
  background-color: var(--color-surface-default);
  color: var(--color-text-body-default);

  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    border-color: var(--color-border-default-hover);
    background-color: var(--color-surface-default-hover);
  }

  &:focus {
    outline: none;
    border-color: var(--color-border-action);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-surface-disabled);
    border-color: var(--color-border-disabled);
    color: var(--color-label-disabled);
  }

  &[aria-invalid="true"] {
    border-color: var(--color-border-destructive);
  }
}

.select-arrow {
  position: absolute;
  right: 0.75rem;
  pointer-events: none;
  color: var(--color-icon-secondary);
}

/* Tamaños */
.select-sm {
  height: 44px;
  font-size: var(--font-size-body-sm);
}

.select-md {
  height: 52px;
  font-size: var(--font-size-body-base);
}

.select-lg {
  height: 60px;
  font-size: var(--font-size-body-lg);
}

</style>
