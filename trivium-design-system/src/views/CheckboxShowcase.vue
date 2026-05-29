<script setup>
import { ref } from 'vue'
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Checkbox from '@/components/global/Checkbox.vue'

const checked = ref(false)
const checkedTrue = ref(true)
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">
    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
      <Aside />
      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">
          <div class="container-text">
            <h1>Checkbox</h1>
            <p class="text-lg">Casilla de selección booleana. Soporta <code>v-model</code>.</p>
          </div>
          <div class="container-case-col">
            <Checkbox v-model="checked" label="Acepto los términos y condiciones" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Estados</h2>
            <p>El Checkbox puede estar marcado, sin marcar, inválido o deshabilitado.</p>
          </div>
          <div class="container-case-col">
            <Checkbox :model-value="false" label="Sin marcar" />
            <Checkbox :model-value="true" label="Marcado" />
            <Checkbox :model-value="false" :invalid="true" label="Inválido" />
            <Checkbox :model-value="false" :disabled="true" label="Deshabilitado" />
            <Checkbox :model-value="true" :disabled="true" label="Marcado y deshabilitado" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>Checkbox</code>.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Prop</th><th>Tipo</th><th>Default</th><th>Valores</th><th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>modelValue</code></td><td>Boolean</td><td><code>false</code></td>
                <td>—</td><td>Estado del checkbox. Usar con <code>v-model</code>.</td>
              </tr>
              <tr>
                <td><code>label</code></td><td>String</td><td><code>''</code></td>
                <td>—</td><td>Texto visible junto al checkbox.</td>
              </tr>
              <tr>
                <td><code>disabled</code></td><td>Boolean</td><td><code>false</code></td>
                <td>—</td><td>Deshabilita la interacción.</td>
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
