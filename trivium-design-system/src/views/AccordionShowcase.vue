<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Accordion from '@/components/global/Accordion.vue'

const itemsBasico = [
  { title: 'Elemento del acordeón', content: 'El contenido del panel se muestra cuando el ítem está activo. Puede contener texto, imágenes u otros componentes.' }
]

const itemsMultiples = [
  { title: 'Primer elemento', content: 'Contenido del primer panel. Solo un ítem puede estar abierto a la vez.' },
  { title: 'Segundo elemento', content: 'Contenido del segundo panel. Al abrir este, el anterior se cierra automáticamente.' },
  { title: 'Tercer elemento', content: 'Contenido del tercer panel. Este comportamiento se llama acordeón exclusivo.' }
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
            <h1>Accordion</h1>
            <p class="text-lg">Componente de expansión y colapso para organizar contenido en secciones colapsables.</p>
          </div>

          <div class="container-case-col">
            <Accordion :items="itemsBasico" />
          </div>

        </section>

        <section class="container-col-md">

          <div class="container-text">
            <h2>Múltiples elementos</h2>
            <p>El acordeón admite cualquier número de ítems. Solo un panel puede estar abierto a la vez.</p>
          </div>

          <div class="container-case-col">
            <Accordion :items="itemsMultiples" />
          </div>

        </section>

        <section class="container-col-md">

          <div class="container-text">
            <h2>Tamaños</h2>
            <p>El componente viene en tres tamaños: sm, md y lg. Afectan el padding y el tamaño de fuente del header y el contenido.</p>
          </div>

          <div class="container-case-col gap-8">

            <div class="container-text">
              <p class="text-eyebrow">sm</p>
              <Accordion size="sm" :items="itemsBasico" />
            </div>

            <div class="container-text">
              <p class="text-eyebrow">md</p>
              <Accordion size="md" :items="itemsBasico" />
            </div>

            <div class="container-text">
              <p class="text-eyebrow">lg</p>
              <Accordion size="lg" :items="itemsBasico" />
            </div>

          </div>

        </section>

        <section class="container-col-md">

          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>Accordion</code>.</p>
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
                <td><code>items</code></td>
                <td>Array</td>
                <td><code>[]</code></td>
                <td><code>{ title: string, content: string }[]</code></td>
                <td>Lista de ítems a mostrar. Cada ítem requiere un título y un contenido de texto.</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>String</td>
                <td><code>'md'</code></td>
                <td><code>'sm'</code> <code>'md'</code> <code>'lg'</code></td>
                <td>Controla el padding y tamaño de fuente del header y el panel.</td>
              </tr>
              <tr>
                <td><code>variant</code></td>
                <td>String</td>
                <td><code>'default'</code></td>
                <td><code>'default'</code></td>
                <td>Estilo visual del acordeón.</td>
              </tr>
            </tbody>
          </table>

        </section>

      </div>

    </div>
  </main>

</template>
