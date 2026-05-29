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

  modelValue: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="toggle-wrapper" :class="{ 'toggle-wrapper--disabled': disabled }">

    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      class="toggle-track"
      :class="{ 'toggle-track--on': modelValue }"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span class="toggle-thumb" :class="{ 'toggle-thumb--on': modelValue }" />
    </button>

    <span v-if="label" class="toggle-label">{{ label }}</span>

  </div>
</template>

<style scoped>

.toggle-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.toggle-wrapper--disabled {
  opacity: 0.5;
  pointer-events: none;
}

.toggle-track {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  background-color: var(--color-surface-muted);
  transition: background-color 0.2s ease;

  &:focus-visible {
    outline: 2px solid var(--color-border-action);
    outline-offset: 2px;
  }
}

.toggle-track--on {
  background-color: var(--color-surface-action);
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--color-label-default);
  transition: transform 0.2s ease;
}

.toggle-thumb--on {
  transform: translateX(20px);
  background-color: var(--color-label-on-action);
}

.toggle-label {
  font-size: var(--font-size-body-base);
  color: var(--color-text-body-default);
}

</style>
