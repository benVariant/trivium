<script setup>

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
  }
})

const sizeClasses = {
  sm: 'datepicker-sm',
  md: 'datepicker-md',
  lg: 'datepicker-lg'
}
</script>

<template>
  <div class="flex flex-col gap-2">

    <label v-if="label" class="text-sm">{{ label }}</label>

    <input
      type="date"
      :disabled="disabled"
      :aria-invalid="invalid"
      :class="['datepicker-field', sizeClasses[size]]"
      v-bind="$attrs"
    />

  </div>
</template>

<style scoped>

.datepicker-field {
  width: 100%;
  padding: 0 1rem;
  cursor: pointer;

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

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }
}

/* Tamaños */
.datepicker-sm {
  height: 44px;
  font-size: var(--font-size-body-sm);
}

.datepicker-md {
  height: 52px;
  font-size: var(--font-size-body-base);
}

.datepicker-lg {
  height: 60px;
  font-size: var(--font-size-body-lg);
}

</style>
