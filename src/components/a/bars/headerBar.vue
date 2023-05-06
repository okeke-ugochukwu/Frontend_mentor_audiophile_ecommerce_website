<template>
   <header
      class="w-full h-[90px] border-solid border-b-2 border-b-[#ffffff1a] md:h-[90px] md:border-none"
      :class="{'bg-black': store.state.menuBar.isActive}"
   >

      <!-- MAIN MARGIN -->
      <div class="
            margin relative h-full flex items-center justify-between 
            md:border-solid md:border-b-2 md:border-b-[#ffffff1a]
         "
      > 

         <!-- HAMBURGER -->
         <button 
            class="w-6 h-[20px] flex flex-col justify-between lg:hidden"
            :class="{'opacity-50': store.state.menuBar.isActive}"
            @click="store.commit('toggleSwitch', 'menuBar')"
         >
            <div class="w-full h-[4px] bg-white"></div>
            <div class="w-full h-[4px] bg-white"></div>
            <div class="w-full h-[4px] bg-white"></div>
         </button> 

         <!-- LOGO -->
         <router-link to="/" 
            class="md:absolute left-[58px] lg:relative lg:left-0"  
            :class="{'opacity-50': store.state.menuBar.isActive}"
         >
            <img 
               
               src="@/assets/imgs/shared/logo.svg" alt="audiophile" 
            >
         </router-link>

         <!-- NAVIGATION LINKS -->
         <mainNav class="hidden lg:block"/>

         <!-- CART -->
         <button class="w-[26px]"  :class="{'opacity-50': store.state.menuBar.isActive}">
            <img 
               class="w-full"
               src="@/assets/imgs/shared/cart.svg" alt="cart"
            >
         </button>

      </div>

   </header>
</template>

<script>
   import mainNav from '../navs/mainNav.vue';
   import { useStore } from 'vuex'

   export default {
      name :'headerBar',
      components: { mainNav },
      
      setup () {
         const store = useStore()

         return {store}
      }
   }
</script>

<style lang="scss" scoped>

</style>