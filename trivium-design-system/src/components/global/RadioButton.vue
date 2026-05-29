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

    <span class="radio-circle" :class="{ 'radio-circle--checked': modelValue === value }" />

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
  border-color: var(--color-surface-action);

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--color-surface-action);
  }
}

.radio-label {
  font-size: var(--font-size-body-base);
  color: var(--color-text-body-default);
}

</style>
