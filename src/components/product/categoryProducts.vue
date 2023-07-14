<template>
   <section>
      <header 
         class="
            text-center bg-black text-white py-8
            md:pt-[105px] md:pb-[97px]
            lg:py-[98px]
         "
      >
         <h2 class="heading-2">
            {{ productCategory }}
         </h2>
      </header>
   </section>

   
   <productFlexBlock v-for="product in products" :key="product.slug" :product="product"/>
</template>

<script>
   import ProductFlexBlock from '@/components/product/productFlexBlock'
   import { ref, computed, watch } from 'vue'; import { useStore } from 'vuex'
   import { useRoute } from 'vue-router'

   export default {
      name: 'CategoryProducts',
      components:  { ProductFlexBlock },

      setup () {
         const store = useStore()
         const route = useRoute()

         //GET PRODUCTS FROM STATE
         var productCategory = ref(route.params.category)
         var products = computed(() => { return store.getters.FILTERED_PRODUCTS(productCategory.value)})

         watch(()=> route.params.category, () => {
            productCategory.value = route.params.category
         })

         
         return { productCategory, products }
      }
   }
</script>

<style lang="scss" scoped>

</style>