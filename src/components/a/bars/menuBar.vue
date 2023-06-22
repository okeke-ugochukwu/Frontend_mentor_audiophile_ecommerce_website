<template>
   <div class="menu-bar z-[21]" v-show="menuBar.isActive" :class="{'active' : menuBar.isActive}">

      <!-- MENU BAR CONTENT -->
      <div class="w-full relative z-[21]  bg-white pt-[20px] pb-[35px] rounded-b-lg md:pt-[108px] md:pb-[67px]">

         <!-- MAIN MARGIN -->
         <div class="margin  md:flex md:gap-[10px]">
            <floatingProductCard 
               v-for="category in productCategories"  :key="category" :category="category"
               class="mt-[68px] w-full md:mt-0"
            />
         </div>

      </div>

      <!-- MENUBAR OVERLAY -->
      <div 
         class="overlay fixed top-[0] z-20 w-full h-screen bg-black opacity-40" v-show="menuBar.isActive" 
         @click.self="$store.commit('TOGGLE_SWITCH', 'menuBar')"
      >

      </div>

   </div>
</template>

<script>
   import floatingProductCard from '@/components/product/floatingProductCard.vue'
   import { computed } from 'vue'; import { useStore } from 'vuex';

   export default {
      name: 'menuBar',
      components: { floatingProductCard },


      setup () {
         const store = useStore()

         const menuBar = computed(() => { return store.state.menuBar })
         
         const productCategories = computed(() => { return store.state.productCategories})

         

         return { menuBar, productCategories, }
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