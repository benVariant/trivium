<script setup>
import { ref } from 'vue'
import { PhDiamond } from '@phosphor-icons/vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },

  size: {
    type: String,
    default: 'md'
  },

  variant: {
    type: String,
    default: 'default'
  }
})

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

const sizeClasses = {
  sm: 'accordion-sm',
  md: 'accordion-md',
  lg: 'accordion-lg'
}

const variantClasses = {
  default: 'accordion-default'
}

</script>

<template>
  <div :class="['accordion', sizeClasses[size], variantClasses[variant]]">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
      :class="{ 'accordion-item--open': openIndex === index }"
    >
      <button
        class="accordion-header"
        :aria-expanded="openIndex === index"
        @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
        <PhDiamond
          :size="16"
          :weight="openIndex === index ? 'fill' : 'regular'"
          color="currentColor"
          class="accordion-icon"
        />
      </button>

      <div
        class="accordion-panel"
        :class="{ 'accordion-panel--open': openIndex === index }"
      >
        <div class="accordion-content">
          <div class="accordion-body">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.accordion {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.accordion-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  cursor: pointer;
  text-align: left;
  color: var(--color-text-heading-default);
  font-family: "latienne-pro", serif;
  font-weight: 600;
  border-bottom: 1px solid var(--color-border-tertiary);

  transition: color 0.15s ease;

  &:hover {
    color: var(--color-label-default-hover);
  }

 
}

.accordion-icon {
  flex-shrink: 0;
}

.accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease;
}

.accordion-panel--open {
  grid-template-rows: 1fr;
}

.accordion-content {
  overflow: hidden;
}

.accordion-body {
  padding-top: 1rem;
  color: var(--color-text-body-secondary);
}

/* Tamaños */
.accordion-sm .accordion-header {
  padding: 10px 0;
  font-size: var(--font-size-body-sm);
}

.accordion-sm .accordion-body {
  padding-bottom: 10px;
  font-size: var(--font-size-body-sm);
}

.accordion-md .accordion-header {
  padding: 16px 0;
  font-size: var(--font-size-body-base);
}

.accordion-md .accordion-body {
  padding-bottom: 16px;
  font-size: var(--font-size-body-base);
}

.accordion-lg .accordion-header {
  padding: 20px 0;
  font-size: var(--font-size-body-lg);
}

.accordion-lg .accordion-body {
  padding-bottom: 20px;
  font-size: var(--font-size-body-lg);
}

</style>
