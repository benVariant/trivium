<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import NavLink from '@/components/global/NavLink.vue'


</script>

<template>
        <Header />

        <main class="flex flex-col items-center py-4 md:py-12">

            <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
                
                <Aside />
                
                <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">
                    
                        <section class="container-col-md">

                            <div class="container-text"> 

                                <h1 class="text-4xl">Nav link</h1>
                                <p class="text-lg">Enlace de navegación</p>
                            
                            </div>   

                            <div class="container-case-col">
                                
                                <NavLink to="#">Esto es un enlace de navegación</NavLink>

                            </div>

                         </section>

                         <section class="container-col-md">

                            <div class="container-text"> 

                                <h1 class="text-3xl">Varaintes</h1>
                                <p class="text-lg">Existen 3 variantes: primary, neutral y neutralSecondary</p>
                            
                            </div>   

                            <div class="container-case-col">
                                
                                <NavLink to="#">Primary Link</NavLink>
                                <NavLink to="#" variant="neutral">Neutral Link</NavLink>
                                <NavLink to="#" variant="neutralSecondary">Neutral Secondary Link</NavLink>

                            </div>

                         </section>

                        
                </div>

            </div>
        </main>
 
</template>