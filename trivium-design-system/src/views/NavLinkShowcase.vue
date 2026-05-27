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

                                <h1>Nav link</h1>
                                <p class="text-lg">Enlace de navegación</p>
                            
                            </div>   

                            <div class="container-case-col">
                                
                                <NavLink to="#">Esto es un enlace de navegación</NavLink>

                            </div>

                         </section>

                         <section class="container-col-md">

                            <div class="container-text"> 

                                <h2>Variantes</h2>
                                <p class="text-lg">Existen 3 variantes: primary, neutral y neutralSecondary</p>
                            
                            </div>   

                            <div class="container-case-col">
                                
                                <NavLink to="#">Primary Link</NavLink>
                                <NavLink to="#" variant="neutral">Neutral Link</NavLink>
                                <NavLink to="#" variant="neutralSecondary">Neutral Secondary Link</NavLink>

                            </div>

                         </section>

                    <section class="container-col-md">

                        <div class="container-text">
                            <h2>API — Props</h2>
                            <p>Referencia completa de todas las props disponibles en el componente <code>NavLink</code>.</p>
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
                                    <td><code>to</code> <strong>*</strong></td>
                                    <td>String</td>
                                    <td>—</td>
                                    <td>Ruta o path</td>
                                    <td>Requerido. Destino de navegación. Se pasa directamente a <code>&lt;RouterLink :to="..."&gt;</code>.</td>
                                </tr>
                                <tr>
                                    <td><code>variant</code></td>
                                    <td>String</td>
                                    <td><code>'primary'</code></td>
                                    <td><code>'primary'</code> <code>'neutral'</code> <code>'neutralSecondary'</code></td>
                                    <td>Color del texto del enlace. Primary usa el color de acción; neutral y neutralSecondary usan el color de label predeterminado y secundario.</td>
                                </tr>
                                <tr>
                                    <td><code>size</code></td>
                                    <td>String</td>
                                    <td><code>'md'</code></td>
                                    <td><code>'sm'</code> <code>'md'</code> <code>'lg'</code></td>
                                    <td>Tamaño tipográfico del enlace. Mapea a las clases de texto de Tailwind.</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                </div>

            </div>
        </main>

</template>