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

                                <h1>Botones</h1>
                                <p class="text-lg">Muestra un botón o un componente que se parece a un botón.</p>
                            
                            </div>   

                            <div class="container-case-col">
                                
                                <Button size="md" variant="primary">Button</Button>

                            </div>

                         </section>

                        
                        <section class="container-col-md">
                         
                            <div class="container-text">

                                <h2>Variantes</h2>
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

                            <div class="container-text">

                                <h2>Tamaños</h2>
                                <p>Los botones vienen en tres tamaños: lg, md y sm.</p>

                            </div>

                            <div class="container-case-row">
                                
                                <Button size="lg" variant="primary">Button</Button>
                                <Button size="md" variant="primaryOutline">Button</Button>
                                <Button size="sm" variant="neutralOutline">Button</Button>

                            </div>

                        </section>

                        <section class="container-col-md">

                            <div class="container-text">

                                <h2>Estados</h2>
                                <p>Los botones pueden estar en diferentes estados: normal(con hover) y disabled.</p>
                            
                            </div>


                            <div class="container-case-col">
                                
                                <Button size="lg" variant="primary">Button</Button>
                                <Button size="lg" variant="primary" disabled>Button</Button>
                           
                            </div>
                        
                        </section>

                         <section class="container-col-md">

                            <div class="container-text">
                                <h2>Variante con iconos</h2>
                                <p>Los botones pueden contener iconos al inicio o al final.</p>
                            </div>

                            <div class="container-case-col">
                                <Button size="lg" variant="primary" :icon="PhPlusCircle">Button</Button>
                                <Button size="lg" variant="primary" :icon="PhPlusCircle" iconPosition="right">Button</Button>
                            </div>

                        </section>
                    <section class="container-col-md">

                        <div class="container-text">
                            <h2>API — Props</h2>
                            <p>Referencia completa de todas las props disponibles en el componente <code>Button</code>.</p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Prop</th>
                                    <th>Tipo</th>
                                    <th>Default</th>
                                    <th>Valores</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>size</code></td>
                                    <td>String</td>
                                    <td><code>'md'</code></td>
                                    <td><code>'sm'</code> <code>'md'</code> <code>'lg'</code></td>
                                    <td>Altura del botón: 44px / 52px / 60px.</td>
                                </tr>
                                <tr>
                                    <td><code>variant</code></td>
                                    <td>String</td>
                                    <td><code>'primary'</code></td>
                                    <td><code>'primary'</code> <code>'primaryOutline'</code> <code>'neutral'</code> <code>'neutralOutline'</code></td>
                                    <td>Estilo visual del botón.</td>
                                </tr>
                                <tr>
                                    <td><code>disabled</code></td>
                                    <td>Boolean</td>
                                    <td><code>false</code></td>
                                    <td>—</td>
                                    <td>Deshabilita el botón y aplica estilos de estado desactivado.</td>
                                </tr>
                                <tr>
                                    <td><code>icon</code></td>
                                    <td>Object | Function</td>
                                    <td><code>null</code></td>
                                    <td>Componente de Phosphor Icons</td>
                                    <td>Ícono a mostrar. Se pasa como componente: <code>:icon="PhStar"</code>.</td>
                                </tr>
                                <tr>
                                    <td><code>iconPosition</code></td>
                                    <td>String</td>
                                    <td><code>'left'</code></td>
                                    <td><code>'left'</code> <code>'right'</code></td>
                                    <td>Posición del ícono relativa al texto del slot.</td>
                                </tr>
                                <tr>
                                    <td><code>iconSize</code></td>
                                    <td>Number</td>
                                    <td><code>20</code></td>
                                    <td>Número en px</td>
                                    <td>Tamaño del ícono en píxeles.</td>
                                </tr>
                                <tr>
                                    <td><code>ariaExpanded</code></td>
                                    <td>Boolean</td>
                                    <td>—</td>
                                    <td><code>true</code> <code>false</code></td>
                                    <td>Valor del atributo <code>aria-expanded</code>. Úsalo cuando el botón controla un elemento expandible (menú, acordeón).</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                </div>

            </div>
        </main>

</template>