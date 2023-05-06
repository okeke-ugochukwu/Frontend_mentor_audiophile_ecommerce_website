<template>
   <div class="floating-product-card relative bg-ad-light-grey flex flex-col items-center justify-center rounded-lg">
      <img 
         :src="require(`@/assets/imgs/shared/desktop/image-category-thumbnail-${cardItem}.png`)" 
         :alt="cardItem.toLowerCase()"
         class="w-[128px] mt-[-40px]"
      > 

      <h6 class="heading-6 text-black mb-[17px]">
         {{ cardItem.toUpperCase() }}
      </h6>

      <button class="aux_btn mb-[22px]">
         <span>
            SHOP
         </span>  

         <img src="@/assets/imgs/shared/desktop/icon-arrow-right.svg" alt="now">
      </button>
   </div>
</template>

<script>
export default {
   name: 'FloatingProductCard',
   props: ['cardItem'],
   
   setup () {
      

      return {}
   }
}
</script>

<style lang="scss" scoped>

</style>