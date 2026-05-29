<script setup>

defineProps({
  label: {
    type: String,
    default: ''
  },

  disabled: {
    type: Boolean,
    default: false
  },

  value: {
    required: true
  },

  modelValue: {
    default: null
  },

  name: {
    type: String,
    default: ''
  }
})

import { PhCircle } from '@phosphor-icons/vue'

defineEmits(['update:modelValue'])
</script>

<template>
  <label class="radio-wrapper" :class="{ 'radio-wrapper--disabled': disabled }">

    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      :name="name"
      class="radio-input"
      @change="$emit('update:modelValue', value)"
    />

    <span class="radio-circle" :class="{ 'radio-circle--checked': modelValue === value }">
      <PhCircle
        v-if="modelValue === value"
        :size="10"
        weight="fill"
        color="currentColor"
      />
    </span>

    <span v-if="label" class="radio-label">{{ label }}</span>

  </label>
</template>

<style scoped>

.radio-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.radio-wrapper--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-circle {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid var(--color-border-secondary);
  background-color: var(--color-surface-default);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s, background-color 0.15s;

  .radio-wrapper:not(.radio-wrapper--disabled):hover & {
    border-color: var(--color-border-action);
  }
}

.radio-circle--checked {
  background-color: var(--color-surface-action);
  border-color: var(--color-surface-action);
  color: var(--color-label-on-action);
}

.radio-label {
  font-size: var(--font-size-body-base);
  color: var(--color-text-body-default);
}

</style>
