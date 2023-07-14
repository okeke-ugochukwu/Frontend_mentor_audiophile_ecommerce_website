<template>
   <nav>
      <ul class="flex flex-col gap-4 md:flex-row lg:gap-[34px]">
         <li 
            class="text-center lg:text-left lg:inline text-[13px]"
            v-for="item in navLinks" :key="item"
         >
            <router-link 
               :to="`/${item.toLowerCase()}`" 
               class="text-white font-bold leading-[25px] tracking-[2px] hover:text-ad-brown uppercase"
            >
               {{ item }}
            </router-link>
         </li>
      </ul>
   </nav>
</template>

<script>
   export default {
      name: 'MainNav',

      setup () {
         const navLinks = ['Home', 'Headphones', 'Speakers', 'Earphones']

         return { navLinks }
      }
   }
</script>

<style lang="scss" scoped>

</style>