<template>
   <footer class="relative pt-12 pb-[38px] bg-ad-black md:pt-[60px] md:pb-[46px] lg:pt-[75px] lg:pb-[48px]">

      <!-- MARGIN -->
      <div class="margin">

         <!-- LOGO + NAVIGATION -->
         <div class="flex flex-col items-center gap-12 mb-12  md:items-start md:mb-8 md:gap-8">
            <div class="absolute top-0 w-[101px] h-1 bg-ad-brown">

            </div>

            <router-link to="/" class="">
               <img 
                  
                  src="@/assets/imgs/shared/logo.svg" alt="audiophile" 
               >
            </router-link>

            <mainNav />
         </div>

         <!-- ABOUT + (COPYRIGHT & SOCIALS) -->
         <div class="text-center text-white flex flex-col items-center gap-12 md:items-start md:gap-[80px] md:text-left">
            <p class="body-text text-ad-off-white-text max-w-[400px] md:max-w-[689px] pxl:max-w-[540px]">
               Audiophile is an all in one stop to fulfill your audio needs. 
               We're a small team of music lovers and sound specialists who are devoted to helping you 
               get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>

            <div class="w-full flex flex-col gap-12 md:flex-row md:justify-between">
               <div class="body-text text-ad-off-white-text">Copyright {{ new Date().getFullYear() }}. All Rights Reserved</div>

               <div>
                  <ul class="flex items-center justify-center gap-4">
                     <li v-for="platform in socials" :key="platform">
                        <a href="">
                           <img :src="require(`@/assets/imgs/shared/desktop/icon-${platform}.svg`)" :alt="platform">
                        </a>
                     </li>
                  </ul>
               </div>

            </div>
         </div>
      </div>

   </footer>
</template>

<script>
   import mainNav from '../navs/mainNav.vue';

   export default {
      name: 'footerBar',
      components:  { mainNav },
      
      setup () {
         const socials = ['facebook', 'twitter', 'instagram']

         return { socials }
      }
   }
</script>

<style lang="scss" scoped>

</style>