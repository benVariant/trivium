<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import { PhPlusCircle } from "@phosphor-icons/vue";

</script>

<template>
        <Header />

        <main class="flex flex-col items-center py-12">
            
            <div class="flex flex-row gap-12 max-w-5xl w-full mx-auto py-12 items-start">
                
                <Aside />

                <div class="flex flex-col gap-12 w-full px-6 md:px-6">
                    
                   <section id="intro" class="flex flex-col gap-8">

                        <div class="flex flex-col gap-4">
                            <h1 class="text-4xl">Input</h1>
                            <p class="text-lg">Muestra un input de texto.</p>
                        </div>

                    </section>





                </div>

            </div>
        </main>
</template>
