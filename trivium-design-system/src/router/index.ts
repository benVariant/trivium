
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import ButtonShowcase from '@/views/ButtonShowcase.vue'
import Tokens from '@/views/Tokens.vue'
import InputShowcase from '@/views/InputShowcase.vue'
import NavLinkShowcase from '@/views/NavLinkShowcase.vue'
import TypographyShowcase from '@/views/TypographyShowcase.vue'
import ColorsShowcase from '@/views/ColorsShowcase.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/typography', component: TypographyShowcase },
  { path: '/colors', component: ColorsShowcase },
  { path: '/tokens', component: Tokens },
  { path: '/button-showcase', component: ButtonShowcase },
  { path: '/input-showcase', component: InputShowcase },
  { path: '/nav-link-showcase', component: NavLinkShowcase },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})