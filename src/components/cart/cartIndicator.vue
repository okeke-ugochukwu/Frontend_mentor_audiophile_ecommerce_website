<template>
   <button 
      class="w-[23px] relative pxl:top-[-5px]" :class="{'opacity-50': menu.isActive}"
      @click="$store.dispatch('TOGGLE_MENU', ['cart', 'menu'])"
   >
      <img 
         class="w-full"
         src="@/assets/imgs/shared/cart.svg" alt="cart"
      >

      <span 
         v-show="cart.length > 0" id="cart-ind"
         class="
            bg-ad-brown text-white w-5 h-5 flex items-center justify-center text-xs
            absolute top-[-10px] right-[-10px] rounded-[100%]
         "
      >
         {{ cart.length || 0 }}
      </span>
   </button>
</template>


<script>
   import { computed, watch } from 'vue'; 
   import { useStore } from 'vuex';

   export default {
      name :'cartIndicator',
      
      setup () {
         const store = useStore()

         const menu = computed(() => { return store.state.menu })

         const cart = computed(() => {
            return store.state.cart
         })

         watch(() => cart, () => {
            PULSATE()
         }, {deep: true})

         const PULSATE = () => {
            var indicator = document.getElementById('cart-ind')
            indicator.classList.remove('animate__heartBeat')
            
            setTimeout(() => {
             indicator.classList.add('animate__heartBeat')
            }, 100);
         }

         return { menu, cart }
      }
   }
</script>

<style lang="scss" scoped>
   .pulse {
      
   }
</style>