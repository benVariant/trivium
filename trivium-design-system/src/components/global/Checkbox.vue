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
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label class="checkbox-wrapper" :class="{ 'checkbox-wrapper--disabled': disabled }">

    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :aria-invalid="invalid"
      class="checkbox-input"
      @change="$emit('update:modelValue', $event.target.checked)"
    />

    <span class="checkbox-box" :class="{ 'checkbox-box--checked': modelValue, 'checkbox-box--invalid': invalid }" />

    <span v-if="label" class="checkbox-label">{{ label }}</span>

  </label>
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

  &::after {
    content: '';
    display: block;
    width: 5px;
    height: 9px;
    border: 2px solid var(--color-label-on-action);
    border-top: none;
    border-left: none;
    transform: rotate(45deg) translate(4px, 1px);
  }
}

.checkbox-box--invalid {
  border-color: var(--color-border-destructive);
}

.checkbox-label {
  font-size: var(--font-size-body-base);
  color: var(--color-text-body-default);
}

</style>
