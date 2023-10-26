<template>
   <!-- >>>>>> HEADER -->
   <headerBar class="bg-black"/>

   <menuBar  class="w-full"/>

   <main class="bg-ad-off-white w-full py-[60px] md:py-[100px] lg:py-[150px]">

      <section class="product-categories " id="product-categories">

            <!-- MAIN MARGIN -->
            <div class="margin w-full flex flex-col gap-10 lg:gap-[70px] pxl:gap-[100px]">
               <div class="text-center flex flex-col items-center">
                  <h1 class="heading-1 mb-6 w-full max-w-[743px] text-ad-black">
                     Sorry, it seems the page you tried to access doesn't exist. <br />
                  </h1>

                  <p class="body-text mb-7 text-ad-off-black max-w-[500px] md:mb-10">
                     Use any of the options below to continue shopping. Explore headphones, 
                     speakers, and more – each chosen for its quality and performance.
                  </p>

               </div>
               
               <div class="flex flex-col gap-[68px] md:flex-row md:gap-[10px] lg:gap-[30px]">
                  <floatingProductCard
                     v-for="category in productCategories" :key="category" :category="category"
                     class="w-full md:mt-0 relative z-1"
                  />
               </div>
            </div>

      </section>
   </main>

   <!-- >>>>>> FOOTER -->
   <footerBar />
</template>

<script>
   import floatingProductCard from '@/components/product/floatingProductCard.vue'
   import headerBar from '@/components/a/bars/headerBar.vue'
   import menuBar from '@/components/a/bars/menuBar.vue'
   import footerBar from '@/components/a/bars/footerBar.vue'
   import { useStore } from 'vuex'
   import { computed } from 'vue'

   export default {
      name: '404Page',
      components: { floatingProductCard, headerBar, footerBar, menuBar },

      setup () {         
         const store = useStore();
         const productCategories = computed(() => { return store.state.productCategories })

         return { productCategories }
      }
   }
</script>

<style lang="scss" scoped>

</style>