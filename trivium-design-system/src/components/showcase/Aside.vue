<script setup>
import NavLink from '@/components/global/NavLink.vue'
</script>

<template>
    <aside class="hidden lg:block w-64 shrink-0 px-6 py-8 border border-(--color-border-secondary) rounded-lg bg-(--color-surface-default-deep) sticky top-6 self-start h-fit">
        <nav class="flex flex-col gap-10">

            <div class="flex flex-col gap-3">
                <ul>
                    <li><NavLink to="/" size="sm" variant="neutral">Inicio</NavLink></li>
                </ul>
            </div>

            <div class="flex flex-col gap-3">
                <h3 class="text-eyebrow">Fundamentos</h3>
                <ul>
                    <li><NavLink to="/typography" size="sm" variant="neutral">Tipografía</NavLink></li>
                    <li><NavLink to="/colors" size="sm" variant="neutral">Colores</NavLink></li>
                </ul>
            </div>

            <div class="flex flex-col gap-3">
                <h3 class="text-eyebrow">Sistema de Tokens</h3>
                <ul>
                    <li><NavLink to="/tokens" size="sm" variant="neutral">Tokens</NavLink></li>
                </ul>
            </div>

            <div class="flex flex-col gap-3">
                <h3 class="text-eyebrow">Componentes Básicos</h3>
                <ul>
                    <li><NavLink to="/button-showcase" size="sm" variant="neutral">Button</NavLink></li>
                    <li><NavLink to="/input-showcase" size="sm" variant="neutral">Input</NavLink></li>
                    <li><NavLink to="/nav-link-showcase" size="sm" variant="neutral">Nav Link</NavLink></li>
                </ul>
            </div>

        </nav>
    </aside>
</template>