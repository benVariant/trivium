import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import PageStub from '@/views/PageStub.vue'

// Rutas del sitio. Por ahora todas apuntan a PageStub (placeholder) para que
// el layout (Header/Footer) navegue correctamente. Cada vista se irá
// reemplazando por su maquetado real en rondas posteriores.
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'inicio', component: PageStub, meta: { title: 'Inicio' } },
  { path: '/trivium', name: 'trivium', component: PageStub, meta: { title: 'Trivium' } },
  { path: '/membresia', name: 'membresia', component: PageStub, meta: { title: 'Membresía' } },
  { path: '/espacios', name: 'espacios', component: PageStub, meta: { title: 'Espacios' } },
  { path: '/eventos', name: 'eventos', component: PageStub, meta: { title: 'Eventos' } },
  { path: '/empresas-y-patrocinios', name: 'empresas', component: PageStub, meta: { title: 'Empresas y patrocinios' } },
  { path: '/solicitar-informacion', name: 'solicitar-informacion', component: PageStub, meta: { title: 'Solicitar información' } },
  { path: '/nosotros', name: 'nosotros', component: PageStub, meta: { title: 'Nosotros' } },
  { path: '/solicitar-acceso', name: 'solicitar-acceso', component: PageStub, meta: { title: 'Solicitar acceso' } },
  { path: '/proceso-de-admision', name: 'proceso-admision', component: PageStub, meta: { title: 'Proceso de admisión' } },
  { path: '/tipos-de-miembro', name: 'tipos-miembro', component: PageStub, meta: { title: 'Tipos de miembro' } },
  { path: '/noticias', name: 'noticias', component: PageStub, meta: { title: 'Noticias' } },
  { path: '/actualidad', name: 'actualidad', component: PageStub, meta: { title: 'Actualidad del club' } },
  { path: '/boletin', name: 'boletin', component: PageStub, meta: { title: 'Suscríbete al boletín' } },
  { path: '/preguntas-frecuentes', name: 'preguntas-frecuentes', component: PageStub, meta: { title: 'Preguntas frecuentes' } },
  { path: '/aviso-legal', name: 'aviso-legal', component: PageStub, meta: { title: 'Aviso legal' } },
  { path: '/privacidad', name: 'privacidad', component: PageStub, meta: { title: 'Privacidad' } },
  { path: '/cookies', name: 'cookies', component: PageStub, meta: { title: 'Cookies' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
