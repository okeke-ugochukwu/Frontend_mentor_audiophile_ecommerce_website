<template>
   <button
      v-if="['button', 'submit'].includes(props.type)" v-bind="$attrs"
      :type="props.type" class="primary-btn"
   >
      <span>
         <span>
            {{ props.text }}
         </span>
      </span>
   </button>

  
   <router-link
      v-if="props.type === 'router-link'" v-bind="$attrs"
      :to="props.path" class="primary-btn"
   >
      <span>
         <span>
         {{ props.text }}
         </span>
      </span>
   </router-link>

   <a 
      v-if="props.type === 'link'" v-bind="$attrs"
      :href="props.path" class="primary-btn"
   >
      <span>
         <span>
            {{ props.text }}
         </span>
      </span>
   </a>
</template>

<script>
   export default {
      name: 'PrimaryButton',

      props: {
         text: { type: String, default: "" },
         type: { type: String, default: "" },
         path: { type: [ String, Boolean ], default: false },
      },

      setup (props) {
         

         return { props }
      }
   }
</script>

<style lang="scss" scoped>
   @import '@/style/partials/colors';

   .primary-btn {
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