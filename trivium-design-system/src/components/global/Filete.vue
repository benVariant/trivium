<script setup>
import { computed } from 'vue'
import { PhDiamond } from '@phosphor-icons/vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'secondary'].includes(value)
  },

  iconPosition: {
    type: String,
    default: 'start',
    validator: (value) => ['start', 'center', 'end'].includes(value)
  }
})

const showLeftLine = computed(() => props.iconPosition !== 'start')
const showRightLine = computed(() => props.iconPosition !== 'end')
</script>

<template>
  <div class="filete" role="separator">

    <div v-if="showLeftLine" class="filete-line" />

    <div class="filete-decoration" :class="{ 'filete-decoration--group': variant === 'secondary' }">
      <PhDiamond
        v-if="variant === 'secondary'"
        weight="fill"
        :size="6"
        color="currentColor"
        class="filete-icon"
      />
      <PhDiamond
        weight="fill"
        :size="12"
        color="currentColor"
        class="filete-icon"
      />
      <PhDiamond
        v-if="variant === 'secondary'"
        weight="fill"
        :size="6"
        color="currentColor"
        class="filete-icon"
      />
    </div>

    <div v-if="showRightLine" class="filete-line" />

  </div>
</template>

<style scoped>

.filete {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: var(--color-border-action);
}

.filete-line {
  flex: 1;
  height: 1px;
  background-color: var(--color-border-tertiary);
}

.filete-icon {
  flex-shrink: 0;
}

.filete-decoration--group {
  display: flex;
  align-items: center;
  gap: 3px;
}

</style>
