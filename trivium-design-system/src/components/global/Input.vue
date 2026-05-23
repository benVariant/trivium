<script setup>

const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },

  variant: {
    type: String,
    default: 'default'
  },

  disabled: {
    type: Boolean,
    default: false
  },

  label: {
    type: String,
    default: ''
  },

  icon: {
    type: [Object, Function],
    default: null
  },

  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },

  iconSize: {
    type: Number,
    default: 20
  }
})

const sizeClasses = {
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg'
}

const variantClasses = {
  default: `input-default`,
}

</script>


<template>

    <div class="flex flex-col gap-2 w-full">

        <label
            v-if="label"
            :class="[
            `
            text-sm
            font-bold
            `
        ]"
        >
        {{ label }}
        </label>

        <div class=" flex flex-row gap-2">

            <input
                :disabled="disabled"
                :class="[
                    `
                    inline-flex

                    rounded-lg
                    border
                    border-[var(--color-border-secondary)]
                    bg-[var(--color-surface-default)]

                    text-[var(--color-text-body-default)]
                    
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[var(--color-primary-default)]
                    focus:ring-offset-2
                    focus:ring-offset-[var(--color-surface-default)]

                    disabled:cursor-not-allowed
                    disabled:bg-[var(--color-surface-default-disabled)]
                    disabled:border-[var(--color-border-secondary-disabled)]
                    disabled:text-[var(--color-text-body-disabled)]
                    
                `,
                sizeClasses[size],
                variantClasses[variant]
            ]"
            />

            <component
                v-if="icon && iconPosition === 'left'"
                :is="icon"
                :size="iconSize"
                weight="fill"
                color="currentColor"
            />
            
            <slot />
            
            <component
                v-if="icon && iconPosition === 'right'"
                :is="icon"
                :size="iconSize"
                weight="fill"
                color="currentColor"
            />

        </div>
    </div>
    
</template>

<style scoped>

.input-default {
    padding: 0.5rem 0.75rem;
}

</style>