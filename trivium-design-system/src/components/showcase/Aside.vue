<template>
    <aside class="hidden lg:block w-64 shrink-0 px-6 py-8 border border-[var(--color-border-secondary)] rounded-lg bg-[var(--color-surface-default-deep)] sticky top-6 self-start h-fit">
        <nav class="flex flex-col gap-12">
            <div class="flex flex-col gap-8">
                <h3 class="text-eyebrow">Prólogo</h3>
                <ul class="list-none">
                    <li><RouterLink to="/#introduccion" class="text-xs">Introducción</RouterLink></li>
                    <li><RouterLink to="/tokens" class="text-xs">Tokens</RouterLink></li>
                </ul>
            </div>
            
            <div class="flex flex-col gap-8">
                <h3 class="text-eyebrow">Componentes Básicos</h3>
                <ul>
                    <li><RouterLink to="/button-showcase" class="text-xs">Botones</RouterLink></li>     
                    <li><RouterLink to="/input-showcase" class="text-xs">Inputs</RouterLink></li>   
                </ul>
            </div>

        </nav>
    </aside> 
</template>