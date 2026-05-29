<script setup>
import { ref } from 'vue'
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import RadioButton from '@/components/global/RadioButton.vue'

const selected = ref('op1')
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">
    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
      <Aside />
      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">
          <div class="container-text">
            <h1>Radio Button</h1>
            <p class="text-lg">Selección única entre un grupo de opciones. Soporta <code>v-model</code>.</p>
          </div>
          <div class="container-case-col">
            <RadioButton v-model="selected" value="op1" name="demo" label="Opción 1" />
            <RadioButton v-model="selected" value="op2" name="demo" label="Opción 2" />
            <RadioButton v-model="selected" value="op3" name="demo" label="Opción 3" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Estados</h2>
            <p>Las opciones pueden estar deshabilitadas individualmente.</p>
          </div>
          <div class="container-case-col">
            <RadioButton :model-value="'op1'" value="op1" name="estados" label="Seleccionado" />
            <RadioButton :model-value="null" value="op2" name="estados" label="Sin seleccionar" />
            <RadioButton :model-value="null" value="op3" name="estados" label="Deshabilitado" :disabled="true" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>RadioButton</code>.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Prop</th><th>Tipo</th><th>Default</th><th>Valores</th><th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>modelValue</code></td><td>Any</td><td><code>null</code></td>
                <td>—</td><td>Valor del grupo seleccionado. Usar con <code>v-model</code> en todos los radios del grupo.</td>
              </tr>
              <tr>
                <td><code>value</code></td><td>Any</td><td>requerido</td>
                <td>—</td><td>Valor único de esta opción.</td>
              </tr>
              <tr>
                <td><code>name</code></td><td>String</td><td><code>''</code></td>
                <td>—</td><td>Nombre del grupo de radios (accesibilidad).</td>
              </tr>
              <tr>
                <td><code>label</code></td><td>String</td><td><code>''</code></td>
                <td>—</td><td>Texto visible junto al radio.</td>
              </tr>
              <tr>
                <td><code>disabled</code></td><td>Boolean</td><td><code>false</code></td>
                <td>—</td><td>Deshabilita esta opción.</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  </main>
</template>
