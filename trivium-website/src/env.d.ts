/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

// El design system se distribuye como paquete JS sin tipos propios.
declare module '@trivium/design-system' {
  import type { DefineComponent, Plugin } from 'vue'
  type C = DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export const Button: C
  export const Card: C
  export const Input: C
  export const NavLink: C
  export const Accordion: C
  export const Filete: C
  export const Select: C
  export const DatePicker: C
  export const Textarea: C
  export const Checkbox: C
  export const RadioButton: C
  export const Toggle: C
  export const PhoneInput: C
  const plugin: Plugin
  export default plugin
}

declare module '@trivium/design-system/styles'
