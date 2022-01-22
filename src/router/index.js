import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'Experience',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "experience" */ '../views/Experience.vue')
  },
  {
    path: '/growth',
    name: 'Growth',
    component: () => import(/* webpackChunkName: "growth" */ '../views/Growth.vue')
  },
  {
    path: '/work',
    name: 'Work',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "work" */ '../views/Work.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
