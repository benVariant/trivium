<template>
    <aside class="hidden lg:block w-64 shrink-0 px-6 py-8 border border-[var(--color-border-secondary)] rounded-lg bg-[var(--color-surface-default-deep)]">
        <nav class="flex flex-col gap-4">
            <div class="flex flex-col gap-4">
                <h3 class="eyebrow">Prólogo</h3>
                <ul>
                    <li><RouterLink to="/#introduccion" class="text-xs">Introducción</RouterLink></li>
                    <li><RouterLink to="/#estructura" class="text-xs">Estructura del Proyecto</RouterLink></li>
                </ul>
            </div>

            <hr>
            
            <div class="flex flex-col gap-4">
                <h3 class="eyebrow">Componentes Básicos</h3>
                <ul>
                    <li><RouterLink to="/button-showcase" class="text-xs">Botones</RouterLink></li>        
                </ul>
            </div>

        </nav>
    </aside> 
</template>