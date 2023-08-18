<template>
   <div class="menu-bar z-[21] relative" v-show="menu.isActive" :class="{'active' : menu.isActive}">

      <!-- PRODUCTS CATG MENU -->
      <div v-show="menu.activeMenu === 'menu'" class="w-full relative z-[21]  bg-white pt-[20px] pb-[35px] rounded-b-lg md:pt-[108px] md:pb-[67px]">

         <!-- MAIN MARGIN -->
         <div class="margin  md:flex md:gap-[10px]">
            <floatingProductCard 
               v-for="category in productCategories"  :key="category" :category="category"
               class="mt-[68px] w-full md:mt-0"
            />
         </div>

      </div>

      <!-- CART -->
      <cart v-show="menu.activeMenu === 'cart'"/>

      <!-- MENUBAR OVERLAY -->
      <div 
         class="overlay fixed top-[0] z-20 w-full h-screen bg-black opacity-40" v-show="menu.isActive" 
         @click.self="$store.commit('TOGGLE_SWITCH', 'menu')"
      >

      </div>

   </div>
</template>

<script>
   import floatingProductCard from '@/components/product/floatingProductCard.vue'
   import cart from '@/components/cart/cart.vue'
   import { computed } from 'vue'; import { useStore } from 'vuex';

   export default {
      name: 'menuBar',
      components: { floatingProductCard, cart },


      setup () {
         const store = useStore()

         const menu = computed(() => { return store.state.menu })
         
         const productCategories = computed(() => { return store.state.productCategories})

         

         return { menu, productCategories, }
      }
   }
</script>

<style lang="scss" scoped>
   @import '@/style/partials/screens';

   .menu-bar.active {
      position: absolute;
      top: 90px;

      @include tabs {
         position: fixed;
      }
   }
</style>