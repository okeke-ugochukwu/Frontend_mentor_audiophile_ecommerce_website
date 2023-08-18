import { createRouter, createWebHistory } from 'vue-router'
import HOME from '@/views/home/home.vue'

const routes = [
   //HOME
   {
      path: '/home',
      redirect: { name: 'home' }
   },
   {
      path: '/',
      redirect: { name: 'home' }
   },
   {
      path: '',
      name: 'home',
      component: HOME
   },

   
   //REDIRECT TO CORRECT ROUTES IF MISSPELT (REAL LIFE USECASE)
   {
      path: '/headphone',
      redirect: '/headphones'
   },

   {
      path: '/earphone',
      redirect: '/earphones'
   },

   {
      path: '/speaker',
      redirect: '/speakers'
   },


   //PRODUCT CATEGORY
   {
      path: '/:category',
      component: () => import(/* webpackChunkName: "product-category-route" */ '@/views/productCategory/productCategory.vue'),

      children: [
         {
            path: '',
            name: 'categoryProducts',
            component: () => import(/* webpackChunkName: "category-route" */ '@/components/product/categoryProducts.vue'),
         },

         
         {
            path: ':product',
            name: 'product',
            component: () => import(/* webpackChunkName: "product-route" */ '@/components/product/productDetail.vue'),
         }
      ]
   },

   

   //CHECKOUT
   {
      path: '/checkout',
      name: 'checkout',
      component: () => import(/* webpackChunkName: "checkout-route" */ '@/views/checkout/checkout.vue')
   }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
 
   scrollBehavior(to, from, savedPosition) {
       console.log(to, from, savedPosition)
 
       return new Promise((resolve) => {
          setTimeout(() => {
             if (savedPosition) {
                resolve(savedPosition)
             }
             else {
                resolve({ top: 0 })
             }
          }, 500)
       })
    }
 })

export default router
