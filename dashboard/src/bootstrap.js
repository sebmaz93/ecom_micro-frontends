import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

// Mount function to start the app
const mount = (el) => {
  const app = createApp(Dashboard)
  app.mount(el)
}

// if we are in dev mode or isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('dashboard-dev-root')

  if (root) {
    mount(root)
  }
}

// when running through container (micro frontends)
export { mount }
