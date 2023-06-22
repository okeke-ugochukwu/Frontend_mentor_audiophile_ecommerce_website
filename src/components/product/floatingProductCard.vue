<template>
   <div class="
      floating-product-card relative bg-ad-light-grey flex flex-col items-center justify-center rounded-lg h-[165px]
      lg:h-[204px] 
      "
   >
      <img 
         :src="require(`@/assets/imgs/shared/desktop/image-category-thumbnail-${category}.png`)" 
         :alt="category.toLowerCase()"
         class="w-[128px] mt-[-40px] lg:w-[200px] lg:mt-[-83px]"
      > 

      <h6 class="heading-6 text-black mb-[17px]">
         {{ category.toUpperCase() }}
      </h6>

      <router-link :to="`/${category}`" class="aux_btn mb-[22px]">
         <span>
            SHOP
         </span>  

         <img src="@/assets/imgs/shared/desktop/icon-arrow-right.svg" alt="now">
      </router-link>
   </div>
</template>

<script>
   export default {
      name: 'FloatingProductCard',
      props: ['category'],
      
      setup () {
         

         return {}
      }
   }
</script>

<style lang="scss" scoped>

</style>