<template>
   <router-view />
</template>


<script>
   import { onMounted } from 'vue';
   import { useStore } from 'vuex';

   export default {
      setup () {
         const store = useStore()

         onMounted(() => {
            const localCart = sessionStorage.getItem('cart')

            if (localCart) {
               store.commit('SET_CART_ITEMS', JSON.parse(localCart))
            }
         })

         return {}
      }
   }
</script>


<style lang="scss">
   @import '@/style/main.scss';  
</style>