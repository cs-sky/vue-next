import {
  createRouter,
  createWebHashHistory
  // createWebHistory
} from 'vue-router'

import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 }
]

const routerHistory = createWebHashHistory()
export default createRouter({
  history: routerHistory,
  routes
})
