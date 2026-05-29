<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },

  variant: {
    type: String,
    default: 'default'
  },

  invalid: {
    type: Boolean,
    default: false
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
  lg: 'input-lg',

}

const variantClasses = {

}

const inputPaddingClass = computed(() => {
  const left = props.icon && props.iconPosition === 'left' ? 'pl-10' : 'pl-4'
  const right = props.icon && props.iconPosition === 'right' ? 'pr-10' : 'pr-4'
  return `${left} ${right}`
})

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

        <div class="relative flex items-center">

            <component
                v-if="icon && iconPosition === 'left'"
                :is="icon"
                :size="iconSize"
                weight="fill"
                color="currentColor"
                class="absolute left-3 pointer-events-none text-(--color-text-body-default)"
            />

            <input
                :placeholder="showPlaceholder ? placeholderText : ''" v-bind="$attrs"
                :disabled="disabled"
                :aria-invalid="invalid"
                :class="[
                    `
                    inline-flex
                    w-full

                    border
                    border-(--color-border-secondary)
                    bg-(--color-surface-default)

                    text-(--color-text-body-default)

                    focus:outline-none
                    focus:ring-0
                    focus:ring-(--color-primary-default)
                    focus:ring-offset-0
                    focus:ring-offset-(--color-surface-default)

                    disabled:cursor-not-allowed
                    disabled:bg-(--color-surface-default-disabled)
                    disabled:border-(--color-border-secondary-disabled)
                    disabled:text-(--color-text-body-disabled)

                `,
                inputPaddingClass,
                sizeClasses[size],
                variantClasses[variant]
            ]"
            />

            <component
                v-if="icon && iconPosition === 'right'"
                :is="icon"
                :size="iconSize"
                weight="fill"
                color="currentColor"
                class="absolute right-3 pointer-events-none text-(--color-text-body-default)"
            />

            <slot />

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

input[aria-invalid="true"] {
  border-color: var(--color-border-destructive);
}


/* Size variants */
.input-md {
    height: 52px;
}


</style>