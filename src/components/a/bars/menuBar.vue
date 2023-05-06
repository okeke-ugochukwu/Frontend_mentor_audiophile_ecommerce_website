<template>
   <div class="menu-bar" v-show="menuBar.isActive">

      <!-- MENU BAR CONTENT -->
     <div class="relative z-10  bg-white pt-[20px] pb-[35px] md:pt-[108px] md:pb-[67px]">

       <!-- MAIN MARGIN -->
       <div class="margin  md:flex md:gap-[10px]">
         <floatingProductCard 
            v-for="item in cardItems" :key="item" :cardItem="item"
            class="mt-[68px] w-full md:mt-0"
         />
      </div>

     </div>

      <!-- MENUBAR OVERLAY -->
      <div class="overlay absolute top-0 z-1 w-full h-screen bg-black opacity-40">

      </div>

   </div>
</template>

<script>
   import floatingProductCard from '@/components/product/floatingProductCard.vue'
   import cardItems from '@/data/menuItems';
   import { computed } from 'vue'
   import { useStore } from 'vuex';

   export default {
      name: 'menuBar',
      components: { floatingProductCard },


      setup () {
         const store = useStore()

         const menuBar = computed(() => { return store.state.menuBar })

         return { cardItems, menuBar }
      }
   }
</script>

<style lang="scss" scoped>

</style>