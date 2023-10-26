<template>
   <header
      class="header w-full h-[90px] border-solid border-b-2 border-b-[#ffffff1a] z-[22] md:h-[90px] md:border-none lg:h-[97px]" 
      :class="{'bg-black border-none active': menu.isActive && menu.activeMenu === 'menu'}" 
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
            :class="{'opacity-50': menu.isActive}"
            @click="$store.dispatch('TOGGLE_MENU', ['menu', 'cart'])"
         >
            <div class="w-full h-[4px] bg-white"></div>
            <div class="w-full h-[4px] bg-white"></div>
            <div class="w-full h-[4px] bg-white"></div>
         </button> 

         <!-- LOGO -->
         <router-link to="/" 
            class="md:absolute left-[58px] lg:relative lg:left-0"  
            :class="{'opacity-50': menu.isActive}"
         >
            <img 
               
               src="@/assets/imgs/shared/logo.svg" alt="audiophile" 
            >
         </router-link>

         <!-- NAVIGATION LINKS -->
         <mainNav aria-label="main-navigation" class="hidden lg:block lg:ml-[-8.2vw]"/>

         <!-- CART -->
         <cartIndicator />

      </div>

   </header>
</template>

<script>
   import mainNav from '@/components/a/navs/mainNav.vue';
   import cartIndicator from '@/components/cart/cartIndicator.vue';
   import { computed } from 'vue'; 
   import { useStore } from 'vuex';

   export default {
      name :'headerBar',
      components: { mainNav, cartIndicator },
      
      setup () {
         const store = useStore()

         const menu = computed(() => { return store.state.menu })

         return { menu }
      }
   }
</script>

<style lang="scss">
   //  @import '@/style/partials/screens';

//    .header.active {
//       position: absolute;
//       top: 0px;

//       @include tabs {
//          position: fixed;
//       }
//    }
</style>