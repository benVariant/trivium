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
            <p class="text-lg">Contenedor de contenido con borde y fondo definidos por el sistema de tokens. Admite cualquier tipo de contenido a través de su slot.</p>
          </div>
          <div class="container-case-row flex-wrap">
            <Card class="flex-1 min-w-64">
              <div class="container-text">
                <h3>Default</h3>
                <p>Superficie estándar del sistema con borde secundario.</p>
              </div>
            </Card>
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Variantes</h2>
            <p>Las variantes se diferencian por el fondo y el color del borde, comunicando el rol semántico del contenido.</p>
          </div>
          <div class="container-case-col">
            <Card variant="default" class="flex-1 w-full min-w-64">
              <div class="container-text">
                <h3>Default</h3>
                <p>Contenido informativo o estructural sin jerarquía visual especial.</p>
              </div>
            </Card>
            <Card variant="action" class="flex-1 w-full  min-w-64">
              <div class="container-text">
                <h3>Action</h3>
                <p>Contenido que requiere atención o implica una acción por parte del usuario.</p>
              </div>
            </Card>
            <Card variant="secondary" class="flex-1 w-full  min-w-64">
              <div class="container-text">
                <h3>Secondary</h3>
                <p>Contenido complementario o de menor jerarquía dentro de una sección.</p>
              </div>
            </Card>
            <Card variant="deep-default" class="flex-1 min-w-64">
              <div class="container-text">
                <h3>Deep Default</h3>
                <p>Superficie más profunda que la default. Útil para anidar cards o crear capas de profundidad visual.</p>
              </div>
            </Card>
            <Card variant="deep-secondary" class="flex-1 min-w-64">
              <div class="container-text">
                <h3>Deep Secondary</h3>
                <p>Fondo profundo con borde secundario. Contenido complementario en contextos con mayor profundidad.</p>
              </div>
            </Card>
            <Card variant="deep-action" class="flex-1 min-w-64">
              <div class="container-text">
                <h3>Deep Action</h3>
                <p>Fondo profundo con borde de acción. Para destacar contenido sobre superficies de mayor profundidad.</p>
              </div>
            </Card>
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Ícono en vértices</h2>
            <p>La prop <code>cornerIcon</code> muestra un <code>PhDiamond</code> centrado en cada esquina del card. El color se elige entre tres valores del sistema de tokens.</p>
          </div>
          <div class="container-case-col">
            <Card corner-icon="default" class="w-full">
              <div class="container-text">
                <h3>Default</h3>
                <p>Ícono en color <code>icon-default</code>.</p>
              </div>
            </Card>
            <Card corner-icon="primary" class="w-full">
              <div class="container-text">
                <h3>Primary</h3>
                <p>Ícono en color <code>primary-500</code>.</p>
              </div>
            </Card>
            <Card variant="action" corner-icon="action" class="w-full">
              <div class="container-text">
                <h3>Action</h3>
                <p>Ícono en color <code>icon-action</code>. Combina naturalmente con la variante <code>action</code>.</p>
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
                <td><code>'default'</code> <code>'secondary'</code> <code>'action'</code> <code>'deep-default'</code> <code>'deep-secondary'</code> <code>'deep-action'</code></td>
                <td>Estilo visual del contenedor. Las variantes base usan <code>surface-default</code>; las variantes <code>deep-*</code> usan <code>surface-default-deep</code>. El sufijo determina el color del borde.</td>
              </tr>
              <tr>
                <td><code>cornerIcon</code></td>
                <td>String</td>
                <td>—</td>
                <td><code>'default'</code> <code>'primary'</code> <code>'action'</code></td>
                <td>Muestra un <code>PhDiamond</code> centrado en cada vértice del card. Cuando no se pasa, no se renderiza ningún ícono.</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  </main>
</template>
