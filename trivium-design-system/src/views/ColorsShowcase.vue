<script setup>
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'

const brandPalettes = [
  {
    name: 'Oro Viejo',
    token: 'oro-viejo',
    semantic: 'primary',
    description: 'Color de marca principal. Se usa para acciones, highlights y elementos interactivos clave.',
    scales: [
      { scale: 50,  hex: '#EEEBE2' },
      { scale: 100, hex: '#E9E2D0' },
      { scale: 200, hex: '#DCCFAC' },
      { scale: 300, hex: '#D0BC87' },
      { scale: 400, hex: '#C3A963' },
      { scale: 500, hex: '#B7963E' },
      { scale: 600, hex: '#927832' },
      { scale: 700, hex: '#6E5A25' },
      { scale: 800, hex: '#493C19' },
      { scale: 900, hex: '#251E0C' },
      { scale: 950, hex: '#120F06' },
    ],
  },
  {
    name: 'Verde Botella',
    token: 'verde-botella',
    semantic: 'secondary',
    description: 'Color de marca secundario. Fondos de superficie, estados hover de elementos neutrales.',
    scales: [
      { scale: 50,  hex: '#E8ECE8' },
      { scale: 100, hex: '#D1DAD3' },
      { scale: 200, hex: '#A3B5A6' },
      { scale: 300, hex: '#76917A' },
      { scale: 400, hex: '#486C4D' },
      { scale: 500, hex: '#1A4721' },
      { scale: 600, hex: '#15391A' },
      { scale: 700, hex: '#102B14' },
      { scale: 800, hex: '#0A1C0D' },
      { scale: 900, hex: '#050E07' },
      { scale: 950, hex: '#030703' },
    ],
  },
  {
    name: 'Verde Bosque',
    token: 'verde-bosque',
    semantic: '—',
    description: 'Verde profundo de apoyo. Usado en fondos de página y capas base del sistema.',
    scales: [
      { scale: 50,  hex: '#E7EAE8' },
      { scale: 100, hex: '#D1D5D1' },
      { scale: 200, hex: '#A3ACA4' },
      { scale: 300, hex: '#748276' },
      { scale: 400, hex: '#465949' },
      { scale: 500, hex: '#182F1B' },
      { scale: 600, hex: '#132616' },
      { scale: 700, hex: '#0E1C10' },
      { scale: 800, hex: '#0A130B' },
      { scale: 900, hex: '#050905' },
      { scale: 950, hex: '#020503' },
    ],
  },
  {
    name: 'Taupe',
    token: 'taupe',
    semantic: 'neutral',
    description: 'Paleta neutral cálida. Bordes, superficies desactivadas, texto secundario.',
    scales: [
      { scale: 50,  hex: '#F3F2F0' },
      { scale: 100, hex: '#E8E6E2' },
      { scale: 200, hex: '#D2CDC6' },
      { scale: 300, hex: '#BBB3A9' },
      { scale: 400, hex: '#A59A8D' },
      { scale: 500, hex: '#8E8170' },
      { scale: 600, hex: '#72675A' },
      { scale: 700, hex: '#554D43' },
      { scale: 800, hex: '#39342D' },
      { scale: 900, hex: '#1C1A16' },
      { scale: 950, hex: '#0E0D0B' },
    ],
  },
]

const feedbackPalettes = [
  {
    name: 'Green',
    token: 'green',
    semantic: 'success',
    description: 'Estados positivos, confirmaciones, éxito.',
    scales: [
      { scale: 50,  hex: '#F2F8F5' },
      { scale: 100, hex: '#E4F1EA' },
      { scale: 200, hex: '#C8E3D5' },
      { scale: 300, hex: '#A6D2BC' },
      { scale: 400, hex: '#6FB794' },
      { scale: 500, hex: '#2F855A' },
      { scale: 600, hex: '#276F4B' },
      { scale: 700, hex: '#205C3E' },
      { scale: 800, hex: '#18452E' },
      { scale: 900, hex: '#102E1F' },
      { scale: 950, hex: '#081710' },
    ],
  },
  {
    name: 'Yellow',
    token: 'yellow',
    semantic: 'warning',
    description: 'Advertencias, estados de precaución.',
    scales: [
      { scale: 50,  hex: '#FFF6ED' },
      { scale: 100, hex: '#FDEBD8' },
      { scale: 200, hex: '#FBD7B0' },
      { scale: 300, hex: '#F7BE7F' },
      { scale: 400, hex: '#F09A3D' },
      { scale: 500, hex: '#D97706' },
      { scale: 600, hex: '#B86305' },
      { scale: 700, hex: '#995204' },
      { scale: 800, hex: '#733D03' },
      { scale: 900, hex: '#4D2902' },
      { scale: 950, hex: '#261401' },
    ],
  },
  {
    name: 'Blue',
    token: 'blue',
    semantic: 'info',
    description: 'Información, mensajes de ayuda, tooltips.',
    scales: [
      { scale: 50,  hex: '#F2F6FA' },
      { scale: 100, hex: '#E3EDF5' },
      { scale: 200, hex: '#C7D9EA' },
      { scale: 300, hex: '#A4C1DB' },
      { scale: 400, hex: '#6F9EC3' },
      { scale: 500, hex: '#2C5282' },
      { scale: 600, hex: '#25476F' },
      { scale: 700, hex: '#1E3A5C' },
      { scale: 800, hex: '#162B45' },
      { scale: 900, hex: '#0F1D2F' },
      { scale: 950, hex: '#080F18' },
    ],
  },
  {
    name: 'Red',
    token: 'red',
    semantic: 'destructive',
    description: 'Errores, acciones destructivas, estados críticos.',
    scales: [
      { scale: 50,  hex: '#FDF3F1' },
      { scale: 100, hex: '#FBE4E0' },
      { scale: 200, hex: '#F6C7BF' },
      { scale: 300, hex: '#EEA39A' },
      { scale: 400, hex: '#E06B5D' },
      { scale: 500, hex: '#C2412D' },
      { scale: 600, hex: '#A33626' },
      { scale: 700, hex: '#872C1F' },
      { scale: 800, hex: '#642017' },
      { scale: 900, hex: '#43150F' },
      { scale: 950, hex: '#210B08' },
    ],
  },
]
</script>

<template>
    <body>
        <Header />

        <main class="flex flex-col items-center py-4 md:py-12">

            <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">

                <Aside />

                <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

                    <section class="container-text">
                        <span class="text-eyebrow">Fundamentos</span>
                        <h1>Colores</h1>
                        <p>El sistema de color de Trivium está construido sobre 8 paletas primitivas con 11 escalas cada una (50–950). Las paletas de marca definen la identidad visual del producto; las paletas de feedback comunican estados del sistema. Cada primitiva se mapea a un nombre semántico que es el que usan los componentes.</p>
                    </section>

                    <hr>

                    <section id="foundations" class="container-col-md">
                        <div class="container-text">
                            <h2>Colores de fundación</h2>
                            <p>Tres valores fijos que definen los extremos del sistema. Nota: el "black" y "white" de Trivium no son neutros puros — tienen temperatura cromática intencional.</p>
                        </div>

                        <div class="flex gap-4">
                            <div class="flex flex-col gap-2 items-center">
                                <div class="w-16 h-16 rounded-md border border-(--color-border-tertiary)" style="background-color: #F3F2F0;"></div>
                                <code class="text-xs">white</code>
                                <span style="font-size: var(--font-size-body-xsm); color: var(--color-text-body-secondary);">#F3F2F0</span>
                            </div>
                            <div class="flex flex-col gap-2 items-center">
                                <div class="w-16 h-16 rounded-md border border-(--color-border-tertiary)" style="background-color: #1A4721;"></div>
                                <code class="text-xs">black</code>
                                <span style="font-size: var(--font-size-body-xsm); color: var(--color-text-body-secondary);">#1A4721</span>
                            </div>
                            <div class="flex flex-col gap-2 items-center">
                                <div class="w-16 h-16 rounded-md border border-(--color-border-tertiary)" style="background-color: #050905;"></div>
                                <code class="text-xs">ultrablack</code>
                                <span style="font-size: var(--font-size-body-xsm); color: var(--color-text-body-secondary);">#050905</span>
                            </div>
                        </div>
                    </section>

                    <hr>

                    <section id="brand" class="container-col-md">
                        <div class="container-text">
                            <h2>Paletas de marca</h2>
                            <p>Las cuatro paletas que definen la identidad de Trivium. Cada una se mapea a un alias semántico que es el nombre que debes usar en código.</p>
                        </div>

                        <div v-for="palette in brandPalettes" :key="palette.token" class="container-col-md">
                            <div class="container-text">
                                <div class="flex items-center gap-3">
                                    <h3>{{ palette.name }}</h3>
                                    <code style="font-size: var(--font-size-body-xsm);">→ {{ palette.semantic }}</code>
                                </div>
                                <p>{{ palette.description }}</p>
                            </div>

                            <div class="flex flex-wrap gap-2">
                                <div
                                    v-for="s in palette.scales"
                                    :key="s.scale"
                                    class="flex flex-col gap-1 items-center"
                                >
                                    <div
                                        class="w-12 h-12 rounded border border-(--color-border-tertiary)"
                                        :style="{ backgroundColor: s.hex }"
                                    ></div>
                                    <span style="font-size: var(--font-size-body-xsm); color: var(--color-text-body-secondary);">{{ s.scale }}</span>
                                </div>
                            </div>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Token primitivo</th>
                                        <th>Alias semántico</th>
                                        <th>Hex</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="s in palette.scales" :key="s.scale">
                                        <td><code>--color-{{ palette.token }}-{{ s.scale }}</code></td>
                                        <td>
                                            <code v-if="palette.semantic !== '—'">--color-{{ palette.semantic }}-{{ s.scale }}</code>
                                            <span v-else style="color: var(--color-text-body-secondary);">—</span>
                                        </td>
                                        <td>
                                            <div class="flex items-center gap-2">
                                                <div class="w-4 h-4 rounded-sm border border-(--color-border-tertiary)" :style="{ backgroundColor: s.hex }"></div>
                                                <code>{{ s.hex }}</code>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <hr>

                    <section id="feedback" class="container-col-md">
                        <div class="container-text">
                            <h2>Paletas de feedback</h2>
                            <p>Cuatro paletas funcionales para comunicar estados del sistema. No representan la marca — representan significados universales de UI.</p>
                        </div>

                        <div v-for="palette in feedbackPalettes" :key="palette.token" class="container-col-md">
                            <div class="container-text">
                                <div class="flex items-center gap-3">
                                    <h3>{{ palette.name }}</h3>
                                    <code style="font-size: var(--font-size-body-xsm);">→ {{ palette.semantic }}</code>
                                </div>
                                <p>{{ palette.description }}</p>
                            </div>

                            <div class="flex flex-wrap gap-2">
                                <div
                                    v-for="s in palette.scales"
                                    :key="s.scale"
                                    class="flex flex-col gap-1 items-center"
                                >
                                    <div
                                        class="w-12 h-12 rounded border border-(--color-border-tertiary)"
                                        :style="{ backgroundColor: s.hex }"
                                    ></div>
                                    <span style="font-size: var(--font-size-body-xsm); color: var(--color-text-body-secondary);">{{ s.scale }}</span>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </div>

            <footer></footer>

        </main>
    </body>
</template>
