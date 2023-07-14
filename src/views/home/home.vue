<template>
   <main>
      <!-- >>>>>> HEADER + HERO SECTION -->
      <section
         class="hero relative p-[0.01px]
            bg-[url('/src/assets/imgs/home/mobile/image-header.jpg')] bg-cover bg-center
            sml:bg-[url('/src/assets/imgs/home/tablet/image-header.jpg')]
            lg:bg-[url('/src/assets/imgs/home/desktop/image-hero.jpg')] lg:bg-[55%]
            pxl:bg-center
         "
      >
         <headerBar />

         <menuBar  class="w-full"/>

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

            <span class="overline-heading text-ad-off-white-text mb-4 md:mb-6 ">
               New Product
            </span>

            <!-- HEADING -->
            <h1 class="heading-1 mb-6 text-white max-w-[345px] md:max-w-[396px]">
               XX99 Mark II Headphones
            </h1>

            <p class="body-text mb-7 text-[#ffffffc2] max-w-[345px] md:mb-10">
               Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>

            <router-link to="/headphones/xx99-mark-two-headphones" class="primary_btn">
               See product
            </router-link>

         </div>

      </section>

      <!-- >>>>>> PRODUCT CATEGORIES -->
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

      <!-- >>>>>> FEATURED PRODUCTS -->
      <section
         class="featured-products py-[60px] md:py-[48px] lg:pt-[84px] lg:pb-[100px]"
      >
         <!-- MAIN MARGIN -->
         <div class="margin flex flex-col items-center gap-6 md:gap-8 lg:gap-12">

            <!-- ZX9 SPEAKER -->
            <div
               class="
                  relative flex flex-col items-center justify-center gap-8 w-full bg-ad-brown pt-[57px] pb-[55px] rounded-lg overflow-hidden
                  md:pt-[52px] md:pb-[64px] md:gap-[64px] lg:gap-[40px]
                  lg:flex-row lg:justify-center  lg:pt-0 lg:pb-0 lg:h-[500px] 
                  pxl:h-[560px] pxl:gap-[100px] xl:gap-[132.28px]
               "
            >
               <!-- PATTERN CIRCLES + SPEAKER IMAGE -->
               <div class="relative bottom-0 overflow-visible flex items-center justify-center lg:w-full lg:justify-end lg:mt-[100px] pxl:mt-[128px]">
                  <img 
                     src="@/assets/imgs/home/desktop/pattern-circles.svg" alt="patter_circles" 
                     class="reset-img absolute z-1 w-[580px] max-w-unset md:w-[930px] lg:w-[850px] lg:right-[-240px] lg:top-[-130px] xl:w-[950px] xl:right-[-285px]"
                  >

                  <picture class="relative z-2">
                     <source media="(min-width: 1024px)" srcset="@/assets/imgs/home/desktop/image-speaker-zx9.png">
                     <img src="@/assets/imgs/home/mobile/image-speaker-zx9.png" alt="zx9_speaker" class="w-[172.25px] md:w-[197.21px]  lg:w-[350px] pxl:w-[375px]">
                  </picture>
               </div>

               <!-- TEXT + ACTION BTN -->
               <div class="relative z-2 text-center flex flex-col items-center justify-center lg:items-start lg:text-left lg:w-full">
                  <h2 class="heading-1 text-white max-w-[200px] mb-6 md:max-w-[349px] md:mb-6 lg:max-w[261px]">
                     ZX9 Speaker
                  </h2>

                  <p class="body-text text-ad-off-white-text mb-6 max-w-[280px] md:mb-10 lg:max-w-[300px]">
                     Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                  </p>

                  <router-link to="/speakers/zx9-speaker" class="secondary_btn">
                     See Product
                  </router-link>
               </div>
            </div>

            <!-- ZX7 SPEAKER -->
            <div
               class="
                  w-full pl-6 py-[101px] rounded-lg bg-[url('/src/assets/imgs/home/mobile/image-speaker-zx7.jpg')] 
                  sm:bg-[url('/src/assets/imgs/home/tablet/image-speaker-zx7.jpg')]
                  lg:bg-[url('/src/assets/imgs/home/desktop/image-speaker-zx7.jpg')]
                  bg-cover bg-right sm:bg-left
                  md:pl-[63.75px]
                  lg:h-[320px]
               "
            >
               <h2 class="text-[28px] leading-[38px] tracking-[2px] font-bold mb-8">
                  ZX7 Speaker
               </h2>

               <router-link to="/speakers/zx7-speaker" class="outline_btn">
                  See Product
               </router-link>
            </div>

            <!-- YX1 EARPHONES -->
            <div 
               class="w-full flex flex-col items-center gap-6 md:flex-row md:h-[320px] md:items-unset md:gap-[11px] lg:gap-[30px]"
            >
               <!-- THUMBNAIL -->
               <div class="rounded-lg overflow-hidden md:h-full md:w-[50%]"> 
                  <picture class="w-full">
                     <source media="(min-width:768px)" srcset="@/assets/imgs/home/tablet/image-earphones-yx1.jpg">
                     <source media="(min-width:1024px)" srcset="@/assets/imgs/home/desktop/image-earphones-yx1.jpg">
                     <img src="@/assets/imgs/home/mobile/image-earphones-yx1.jpg" alt="yx1_earphones" />
                  </picture>
               </div>

               <!-- TEXT -->
               <div class="rounded-lg bg-ad-light-grey w-full pl-6 py-[41px] md:h-full md:pl-[63.75px] md:py-[101px] md:w-[50%]">
                  <h2 class="text-[28px] leading-[38px] tracking-[2px] font-bold mb-8">
                     YX1 Earphones
                  </h2>

                  <router-link to="/earphones/yx1-earphones" class="outline_btn">
                     See Product
                  </router-link>
               </div>
            </div>

         </div>
      </section>

      <!-- >>>>>> ABOUT SECTION -->
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
   import aboutSection from '@/components/a/sections/aboutSection.vue'
   import { computed } from 'vue'; import { useStore } from 'vuex'
//    import { ref } from 'vue'

   export default {
      name: 'HomePage',
      components: { headerBar, menuBar, floatingProductCard, footerBar, aboutSection },

      setup () {
         const store = useStore();
         const productCategories = computed(() => { return store.state.productCategories })

         return { productCategories }
      }
   }
</script>

<style lang="scss" scoped>
   @import '@/style/views/home.scss';
</style>