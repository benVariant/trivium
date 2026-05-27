// src/index.js
import './style.css'

// Exports nombrados
export { default as Button } from './components/global/Button.vue'
export { default as Input } from './components/global/Input.vue'
export { default as NavLink } from './components/global/NavLink.vue'

// Plugin global automático — solo toma los globales
const components = import.meta.glob('./components/global/**/*.vue', { eager: true })

export default {
  install(app) {
    Object.entries(components).forEach(([path, module]) => {
      const name = path.split('/').pop().replace('.vue', '')
      app.component(name, module.default)
    })
  }
}