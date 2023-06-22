<template>
   <header
      class="header w-full h-[90px] border-solid border-b-2 border-b-[#ffffff1a] z-[22] md:h-[90px] md:border-none"
      :class="{'bg-black border-none active': menuBar.isActive}" 
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
            :class="{'opacity-50': menuBar.isActive}"
            @click="$store.commit('TOGGLE_SWITCH', 'menuBar')"
         >
            <div class="w-full h-[4px] bg-white"></div>
            <div class="w-full h-[4px] bg-white"></div>
            <div class="w-full h-[4px] bg-white"></div>
         </button> 

         <!-- LOGO -->
         <router-link to="/" 
            class="md:absolute left-[58px] lg:relative lg:left-0"  
            :class="{'opacity-50': menuBar.isActive}"
         >
            <img 
               
               src="@/assets/imgs/shared/logo.svg" alt="audiophile" 
            >
         </router-link>

         <!-- NAVIGATION LINKS -->
         <mainNav class="hidden lg:block"/>

         <!-- CART -->
         <button class="w-[26px]"  :class="{'opacity-50': menuBar.isActive}">
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
   import { computed } from 'vue'; import { useStore } from 'vuex';

   export default {
      name :'headerBar',
      components: { mainNav },
      
      setup () {
         const store = useStore()

         const menuBar = computed(() => { return store.state.menuBar })

         return { menuBar }
      }
   }
</script>

<style lang="scss" scoped>
    @import '@/style/partials/screens';

   .header.active {
      position: absolute;
      top: 0px;

      @include tabs {
         position: fixed;
      }
   }
</style>