<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import DatePicker from '@/components/global/DatePicker.vue'
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">
    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
      <Aside />
      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">
          <div class="container-text">
            <h1>Date Picker</h1>
            <p class="text-lg">Campo de selección de fecha.</p>
          </div>
          <div class="container-case-col">
            <DatePicker label="Fecha de nacimiento" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Estados</h2>
            <p>El Date Picker puede estar en estado inválido o deshabilitado.</p>
          </div>
          <div class="container-case-col">
            <DatePicker label="Estado inválido" :invalid="true" />
            <DatePicker label="Deshabilitado" :disabled="true" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Tamaños</h2>
            <p>El Date Picker viene en tres tamaños: sm, md y lg.</p>
          </div>
          <div class="container-case-col">
            <DatePicker size="sm" label="sm" />
            <DatePicker size="md" label="md" />
            <DatePicker size="lg" label="lg" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>DatePicker</code>.</p>
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
                <td>Altura del campo.</td>
              </tr>
              <tr>
                <td><code>label</code></td><td>String</td><td><code>''</code></td>
                <td>—</td><td>Etiqueta visible sobre el campo.</td>
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
