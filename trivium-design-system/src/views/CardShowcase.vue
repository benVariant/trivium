<script setup lang="ts">
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Card from '@/components/global/Card.vue'
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">
    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
      <Aside />

      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">
          <div class="container-text">
            <h1>Card</h1>
            <p class="text-lg">Contenedor de contenido con fondo y drop shadow definidos por el sistema de tokens. Admite cualquier tipo de contenido a través de su slot.</p>
          </div>
          <div class="container-case-row flex-wrap">
            <Card class="flex-1 min-w-64">
              <div class="container-text">
                <h3>Default</h3>
                <p>Superficie estándar (<code>surface-default</code>) con sombra <code>--shadow-lg</code>.</p>
              </div>
            </Card>
            <Card variant="deep" class="flex-1 min-w-64">
              <div class="container-text">
                <h3>Deep</h3>
                <p>Superficie más profunda (<code>surface-default-deep</code>) con sombra <code>--shadow-lg</code>.</p>
              </div>
            </Card>
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>Card</code>.</p>
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
                <td><code>'default'</code> <code>'deep'</code></td>
                <td>Estilo visual del contenedor (sin borde, con drop shadow <code>--shadow-lg</code>). <code>default</code> usa <code>surface-default</code>; <code>deep</code> usa <code>surface-default-deep</code> para crear capas de profundidad.</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  </main>
</template>
