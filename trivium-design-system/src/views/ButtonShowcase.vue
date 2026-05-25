<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Button from '@/components/global/Button.vue'
import { PhPlusCircle } from "@phosphor-icons/vue";

</script>

<template>
        <Header />

        <main class="flex flex-col items-center py-4 md:py-12">

            <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
                
                <Aside />
                
                <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">
                    
                        <section class="container-col-md">

                            <div class="container-text"> 

                                <h1 class="text-4xl">Botones</h1>
                                <p class="text-lg">Muestra un botón o un componente que se parece a un botón.</p>
                            
                            </div>   

                            <div class="container-case-col">
                                
                                <Button size="md" variant="primary">Button</Button>

                            </div>

                         </section>

                        
                        <section class="container-col-md">
                         
                            <div class="contianer-text">

                                <h2 class="text-2xl text-[var(--color-text-heading-secondary)]">Variantes</h2>
                                <p>Los botones vienen en cuatro variantes: primary, primaryOutline, neutral y neutralOutline.</p>
                            
                            </div>

                            <div class="container-case-row flex-wrap">
                                
                                <Button size="lg" variant="primary">Button</Button>
                                <Button size="lg" variant="primaryOutline">Button</Button>
                                <Button size="lg" variant="neutral">Button</Button>
                                <Button size="lg" variant="neutralOutline">Button</Button>

                            </div>

                        </section>

                        <section class="container-col-md">

                            <div class="contianer-text">

                                <h2 class="text-2xl">Tamaños</h2>
                                <p>Los botones vienen en tres tamaños: lg, md y sm.</p>

                            </div>

                            <div class="container-case-row">
                                
                                <Button size="lg" variant="primary">Button</Button>
                                <Button size="md" variant="primaryOutline">Button</Button>
                                <Button size="sm" variant="neutralOutline">Button</Button>

                            </div>

                        </section>

                        <section class="container-col-md">

                            <div class="contianer-text">

                                <h2 class="text-2xl">Estados</h2>
                                <p>Los botones pueden estar en diferentes estados: normal(con hover) y disabled.</p>
                            
                            </div>


                            <div class="container-case-col">
                                
                                <Button size="lg" variant="primary">Button</Button>
                                <Button size="lg" variant="primary" disabled>Button</Button>
                           
                            </div>
                        
                        </section>

                         <section class="container-col-md">

                            <div class="contianer-text">
                                <h2 class="text-2xl">Variante con iconos</h2>
                                <p>Los botones pueden contener iconos al inicio o al final.</p>
                            </div>

                            <div class="container-case-col">
                                <Button size="lg" variant="primary" :icon="PhPlusCircle">Button</Button>
                                <Button size="lg" variant="primary" :icon="PhPlusCircle" iconPosition="right">Button</Button>
                            </div>

                        </section>
                </div>

            </div>
        </main>
 
</template>