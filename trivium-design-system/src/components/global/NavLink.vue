<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    to: {
        type: String,
        required: true
    },

    size: {
        type: String,
        default: 'md'
    },

    variant: {
        type: String,
        default: 'primary',
    }

})  

const sizeClasses = {
    xsm: 'text-xsm',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg'
}

const variantClasses = {
    primary: 'link-primary',
    neutral: 'link-neutral',
    neutralSecondary: 'link-neutral-secondary',
}

</script>

<template>
    
    <RouterLink :to="to" 
    class="link"
    :class="sizeClasses[size], variantClasses[variant]">

    <slot />

    </RouterLink>


</template>

<style scoped>

.link-primary {
    color: var(--color-label-action);
}

.link-neutral {
    color: var(--color-label-default);
}

.link-neutral-secondary {
    color: var(--color-label-secondary);
}


.link {
    position: relative;
    width: fit-content;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
}

.link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;

  width: 100%;
  height: 1px;

  background-color: var(--color-surface-action);

  transform: scaleX(0);
  transform-origin: left;

  transition: transform 0.25s ease;
}

/* hover animation */
.link:hover::after {
  transform: scaleX(1);
}

.link:hover {
    color: var(--color-label-action);
}

</style>