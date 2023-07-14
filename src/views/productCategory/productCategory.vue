<template>
   <!-- >>>>>> HEADER -->
   <headerBar class="bg-black"/>

   <menuBar  class="w-full"/>

   <main>
      <!-- VIEW FOR CATEGORY PRODUCTS & CATEGORY PRODUCTS DETAIL -->
      <router-view></router-view>

      <!-- >>>>>> PRODUCT CATEGORIES SECION-->
      <section
         class="product-categories pt-5 pb-[30px] md:pt-[148px] md:pb-[43px] lg:pt-[200px] lg:pb-[84px]"
      >

         <!-- MAIN MARGIN -->
         <div class="margin md:flex md:gap-[10px] lg:gap-[30px]">
            <floatingProductCard
               v-for="category in productCategories" :key="category" :category="category"
               class="mt-[68px] w-full md:mt-0 relative z-1"
            />
         </div>

      </section>

      <aboutSection />
   </main>

   <!-- >>>>>> FOOTER -->
   <footerBar />
</template>

<script>
   import headerBar from '@/components/a/bars/headerBar.vue'
   import menuBar from '@/components/a/bars/menuBar.vue'
   import footerBar from '@/components/a/bars/footerBar.vue'
   import floatingProductCard from '@/components/product/floatingProductCard.vue'
   import aboutSection from '@/components/a/sections/aboutSection'
   import GET_PRODUCTS from '@/composables/getProducts'
   import { computed, onMounted } from 'vue'; import { useStore } from 'vuex'

   export default {
      name: 'HomePage',
      components: { headerBar, menuBar, floatingProductCard, aboutSection, footerBar },

      setup () {
         const store = useStore();
         const productCategories = computed(() => { return store.state.productCategories })

         onMounted(() => {
            //CHECK IF THERE'S DATA IN STORE, THEN ACT ACCORDINGLY
            store.state.products.length === 0 ?
               GET_PRODUCTS(store) : console.log('Data in store')
         }) 

         return { productCategories }
      }
   }
</script>

      
<style lang="scss" scoped>
   @import '@/style/views/home.scss';  
</style>