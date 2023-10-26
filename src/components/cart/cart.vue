<template>
   <div class="margin relative sm:flex sm:justify-end">
      <div 
         class="
            relative flex flex-col gap-[31px] z-[21] w-full
            sm:max-w-[377px]  mt-6 py-[31px] px-7 bg-white rounded-lg
            sm:m-0 sm:top-6
         "
      >
         <!-- >>HEADING -->
         <div class="flex items-center justify-between">
            <h5 class="text-lg font-bold tracking-[1.286px] uppercase">
               Cart <span>{{ `(${cart.length})` }}</span>
            </h5>

            <button 
               v-if="cart.length > 0" @click="CLEAR_CART"
               class="border-none body-text underline text-ad-off-black-text hover:text-ad-brown"
            >
               Remove all
            </button>
         </div>

         <!-- >>EMPTY STATE -->
         <div v-if="cart.length === 0" class="mt-16">
            <p class="body-text text-center text-ad-off-black w-[160px] m-auto mb-[20px]">
               There are no items in your cart, yet.
            </p>
            
            <primaryBtn 
               :text="`Shop products`" 
               :type="`router-link`"
               :path="`/#product-categories`"
               class="w-[100%_!important]"
            />
         </div>

         <!-- >>CART ITEMS -->
         <div v-else>
            <ul class="flex flex-col gap-6">
               <li 
                  v-for="product in cart" :key="product.slug"
                  class="flex items-center justify-between"
               >
                  
                  <!-- THUMB + TITLE + PRICE -->
                  <div class="flex items-center gap-4">
                     <img class="w-[64px] rounded-lg" :src="require(`@/assets/imgs/cart/image-${product.slug}.jpg`)" alt="">

                     <span>
                        <span class="block text-[15px] font-bold leading-[25px] uppercase">
                           {{ product.short || product.model}}
                        </span>

                        <span class="block text-[14px] font-bold leading-[25px] text-ad-off-black-text">
                           $ {{ product.price.toLocaleString() }}
                        </span>
                     </span>
                  </div>

                  <!-- QUANTITY -->
                  <div class="w-[96px] flex h-8 items-center gap-[13px] justify-center bg-ad-light-grey">
                     <button 
                        class="
                           w-4 h-[16px] border-none bg-transparent outline-none font-bold text-[13px] 
                           text-center text-black opacity-25
                        "
                        @click="CHANGE_QNTY(product, -1, false)"
                     > - </button>
                     
                     <input 
                        class="
                           block bg-transparent border-none outline-none no-spinners w-[20px] text-[13px] 
                           text-black text-center font-bold focus:outline-none
                        "
                        type="number" autocomplete="off" :value="product.quantity"
                        @input="CHANGE_QNTY(product, $event.target.value, true)"
                     >
                     
                     <button 
                        class="
                           w-4 h-[16px] border-none bg-transparent outline-none font-bold text-[13px] 
                           text-center text-black opacity-25
                        "
                        @click="CHANGE_QNTY(product, +1, false)"
                     > + </button>
                  </div>
               </li>
            </ul>
         </div>

         <!-- >>TOTAL & CHECKOUT -->
         <div  v-if="cart.length > 0 " class="flex flex-col gap-6">
            <div class="flex justify-between body-text text-ad-off-black">
               <span class="uppercase font-bold">
                  Total
               </span>

               <span class="text-[18px] text-black font-bold">
                  $ {{ cartTotal.toLocaleString() }}
               </span>
            </div>

            <primaryBtn 
               :text="`Checkout`" 
               :type="`router-link`"
               :path="`/checkout`"
               class="w-[100%_!important]"
            />
         </div>
      </div>  
   </div>
</template>

<script>
   import { computed } from 'vue'; 
   import { useStore } from 'vuex';
   import primaryBtn from '@/components/a/buttons/primaryBtn.vue';

   export default {
      name: 'userCart',
      components: {
         primaryBtn,
      },

      setup () {

         const store = useStore()
   
         const cart = computed(() => { return store.state.cart })
         
         const cartTotal = computed(() => { 
            var total = 0
            
            store.state.cart.forEach(product => {
               total = total + (product.price * product.quantity)
            });

            return total
          })
         
         function CHANGE_QNTY(product, newQuantity, status) {
            console.log(product, newQuantity, status)
            store.commit('CHANGE_PRODUCT_QNTY', [product, newQuantity, status])
         }

         function CLEAR_CART() {
            store.commit('RESET_CART')
         }
         

         return { cart, cartTotal, CHANGE_QNTY, CLEAR_CART }
      }
   }
</script>

<style lang="scss" scoped>

</style>