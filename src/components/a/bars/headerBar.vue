<template>
   <header
      class="header w-full h-[90px] border-solid border-b-2 border-b-[#ffffff1a] z-[22] md:h-[90px] md:border-none"
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
         <mainNav class="hidden lg:block"/>

         <!-- CART -->
         <button 
            class="w-[26px]" :class="{'opacity-50': menu.isActive}"
            @click="$store.dispatch('TOGGLE_MENU', ['cart', 'menu'])"
         >
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

         const menu = computed(() => { return store.state.menu })

         return { menu }
      }
   }
</script>

<style lang="scss" scoped>
    @import '@/style/partials/screens';

//    .header.active {
//       position: absolute;
//       top: 0px;

//       @include tabs {
//          position: fixed;
//       }
//    }
</style>