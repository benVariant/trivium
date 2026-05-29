<script setup>
import { ref } from 'vue'
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Toggle from '@/components/global/Toggle.vue'

const toggled = ref(false)
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">
    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
      <Aside />
      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">
          <div class="container-text">
            <h1>Toggle</h1>
            <p class="text-lg">Interruptor de activación/desactivación. Soporta <code>v-model</code>.</p>
          </div>
          <div class="container-case-col">
            <Toggle v-model="toggled" label="Notificaciones" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Estados</h2>
            <p>El Toggle puede estar activado, desactivado o deshabilitado.</p>
          </div>
          <div class="container-case-col">
            <Toggle :model-value="false" label="Apagado" />
            <Toggle :model-value="true" label="Encendido" />
            <Toggle :model-value="false" :disabled="true" label="Deshabilitado apagado" />
            <Toggle :model-value="true" :disabled="true" label="Deshabilitado encendido" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>Toggle</code>.</p>
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
                <td>—</td><td>Estado del toggle. Usar con <code>v-model</code>.</td>
              </tr>
              <tr>
                <td><code>label</code></td><td>String</td><td><code>''</code></td>
                <td>—</td><td>Texto visible junto al toggle.</td>
              </tr>
              <tr>
                <td><code>disabled</code></td><td>Boolean</td><td><code>false</code></td>
                <td>—</td><td>Deshabilita la interacción.</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  </main>
</template>
