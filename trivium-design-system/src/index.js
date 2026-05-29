// src/index.js
import './style.css'

// Exports nombrados
export { default as Button } from './components/global/Button.vue'
export { default as Input } from './components/global/Input.vue'
export { default as NavLink } from './components/global/NavLink.vue'
export { default as Accordion } from './components/global/Accordion.vue'
export { default as Filete } from './components/global/Filete.vue'
export { default as Select } from './components/global/Select.vue'
export { default as DatePicker } from './components/global/DatePicker.vue'
export { default as Textarea } from './components/global/Textarea.vue'
export { default as Checkbox } from './components/global/Checkbox.vue'
export { default as RadioButton } from './components/global/RadioButton.vue'
export { default as Toggle } from './components/global/Toggle.vue'
export { default as PhoneInput } from './components/global/PhoneInput.vue'

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