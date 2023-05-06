import { createRouter, createWebHistory } from 'vue-router'
import HOME from '@/views/home/home.vue'

const routes = [
   {
      path: '/home',
      redirect: { name: HOME }
   },
   {
      path: '/',
      name: 'home',
      component: HOME
   },

   {
      path: '/id',
      name: 'id',
      component: () => import(/* webpackChunkName: "product-route" */ '@/views/product/product.vue'),

      childern: {
         
      }
   },

   {
      path: '/checkout',
      name: 'checkout',
      component: () => import(/* webpackChunkName: "checkout-route" */ '@/views/checkout/checkout.vue')
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
