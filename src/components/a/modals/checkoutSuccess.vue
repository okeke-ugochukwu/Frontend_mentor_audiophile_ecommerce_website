<template>
   <div 
      v-if="modalIsActive && cart"
      class="
         p-[0.01px] fixed h-screen overflow-scroll top-0 left-0 z-index-[10] w-screen  outline-red-500 outline-[2px]
         flex items-center justify-center bg-[#00000066] 
      "
   >

      
      <section 
         class="
            p-8 w-[87.2%] max-w-[540px] h-max bg-white rounded-lg flex items-center justify-center
            min-h-[400px] sm:p-12
         " 
         v-if="cart"
      >
         <div ref="loader">
            <primaryLoader />
         </div>
         
         <div ref="content" class="hidden w-full flex-col items-start gap-6">
             <img src="@/assets/imgs/checkout/icon-order-confirmation.svg" alt="checkout-successful-icon">

            <header>
               <h2 class="heading-3 mb-6">
                  Thank you <br /> for your order
               </h2>

               <p class="body-text text-ad-off-black">
                  You will receive an email confirmation shortly.
               </p>
            </header>

            <div class="w-full rounded-lg overflow-hidden sm:flex">
               <!-- >>ITEMS -->
               <div class="bg-[#f1f1f1] p-6 sm:w-[calc(100%-44.59%)]">
                  <div 
                     class="flex flex-col gap-4"
                     :class="{'pb-3 border-b border-b-[#00000014]': cart.length > 1}"
                  >
                     <div 
                        class="flex gap-4 h-max"
                        v-for="(product, index) in cart" :key="product.model"
                        :class="{'hidden': cartItemsSummarized && index != 0}"
                     >
                        <img 
                           class="w-[50px] rounded-lg" 
                           :src="require(`@/assets/imgs/cart/image-${product.slug}.jpg`)" 
                           alt=""
                        >

                        <div 
                           class="font-bold w-full flex flex-col justify-center"
                        >
                           <div class="w-full h-max flex justify-between [&>span]:block text-[15px] uppercase">
                              <span> {{ product.model }} </span>

                              <span class="text-sm text-ad-off-black"> x{{ product.quantity }} </span>
                           </div>

                           <div class="text-ad-off-black">
                              &dollar;{{parseInt(product.price).toLocaleString()}}
                           </div>
                        </div>
                     </div>
                  </div>

                  <button 
                     type="button"
                     class="text-center w-full label pt-3 text-ad-off-black cursor-pointer"
                     v-if="cart.length > 1"
                     @click="cartItemsSummarized = !cartItemsSummarized"
                  >
                     {{ `and ${cart.length - 1} other item${cart.length > 1 ? 's'  : ''}` }}
                  </button>
               </div>
               
               <!-- >>GRANDTOTAL -->
               <div 
                  class="w-full bg-black flex flex-col gap-2 [&>span]:block p-6 sm:w-[44.59%]"
                  :class="{'justify-end pb-10': !cartItemsSummarized, 'justify-center': cartItemsSummarized}"
               >
                  <span class="text-[15px]  text-ad-off-white-text uppercase leading-[25px]">
                     Grand total
                  </span>

                  <span class="text-white text-[18px] font-bold">
                     &dollar;{{ parseInt(cartTotal).toLocaleString() }}
                  </span>
               </div>
            </div>

            <primaryBtn 
               :text="` Back to home`" 
               :type="`button`"
               :path="`/#product-categories`"
               class="w-[100%_!important]"
               @click="RESET_AND_REDIRECT"
            />
         </div>
      </section>
   </div>
</template>

<script>
   import { useStore } from 'vuex'
   import { computed, ref, onMounted } from 'vue'
   import { useRouter } from  'vue-router'
   import primaryLoader from '@/components/a/loaders/primaryLoader.vue'
   import primaryBtn from '@/components/a/buttons/primaryBtn.vue'

   export default {
      name: 'CheckOutSuccessModal',
      components: { primaryLoader, primaryBtn },

      setup () {
         const store = useStore()
         const router = useRouter()
         
         const modalIsActive = computed(() => {
            return store.state.modal.isActive
         })

         const loader = ref(null)
         const content = ref(null)

         onMounted(() => {
            setTimeout(() => {
               loader.value.classList.add('hidden')

               content.value.classList.remove('hidden')
               content.value.classList.add('flex')
            }, 1000);
         })

         const cart = computed(() => {
            return store.state.cart
         })

         const cartTotal = computed(() => { 
            var total = 0
            
            store.state.cart.forEach(product => {
               total = total + (product.price * product.quantity)
            });

            return total
         })

         const cartItemsSummarized = ref(true)

         const windowHeight = computed(() => {
            return window.innerHeight
         })

         const RESET_AND_REDIRECT = async() => {
            await store.commit('RESET_CART')
            await store.commit('TOGGLE_SWITCH', 'modal')
            router.push('/')
         }

         return { 
               store, modalIsActive, cart, cartTotal, cartItemsSummarized, 
               loader, content, windowHeight, RESET_AND_REDIRECT 
            }
      }
   }
</script>

<style lang="scss" scoped>

</style>