<script setup>
import { ref } from 'vue'
import Header from '@/components/showcase/Header.vue'
import Aside from '@/components/showcase/Aside.vue'
import PhoneInput from '@/components/global/PhoneInput.vue'

const phone = ref('')
</script>

<template>
  <Header />

  <main class="flex flex-col items-center py-4 md:py-12">
    <div class="container-row-lg max-w-5xl w-full mx-auto py-12 items-start">
      <Aside />
      <div class="container-col-lg w-full px-6 md:px-6 lg:px-0">

        <section class="container-col-md">
          <div class="container-text">
            <h1>Phone Input</h1>
            <p class="text-lg">Campo de teléfono con selector de país y código de marcado.</p>
          </div>
          <div class="container-case-col">
            <PhoneInput v-model="phone" label="Número de teléfono" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Dependencia: flag-icons</h2>
            <p>
              El selector de país usa las banderas de <code>flag-icons</code>. Para no inflar
              el CSS de la librería, este paquete <strong>no se empaqueta</strong> y se declara
              como <code>peerDependency</code> opcional. Al consumir <code>PhoneInput</code>
              desde la librería debes instalar e importar su CSS manualmente:
            </p>
            <pre><code>npm install flag-icons</code></pre>
            <p>Y en el punto de entrada de tu app (p. ej. <code>main.ts</code>):</p>
            <pre><code>import 'flag-icons/css/flag-icons.min.css'</code></pre>
            <p>
              Si no lo importas, el componente funciona igual pero las banderas no se
              mostrarán. Dentro de este sitio de documentación ya está importado, por eso
              se ven correctamente.
            </p>
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>País por defecto</h2>
            <p>El país inicial se configura con la prop <code>defaultCountry</code> usando el código ISO de 2 letras.</p>
          </div>
          <div class="container-case-col">
            <PhoneInput label="México (default)" defaultCountry="MX" />
            <PhoneInput label="Estados Unidos" defaultCountry="US" />
            <PhoneInput label="España" defaultCountry="ES" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Estados</h2>
            <p>El Phone Input puede estar en estado inválido o deshabilitado.</p>
          </div>
          <div class="container-case-col">
            <PhoneInput label="Estado inválido" :invalid="true" />
            <PhoneInput label="Deshabilitado" :disabled="true" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>Tamaños</h2>
            <p>El Phone Input viene en tres tamaños: sm, md y lg.</p>
          </div>
          <div class="container-case-col">
            <PhoneInput size="sm" label="sm" />
            <PhoneInput size="md" label="md" />
            <PhoneInput size="lg" label="lg" />
          </div>
        </section>

        <section class="container-col-md">
          <div class="container-text">
            <h2>API — Props</h2>
            <p>Referencia completa de todas las props disponibles en el componente <code>PhoneInput</code>.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Prop</th><th>Tipo</th><th>Default</th><th>Valores</th><th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>modelValue</code></td><td>String</td><td><code>''</code></td>
                <td>—</td><td>Número de teléfono. Usar con <code>v-model</code>.</td>
              </tr>
              <tr>
                <td><code>defaultCountry</code></td><td>String</td><td><code>'MX'</code></td>
                <td>Código ISO 2 letras</td><td>País seleccionado por defecto.</td>
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
