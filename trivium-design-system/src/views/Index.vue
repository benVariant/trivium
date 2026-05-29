<script setup>
import { ref } from 'vue'
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import Button from '@/components/global/Button.vue'
import Card from '@/components/global/Card.vue'
import { PhCopy, PhCheck } from '@phosphor-icons/vue'

const copied = ref(false)

// Actualizar este contexto cuando cambien componentes, tokens o convenciones del sistema.
const PROJECT_CONTEXT = `# Trivium Design System — Contexto para agentes de IA

## Descripción
Sistema de diseño de la marca Trivium. Provee componentes Vue 3 reutilizables, tokens de diseño y clases de layout globales. Se distribuye como paquete npm interno y se documenta en este sitio.

## Stack
- Vue 3 + TypeScript, Vite 8
- Tailwind CSS v4 (@tailwindcss/vite)
- Phosphor Icons (@phosphor-icons/vue)
- Vue Router 5

## Convenciones de código
- Componentes globales usan CSS custom properties (var(--color-*)) para colores y tipografía — NO clases Tailwind en componentes
- Tailwind se usa exclusivamente para estructura y layout (flex, grid, spacing, responsive)
- Tailwind v4: usar la sintaxis con paréntesis border-(--color-border-secondary) en vez de la sintaxis antigua de corchetes con var()
- Componentes en src/components/global/, vistas de documentación en src/views/

## Escala tipográfica de Tailwind (src/style.css — @theme inline)
Toda la escala text-* de Tailwind está mapeada a los tokens del sistema. NO usar valores hardcoded de font-size.

Escala de cuerpo:
- text-xs   → --font-size-body-xsm  (0.75rem / 0.75rem)
- text-sm   → --font-size-body-sm   (0.8125rem / 0.875rem)
- text-base → --font-size-body-base (0.9375rem / 1rem)
- text-lg   → --font-size-body-lg   (1rem / 1.125rem)

Escala de headings (solo para desacoplar tamaño visual de semántica HTML):
- text-xl   → --font-size-heading-xl   = h4 visual
- text-2xl  → --font-size-heading-2xl  = h3 visual
- text-3xl  → --font-size-heading-3xl  = h2 visual
- text-5xl  → --font-size-heading-5xl  = h1 visual

Regla: usar text-xl/2xl/3xl/5xl SOLO cuando el nivel semántico del elemento (h1-h6) no coincide con el tamaño visual requerido por diseño. Por defecto, h1-h6 ya tienen su tamaño correcto via typography.css. Combinar con .text-heading para mantener la fuente serif: \`<h1 class="text-2xl text-heading">\`.

## Sistema de tokens (3 capas)
1. Primitivos — valores raw (hex, px): src/tokens/primitive/
2. Semánticos — roles semánticos (--color-surface-action, --color-label-default): src/tokens/semantic/
3. Componente/Tema — tokens por componente o tema dark/light: src/tokens/component/

Usar siempre tokens semánticos en componentes, nunca primitivos directamente.

## Clases de layout globales (src/styles/layouts.css)
- container-text: flex column, gap 1rem — heading + párrafo descriptivo
- container-col-md: flex column, gap 2rem — sección (container-text + contenido)
- container-col-lg: flex column, gap 4rem — columna de página (múltiples secciones)
- container-row-lg: flex row, gap 4rem — layout de página (aside + contenido)

Jerarquía: container-row-lg > container-col-lg > section.container-col-md > div.container-text

## Clases tipográficas (src/styles/utilities.css)
- text-eyebrow: Manrope 700, font-size body-sm, color eyebrow
- text-heading: Latienne Pro 700, line-height 1.2, color heading

## Componentes disponibles

### Card
Props:
- variant: 'default' | 'secondary' | 'action' | 'deep-default' | 'deep-secondary' | 'deep-action' (default: 'default')
- cornerIcon: 'default' | 'primary' | 'action' (opcional) — muestra PhDiamond fill en los 4 vértices. Sin esta prop no aparece ningún ícono.

Lógica de variantes: base (surface-default) + deep-* (surface-default-deep). El sufijo determina el borde: sin sufijo = border-default, secondary = border-secondary, action = border-action.

### Button
Props:
- variant: 'primary' | 'primaryOutline' | 'neutral' | 'neutralOutline' (default: 'primary')
- size: 'sm' | 'md' | 'lg' (default: 'md')
- disabled: boolean (default: false)
- icon: componente Phosphor (default: null)
- iconPosition: 'left' | 'right' (default: 'left')
- iconSize: number en px (default: 20)
- ariaExpanded: boolean

### Input
Props:
- size: 'sm' | 'md' | 'lg' (default: 'md')
- variant: 'default' (default: 'default')
- invalid: boolean (default: false)
- disabled: boolean (default: false)
- label: string
- placeholderText: string (default: 'Placeholder')
- showPlaceholder: boolean (default: true)
- icon: componente Phosphor (default: null)
- iconPosition: 'left' | 'right' (default: 'left')
- iconSize: number en px (default: 20)

### NavLink
Props:
- to: string (requerido) — ruta de Vue Router
- size: 'sm' | 'md' | 'lg' (default: 'md')
- variant: 'primary' | 'neutral' | 'neutralSecondary' (default: 'primary')

### Accordion
Props:
- items: Array<{ title: string, content: string }>
- size: 'sm' | 'md' | 'lg' (default: 'md')
- variant: 'default' (default: 'default')
Comportamiento: solo un ítem abierto a la vez (acordeón exclusivo).

### Select
Props:
- size: 'sm' | 'md' | 'lg' (default: 'md')
- disabled: boolean (default: false)
- invalid: boolean (default: false)
- label: string
- options: Array<{ value: string, label: string }>
- placeholderText: string (default: 'Selecciona una opción')

### Textarea
Props:
- size: 'sm' | 'md' | 'lg' (default: 'md')
- disabled: boolean (default: false)
- invalid: boolean (default: false)
- label: string
- placeholderText: string (default: 'Escribe aquí')
- rows: number (default: 4)

### Checkbox
Props:
- label: string
- modelValue: boolean — soporta v-model
- disabled: boolean (default: false)

### RadioButton
Props:
- label: string
- value: any (requerido) — valor de esta opción
- modelValue: any — soporta v-model
- name: string — agrupa los radio buttons del mismo grupo
- disabled: boolean (default: false)

### Toggle
Props:
- label: string
- modelValue: boolean — soporta v-model
- disabled: boolean (default: false)

### DatePicker
Props:
- size: 'sm' | 'md' | 'lg' (default: 'md')
- disabled: boolean (default: false)
- invalid: boolean (default: false)
- label: string

### PhoneInput
Props:
- size: 'sm' | 'md' | 'lg' (default: 'md')
- disabled: boolean (default: false)
- invalid: boolean (default: false)
- label: string
- modelValue: string — soporta v-model
- defaultCountry: string código ISO (default: 'ES')

### Filete
Divisor decorativo de marca.
Props:
- variant: 'default' | 'secondary' (default: 'default')
- iconPosition: 'start' | 'center' | 'end' (default: 'start')

## Instalación
\`\`\`
npm install github:tu-usuario/trivium-design-system
\`\`\`

\`\`\`ts
// main.ts — registro global de todos los componentes
import TriviumDesignSystem from '@trivium/design-system'
import '@trivium/design-system/styles'
app.use(TriviumDesignSystem)

// O importar individualmente
import { Button, Input, NavLink } from '@trivium/design-system'
import '@trivium/design-system/styles'
\`\`\``

async function copyContext() {
  try {
    await navigator.clipboard.writeText(PROJECT_CONTEXT)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2500)
  } catch {
    console.error('No se pudo acceder al portapapeles.')
  }
}
</script>

<template>
        <Header />

        <main class="flex flex-col items-center py-4 md:py-12">

            <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">

                <Aside />

                <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

                    <section id="introduccion" class="container-text">
                        <span class="text-eyebrow">Trivium Design System</span>
                        <h1>Inicio</h1>
                        <p>Bienvenido al sistema de diseño de <strong>Trivium</strong>. Este sitio es la fuente de verdad para diseñadores y desarrolladores del equipo — aquí encontrarás los fundamentos visuales, el catálogo de tokens y la documentación de cada componente.</p>
                    </section>

                    <Card variant="deep-secondary">
                        <img src="/src/assets/IA-agents.webp" width="200" alt="Contexto para agentes de IA">
                        <div class="container-text">
                            <h3>Contexto para agentes de IA</h3>
                            <p class="text-sm">Copia una descripción estructurada del proyecto para pegar en Claude, Cursor, Copilot u otros agentes.</p>
                        </div>
                        <Button
                            @click="copyContext"
                            :icon="copied ? PhCheck : PhCopy"
                            variant="neutralOutline"
                            size="sm"
                            class="shrink-0"
                        >{{ copied ? 'Copiado' : 'Copiar contexto' }}</Button>
                    </Card>

                    <hr>

                    <section id="instalacion" class="container-col-md">

                        <div class="container-text">
                            <h2>Instalación</h2>
                            <p>El paquete se instala directamente desde GitHub. No requiere publicación en npm.</p>
                        </div>

                        <div class="container-text">
                            <h3>1. Instalar el paquete</h3>
                            <p>En el proyecto consumidor, ejecuta:</p>
                            <code>npm install github:tu-usuario/trivium-design-system</code>
                        </div>

                        <div class="container-text">
                            <h3>2. Registrar el plugin en main.ts</h3>
                            <p>Importa el design system y regístralo como plugin de Vue. Esto hace que todos los componentes estén disponibles globalmente sin necesidad de importarlos uno a uno.</p>
                            <pre><code>import { createApp } from 'vue'
import App from './App.vue'
import TriviumDesignSystem from '@trivium/design-system'
import '@trivium/design-system/styles'

const app = createApp(App)
app.use(TriviumDesignSystem)
app.mount('#app')</code></pre>
                        </div>

                        <div class="container-text">
                            <h3>3. Usar los componentes</h3>
                            <p>Una vez registrado el plugin, los componentes están disponibles en cualquier template sin imports adicionales:</p>
                            <pre><code>&lt;Button variant="primary" size="md"&gt;
  Hola Trivium
&lt;/Button&gt;</code></pre>
                        </div>

                        <div class="container-text">
                            <h3>O importar individualmente</h3>
                            <p>Si prefieres importar solo lo que necesitas:</p>
                            <pre><code>import { Button, Input, NavLink } from '@trivium/design-system'
import '@trivium/design-system/styles'</code></pre>
                        </div>

                    </section>

                    <hr>

                    <section id="peer-dependencies" class="container-col-md">

                        <div class="container-text">
                            <h2>Dependencias requeridas</h2>
                            <p>El design system tiene tres <strong>peerDependencies</strong> que el proyecto consumidor debe tener instaladas. Si ya usas Vue 3 con Vue Router y Phosphor Icons, no necesitas hacer nada adicional.</p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Paquete</th>
                                    <th>Versión mínima</th>
                                    <th>Por qué se necesita</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>vue</code></td>
                                    <td><code>^3.5.0</code></td>
                                    <td>Framework base de todos los componentes.</td>
                                </tr>
                                <tr>
                                    <td><code>vue-router</code></td>
                                    <td><code>^5.0.0</code></td>
                                    <td>Requerido por el componente <code>NavLink</code>, que usa <code>&lt;RouterLink&gt;</code> internamente.</td>
                                </tr>
                                <tr>
                                    <td><code>@phosphor-icons/vue</code></td>
                                    <td><code>^2.2.0</code></td>
                                    <td>Librería de iconos usada en <code>Button</code> e <code>Input</code>.</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                    <hr>

                    <section id="decisiones" class="container-col-md">

                        <div class="container-text">
                            <h2>Decisiones de diseño</h2>
                            <p>Dos decisiones técnicas definen cómo está construido este sistema y por qué funciona como funciona.</p>
                        </div>

                        <div class="container-text">
                            <h3>Tokens CSS sobre clases de Tailwind en componentes</h3>
                            <p>Los componentes globales (<code>Button</code>, <code>Input</code>, <code>NavLink</code>) usan CSS custom properties (<code>var(--color-surface-action)</code>) en sus estilos, no clases utilitarias de Tailwind. Esto permite dos cosas: que los tokens puedan cambiar en runtime (habilitando dark mode sin recompilar) y que el proyecto consumidor pueda sobrescribir tokens para personalizar el sistema sin modificar el código fuente.</p>
                        </div>

                        <div class="container-text">
                            <h3>Tailwind para layouts, tokens para decisiones de diseño</h3>
                            <p>Tailwind CSS se usa exclusivamente para construir estructuras y layouts (grid, flex, spacing, responsive breakpoints). Todas las decisiones de diseño — colores, tipografía — están modeladas en el sistema de tokens. Esta separación mantiene ambos sistemas en su área de responsabilidad y evita mezclar fuentes de verdad.</p>
                        </div>

                    </section>

                </div>

            </div>

            <footer></footer>

        </main>
</template>
