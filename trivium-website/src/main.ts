import { createApp } from 'vue'
import './style.css'
import TriviumDesignSystem from '@trivium/design-system'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .use(TriviumDesignSystem)
  .mount('#app')
