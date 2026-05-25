<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'

</script>

<template>
        <Header />

        <main class="flex flex-col items-center py-4 md:py-12">

            <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
                
                <Aside />
                
                <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">
                    
                    <section id="tokens-intro" class="container-col-md">

                        <div class="container-text">
                            <h1 class="text-4xl">Documentación de Design Tokens</h1>
                            <p class="text-lg">Esta sección documenta el modelo de abstracción y el catálogo completo de Design Tokens de Trivium.</p>
                        </div>

                    </section>

                    <section id="tokens-architecture" class="container-col-md">
                        
                            <div class="container-text">
                                <h2 class="text-3xl">1. Arquitectura de Tokens</h2>
                                <p>Para mantener un balance óptimo entre flexibilidad y consistencia, la arquitectura de Trivium se divide en tres niveles. Como desarrollador, interactuarás casi exclusivamente con el nivel de componentes (Component Tokens).</p>
                            </div>

                            <ul>
                                <li><strong>• Primitive Tokens (Uso Interno):</strong> La fuente de verdad absoluta con valores fijos (hardcoded). Define las escalas cromáticas y tipográficas (Ej: <code>$color-neutral-700</code>).</li>
                                <li><strong>• Semantic Tokens (Uso Interno):</strong> Introducen un propósito general a los primitivos, abstrayendo el valor real (Ej: <code>$color-foundation-black</code>).</li>
                                <li><strong>• Component Tokens (Uso Público):</strong> Son los tokens listos para producción. Están mapeados contextualmente a elementos de la interfaz y responden a estados interactivos (Hover, Focus, Disabled).</li>
                            </ul>

                            <p>
                                💡 Decisión de Diseño: Para evitar la sobredocumentación y la fatiga de mantenimiento, nuestros tokens customizados se estructuran únicamente en función de:
                            </p>
                            <ol>
                                <li><strong>1. Paletas de color:</strong> Escalas completas de 50 a 950 para cada matiz (Primary, Secondary, Success, Destructive, etc.).</li>
                                <li><strong>2. Tamaños de tipografía:</strong> Escala tipográfica base.</li>
                            </ol>

                            <p>
                            Cualquier otra propiedad visual (paddings, margins, border-radius, layouts) se construye directamente en el código utilizando las clases utilitarias de Tailwind CSS.
                            </p>
                            
                    </section>    
                    
                    <section id="tokens-page" class="container-col-lg">

                            <h2 class="text-3xl">2. Catálogo de Component Tokens</h2>

                            <div class="container-col-md">
                                
                                <div class="container-text">
                                    <h3 class="text-2xl">Page & Overlay</h3>
                                    <p>Diseñados para los fondos generales de la aplicación, layouts principales y capas de superposición.</p>
                                </div>
                                
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Token</th>
                                            <th>Valor Semántico de Referencia</th>
                                            <th>Descripción / Caso de Uso</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>--color-page-default</code></td>
                                            <td><code>var(--color-foundation-black)</code></td>
                                            <td>Fondo base predeterminado de la aplicación (Modo Oscuro principal).</td>
                                        </tr>
                                        <tr>
                                            <td><code>--color-page-alt</code></td>
                                            <td><code>var(--color-foundation-white)</code></td>
                                            <td>Fondo alternativo (Modo Claro) para romper secciones.</td>
                                        </tr>
                                        <tr>
                                            <td><code>--color-page-muted</code></td>
                                            <td><code>var(--color-neutral-700)</code></td>
                                            <td>Fondo suavizado para layouts secundarios o paneles laterales.</td>
                                        </tr>
                                        <tr>
                                            <td><code>--color-page-default-deep</code></td>
                                            <td><code>var(--color-foundation-ultrablack)</code></td>
                                            <td>Fondo ultra oscuro para contrastes máximos en el layout.</td>
                                        </tr>
                                        <tr>
                                            <td><code>--color-overlay</code></td>
                                            <td><code>color-mix(...) 80% negro</code></td>
                                            <td>Fondo para modales, <em>drawers</em> o efectos de <em>backdrop</em>.</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                    </section>



                    <section id="tokens-surface" class="container-col-md">

                        <div class="container-text">
                            <h3 class="text-2xl">Surface</h3>
                            <p>Aplicables a las superficies contenedoras de componentes como tarjetas (<em>cards</em>), modales, botones, alertas y menús. Incluyen sus respectivos estados de interacción (<code>-hover</code>).</p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Categoría</th>
                                    <th>Token Base</th>
                                    <th>Token Hover</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Default</strong></td>
                                    <td><code>--color-surface-default</code><br><code>--color-surface-default-deep</code></td>
                                    <td><code>--color-surface-default-hover</code><br>—</td>
                                </tr>
                                <tr>
                                    <td><strong>Muted</strong></td>
                                    <td><code>--color-surface-muted</code></td>
                                    <td>—</td>
                                </tr>
                                <tr>
                                    <td><strong>Alternative (Light)</strong></td>
                                    <td><code>--color-surface-alt</code></td>
                                    <td><code>--color-surface-alt-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Action (Primary)</strong></td>
                                    <td><code>--color-surface-action</code><br><code>--color-surface-action-subtle</code></td>
                                    <td><code>--color-surface-action-hover</code><br><code>--color-surface-action-subtle-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Success</strong></td>
                                    <td><code>--color-surface-success</code><br><code>--color-surface-success-subtle</code></td>
                                    <td><code>--color-surface-success-hover</code><br><code>--color-surface-success-subtle-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Destructive</strong></td>
                                    <td><code>--color-surface-destructive</code><br><code>--color-surface-destructive-subtle</code></td>
                                    <td><code>--color-surface-destructive-hover</code><br><code>--color-surface-destructive-subtle-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Info</strong></td>
                                    <td><code>--color-surface-info</code><br><code>--color-surface-info-subtle</code></td>
                                    <td><code>--color-surface-info-hover</code><br><code>--color-surface-info-subtle-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Warning</strong></td>
                                    <td><code>--color-surface-warning</code><br><code>--color-surface-warning-subtle</code></td>
                                    <td><code>--color-surface-warning-hover</code><br><code>--color-surface-warning-subtle-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Disabled</strong></td>
                                    <td><code>--color-surface-disabled</code></td>
                                    <td><em>No interactivo</em></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>


                    <section id="tokens-text" class="container-col-md">

                        <div class="container-text">
                            <h3 class="text-2xl">Text & Typography</h3>
                            <p>Garantizan el contraste del texto según la jerarquía y la superficie sobre la que se renderizan. Los tokens con el sufijo <code>-on-alt</code> se deben utilizar exclusivamente cuando el texto viva sobre fondos claros/alternativos (<code>--color-page-alt</code> o <code>--color-surface-alt</code>).</p>
                        </div>

                        <div class="container-text">
                            <h4 class="text-eyebrow">Eyebrow (Textos auxiliares y etiquetas superiores)</h4>
                            <ul>
                                <li><code>--color-text-eyebrow-default</code>: Texto auxiliar en superficies oscuras estándar.</li>
                                <li><code>--color-text-eyebrow-on-alt</code>: Texto auxiliar en superficies claras.</li>
                            </ul>
                        </div>

                        <h4 class="text-eyebrow">Headings (Títulos y Encabezados)</h4>

                        <table>
                            <thead>
                                <tr>
                                    <th>Jerarquía / Estado</th>
                                    <th>En Superficie Estándar (Default)</th>
                                    <th>En Superficie Clara (On Alt)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Principal</strong></td>
                                    <td><code>--color-text-heading-default</code></td>
                                    <td><code>--color-text-heading-default-on-alt</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Secundario</strong></td>
                                    <td><code>--color-text-heading-secondary</code></td>
                                    <td><code>--color-text-heading-secondary-on-alt</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Terciario</strong></td>
                                    <td><code>--color-text-heading-tertiary</code></td>
                                    <td><code>--color-text-heading-tertiary-on-alt</code></td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Estados Semánticos de Headings:</strong> <code>--color-text-heading-action</code>, <code>--color-text-heading-success</code>, <code>--color-text-heading-destructive</code>, <code>--color-text-heading-info</code>, <code>--color-text-heading-warning</code>, <code>--color-text-heading-disabled</code>.</p>

                        <h4 class="text-eyebrow">Body (Cuerpo de texto general)</h4>

                        <table>
                            <thead>
                                <tr>
                                    <th>Jerarquía / Estado</th>
                                    <th>En Superficie Estándar (Default)</th>
                                    <th>En Superficie Clara (On Alt)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Principal</strong></td>
                                    <td><code>--color-text-body-default</code></td>
                                    <td><code>--color-text-body-default-on-alt</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Secundario</strong></td>
                                    <td><code>--color-text-body-secondary</code></td>
                                    <td><code>--color-text-body-secondary-on-alt</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Terciario</strong></td>
                                    <td><code>--color-text-body-tertiary</code></td>
                                    <td><code>--color-text-body-tertiary-on-alt</code></td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Estados Semánticos de Body:</strong> <code>--color-text-body-action</code>, <code>--color-text-body-success</code>, <code>--color-text-body-destructive</code>, <code>--color-text-body-info</code>, <code>--color-text-body-warning</code>, <code>--color-text-body-disabled</code>.</p>

                        <h4 class="text-eyebrow">Captions & Placeholders (Textos de sistema y formularios)</h4>
                        <ul>
                            <li><code>--color-text-caption-default</code>: Notas al pie, metadatos y leyendas auxiliares.</li>
                            <li><code>--color-text-caption-default-on-alt</code>: Leyendas auxiliares sobre superficies claras.</li>
                            <li><code>--color-text-placeholder-default</code>: Texto de sugerencia inactivo dentro de campos de formulario.</li>
                            <li><code>--color-text-placeholder-default-hover</code>: Estado del placeholder cuando el campo recibe interacción.</li>
                        </ul>
                    </section>


                    <section id="tokens-labels" class="container-col-md">

                        <div class="container-text">
                            <h3 class="text-2xl">Labels & Tags</h3>
                            <p>Tokens específicos para el contenido de componentes tipo <em>Badges</em>, <em>Tags</em>, <em>Chips</em> o textos internos de botones interactivos.</p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo de Label</th>
                                    <th>Token Base</th>
                                    <th>Token Hover</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Default</strong></td>
                                    <td><code>--color-label-default</code></td>
                                    <td><code>--color-label-default-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Default (On Alt)</strong></td>
                                    <td><code>--color-label-default-on-alt</code></td>
                                    <td><code>--color-label-default-on-alt-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Secondary</strong></td>
                                    <td><code>--color-label-secondary</code></td>
                                    <td><code>--color-label-secondary-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Secondary (On Alt)</strong></td>
                                    <td><code>--color-label-secondary-on-alt</code></td>
                                    <td><code>--color-label-secondary-on-alt-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Action</strong></td>
                                    <td><code>--color-label-action</code></td>
                                    <td><code>--color-label-action-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>On Action (Sobre botón principal)</strong></td>
                                    <td><code>--color-label-on-action</code></td>
                                    <td><code>--color-label-on-action-hover</code></td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Estados Semánticos y Deshabilitados:</strong> <code>--color-label-success</code>, <code>--color-label-info</code>, <code>--color-label-destructive</code>, <code>--color-label-warning</code>, <code>--color-label-disabled</code>.</p>
                    
                    </section>

                    <section id="tokens-icons" class="container-col-md">

                        <div class="container-text">
                            <h3 class="text-2xl">Icons</h3>
                            <p>Mapeo de color exclusivo para vectores SVG e iconografía de la aplicación.</p>
                        </div>

                        <ul>
                            <li><strong>Predeterminados:</strong> <code>--color-icon-default</code> <em>(Hover: <code>--color-icon-default-hover</code>)</em></li>
                            <li><strong>Predeterminados sobre Claro:</strong> <code>--color-icon-default-on-alt</code> <em>(Hover: <code>--color-icon-default-on-alt-hover</code>)</em></li>
                            <li><strong>Secundarios:</strong> <code>--color-icon-secondary</code> <em>(Hover: <code>--color-icon-secondary-hover</code>)</em></li>
                            <li><strong>Secundarios sobre Claro:</strong> <code>--color-icon-secondary-on-alt</code> <em>(Hover: <code>--color-icon-secondary-on-alt-hover</code>)</em></li>
                            <li><strong>Acción:</strong> <code>--color-icon-action</code> <em>(Hover: <code>--color-icon-action-hover</code>)</em></li>
                            <li><strong>Sobre Botones/Superficies de Acción:</strong> <code>--color-icon-on-action</code></li>
                            <li><strong>Semánticos y Deshabilitados:</strong> <code>--color-icon-success</code>, <code>--color-icon-info</code>, <code>--color-icon-destructive</code>, <code>--color-icon-warning</code>, <code>--color-icon-disabled</code>.</li>
                        </ul>
                    </section>


                    <section id="tokens-borders" class="flex flex-col gap-8">

                        <div class="container-text">
                            <h3 class="text-2xl">Borders & Strokes</h3>
                            <p>Líneas de contorno para inputs, divisores estructurales (<code>&lt;hr&gt;</code>), tablas y bordes de componentes interactivos.</p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Contexto / Aplicación</th>
                                    <th>Token Base</th>
                                    <th>Token Hover</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Borde Estándar</strong></td>
                                    <td><code>--color-border-default</code></td>
                                    <td><code>--color-border-default-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Borde sobre Superficie Clara</strong></td>
                                    <td><code>--color-border-alt</code></td>
                                    <td><code>--color-border-alt-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Borde Secundario</strong></td>
                                    <td><code>--color-border-secondary</code></td>
                                    <td><code>--color-border-secondary-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Borde Secundario (On Alt)</strong></td>
                                    <td><code>--color-border-secondary-on-alt</code></td>
                                    <td><code>--color-border-secondary-on-alt-hover</code></td>
                                </tr>
                                <tr>
                                    <td><strong>Borde de Acción (Focus/Active)</strong></td>
                                    <td><code>--color-border-action</code></td>
                                    <td><code>--color-border-action-hover</code></td>
                                </tr>
                            </tbody>
                        </table>

                        
                        <p><strong>Feedback de Validación y Estados:</strong> <code>--color-border-success</code> (Válido), <code>--color-border-destructive</code> (Error), <code>--color-border-info</code> (Informativo), <code>--color-border-warning</code> (Alerta), <code>--color-border-disabled</code> (Inactivo).</p>
                    
                    </section>

                </div>
            </div>
        </main>
 
</template>