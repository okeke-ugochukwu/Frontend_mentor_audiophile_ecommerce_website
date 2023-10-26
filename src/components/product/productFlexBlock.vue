<template>
   <!-- >>>>>PRODUCT IMAGE + DESCR + DETAIL LINK -->
   <section 
      class="
         [&:nth-of-type(2)]:pt-[64px] py-[60px] lg:py-[80px] lg:[&:nth-of-type(3)>div]:flex-row-reverse
         md:[&:nth-of-type(2)]:pt-[120px] lg:[&:nth-of-type(2)]:pt-[160px]
         "
      >
      <div class="margin flex flex-col gap-9 items-center md:gap-[52px] lg:flex-row lg:gap-[70px] pxl:gap-[125px]">

         <!-- IMAGE -->
         <div class="lg:w-1/2 pxl:w-[48.6%]">
            <picture>
               <source media="(min-width: 1024px)" :srcset="require(`@/assets/imgs/${product.categoryImage.desktop}`)">
               <source media="(min-width: 768px)" :srcset="require(`@/assets/imgs/${product.categoryImage.tablet}`)">
               <img class="rounded-lg w-full max-w-[470px] md:max-w-[100%]" :src="require(`@/assets/imgs/${product.categoryImage.mobile}`)" alt="audiophile_image">
            </picture>
         </div>

         <!-- DESCR + LINK -->
         <div class="lg:w-1/2 lg:max-w-[445px]">
            <span v-if="product.new" class="overline-heading block text-center text-ad-brown mb-6 md:mb-4 lg:text-left">
               New Product
            </span>

            <div class="text-center flex flex-col items-center gap-6 md:gap-9 lg:text-left lg:items-start">
               <h2 class="heading-2 max-w-[390px]">
                  {{ product.model }} <br />
                  {{ product.type }}
               </h2>

               <p class="body-text text-ad-off-black max-w-[572px]">   
                  {{ product.description }}
               </p>

               <primaryBtn 
                  :text="` See product`" 
                  :type="`router-link`"
                  :path="`/${product.category}/${product.slug}`"
               />
            </div>
         </div>
      </div>
   </section>
</template>

<script>
   import primaryBtn from '@/components/a/buttons/primaryBtn.vue'

   export default {
      name: 'ProductFlexBlock',  
      components: { primaryBtn },
      props: ['index', 'product'],

      setup () {
         
         return {}
      }
   }
</script>

<style lang="scss" scoped>

</style>