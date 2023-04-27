import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/ez-commerce',
    name: 'ez-commerce',
    component: () => import('../views/EZ-Commerce.vue')
  },
  {
    path: '/digital-signage',
    name: 'digital-signage',
    component: () => import('../views/DigitalSignage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
