<template>
   <!-- >>>>>> ABOUT SECTION -->
   <section class="about py-[60px] md:pt-[48px] md:pb-[96px] lg:pt-[100px] lg:pb-[200px]">

      <!-- MAIN MARGIN -->
      <div class="margin flex flex-col items-center gap-10 md:gap-[63px] lg:flex-row-reverse">
         <!-- IMAGE -->
         <div class="overflow-hidden rounded-lg w-full lg:w-[50%]">
            <picture>
               <source media="(min-width: 1024px)" srcset="@/assets/imgs/shared/desktop/image-best-gear.jpg">
               <source media="(min-width: 768px)" srcset="@/assets/imgs/shared/tablet/image-best-gear.jpg">
               <img src="@/assets/imgs/shared/mobile/image-best-gear.jpg" alt="audiophile_image">
            </picture>
         </div>

         <!-- TEXT -->
         <div class="text-center max-w-[573px] w-full lg:text-left lg:pr-[20px] lg:w-[50%] lg:max-w-unset pxl:pr-[105px]">
            <h2 class="heading-2 mb-8 max-w-[455px] mx-auto md:max-w-[unset]">
               Bringing You The <span class="text-ad-brown">Best</span> Audio Gear
            </h2>
            
            <p class="body-text text-ad-off-black font-medium">
               Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, 
               and audio accessories. We have a large showroom and luxury demonstration 
               rooms available for you to browse and experience a wide range of our products. 
               Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
         </div>
      </div>

   </section>
</template>

<script>
   export default {
      name: 'AboutSection',

      setup () {
         
         
         return {}
      }
   }
</script>

<style lang="scss" scoped>

</style>