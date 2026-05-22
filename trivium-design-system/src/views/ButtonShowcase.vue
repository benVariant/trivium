<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Button from '@/components/global/Button.vue'
import { PhPlusCircle } from "@phosphor-icons/vue";

</script>

<template>
        <Header />

        <main class="flex flex-col items-center py-12">

            <div class="flex flex-row gap-12 max-w-5xl w-full mx-auto py-12 items-start">
                
                <Aside />
                
                <section class="flex flex-col gap-12 w-full px-6 md:px-6">
                    
                        <div class="flex flex-col gap-4">
                            <h1 class="text-4xl">Botones</h1>
                            <p class="text-lg">Muestra un botón o un componente que se parece a un botón.</p>
                        </div>

                        <div class="flex flex-col bg-[var(--color-surface-default)]  border border-[var(--color-border-secondary)] h-96 rounded-lg items-center justify-center gap-4">
                            
                            <Button size="md" variant="primary">Button</Button>

                        </div>

                        <div class="flex flex-col gap-4">
                            <h2 class="text-2xl text-[var(--color-text-heading-secondary)]">Variantes</h2>
                            <p>Los botones vienen en cuatro variantes: primary, primaryOutline, neutral y neutralOutline.</p>
                        </div>

                        <div class="flex flex-row flex-wrap bg-[var(--color-surface-default)] border border-[var(--color-border-secondary)] h-96 rounded-lg items-center justify-center gap-4">
                            
                            <Button size="lg" variant="primary">Button</Button>
                            <Button size="lg" variant="primaryOutline">Button</Button>
                            <Button size="lg" variant="neutral">Button</Button>
                            <Button size="lg" variant="neutralOutline">Button</Button>


                        </div>


                        <div class="flex flex-col gap-4">
                            <h2 class="text-2xl">Tamaños</h2>
                            <p>Los botones vienen en tres tamaños: lg, md y sm.</p>
                        </div>

                        <div class="flex flex-row bg-[var(--color-surface-default)] border border-[var(--color-border-secondary)] h-96 rounded-lg items-center justify-center gap-4">
                            
                            <Button size="lg" variant="primary">Button</Button>
                            <Button size="md" variant="primaryOutline">Button</Button>
                            <Button size="sm" variant="neutralOutline">Button</Button>

                        </div>

                    

                        <div class="flex flex-col gap-4">
                            <h2 class="text-2xl">Estados</h2>
                            <p>Los botones pueden estar en diferentes estados: normal(con hover) y disabled.</p>
                        </div>

                        <div class="flex flex-row bg-[var(--color-surface-default)] border border-[var(--color-border-secondary)] h-96 rounded-lg items-center justify-center gap-4">
                            
                            <Button size="lg" variant="primary">Button</Button>
                            <Button size="lg" variant="primary" disabled>Button</Button>
                        </div>


                        <div class="flex flex-col gap-4">
                            <h2 class="text-2xl">Variante con iconos</h2>
                            <p>Los botones pueden contener iconos al inicio o al final.</p>
                        </div>

                        <div class="flex flex-row bg-[var(--color-surface-default)] border border-[var(--color-border-secondary)] h-96 rounded-lg items-center justify-center gap-4">
                            <Button size="lg" variant="primary" :icon="PhPlusCircle">Button</Button>
                            <Button size="lg" variant="primary" :icon="PhPlusCircle" iconPosition="right">Button</Button>
                        </div>

                </section>

            </div>
        </main>
 
</template>