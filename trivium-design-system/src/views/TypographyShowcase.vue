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

                    <section class="container-text">
                        <span class="text-eyebrow">Fundamentos</span>
                        <h1>Tipografía</h1>
                        <p>El sistema tipográfico de Trivium usa dos familias de fuentes con roles complementarios: una serif para titulares y una sans-serif para cuerpo de texto. Todos los tamaños están definidos como tokens responsivos que escalan entre móvil, tablet y desktop.</p>
                    </section>

                    <hr>

                    <section id="fuentes" class="container-col-md">

                        <div class="container-text">
                            <h2>Familias tipográficas</h2>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Fuente</th>
                                    <th>Familia</th>
                                    <th>Uso</th>
                                    <th>Origen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-family: 'latienne-pro', serif; font-size: 1.25rem;">Latienne Pro</td>
                                    <td><code>"latienne-pro", serif</code></td>
                                    <td>Headings (h1–h6), clase <code>.text-heading</code></td>
                                    <td>Adobe Fonts (TypeKit)</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 500;">Manrope</td>
                                    <td><code>"Manrope", sans-serif</code></td>
                                    <td>Body, labels, UI text, clase <code>.text-eyebrow</code></td>
                                    <td>Google Fonts</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                    <hr>

                    <section id="headings" class="container-col-md">

                        <div class="container-text">
                            <h2>Escala de headings</h2>
                            <p>Mapeados a los elementos HTML estándar <code>h1</code>–<code>h6</code>. El token <code>heading-5xl</code> crece en tablet/desktop; el resto es igual desde tablet en adelante.</p>
                        </div>

                        <div class="container-case-col items-start">
                            <h1>Heading 5xl — h1</h1>
                            <h2>Heading 3xl — h2</h2>
                            <h3>Heading 2xl — h3</h3>
                            <h4>Heading xl — h4</h4>
                            <h5>Heading lg — h5</h5>
                            <h6>Heading base — h6</h6>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Elemento</th>
                                    <th>Token</th>
                                    <th>Móvil</th>
                                    <th>Tablet / Desktop</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>h1</code></td>
                                    <td><code>--font-size-heading-5xl</code></td>
                                    <td>2.25rem (36px)</td>
                                    <td>3rem (48px)</td>
                                </tr>
                                <tr>
                                    <td><code>h2</code></td>
                                    <td><code>--font-size-heading-3xl</code></td>
                                    <td>1.5rem (24px)</td>
                                    <td>1.875rem (30px)</td>
                                </tr>
                                <tr>
                                    <td><code>h3</code></td>
                                    <td><code>--font-size-heading-2xl</code></td>
                                    <td>1.25rem (20px)</td>
                                    <td>1.5rem (24px)</td>
                                </tr>
                                <tr>
                                    <td><code>h4</code></td>
                                    <td><code>--font-size-heading-xl</code></td>
                                    <td>1.125rem (18px)</td>
                                    <td>1.25rem (20px)</td>
                                </tr>
                                <tr>
                                    <td><code>h5</code></td>
                                    <td><code>--font-size-heading-lg</code></td>
                                    <td>1rem (16px)</td>
                                    <td>1.125rem (18px)</td>
                                </tr>
                                <tr>
                                    <td><code>h6</code></td>
                                    <td><code>--font-size-heading-base</code></td>
                                    <td>0.9375rem (15px)</td>
                                    <td>1rem (16px)</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                    <hr>

                    <section id="body" class="container-col-md">

                        <div class="container-text">
                            <h2>Escala de body</h2>
                            <p>Cuatro tamaños de texto para cuerpo de contenido, labels e información secundaria. Se aplican vía token directamente en CSS o a través de las clases de texto de los componentes.</p>
                        </div>

                        <div class="container-case-col items-start gap-6">
                            <p class="text-lg">Body lg — Texto de introducción o destacado.</p>
                            <p class="text-base">Body base — Párrafos de contenido general.</p>
                            <p class="text-sm">Body sm — Texto secundario, labels, metadatos.</p>
                            <p class="text-xs">Body xsm — Captions, placeholders, texto auxiliar.</p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Token</th>
                                    <th>Móvil</th>
                                    <th>Tablet / Desktop</th>
                                    <th>Uso típico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>--font-size-body-lg</code></td>
                                    <td>1rem (16px)</td>
                                    <td>1.125rem (18px)</td>
                                    <td>Texto introductorio, leads</td>
                                </tr>
                                <tr>
                                    <td><code>--font-size-body-base</code></td>
                                    <td>0.9375rem (15px)</td>
                                    <td>1rem (16px)</td>
                                    <td>Párrafos, contenido general (<code>&lt;p&gt;</code>)</td>
                                </tr>
                                <tr>
                                    <td><code>--font-size-body-sm</code></td>
                                    <td>0.8125rem (13px)</td>
                                    <td>0.875rem (14px)</td>
                                    <td>Labels, texto secundario</td>
                                </tr>
                                <tr>
                                    <td><code>--font-size-body-xsm</code></td>
                                    <td>0.75rem (12px)</td>
                                    <td>0.75rem (12px)</td>
                                    <td>Captions, placeholders, eyebrows</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                    <hr>

                    <section id="tailwind" class="container-col-md">

                        <div class="container-text">
                            <h2>Integración con Tailwind</h2>
                            <p>Toda la escala de texto de Tailwind está mapeada a los tokens del sistema mediante <code>@theme inline</code> en <code>style.css</code>. Las clases de cuerpo (<code>text-xs</code>–<code>text-lg</code>) apuntan a los tokens de body; las de heading (<code>text-xl</code>–<code>text-5xl</code>) apuntan a los tokens de heading. Todos son responsivos automáticamente.</p>
                        </div>

                        <div class="container-text">
                            <h3>Escala de cuerpo</h3>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Clase Tailwind</th>
                                    <th>Token</th>
                                    <th>Móvil</th>
                                    <th>Tablet / Desktop</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>text-xs</code></td>
                                    <td><code>--font-size-body-xsm</code></td>
                                    <td>0.75rem (12px)</td>
                                    <td>0.75rem (12px)</td>
                                </tr>
                                <tr>
                                    <td><code>text-sm</code></td>
                                    <td><code>--font-size-body-sm</code></td>
                                    <td>0.8125rem (13px)</td>
                                    <td>0.875rem (14px)</td>
                                </tr>
                                <tr>
                                    <td><code>text-base</code></td>
                                    <td><code>--font-size-body-base</code></td>
                                    <td>0.9375rem (15px)</td>
                                    <td>1rem (16px)</td>
                                </tr>
                                <tr>
                                    <td><code>text-lg</code></td>
                                    <td><code>--font-size-body-lg</code></td>
                                    <td>1rem (16px)</td>
                                    <td>1.125rem (18px)</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="container-text">
                            <h3>Escala de headings</h3>
                            <p>Por defecto, <strong>no necesitas estas clases</strong>. Cada elemento <code>h1</code>–<code>h6</code> ya recibe su tamaño correcto automáticamente desde <code>typography.css</code>.</p>
                            <p>Úsalas únicamente cuando el tamaño visual que necesitas no corresponde al nivel semántico del elemento — es decir, cuando diseño y estructura deben ir por caminos distintos. Dos casos concretos:</p>
                            <ul>
                                <li><strong>Un <code>h1</code> visualmente pequeño:</strong> la página tiene un solo título principal (correcto para SEO y lectores de pantalla) pero el diseño lo pide discreto. Se usa <code>h1</code> con <code>text-2xl</code> en lugar de cambiar el elemento a <code>h3</code>.</li>
                                <li><strong>Un <code>h3</code> visualmente grande:</strong> una subsección necesita impacto visual de titular pero su posición en la jerarquía de la página es de nivel 3. Se usa <code>h3</code> con <code>text-5xl</code> sin romper el outline del documento.</li>
                            </ul>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Clase Tailwind</th>
                                    <th>Token</th>
                                    <th>Equivalente visual</th>
                                    <th>Móvil</th>
                                    <th>Tablet / Desktop</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>text-xl</code></td>
                                    <td><code>--font-size-heading-xl</code></td>
                                    <td><code>h4</code></td>
                                    <td>1.125rem (18px)</td>
                                    <td>1.25rem (20px)</td>
                                </tr>
                                <tr>
                                    <td><code>text-2xl</code></td>
                                    <td><code>--font-size-heading-2xl</code></td>
                                    <td><code>h3</code></td>
                                    <td>1.25rem (20px)</td>
                                    <td>1.5rem (24px)</td>
                                </tr>
                                <tr>
                                    <td><code>text-3xl</code></td>
                                    <td><code>--font-size-heading-3xl</code></td>
                                    <td><code>h2</code></td>
                                    <td>1.5rem (24px)</td>
                                    <td>1.875rem (30px)</td>
                                </tr>
                                <tr>
                                    <td><code>text-5xl</code></td>
                                    <td><code>--font-size-heading-5xl</code></td>
                                    <td><code>h1</code></td>
                                    <td>2.25rem (36px)</td>
                                    <td>3rem (48px)</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="container-text">
                            <p>Estas clases solo sobreescriben el tamaño. Para mantener también la familia tipográfica serif, combínalas con <code>.text-heading</code>:</p>
                            <pre><code>&lt;!-- h1 que parece h3 visualmente --&gt;
&lt;h1 class="text-2xl text-heading"&gt;Título principal&lt;/h1&gt;

&lt;!-- h3 que parece h1 visualmente --&gt;
&lt;h3 class="text-5xl text-heading"&gt;Sección destacada&lt;/h3&gt;</code></pre>
                            <p>La clase <code>text-4xl</code> (2.25rem) no tiene token equivalente en desktop y conserva el valor por defecto de Tailwind.</p>
                        </div>

                    </section>

                    <hr>

                    <section id="utilidades" class="container-col-md">

                        <div class="container-text">
                            <h2>Clases utilitarias</h2>
                            <p>Dos clases de texto con estilos predefinidos para casos de uso específicos del sistema.</p>
                        </div>

                        <div class="container-case-col items-start gap-6">
                            <span class="text-eyebrow">text-eyebrow — Etiqueta de sección</span>
                            <span class="text-heading" style="font-size: var(--font-size-heading-2xl);">text-heading — Título con serif</span>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Clase</th>
                                    <th>Fuente</th>
                                    <th>Tamaño</th>
                                    <th>Uso</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>.text-eyebrow</code></td>
                                    <td>Manrope, 600</td>
                                    <td><code>--font-size-body-xsm</code></td>
                                    <td>Etiqueta de sección, categoría. Incluye subrayado.</td>
                                </tr>
                                <tr>
                                    <td><code>.text-heading</code></td>
                                    <td>Latienne Pro, 700</td>
                                    <td>Heredado del elemento padre</td>
                                    <td>Título con serif cuando el elemento no es un <code>h*</code>.</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                </div>

            </div>

            <footer></footer>

        </main>
    </body>
</template>
