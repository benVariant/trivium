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
                    class="md:flex lg:hidden"

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

                            class="hidden md:flex lg:hidden"

                            @click="toggleMenu"
                            :aria-expanded="isOpen ? 'true' : 'false'"
                            variant="primaryOutline"
                            size="sm"
                            :icon="PhX"
                            >

                        </Button>

                    </div>

                    <div class="flex flex-col py-6 px-6 gap-10">

                        <div class="flex flex-col gap-4">
                            <RouterLink to="/" class="text-xs" @click="toggleMenu">Inicio</RouterLink>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h3 class="text-eyebrow">Fundamentos</h3>
                            <RouterLink to="/typography" class="text-xs" @click="toggleMenu">Tipografía</RouterLink>
                            <RouterLink to="/colors" class="text-xs" @click="toggleMenu">Colores</RouterLink>
                            <RouterLink to="/layout" class="text-xs" @click="toggleMenu">Layout</RouterLink>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h3 class="text-eyebrow">Sistema de Tokens</h3>
                            <RouterLink to="/tokens" class="text-xs" @click="toggleMenu">Tokens</RouterLink>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h3 class="text-eyebrow">Componentes Básicos</h3>
                            <RouterLink to="/accordion-showcase" class="text-xs" @click="toggleMenu">Accordion</RouterLink>
                            <RouterLink to="/button-showcase" class="text-xs" @click="toggleMenu">Button</RouterLink>
                            <RouterLink to="/nav-link-showcase" class="text-xs" @click="toggleMenu">Nav Link</RouterLink>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h3 class="text-eyebrow">Formularios</h3>
                            <RouterLink to="/input-showcase" class="text-xs" @click="toggleMenu">Input</RouterLink>
                            <RouterLink to="/select-showcase" class="text-xs" @click="toggleMenu">Select</RouterLink>
                            <RouterLink to="/datepicker-showcase" class="text-xs" @click="toggleMenu">Date Picker</RouterLink>
                            <RouterLink to="/textarea-showcase" class="text-xs" @click="toggleMenu">Textarea</RouterLink>
                            <RouterLink to="/checkbox-showcase" class="text-xs" @click="toggleMenu">Checkbox</RouterLink>
                            <RouterLink to="/radio-showcase" class="text-xs" @click="toggleMenu">Radio Button</RouterLink>
                            <RouterLink to="/toggle-showcase" class="text-xs" @click="toggleMenu">Toggle</RouterLink>
                            <RouterLink to="/phone-input-showcase" class="text-xs" @click="toggleMenu">Phone Input</RouterLink>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h3 class="text-eyebrow">Brand Assets</h3>
                            <RouterLink to="/filete-showcase" class="text-xs" @click="toggleMenu">Filete</RouterLink>
                        </div>

                    </div> 
                </nav>
            
            <div class="flex-col text-end hidden md:hideen lg:flex">

                <span class="text-heading text-xsm">Trivium Design System</span>
                <p class="text-xs">Versión 1.0.0 — Guía oficial de estilos y componentes de la marca.</p>
            
            </div> 

        </div>
    
    </header>

</template>

<style scoped>

.menu {
    display: none;
    z-index: 1000;
}

.menu.menu--open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--color-surface-default-deep);
}

.menu.menu--open > div:last-child {
  flex: 1;
  overflow-y: auto;
}

</style>