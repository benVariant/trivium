<script setup>
import NavLink from '@/components/global/NavLink.vue'

</script>

<template>
    <aside class="hidden lg:block w-64 shrink-0 px-6 py-8 border border-[var(--color-border-secondary)] rounded-lg bg-[var(--color-surface-default-deep)] sticky top-6 self-start h-fit">
        <nav class="flex flex-col gap-12">
            <div class="flex flex-col gap-8">
                <ul>   
                    <li><NavLink to="/#introduccion" size="sm" variant="neutral">Introducción</NavLink></li>
                    <li><NavLink to="/tokens" size="sm" variant="neutral">Tokens</NavLink></li>
                </ul>     
            </div>
            
            <div class="flex flex-col gap-8">
                <h3 class="text-eyebrow">Componentes Básicos</h3>
                <ul>
                    <li><NavLink to="/button-showcase" size="sm" variant="neutral">Button</NavLink></li>     
                    <li><NavLink to="/input-showcase" size="sm" variant="neutral">Input</NavLink></li>
                    <li><NavLink to="/nav-link-showcase" size="sm" variant="neutral">Nav link</NavLink></li>   
                </ul>
            </div>

        </nav>
    </aside> 
</template>