<script setup>

import Button from '@/components/global/Button.vue'
import { ref, watch, onUnmounted } from 'vue'
import { PhList, PhX } from '@phosphor-icons/vue';

const isOpen = ref(false)

watch(isOpen, (open) => {
  document.body.classList.toggle('no-scroll', open)
})

onUnmounted(() => {
  document.body.classList.remove('no-scroll')
})

function toggleMenu() {
  isOpen.value = !isOpen.value
  
}

</script>

<template>

    <header class="flex w-full justify-center py-6 px-6 md:px-6">
        
        <div class="flex flex-row gap-6 max-w-5xl w-full justify-between items-center">
            
            <RouterLink to="/">

                <img src="/trivium-logo.svg" alt="Trivium Logo" width="208" height="40" />
                
            </RouterLink>

                <Button
                    class="md:hidden"

                    @click="toggleMenu"
                    :aria-expanded="isOpen"
                    variant="primaryOutline"
                    size="sm"
                    :icon="PhList"
                    >


                </Button>

                <nav
                    class="menu"
                    :class="{ 'menu--open': isOpen }"
                    >

                    <div class="flex flex-row gap-6 w-full justify-between items-center py-6 px-6 md:px-6">   

                        <RouterLink to="/">

                            <img src="/trivium-logo.svg" alt="Trivium Logo" width="208" height="40" />
                
                        </RouterLink>
                        
                        <Button

                            class="md:hidden lg:hidden"

                            @click="toggleMenu"
                            :aria-expanded="isOpen ? 'true' : 'false'"
                            variant="primaryOutline"
                            size="sm"
                            :icon="PhX"
                            >

                        </Button>

                    </div>

                    <div class="flex flex-col py-6 px-6 gap-12">

                        <div class="flex flex-col gap-4">

                            <a><RouterLink to="/#introduccion" class="text-xs">Introducción</RouterLink></a>
                            <a><RouterLink to="/tokens" class="text-xs">Tokens</RouterLink></a>
                       
                        </div>

                        <h3 class="text-eyebrow">Componentes Básicos</h3>
                        
                        <div class="flex flex-col gap-4">
                            
                            <a><RouterLink to="/button-showcase" class="text-xs">Botones</RouterLink></a>     
                            <a><RouterLink to="/input-showcase" class="text-xs">Inputs</RouterLink></a> 
                        
                        </div>

                    </div> 
                </nav>
            
            <div class="flex-col text-end hidden md:flex">

                <h1 class="text-xsm">Trivium Design System</h1>
                <p class="text-xs">Versión 1.0.0 — Guía oficial de estilos y componentes de la marca.</p>
            
            </div> 

        </div>
    
    </header>

</template>

<style scoped>

.menu {
    display: none;

}

.menu.menu--open {
  position: absolute;
  right: 0;
  bottom: 0;  
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  min-width: 100dvw;
  background-color: var(--color-surface-default-deep);
}

</style>