<template>
  <div class="relative">
      <router-view :key="currentRoute" />
  </div> 
</template>


<script>
   import { onMounted, watch, computed } from 'vue';
   import { useStore } from 'vuex';
   import { useRoute } from 'vue-router';

   export default {
      setup () {
         const store = useStore()
         const route = useRoute()

         onMounted(() => {
            const localCart = localStorage.getItem('cart')

            if (localCart) {
               store.commit('SET_CART_ITEMS', JSON.parse(localCart))
            }
         })

         const toggleScroll = (newValue) => {
            if(newValue) {
               document.body.style.overflow = 'hidden'
            }
            else {
               document.body.style.overflow = 'scroll'
            }
         }

         watch(() => store.state.modal.isActive, (newValue) => {
            toggleScroll(newValue)
         }, { immediate: true, deep: true })

         
         const currentRoute = computed(() => {
            return route.fullPath
         })

         return { route, currentRoute }
      }
   }
</script>


<style lang="scss">
    
</style>