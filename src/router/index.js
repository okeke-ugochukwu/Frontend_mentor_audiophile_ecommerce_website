import { createRouter, createWebHistory } from 'vue-router'
import HOME from '@/views/home/home.vue'
import CHECKOUT from '@/views/checkout/checkout.vue'
import store from '@/store'

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

   //CHECKOUT
   {
      path: '/checkout',
      name: 'checkout',
      component: CHECKOUT
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
      beforeEnter: (to) => {
         //if the category in the params doesn't exits in store
         // redireect to 404, thus prevent accessing of any page outside "/speakers", "/earphones" & "/speakers"
         if(!store.state.productCategories.includes(to.params.category)) {
            return {
               name: '404'
            }
         }
      },

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
         },

         
         {
            path: '/:pathMatch(.*)*',
            redirect: { name: '404' }
         }
      ]
   },

   {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "page-not-found" */ '@/views/404/404.vue'),
   },

   {
      path: '/:pathMatch(.*)*',
      redirect: { name: '404' }
   }

   
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   base: '/Frontend_mentor_audiophile_ecommerce_website/',
   routes,
 
   scrollBehavior(to, from, savedPosition) {
      if(to.hash) {
         return {
            el: to.hash
         }
      }
      else {
         if(savedPosition) {
            return savedPosition
         }
         else {
            return { top: 0}
         }
      }
    }
})

router.beforeEach((to) => {

   //close menus (cart & products) if open, before navigating
   if(store.state.menu.isActive) {
      store.commit('TOGGLE_SWITCH', 'menu')
   }

   //redirect back to home if cart is empty 
   if(to.fullPath === '/checkout') {
      const localCart = localStorage.getItem('cart')
      
      if(!localCart || localCart.length === 0) {
         return {
            name: 'home'
         }
      }
   }
})

export default router
