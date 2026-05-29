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
  },

  placeholderText: {
    type: String,
    default: 'Escribe aquí'
  },

  rows: {
    type: Number,
    default: 4
  }
})

const sizeClasses = {
  sm: 'textarea-sm',
  md: 'textarea-md',
  lg: 'textarea-lg'
}
</script>

<template>
  <div class="flex flex-col gap-2">

    <label v-if="label" class="text-sm">{{ label }}</label>

    <textarea
      :placeholder="placeholderText"
      :disabled="disabled"
      :aria-invalid="invalid"
      :rows="rows"
      :class="['textarea-field', sizeClasses[size]]"
      v-bind="$attrs"
    />

  </div>
</template>

<style scoped>

.textarea-field {
  width: 100%;
  padding: 0.75rem 1rem;
  resize: vertical;

  border: 1px solid var(--color-border-secondary);
  background-color: var(--color-surface-default);
  color: var(--color-text-body-default);

  transition: border-color 0.2s, background-color 0.2s;

  &::placeholder {
    color: var(--color-text-placeholder-default);
  }

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
    resize: none;
    background-color: var(--color-surface-disabled);
    border-color: var(--color-border-disabled);
    color: var(--color-label-disabled);
  }

  &[aria-invalid="true"] {
    border-color: var(--color-border-destructive);
  }
}

/* Tamaños */
.textarea-sm {
  font-size: var(--font-size-body-sm);
}

.textarea-md {
  font-size: var(--font-size-body-base);
}

.textarea-lg {
  font-size: var(--font-size-body-lg);
}

</style>
