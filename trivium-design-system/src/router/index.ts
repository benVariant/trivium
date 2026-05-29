
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import ButtonShowcase from '@/views/ButtonShowcase.vue'
import Tokens from '@/views/Tokens.vue'
import InputShowcase from '@/views/InputShowcase.vue'
import NavLinkShowcase from '@/views/NavLinkShowcase.vue'
import TypographyShowcase from '@/views/TypographyShowcase.vue'
import ColorsShowcase from '@/views/ColorsShowcase.vue'
import AccordionShowcase from '@/views/AccordionShowcase.vue'
import FileteShowcase from '@/views/FileteShowcase.vue'
import SelectShowcase from '@/views/SelectShowcase.vue'
import DatePickerShowcase from '@/views/DatePickerShowcase.vue'
import TextareaShowcase from '@/views/TextareaShowcase.vue'
import CheckboxShowcase from '@/views/CheckboxShowcase.vue'
import RadioButtonShowcase from '@/views/RadioButtonShowcase.vue'
import ToggleShowcase from '@/views/ToggleShowcase.vue'
import PhoneInputShowcase from '@/views/PhoneInputShowcase.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/typography', component: TypographyShowcase },
  { path: '/colors', component: ColorsShowcase },
  { path: '/tokens', component: Tokens },
  { path: '/button-showcase', component: ButtonShowcase },
  { path: '/input-showcase', component: InputShowcase },
  { path: '/nav-link-showcase', component: NavLinkShowcase },
  { path: '/accordion-showcase', component: AccordionShowcase },
  { path: '/filete-showcase', component: FileteShowcase },
  { path: '/select-showcase', component: SelectShowcase },
  { path: '/datepicker-showcase', component: DatePickerShowcase },
  { path: '/textarea-showcase', component: TextareaShowcase },
  { path: '/checkbox-showcase', component: CheckboxShowcase },
  { path: '/radio-showcase', component: RadioButtonShowcase },
  { path: '/toggle-showcase', component: ToggleShowcase },
  { path: '/phone-input-showcase', component: PhoneInputShowcase },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})