<template>

   <!-- HERO SECTION -->
   <section 
      class="hero relative p-[0.01px]
         bg-[url('/src/assets/imgs/home/mobile/image-header.jpg')] bg-cover bg-center
         sml:bg-[url('/src/assets/imgs/home/tablet/image-header.jpg')] 
         lg:bg-[url('/src/assets/imgs/home/desktop/image-hero.jpg')] lg:bg-[55%]
         pxl:bg-center
      "
   >
      <headerBar />

      <menuBar  class="absolute w-full"/>

      <!-- MAIN MARGIN -->
      <div 
         class="
            margin pt-[108px] pb-[112px] text-center flex flex-col justify-center items-center 
            md:pt-[126px] md:pb-[167px]
            lg:justify-start lg:items-start lg:text-left
            xl:pt-[128px] xl:pbt-[158px]
            p2xl:pt-[140px] p2xl:pb-[200px]
            p4xl:pb-[250px] 
         "
         >

         <span class="overline-heading text-[#ffffff80] mb-4 md:mb-6">
            NEW PRODUCT
         </span>

         <!-- HEADING -->
         <h1 class="heading-1 mb-6 text-white max-w-[345px] md:max-w-[396px]">
            XX99 MARK II HEADPHONES
         </h1>

         <p class="body-text mb-7 text-[#ffffffc2] max-w-[345px] md:mb-10">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
         </p>

         <router-link to="/" class="primary_btn">
            SEE PRODUCT
         </router-link>

      </div>

   </section>

</template>

<script>
   import headerBar from '@/components/a/bars/headerBar.vue'
   import menuBar from '@/components/a/bars/menuBar.vue'

//    import { ref } from 'vue'

   export default {
      name: 'HomePage',
      components: { headerBar, menuBar },

      setup () {
         

         return { }
      }
   }
</script>

<style lang="scss" scoped>
   @import '@/style/views/home.scss';
</style>