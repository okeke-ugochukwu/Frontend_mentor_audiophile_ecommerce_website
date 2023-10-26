<template>
   <!-- >>>>>> HEADER -->
   <headerBar class="bg-black"/>

   <menuBar  class="w-full"/>

   <main class="bg-ad-off-white w-full pt-4 pb-[97px] md:pt-12 md:pb-[116px] lg:pt-[79px] lg:pb-[141px]">

      <!-- >> MAIN MARGIN -->
      <div class="margin">
         <button @click="$router.go(-1)" class="body-text text-ad-off-black mb-6 lg:mb-[56px]" > Go Back </button>

         <form 
            class="flex flex-col gap-8 lg:flex-row"
            @submit.prevent="INIT_ORDER" 
         >
            <!-- >>>CHECKOUT DETAILS -->
            <div class="bg-white rounded-lg p-6 w-full">
               <header class="mb-8">
                  <h1 class="heading-2i">
                     Checkout
                  </h1>
               </header>

               <div 
                  class="min-h-max flex flex-col gap-8"
               >
                  <!-- >>BILLING DETAILS -->
                  <div class="form-group">
                     <h2 class="form-group-heading text-ad-brown mb-4">
                        Billing details
                     </h2>

                     <div class="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-4">
                        <textInput 
                           :label="`Name`" :placeholder="`Alexei Ward`"
                           :type="`text`" :auxType="`alpha`" 
                           :group="`name`" v-model="orderDetails.billing.name"
                           required
                        />

                        <textInput 
                           :label="`Email`" :type="`email`" :placeholder="`alexei@gmail.com`"
                           :group="`email`" v-model="orderDetails.billing.email"
                           required
                        />

                        <textInput 
                           :label="`Phone Number`" :placeholder="`+1 202-555-0136`"
                           :type="`text`" :auxType="`null`" 
                           :group="`phoneNumber`" v-model="orderDetails.billing.phoneNumber"
                           required
                        />
                     </div>
                  </div>

                  <!-- >>SHIPPING INFO -->
                  <div class="form-group">
                     <h2 class="form-group-heading text-ad-brown mb-4">
                        Shipping Info
                     </h2>

                     <div class="flex flex-col gap-6 ">
                        <textInput 
                           :label="`Your Address`" :placeholder="`1137 Williams Avenue`"
                           :type="`text`" :auxType="`alphaNumeric`" 
                           :group="`address`" v-model="orderDetails.shipping.address"
                           required
                        />

                        <div class="flex flex-col gap-6  md:grid md:grid-cols-2 md:gap-x-4">
                           <textInput 
                              :label="`Zip Code`" :placeholder="`10001`"
                              :type="`text`" :auxType="`numeric`" 
                              :group="`zipCode`" v-model="orderDetails.shipping.zipCode"
                              required
                           />

                           <textInput 
                              :label="`City`" :placeholder="`New York`"
                              :type="`text`" :auxType="`alpha`"
                              :group="`city`" v-model="orderDetails.shipping.city"
                              
                           />

                           <textInput 
                              :label="`Country`" :placeholder="`United States`"
                              :type="`text`" :auxType="`alpha`"
                              :group="`country`" v-model="orderDetails.shipping.country"
                              required
                           />
                        </div>

                     </div>
                  </div>

                  <!-- >>PAYMENT DETAILS -->
                  <div class="form-group">
                     <h2 class="form-group-heading text-ad-brown mb-4">
                        Payment details
                     </h2>

                     <div class="flex flex-col gap-[17px] md:grid md:grid-cols-2">
                        <div class="text-xs text-black font-bold leading-[normal] tracking-[-0.214px] ">
                           Payment Method
                        </div>

                        <div class="flex flex-col gap-4">
                           <radioInput 
                              :label="`e-Money`" :value="`e-money`"
                              :id="`e-money`" :group="`payment`"
                              @select="(value) => orderDetails.payment.type = (value)"
                              required
                           />

                           <radioInput 
                              :label="`Cash on delivery`" :value="`cash`"
                              :id="`cash`" :group="`payment`"
                              @select="(value) => orderDetails.payment.type = (value)"
                              required
                           />
                        </div>
                     </div>
                  </div>

                  <!-- >>E-MONEY DETAILS -->
                  <div class="flex flex-col gap-6" v-if="orderDetails.payment.type === 'e-money'">
                     <textInput 
                        :label="`e-Money Number`" :placeholder="`238521993`"
                        :type="`text`" :auxType="`numeric`" 
                        :group="`eNumber`" v-model="orderDetails.eMoney.number"
                        required
                     />

                     <textInput 
                        :label="`e-Money PIN`" :placeholder="`6891`"
                        :type="`text`" :auxType="`numeric`" 
                        :group="`ePin`" v-model="orderDetails.eMoney.pin"
                        required
                     />
                  </div>
               </div>
            </div>

            <!-- >>>CHECKOUT SUMMARY -->
            <div class="bg-white flex flex-col gap-8 rounded-lg p-6 lg:min-w-[350px] lg:max-w-[350px] h-max">
               <h3 class="text-[18px] font-bold leading-[normal] tracking-[1.286px] uppercase">
                  Summary
               </h3> 

               <div>
                  <ul class="flex flex-col gap-6">
                     <li 
                        v-for="product in cart" :key="product.slug"
                        class="flex items-start justify-between"
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
                        <div class="mt-[5px] text-[15px] font-bold leading-[25px] text-ad-off-black-text" >
                        x{{product.quantity}}
                        </div>
                     </li>
                  </ul>
               </div>

               <div>
                  <ul class="flex flex-col gap-2">
                     <li 
                        v-for="entry in Object.entries(checkOutSummary)"
                        :key="`smy-${entry[0]}`"
                        class="flex items-center justify-between"
                        :class="{'mt-4': entry[0] === 'grand Total'}"
                     >
                        <span class="text-[15px] font-medium leading-[25px] uppercase text-ad-off-black-text">
                           {{entry[0]}}
                        </span>

                        <span 
                           class="font-bold" 
                           :class="{'text-ad-brown': entry[0] === 'grand Total'}"
                        >
                           ${{entry[1].toLocaleString()}}
                        </span>
                     </li>
                  </ul>
               </div>

               
               <primaryBtn 
                  :text="`Continue & Pay`" 
                  :type="`submit`"
                  :path="`/#product-categories`"
                  class="w-[100%_!important]"
                  ref="submitBtn"
               />
            </div>
         </form>
      </div>

   </main>

   <!-- >>>>>> FOOTER -->
   <footerBar />

   <!-- >>>>> ORDER CONFIRMATION MODAL -->
   <checkoutSuccess v-if="store.state.modal.isActive"/>
</template>

<script>
   import headerBar from '@/components/a/bars/headerBar.vue'
   import menuBar from '@/components/a/bars/menuBar.vue'
   import footerBar from '@/components/a/bars/footerBar.vue'
   import textInput from '@/components/a/inputs/textInput.vue'
   import radioInput from '@/components/a/inputs/radioInput.vue'
   import primaryBtn from '@/components/a/buttons/primaryBtn.vue'
   import checkoutSuccess  from '@/components/a/modals/checkoutSuccess.vue'
   import { ref, computed, onMounted, watch } from 'vue'; 
   import { useStore } from 'vuex'
   import { useRouter } from 'vue-router'

   export default {
      name: 'CheckoutPage',
      components: { headerBar, menuBar, footerBar, textInput, radioInput, primaryBtn, checkoutSuccess },

      setup () {
         const store = useStore()
         const router = useRouter()
         
         onMounted(() => {
            const localCart = localStorage.getItem('cart')

            if (localCart) {
               store.commit('SET_CART_ITEMS', JSON.parse(localCart))
            }
         }) 
   
         const cart = computed(() => { return store.state.cart })

         watch(() => cart.value, (newValue) => {
            newValue.length === 0
               ? router.push('/')
               : ' '
         },  { immediate: true, deep: true })
         
         const cartTotal = computed(() => { 
            var total = 0
            
            store.state.cart.forEach(product => {
               total = total + (product.price * product.quantity)
            });

            return total
          })

         const checkOutSummary =  computed(() => {
            const shipping = 50
            const vat = cartTotal.value * 0.07
            const grandTotal = shipping + vat + cartTotal.value

            return {
               total: parseInt(cartTotal.value),
               shipping: shipping,
               'vat(incuded)': vat,
               'grand Total': grandTotal
            }
         })

         const orderDetails = ref({
            billing: {
               name: null,
               email: null,
               phoneNumber: null
            },

            shipping: {
               address: null,
               zipCode: null,
               city: null,
               country: null
            },

            payment: {
               type: null,
            },

            eMoney: {
               number: null,
               pin: null
            }
         })
         
         const checkOutForm = ref(null)

         const INIT_ORDER = async() => {
            const paymentType = orderDetails.value.payment.type
            var values = []

            //get all values of all nested ovjects and put them in the values array 
            Object.values(orderDetails.value).forEach(obj => {
               Object.values(obj).forEach(val => {
                  values.push(val)
               })
            })

            if(paymentType === 'cash') {               
               //if paymentType is cash, remove the last two elements (eMoney number & pin) 
               //and check if there's an empty value

               values = values.slice(0, values.length - 2)
               const emptyValue = await CHECH_FOR_EMPTY_VALUE(values)

               if(!emptyValue){
                  FINISH_ORDER()
               }
               else {
                  console.log('EMPTY VAL');
               }
            }
            else if (paymentType === 'e-money') {
               const emptyValue = await CHECH_FOR_EMPTY_VALUE(values)
               
               if(!emptyValue){
                  FINISH_ORDER()
               }
               else {
                  console.log('EMPTY VAL');
               }
            }
         }

         const FINISH_ORDER = () => {
            window.scroll(0, 0)
            localStorage.setItem('cart', [])
            store.commit('TOGGLE_SWITCH', 'modal')
         }

         const CHECH_FOR_EMPTY_VALUE = (values) => {
            if ( values.some((val) => val === null || val === '' || val === ' ') ) {
               return true
            }
            else {
               return false
            }
         }

         return {
            store, orderDetails, cart, checkOutSummary,
            checkOutForm, INIT_ORDER
         }
      }
   }
</script>

<style lang="scss" scoped>
    
</style>