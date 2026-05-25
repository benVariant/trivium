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

    placeholderText: {
    type: String,
    default: 'Placeholder'
  },

  showPlaceholder: {
    type: Boolean,
    default: true
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

}

</script>


<template>

    <div class="flex flex-col gap-2">

        <label
            v-if="label"
            :class="[
            `
            text-sm
            `
        ]"
        >
        {{ label }}
        </label>

        <div class=" flex flex-row gap-2">

            <input
                :placeholder="showPlaceholder ? placeholderText : ''" v-bind="$attrs"
                :disabled="disabled"
                :class="[
                    `
                    inline-flex
                    w-full
                    
                    px-4

                    rounded-sm
                    border
                    border-[var(--color-border-secondary)]
                    bg-[var(--color-surface-default)]

                    text-[var(--color-text-body-default)]
                    
                    focus:outline-none
                    focus:ring-0
                    focus:ring-[var(--color-primary-default)]
                    focus:ring-offset-0
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

/* State variants */
input:hover {
    transition: border-color 0.2s, background-color 0.2s;
    border-color: var(--color-border-default-hover);
    background-color: var(--color-surface-default-hover);
}

input:disabled {
    cursor: not-allowed;
    background-color: var(--color-surface-default-disabled);
    border-color: var(--color-border-secondary-disabled);
    color: var(--color-text-body-disabled);
}


/* Size variants */
.input-md {
    height: 60px;
}


</style>