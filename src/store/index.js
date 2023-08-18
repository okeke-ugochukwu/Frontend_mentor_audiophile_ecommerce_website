import { createStore } from 'vuex'

const store = createStore({
   state: {
      productsMenu: {
         isShown: false
      },

      menu: {
         isActive: false,
         activeMenu: 'menu'
      },

      products: [],

      productCategories: ['headphones', 'speakers', 'earphones'],

      cart: []
   
   },

   getters: {
      FILTERED_PRODUCTS: (state) => (category) => {
         return state.products.filter(product => product.category === category).reverse()
      },

      FILTERED_PRODUCT: (state) => (slug) => {
         return state.products.find(product => product.slug === slug)
      }
   },

   mutations: {
      TOGGLE_SWITCH(state, switchToToggle) {
         state[switchToToggle].isActive = !state[switchToToggle].isActive
      },

      SET_PRODUCTS(state, data) {
         state.products = data
      },

      SET_ACTIVE_MENU(state, payload) {
         state.menu.activeMenu = payload
      },

      ADD_PRODUCT(state, payload) {

         const productInCart = state.cart.find(product => product.slug === payload.slug)

         if(productInCart) {
            state.cart[state.cart.indexOf(productInCart)] = payload
         }
         else {
            state.cart.push(payload)
         }

         sessionStorage.setItem('cart', JSON.stringify(state.cart))
         console.log(JSON.stringify(state.cart))
      },

      CHANGE_PRODUCT_QNTY(state, payload) {
         if(payload[0].quantity > 0 && (+payload[1]) != 0) {
            const product = state.cart[state.cart.indexOf(payload[0])]

            if(payload[2]) {
               product.quantity = payload[1]
            }
            else {
               product.quantity = +product.quantity + (+payload[1])

               if(product.quantity === 0) {
                  state.cart.splice(state.cart.indexOf(product), 1)
               }
            }

            sessionStorage.setItem('cart', JSON.stringify(state.cart))
         }
 
      },

      SET_CART_ITEMS(state, payload) {
         state.cart = payload
      },

      RESET_CART(state) {
         state.cart = []
         sessionStorage.removeItem('cart')
      }
   },

   actions: {
      TOGGLE_MENU({ state, commit }, payload) {
         if (state.menu.isActive) {
            if (state.menu.activeMenu === payload[1]) {
               commit('SET_ACTIVE_MENU', payload[0])
               console.log(document.body)
            }
            else {
               commit('TOGGLE_SWITCH', 'menu')
               console.log(document.body)
            }
         }
         else {
            commit('SET_ACTIVE_MENU', payload[0])
            commit('TOGGLE_SWITCH', 'menu')
            console.log(document.body)
         }
      }
   },
   
   modules: {
   }
})

export default store