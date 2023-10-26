<template>
   <button
      v-bind="$attrs"
      type="button" class="add-to-cart-btn"
      @click="ANIMATE_BTN"
   >
     <span>
         <span>
             {{ buttonValue }}
         </span>
     </span>
   </button>
</template>

<script>
   import  { ref } from 'vue'

   export default {
      name: 'AddToCartButton',

      setup (props) {
         const buttonValue = ref('Add to cart')
         
         const ANIMATE_BTN = () => {
            buttonValue.value = 'Added to cart'

            setTimeout(() => {
               buttonValue.value = 'Add to cart'
            }, 1500)
         }

         return { props, buttonValue, ANIMATE_BTN }
      }
   }
</script>

<style lang="scss" scoped>
   @import '@/style/partials/colors';

   .add-to-cart-btn {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 160px;
      height: 48px;
      font-weight: 700;
      font-size: 0.8125rem; //13px
      line-height: 1.125rem; //18px
      letter-spacing: 0.0625rem; ///1px
      background: black;
      color:  hsl(0, 0%, 98%);
      text-transform: uppercase;
      overflow: hidden;

      span {
         display: block;
         position: relative;
         overflow: hidden;
      }

      &::before {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background: $adBrown;
         transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
         transform-origin: 100% 50%;
      }

      &:hover {
         span {
            span {
               animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
            }
         }

         &::before {
            transform: scale3d(0,1,1);
            transform-origin: 0% 50%;
         }
      }

      @keyframes MoveUpInitial {
         to {
            transform: translate3d(0,-105%,0);
         }
      }

            
      @keyframes MoveUpEnd {
         from {
            transform: translate3d(0,100%,0);
         }
         to {
            transform: translate3d(0,0,0);
         }
      }

   }
</style>