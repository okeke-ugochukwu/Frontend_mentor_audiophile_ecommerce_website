import { createStore } from 'vuex'

const store = createStore({
   state: {
      menuBar: {
         isActive: false
      },

      products: [],

      productCategories: ['headphones', 'speakers', 'earphones']

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
         state[switchToToggle].isActive ?
         state[switchToToggle].isActive = false :
         state[switchToToggle].isActive = true
      },

      SET_PRODUCTS(state, data) {
         state.products = data
      }
   },

   actions: {
   },
   
   modules: {
   }
})

export default store