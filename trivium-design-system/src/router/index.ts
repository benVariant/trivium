
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import ButtonShowcase from '@/views/ButtonShowcase.vue'
import Tokens from '@/views/Tokens.vue'
import InputShowcase from '@/views/InputShowcase.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/button-showcase', component: ButtonShowcase },
  { path: '/tokens', component: Tokens },
  { path: '/input-showcase', component: InputShowcase },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})