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

  invalid: {
    type: Boolean,
    default: false
  },

  modelValue: {
    type: Boolean,
    default: false
  },

  hint: {
    type: String,
    default: ''
  }
})

import { PhSquare } from '@phosphor-icons/vue'

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="checkbox-root">
    <label class="checkbox-wrapper" :class="{ 'checkbox-wrapper--disabled': disabled }">

      <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        :aria-invalid="invalid"
        class="checkbox-input"
        @change="$emit('update:modelValue', $event.target.checked)"
      />

      <span class="checkbox-box" :class="{ 'checkbox-box--checked': modelValue, 'checkbox-box--invalid': invalid }">
        <PhSquare
          v-if="modelValue"
          :size="12"
          weight="fill"
          color="currentColor"
        />
      </span>

      <span v-if="label" class="checkbox-label">{{ label }}</span>

    </label>

    <p v-if="hint" class="checkbox-hint">{{ hint }}</p>
  </div>
</template>

<style scoped>

.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.checkbox-wrapper--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-box {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border-secondary);
  background-color: var(--color-surface-default);
  transition: border-color 0.15s, background-color 0.15s;

  .checkbox-wrapper:not(.checkbox-wrapper--disabled):hover & {
    border-color: var(--color-border-action);
  }
}

.checkbox-box--checked {
  background-color: var(--color-surface-action);
  border-color: var(--color-surface-action);
  color: var(--color-label-on-action);
}

.checkbox-box--invalid {
  border-color: var(--color-border-destructive);
}

.checkbox-label {
  font-size: var(--font-size-body-base);
  color: var(--color-text-body-default);
}

.checkbox-hint {
  font-size: var(--font-size-body-sm);
  color: var(--color-text-body-secondary);
  margin-top: 0.25rem;
  
}

</style>
