<template>
   <!-- >>>>>>PRODUCT IMAGE + DESCR -->
   <section v-if="product" class="pt-4 pb-11 md:pt-[33px] md:pb-[60px] lg:pb-[80px] lg:pt-[79px]">

      <div class="margin">
         <button @click="$router.go(-1)" class="body-text text-ad-off-black mb-6 lg:mb-[56px]" > Go Back </button>

         <div class="w-full flex flex-col gap-9 md:flex-row md:gap-[69.5px] items-center pxl:gap-[125px]">
            <!-- IMAGE -->
            <div class="md:w-max md:min-w-[281px] pxl:min-w-[540px]">
               <picture>
                  <source media="(min-width: 1024px)" :srcset="require(`@/assets/imgs/${product.image.desktop}`)">
                  <source media="(min-width: 768px)" :srcset="require(`@/assets/imgs/${product.image.tablet}`)">
                  <img class="rounded-lg w-full" :src="require(`@/assets/imgs/${product.image.mobile}`)" alt="audiophile_image">
               </picture>
            </div>

            <!-- DESCR -->
            <div class="flex w-full flex-col gap-6 md:gap-8 ">
               <span v-if="product.new" class="overline-heading text-ad-brown mb-[-15px]">
                  NEW PRODUCT
               </span>

               <h2 class="heading-2">
                  {{ product.model }} <br />
                  {{ product.type }}
               </h2>

               <p class="body-text text-ad-off-black">
                  {{ product.description }}
               </p>

               <p class="text-lg mb-[7px] font-bold tracking-[1.286px]">
                  &#36; {{ product.price.toLocaleString() }}
               </p>

               <!-- >>>>>QUANTITY + ADD TO CART -->
               <div class="flex gap-4 md:mt-[-1px]">

                  <!-- QUANTITY -->
                  <div class="w-[120px] flex h-12 items-center gap-5 justify-center bg-ad-light-grey">
                     <button 
                        class="
                           w-4 h-[16px] border-none bg-transparent outline-none font-bold text-[13px] 
                           text-center text-black opacity-25
                        "
                        @click="quantity > 1 ? quantity-- : ' '"
                     > - </button>
                     
                     <input 
                        class="
                           block bg-transparent border-none outline-none no-spinners w-[20px] text-[13px] 
                           text-black text-center font-bold focus:outline-none
                        "
                        type="number" autocomplete="off"
                        v-model="quantity" 
                     >
                     
                     <button 
                        class="
                           w-4 h-[16px] border-none bg-transparent outline-none font-bold text-[13px] 
                           text-center text-black opacity-25
                        "
                        @click="quantity++"
                     > + </button>
                  </div>

                  <addToCartBtn 
                     @click="ADD_TO_CART(product)"
                     :disabled="quantity < 1"
                  />
               </div>
            </div>
         </div>

      </div>

   </section>

    <!-- >>>>>>FEATURES + ACCESSORIES -->
   <section v-if="product" class="py-11 md:py-[60px] lg:py-[80px]">

      <div class="margin flex flex-col gap-[113px] md:gap-[120px] lg:flex-row lg:gap-[125px]">
        <!-- FEATURES -->
         <div class="lg:w-[57.20%]">
            <h3 class="heading-3 mb-6 md:mb-8">
               Features
            </h3>

            <p class="body-text text-ad-off-black" v-html="product.features">
               
            </p>
         </div>

         <!-- ACCESSORIES -->
         <div class="md:flex md:gap-[164.72px] lg:flex-col lg:gap-8"> 
            <h3 class="heading-3 mb-6 md:mb-8 lg:mb-0">
               In the box
            </h3>

            <ul class="flex flex-col gap-2 text-ad-off-black">
               <li 
                  v-for="(included, index) in product.includes" :key="included.quantity + index"
                  class="body-text flex gap-[21px]"
               >
                  <span class="text-ad-brown font-bold"> {{ included.quantity }}x </span>
                  <span> {{ included.item }} </span>
               </li>
            </ul>

         </div>
      </div>

   </section>

   <!-- >>>>>>PRODUCT PREVIEW GALLERY -->
   <section v-if="product" class="pt-11 pb-[60px] md:py-[60px] lg:py-[80px]">
      <div 
         class="
            margin grid gap-5 
            
            md:grid-cols-[40.5%_57%] md:grid-rows-[repeat(2,max-content)] 
            md:[&_picture:nth-child(2)]:col-[1/2]  md:[&_picture:nth-child(2)]:row-[2/3]
            md:[&_picture:nth-child(3)]:col-[2/3]  md:[&_picture:nth-child(3)]:row-[1/3]

            pxl:gap-8 pxl:grid-cols-[40%_57%]
         "
      >
         <picture v-for="photo in product.gallery" :key="photo" class="relative w-full">
            <source media="(min-width: 1024px)" :srcset="require(`@/assets/imgs/${photo.desktop}`)">
            <source media="(min-width: 768px)" :srcset="require(`@/assets/imgs/${photo.tablet}`)">
            <img class="rounded-lg w-full" :src="require(`@/assets/imgs/${photo.mobile}`)" 
            :alt="`images-of-${product.name.toLowerCase().replaceAll('', '-')}`">
         </picture>
      </div>
   </section>

   <!-- >>>>>>RECOMMENDED PRODUCTS -->
   <section v-if="product" class="py-[60px] lg:py-[80px]">
      <div class="margin">
         <h3 class="heading-3 text-center mb-10 md:mb-[56px] lg:mb-[64px]">
            You may also like
         </h3>

         <div class=" flex flex-col gap-[56px] md:flex-row md:gap-[11px] lg:gap-30px">
            <div 
               v-for="product in product.others" :key="`rec-${product.slug}`"
               class="flex flex-col items-center gap-8 md:gap-10"
            >
               <picture class="relative w-full">
                  <source media="(min-width: 1024px)" :srcset="require(`@/assets/imgs/${product.image.desktop}`)">
                  <source media="(min-width: 768px)" :srcset="require(`@/assets/imgs/${product.image.tablet}`)">
                  <img class="rounded-lg w-full" :src="require(`@/assets/imgs/${product.image.mobile}`)" alt="audiophile_image">
               </picture>

               <h5 class="heading-5">
                  {{ product.name }}
               </h5>

                <primaryBtn 
                  :text="`See product`" 
                  :type="`router-link`"
                  :path="GET_PRODUCT_LINK(product.slug)"
               />
            </div>
         </div>
      </div>
   </section>
</template>

<script>
   import { useStore } from 'vuex'; 
   import { ref, computed, watch } from 'vue'
   import { useRoute } from 'vue-router'
   import primaryBtn from '@/components/a/buttons/primaryBtn.vue'
   import addToCartBtn from '@/components/a/buttons/addToCartBtn.vue'

   export default {
      name: 'productDetail',
      components: { primaryBtn, addToCartBtn },

      setup () {
         const store = useStore()
         const route = useRoute()

         //GET PRODUCTS FROM STATE
         var slug = ref(route.params.product)
         var product = computed(()=> { return store.getters.FILTERED_PRODUCT(slug.value) })

         watch(()=> route.params.product, () => {
            slug.value = route.params.product
            quantity.value = 1
         })

         function GET_PRODUCT_LINK(slug)  {
            var product = store.getters.FILTERED_PRODUCT(slug)
            var productLink = `/${product.category}/${product.slug}`

            return productLink
         }

         var quantity = ref(1)
         function ADD_TO_CART(product) {
            if(quantity.value >= 1) {
               store.commit('ADD_PRODUCT', {
                  slug: product.slug,
                  name: product.name,
                  model: product.model,
                  type: product.type,
                  price: product.price,
                  quantity: quantity.value
               })
            }
         }

         return { product, quantity, GET_PRODUCT_LINK, ADD_TO_CART }
      }
   }
</script>

<style lang="scss" scoped>

</style>