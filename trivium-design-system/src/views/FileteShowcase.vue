<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Filete from '@/components/global/Filete.vue'
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">

    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">

      <Aside />

      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">

          <div class="container-text">
            <h1>Filete</h1>
            <p class="text-lg">Elemento decorativo de marca. Separa secciones de contenido con una línea horizontal y un adorno de diamantes.</p>
          </div>

          <div class="container-case-col">
            <Filete />
          </div>

        </section>

        <section class="container-col-md">

          <div class="container-text">
            <h2>Default — Posición del ícono</h2>
            <p>Un diamante único que puede colocarse al inicio, al centro o al final de la línea.</p>
          </div>

          <div class="container-case-col gap-8">

            <div class="container-text w-full">
              <p class="text-eyebrow">start</p>
              <Filete variant="default" iconPosition="start" />
            </div>

            <div class="container-text w-full">
              <p class="text-eyebrow">center</p>
              <Filete variant="default" iconPosition="center" />
            </div>

            <div class="container-text w-full">
              <p class="text-eyebrow">end</p>
              <Filete variant="default" iconPosition="end" />
            </div>

          </div>

        </section>

        <section class="container-col-md">

          <div class="container-text">
            <h2>Secondary — Posición del adorno</h2>
            <p>Un bloque de tres diamantes: el central a tamaño base y los laterales a un tercio. Puede colocarse al inicio, al centro o al final.</p>
          </div>

          <div class="container-case-col gap-8">

            <div class="container-text w-full">
              <p class="text-eyebrow">start</p>
              <Filete variant="secondary" iconPosition="start" />
            </div>

            <div class="container-text w-full">
              <p class="text-eyebrow">center</p>
              <Filete variant="secondary" iconPosition="center" />
            </div>

            <div class="container-text w-full">
              <p class="text-eyebrow">end</p>
              <Filete variant="secondary" iconPosition="end" />
            </div>

          </div>

        </section>

        <section class="container-col-md">

          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>Filete</code>.</p>
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
                <td><code>variant</code></td>
                <td>String</td>
                <td><code>'default'</code></td>
                <td><code>'default'</code> <code>'secondary'</code></td>
                <td>Tipo de adorno: diamante único o bloque de tres diamantes.</td>
              </tr>
              <tr>
                <td><code>iconPosition</code></td>
                <td>String</td>
                <td><code>'start'</code></td>
                <td><code>'start'</code> <code>'center'</code> <code>'end'</code></td>
                <td>Posición del adorno respecto a la línea.</td>
              </tr>
            </tbody>
          </table>

        </section>

      </div>

    </div>
  </main>

</template>
