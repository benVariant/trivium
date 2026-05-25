<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Input from '@/components/global/Input.vue'
import { PhPlusCircle } from "@phosphor-icons/vue";

</script>

<template>
        <Header />

        <main class="flex flex-col items-center py-4 md:py-12">
            
            <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
                
                <Aside />

                <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">
                    
                   <section id="intro" class="container-col-md">

                        <div class="container-text">
                            <h1 class="text-4xl">Input</h1>
                            <p class="text-lg">Muestra un input de texto.</p>
                        </div>

                   
                        <div class="container-case-col">
                            
                            <Input class="fit-content" label="Label" ></Input>
                    
                        </div>
                    
                    </section>


                    <section id="variants" class="container-col-md">
                        
                        <div class="container-text">
                            
                            <h2 class="text-2xl text-[var(--color-text-heading-secondary)]">Estados</h2>
                            <p>Los inputs pueden estar en diferentes estados: normal(con hover) y disabled.</p>
                        
                        </div>

                        <div class="container-case-row">
                            
                            <Input label="Label"></Input>
                            <Input label="Label" placeholder="Disabled" disabled></Input>

                        </div>
                   
                    </section>    

                </div>

            </div>
        </main>
</template>
