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

        <section class="container-col-md">
          <div class="container-text">
            <h1>Layout</h1>
            <p class="text-lg">Sistema de clases de composición que establece el ritmo espacial de los productos Trivium. Reemplazan combinaciones repetidas de Tailwind y garantizan consistencia entre interfaces.</p>
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>container-text</h2>
            <p>Agrupa un encabezado con su párrafo de descripción. Define el espacio estándar entre título y texto dentro de cualquier bloque de contenido. No debe ajustarse manualmente.</p>
          </div>
          <div class="container-case-col">
            <div class="container-text w-full max-w-lg">
              <h3>Título de la sección</h3>
              <p>Párrafo de descripción que acompaña al encabezado. El gap de <code>1rem</code> entre ambos es fijo y consistente en todo el sistema.</p>
            </div>
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>container-col-md</h2>
            <p>Organiza los elementos dentro de una sección: un bloque de texto seguido de uno o más elementos de contenido. Es la unidad de composición fundamental de cualquier página.</p>
          </div>
          <div class="container-case-col">
            <div class="container-col-md w-full max-w-lg">
              <div class="container-text">
                <h3>Encabezado de sección</h3>
                <p>Descripción del contenido que sigue a continuación.</p>
              </div>
              <div class="bg-(--color-surface-default) border border-(--color-border-secondary) rounded-md p-6 text-sm text-(--color-text-body-secondary) text-center">
                Elemento de contenido (tabla, formulario, demo...)
              </div>
            </div>
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>container-col-lg</h2>
            <p>Columna principal de una página. Agrupa múltiples secciones con mayor separación entre ellas para crear jerarquía visual entre bloques de contenido distintos.</p>
          </div>
          <div class="container-case-col" style="min-height: 640px;">
            <div class="container-col-lg w-full max-w-lg">
              <div class="container-col-md">
                <div class="container-text">
                  <h3>Primera sección</h3>
                  <p>Descripción de la primera sección.</p>
                </div>
                <div class="bg-(--color-surface-default) border border-(--color-border-secondary) rounded-md p-6 text-sm text-(--color-text-body-secondary) text-center">
                  Contenido A
                </div>
              </div>
              <div class="container-col-md">
                <div class="container-text">
                  <h3>Segunda sección</h3>
                  <p>Descripción de la segunda sección.</p>
                </div>
                <div class="bg-(--color-surface-default) border border-(--color-border-secondary) rounded-md p-6 text-sm text-(--color-text-body-secondary) text-center">
                  Contenido B
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>container-row-lg</h2>
            <p>Layout horizontal de dos columnas con separación amplia. Se usa para componer un panel lateral junto al contenido principal de la página.</p>
          </div>
          <div class="container-case-col">
            <div class="container-row-lg w-full items-start">
              <div class="w-40 shrink-0 bg-(--color-surface-default) border border-(--color-border-secondary) rounded-md p-4 text-sm text-(--color-text-body-secondary) text-center">
                Aside / Sidebar
              </div>
              <div class="flex-1 bg-(--color-surface-default) border border-(--color-border-secondary) rounded-md p-4 text-sm text-(--color-text-body-secondary) text-center">
                Contenido principal
              </div>
            </div>
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Jerarquía de composición</h2>
            <p>Las clases están diseñadas para anidarse en un orden específico. Respetar esta jerarquía garantiza el ritmo espacial correcto en cualquier página del sistema.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Clase</th>
                <th>Contiene</th>
                <th>Gap</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Layout de página</td>
                <td><code>container-row-lg</code></td>
                <td>Aside + columna de contenido</td>
                <td><code>4rem</code></td>
              </tr>
              <tr>
                <td>Columna de contenido</td>
                <td><code>container-col-lg</code></td>
                <td>Múltiples <code>section.container-col-md</code></td>
                <td><code>4rem</code></td>
              </tr>
              <tr>
                <td>Sección</td>
                <td><code>container-col-md</code></td>
                <td><code>container-text</code> + elemento(s) de contenido</td>
                <td><code>2rem</code></td>
              </tr>
              <tr>
                <td>Bloque de texto</td>
                <td><code>container-text</code></td>
                <td>Encabezado (h1–h6) + párrafo</td>
                <td><code>1rem</code></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Referencia rápida</h2>
            <p>Propiedades CSS de cada clase del sistema de layout global.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Clase</th>
                <th>display</th>
                <th>flex-direction</th>
                <th>gap</th>
                <th>Archivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>container-text</code></td>
                <td>flex</td>
                <td>column</td>
                <td>1rem</td>
                <td><code>layouts.css</code></td>
              </tr>
              <tr>
                <td><code>container-col-md</code></td>
                <td>flex</td>
                <td>column</td>
                <td>2rem</td>
                <td><code>layouts.css</code></td>
              </tr>
              <tr>
                <td><code>container-col-lg</code></td>
                <td>flex</td>
                <td>column</td>
                <td>4rem</td>
                <td><code>layouts.css</code></td>
              </tr>
              <tr>
                <td><code>container-row-lg</code></td>
                <td>flex</td>
                <td>row</td>
                <td>4rem</td>
                <td><code>layouts.css</code></td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  </main>
</template>
