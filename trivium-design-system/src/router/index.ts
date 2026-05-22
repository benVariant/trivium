
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import ButtonShowcase from '@/views/ButtonShowcase.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/button-showcase', component: ButtonShowcase },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})