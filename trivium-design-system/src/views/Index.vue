<script setup>
import Header from '@/components/showcase/Header.vue'
import Button from '@/components/global/Button.vue'
import Aside from '@/components/showcase/Aside.vue'
</script>

<template>
    <body>
        <Header />

        <main class="flex flex-col items-center py-4 md:py-12">

            <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">

                <Aside />
                      
                <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

                    <section id="introduccion" class="container-text">

                        <h1>Introducción</h1>
                        <p>Bienvenido al sistema de diseño de <strong>Trivium</strong>. Este documento sirve como la única fuente de verdad para diseñadores y desarrolladores, asegurando que el producto mantenga coherencia visual y de comportamiento.</p>
                    
                    </section>

                    <hr>
                        
                    <section  id="estructura" class="container-text">

                            <h2>Estructura del Proyecto</h2>
                            <p>Trivium es un sistema de diseño modular construido con <strong>Vue 3 + TypeScript</strong>, que combina <strong>Tailwind CSS</strong> para la construcción de layouts con un <strong>sistema de tokens propio</strong> para las decisiones de diseño. Esta combinación permite escalabilidad, consistencia y reutilización en todos los productos de Trivium.</p>
                    
                    </section>

                    <hr>

                    <section class="container-text">

                        <h2>Arquitectura Tecnológica</h2>
                        <ul> 
                            <li><strong>• Tailwind CSS:</strong> Utilizado para construir layouts y estructuras de componentes de forma rápida y eficiente.</li>
                            <li><strong>• Sistema de Tokens:</strong> Define todas las decisiones de diseño del producto, enfocado principalmente en la paleta de colores y valores de tipografía que aseguran coherencia visual.</li>
                        </ul>

                    </section>

                    <hr>

                    <section class="container-text">

                        <h2>Componentes (src/components/)</h2>
                        <ul>
                            <li><strong>global/:</strong> Componentes básicos reutilizables en todos los productos de Trivium. Son la piedra angular del sistema de diseño.</li>
                            <li><strong>showcase/:</strong> Componentes de documentación y presentación que estructuran las vistas de este design system.</li>
                        </ul>

                    </section>

                    <hr>
                    
                    <section class="container-text">

                        <h2>Sistema de Tokens (src/tokens/)</h2>
                        <p>Organización jerárquica de decisiones de diseño:</p>
                        <ul>
                            <li><strong>primitive/:</strong> Valores base - colores puros, espaciadores fundamentales.</li>
                            <li><strong>semantic/:</strong> Tokens con significado - colores de acción, superficies, bordes.</li>
                            <li><strong>component/:</strong> Tokens específicos de componentes - tipografía, layout.</li>
                        </ul>

                    </section>

                    <hr>
                    
                    <section class="container-text">

                        <h2>Estilos Globales (src/styles/)</h2>
                        <ul>
                            <li><strong>reset.css:</strong> Normalización cross-browser.</li>
                            <li><strong>base.css:</strong> Estilos base de elementos HTML.</li>
                            <li><strong>typography.css:</strong> Definiciones de tipografía.</li>
                        </ul>

                    </section>                   

                </div>

            </div>

    <footer>
    </footer>

        </main>
   </body> 
   
</template>
