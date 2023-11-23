import { createRouter, createWebHistory } from 'vue-router'

// Update once you need routes
// Remember to import over at `main.ts` by adding
// `app.use(router)` before `app.mount('#app')`

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => null,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
