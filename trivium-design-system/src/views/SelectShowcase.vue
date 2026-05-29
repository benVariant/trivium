<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Select from '@/components/global/Select.vue'

const options = [
  { value: 'op1', label: 'Opción 1' },
  { value: 'op2', label: 'Opción 2' },
  { value: 'op3', label: 'Opción 3' },
]
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">
    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
      <Aside />
      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">
          <div class="container-text">
            <h1>Select</h1>
            <p class="text-lg">Campo de selección con opciones desplegables.</p>
          </div>
          <div class="container-case-col">
            <Select :options="options" label="Categoría" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Estados</h2>
            <p>El Select puede estar en estado inválido o deshabilitado.</p>
          </div>
          <div class="container-case-col">
            <Select :options="options" label="Estado inválido" :invalid="true" />
            <Select :options="options" label="Deshabilitado" :disabled="true" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Tamaños</h2>
            <p>El Select viene en tres tamaños: sm, md y lg.</p>
          </div>
          <div class="container-case-col">
            <Select :options="options" size="sm" label="sm" />
            <Select :options="options" size="md" label="md" />
            <Select :options="options" size="lg" label="lg" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>Select</code>.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Prop</th><th>Tipo</th><th>Default</th><th>Valores</th><th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>options</code></td><td>Array</td><td><code>[]</code></td>
                <td><code>{ value, label }[]</code></td>
                <td>Lista de opciones a mostrar.</td>
              </tr>
              <tr>
                <td><code>size</code></td><td>String</td><td><code>'md'</code></td>
                <td><code>'sm'</code> <code>'md'</code> <code>'lg'</code></td>
                <td>Altura del campo.</td>
              </tr>
              <tr>
                <td><code>label</code></td><td>String</td><td><code>''</code></td>
                <td>—</td><td>Etiqueta visible sobre el campo.</td>
              </tr>
              <tr>
                <td><code>placeholderText</code></td><td>String</td><td><code>'Selecciona una opción'</code></td>
                <td>—</td><td>Texto de la opción inicial vacía.</td>
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
