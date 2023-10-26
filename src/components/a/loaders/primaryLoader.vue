<template>
   <div class="loader__primary"></div>
</template>

<script>
   export default {
      name: 'primaryLoader',

      setup () {
         

         return {}
      }
   }
</script>

<style lang="scss" scoped>
   .loader__primary {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: black;
      box-shadow: 32px 0 black, -32px 0 black;
      position: relative;
      animation: flash .8s ease-out infinite alternate;
   }

   @keyframes flash {
   0% {
      background-color: #0000009f;
      box-shadow: 32px 0 #0000009f, -32px 0 black;
   }
   50% {
      background-color: black;
      box-shadow: 32px 0 #0000009f, -32px 0 #0000009f;
   }
   100% {
      background-color: #0000009f;
      box-shadow: 32px 0 black, -32px 0 #0000009f;
   }
   }     
</style>