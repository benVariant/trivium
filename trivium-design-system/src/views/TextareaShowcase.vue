<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Textarea from '@/components/global/Textarea.vue'
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">
    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
      <Aside />
      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">
          <div class="container-text">
            <h1>Textarea</h1>
            <p class="text-lg">Campo de texto multilínea para entradas extensas.</p>
          </div>
          <div class="container-case-col">
            <Textarea label="Mensaje" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Estados</h2>
            <p>El Textarea puede estar en estado inválido o deshabilitado.</p>
          </div>
          <div class="container-case-col">
            <Textarea label="Estado inválido" :invalid="true" />
            <Textarea label="Deshabilitado" :disabled="true" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>Textarea</code>.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Prop</th><th>Tipo</th><th>Default</th><th>Valores</th><th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>size</code></td><td>String</td><td><code>'md'</code></td>
                <td><code>'sm'</code> <code>'md'</code> <code>'lg'</code></td>
                <td>Tamaño de fuente del campo.</td>
              </tr>
              <tr>
                <td><code>label</code></td><td>String</td><td><code>''</code></td>
                <td>—</td><td>Etiqueta visible sobre el campo.</td>
              </tr>
              <tr>
                <td><code>placeholderText</code></td><td>String</td><td><code>'Escribe aquí'</code></td>
                <td>—</td><td>Texto placeholder del textarea.</td>
              </tr>
              <tr>
                <td><code>rows</code></td><td>Number</td><td><code>4</code></td>
                <td>—</td><td>Número de filas visibles por defecto.</td>
              </tr>
              <tr>
                <td><code>disabled</code></td><td>Boolean</td><td><code>false</code></td>
                <td>—</td><td>Deshabilita el campo.</td>
              </tr>
              <tr>
                <td><code>invalid</code></td><td>Boolean</td><td><code>false</code></td>
                <td>—</td><td>Aplica estilos de estado de error.</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  </main>
</template>
