
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import ButtonShowcase from '@/views/ButtonShowcase.vue'
import Tokens from '@/views/Tokens.vue'
import InputShowcase from '@/views/InputShowcase.vue'
import NavLinkShowcase from '@/views/NavLinkShowcase.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/button-showcase', component: ButtonShowcase },
  { path: '/tokens', component: Tokens },
  { path: '/input-showcase', component: InputShowcase },
  { path: '/nav-link-showcase', component: NavLinkShowcase },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})