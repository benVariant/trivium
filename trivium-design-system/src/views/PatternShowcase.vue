<script setup lang="ts">
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Pattern from '@/components/global/Pattern.vue'
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">

    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">

      <Aside />

      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">

          <div class="container-text">
            <h1>Pattern</h1>
            <p class="text-lg">Elemento decorativo de marca. Retícula isométrica de líneas que se usa como fondo de secciones. Se renderiza como una capa absoluta dentro de un contenedor <code>position: relative</code>.</p>
          </div>

          <div class="container-case-col">
            <div class="relative w-full h-72 overflow-hidden" style="background: var(--color-surface-default);">
              <Pattern />
            </div>
          </div>

        </section>

        <section class="container-col-md">

          <div class="container-text">
            <h2>Reveal — Zona visible</h2>
            <p>La prop <code>reveal</code> enmascara el patrón para que solo sea visible en una zona. <code>full</code> (default) muestra la retícula completa; los laterales (<code>left</code>, <code>right</code>, <code>sides</code>) usan un fade horizontal, y las esquinas (<code>top-left</code>, <code>top-right</code>, <code>bottom-left</code>, <code>bottom-right</code>) un fade diagonal.</p>
          </div>

          <div class="container-text w-full">
            <p class="text-eyebrow">Laterales</p>
          </div>

          <div class="container-case-col gap-8">

            <div class="container-text w-full">
              <p class="text-eyebrow">left</p>
              <div class="relative w-full h-56 overflow-hidden" style="background: var(--color-surface-default);">
                <Pattern reveal="left" />
              </div>
            </div>

            <div class="container-text w-full">
              <p class="text-eyebrow">right</p>
              <div class="relative w-full h-56 overflow-hidden" style="background: var(--color-surface-default);">
                <Pattern reveal="right" />
              </div>
            </div>

            <div class="container-text w-full">
              <p class="text-eyebrow">sides</p>
              <div class="relative w-full h-56 overflow-hidden" style="background: var(--color-surface-default);">
                <Pattern reveal="sides" />
              </div>
            </div>

          </div>

          <div class="container-text w-full">
            <p class="text-eyebrow">Esquinas</p>
          </div>

          <div class="container-case-row flex-wrap gap-8">

            <div class="container-text flex-1 min-w-64">
              <p class="text-eyebrow">top-left</p>
              <div class="relative w-full h-56 overflow-hidden" style="background: var(--color-surface-default);">
                <Pattern reveal="top-left" />
              </div>
            </div>

            <div class="container-text flex-1 min-w-64">
              <p class="text-eyebrow">top-right</p>
              <div class="relative w-full h-56 overflow-hidden" style="background: var(--color-surface-default);">
                <Pattern reveal="top-right" />
              </div>
            </div>

            <div class="container-text flex-1 min-w-64">
              <p class="text-eyebrow">bottom-left</p>
              <div class="relative w-full h-56 overflow-hidden" style="background: var(--color-surface-default);">
                <Pattern reveal="bottom-left" />
              </div>
            </div>

            <div class="container-text flex-1 min-w-64">
              <p class="text-eyebrow">bottom-right</p>
              <div class="relative w-full h-56 overflow-hidden" style="background: var(--color-surface-default);">
                <Pattern reveal="bottom-right" />
              </div>
            </div>

          </div>

        </section>

        <section class="container-col-md">

          <div class="container-text">
            <h2>Uso como fondo de sección</h2>
            <p>Dale <code>position: relative</code> y <code>overflow: hidden</code> al contenedor de la sección y coloca <code>&lt;Pattern /&gt;</code> como primer hijo. El contenido va después y queda por encima (el patrón tiene <code>pointer-events: none</code>).</p>
          </div>

          <div class="relative w-full overflow-hidden p-12" style="background: var(--color-surface-default);">
            <Pattern reveal="right" />
            <div class="container-text relative">
              <h3>Contenido encima del patrón</h3>
              <p>Este texto se renderiza sobre la capa decorativa sin que esta bloquee la interacción.</p>
            </div>
          </div>

        </section>

        <section class="container-col-md">

          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>Pattern</code>.</p>
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
                <td><code>reveal</code></td>
                <td>String</td>
                <td><code>'full'</code></td>
                <td><code>'full'</code> <code>'left'</code> <code>'right'</code> <code>'sides'</code> <code>'top-left'</code> <code>'top-right'</code> <code>'bottom-left'</code> <code>'bottom-right'</code></td>
                <td>Zona donde el patrón es visible. <code>full</code> = retícula completa; los laterales aplican un fade horizontal y las esquinas un fade diagonal que concentra el patrón en ese vértice.</td>
              </tr>
            </tbody>
          </table>

        </section>

      </div>

    </div>
  </main>

</template>
