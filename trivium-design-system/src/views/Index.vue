<script setup>
import Header from '@/components/showcase/Header.vue'
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
                        <span class="text-eyebrow">Trivium Design System</span>
                        <h1>Inicio</h1>
                        <p>Bienvenido al sistema de diseño de <strong>Trivium</strong>. Este sitio es la fuente de verdad para diseñadores y desarrolladores del equipo — aquí encontrarás los fundamentos visuales, el catálogo de tokens y la documentación de cada componente.</p>
                    </section>

                    <hr>

                    <section id="instalacion" class="container-col-md">

                        <div class="container-text">
                            <h2>Instalación</h2>
                            <p>El paquete se instala directamente desde GitHub. No requiere publicación en npm.</p>
                        </div>

                        <div class="container-text">
                            <h3>1. Instalar el paquete</h3>
                            <p>En el proyecto consumidor, ejecuta:</p>
                            <code>npm install github:tu-usuario/trivium-design-system</code>
                        </div>

                        <div class="container-text">
                            <h3>2. Registrar el plugin en main.ts</h3>
                            <p>Importa el design system y regístralo como plugin de Vue. Esto hace que todos los componentes estén disponibles globalmente sin necesidad de importarlos uno a uno.</p>
                            <pre><code>import { createApp } from 'vue'
import App from './App.vue'
import TriviumDesignSystem from '@trivium/design-system'
import '@trivium/design-system/styles'

const app = createApp(App)
app.use(TriviumDesignSystem)
app.mount('#app')</code></pre>
                        </div>

                        <div class="container-text">
                            <h3>3. Usar los componentes</h3>
                            <p>Una vez registrado el plugin, los componentes están disponibles en cualquier template sin imports adicionales:</p>
                            <pre><code>&lt;Button variant="primary" size="md"&gt;
  Hola Trivium
&lt;/Button&gt;</code></pre>
                        </div>

                        <div class="container-text">
                            <h3>O importar individualmente</h3>
                            <p>Si prefieres importar solo lo que necesitas:</p>
                            <pre><code>import { Button, Input, NavLink } from '@trivium/design-system'
import '@trivium/design-system/styles'</code></pre>
                        </div>

                    </section>

                    <hr>

                    <section id="peer-dependencies" class="container-col-md">

                        <div class="container-text">
                            <h2>Dependencias requeridas</h2>
                            <p>El design system tiene tres <strong>peerDependencies</strong> que el proyecto consumidor debe tener instaladas. Si ya usas Vue 3 con Vue Router y Phosphor Icons, no necesitas hacer nada adicional.</p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Paquete</th>
                                    <th>Versión mínima</th>
                                    <th>Por qué se necesita</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>vue</code></td>
                                    <td><code>^3.5.0</code></td>
                                    <td>Framework base de todos los componentes.</td>
                                </tr>
                                <tr>
                                    <td><code>vue-router</code></td>
                                    <td><code>^5.0.0</code></td>
                                    <td>Requerido por el componente <code>NavLink</code>, que usa <code>&lt;RouterLink&gt;</code> internamente.</td>
                                </tr>
                                <tr>
                                    <td><code>@phosphor-icons/vue</code></td>
                                    <td><code>^2.2.0</code></td>
                                    <td>Librería de iconos usada en <code>Button</code> e <code>Input</code>.</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                    <hr>

                    <section id="decisiones" class="container-col-md">

                        <div class="container-text">
                            <h2>Decisiones de diseño</h2>
                            <p>Dos decisiones técnicas definen cómo está construido este sistema y por qué funciona como funciona.</p>
                        </div>

                        <div class="container-text">
                            <h3>Tokens CSS sobre clases de Tailwind en componentes</h3>
                            <p>Los componentes globales (<code>Button</code>, <code>Input</code>, <code>NavLink</code>) usan CSS custom properties (<code>var(--color-surface-action)</code>) en sus estilos, no clases utilitarias de Tailwind. Esto permite dos cosas: que los tokens puedan cambiar en runtime (habilitando dark mode sin recompilar) y que el proyecto consumidor pueda sobrescribir tokens para personalizar el sistema sin modificar el código fuente.</p>
                        </div>

                        <div class="container-text">
                            <h3>Tailwind para layouts, tokens para decisiones de diseño</h3>
                            <p>Tailwind CSS se usa exclusivamente para construir estructuras y layouts (grid, flex, spacing, responsive breakpoints). Todas las decisiones de diseño — colores, tipografía — están modeladas en el sistema de tokens. Esta separación mantiene ambos sistemas en su área de responsabilidad y evita mezclar fuentes de verdad.</p>
                        </div>

                    </section>

                </div>

            </div>

            <footer></footer>

        </main>
    </body>
</template>
