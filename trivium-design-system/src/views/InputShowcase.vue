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
                            <h1>Input</h1>
                            <p class="text-lg">Muestra un input de texto.</p>
                        </div>

                   
                        <div class="container-case-col">
                            
                            <Input class="fit-content" label="Label" ></Input>
                    
                        </div>
                    
                    </section>


                    <section id="variants" class="container-col-md">
                        
                        <div class="container-text">
                            
                            <h2>Estados</h2>
                            <p>Los inputs pueden estar en diferentes estados: normal(con hover), invalid y disabled</p>
                        
                        </div>

                        <div class="container-case-col">
                            
                            <Input label="Label"></Input>
                            <Input label="Label" :invalid="true"></Input>
                            <Input label="Label" placeholder="Disabled" disabled></Input>

                        </div>
                   
                    </section>    

                    <section id="icon" class="container-col-md">

                        <div class="container-text">
                            <h2>Ícono interno</h2>
                            <p>Usa la prop <code>:icon</code> para mostrar un ícono dentro del campo, a la izquierda del placeholder o del valor. El ícono es decorativo y no interfiere con la escritura. La prop <code>iconPosition</code> también acepta <code>'right'</code>.</p>
                        </div>

                        <div class="container-case-col">
                            <Input label="Label" :icon="PhPlusCircle" />
                            <Input label="Label" :icon="PhPlusCircle" iconPosition="right" />
                            <Input label="Label" :icon="PhPlusCircle" :disabled="true" />
                        </div>

                    </section>

                    <section class="container-col-md">

                        <div class="container-text">
                            <h2>API — Props</h2>
                            <p>Referencia completa de todas las props disponibles en el componente <code>Input</code>.</p>
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
                                    <td>Altura del input.</td>
                                </tr>
                                <tr>
                                    <td><code>label</code></td>
                                    <td>String</td>
                                    <td><code>''</code></td>
                                    <td>Cualquier string</td>
                                    <td>Texto del label visible sobre el input. Si está vacío, no se renderiza el label.</td>
                                </tr>
                                <tr>
                                    <td><code>placeholderText</code></td>
                                    <td>String</td>
                                    <td><code>'Placeholder'</code></td>
                                    <td>Cualquier string</td>
                                    <td>Texto del placeholder del input.</td>
                                </tr>
                                <tr>
                                    <td><code>showPlaceholder</code></td>
                                    <td>Boolean</td>
                                    <td><code>true</code></td>
                                    <td>—</td>
                                    <td>Controla si se muestra el placeholder. Si es <code>false</code>, el placeholder queda vacío.</td>
                                </tr>
                                <tr>
                                    <td><code>invalid</code></td>
                                    <td>Boolean</td>
                                    <td><code>false</code></td>
                                    <td>—</td>
                                    <td>Activa el estado de error. Aplica borde rojo y define <code>aria-invalid="true"</code>.</td>
                                </tr>
                                <tr>
                                    <td><code>disabled</code></td>
                                    <td>Boolean</td>
                                    <td><code>false</code></td>
                                    <td>—</td>
                                    <td>Deshabilita el input y aplica estilos de estado desactivado.</td>
                                </tr>
                                <tr>
                                    <td><code>icon</code></td>
                                    <td>Object | Function</td>
                                    <td><code>null</code></td>
                                    <td>Componente de Phosphor Icons</td>
                                    <td>Ícono decorativo a mostrar dentro del campo. Se pasa como componente de Phosphor Icons: <code>:icon="PhStar"</code>.</td>
                                </tr>
                                <tr>
                                    <td><code>iconPosition</code></td>
                                    <td>String</td>
                                    <td><code>'left'</code></td>
                                    <td><code>'left'</code> <code>'right'</code></td>
                                    <td>Posición del ícono relativa al campo.</td>
                                </tr>
                                <tr>
                                    <td><code>iconSize</code></td>
                                    <td>Number</td>
                                    <td><code>20</code></td>
                                    <td>Número en px</td>
                                    <td>Tamaño del ícono en píxeles.</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                </div>

            </div>
        </main>
</template>
