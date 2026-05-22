<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Button from '@/components/global/Button.vue'
</script>

<template>
    <body>
        <Header />

        <main class="flex flex-col items-center py-12">
            <div class="flex flex-row gap-12 max-w-5xl w-full mx-auto py-12">
                
                <Aside />
                
                <main class="flex flex-col gap-12 w-full">
                    
                    <section class="flex flex-col gap-8">

                        <div class="flex flex-col gap-4">
                            <h1 class="text-4xl">Botones</h1>
                            <p class="text-lg">Muestra un botón o un componente que se parece a un botón.</p>
                        </div>

                        <div class="flex flex-col border border-[var(--color-border-secondary)] h-96 rounded-lg items-center justify-center gap-4">
                            
                            <Button size="md" variant="primary">Botón Mediano</Button>


                        </div>

                    </section>


                </main>

            </div>
        </main>

    </body> 
</template>