const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '/Frontend_mentor_audiophile_ecommerce_website/',

   pages: {
      index: {
         entry: './src/main.js',
         template: 'public/index.html',
         filename: 'index.html',
         chunks: ['chunk-vendors', 'chunk-common', 'index'],
         title: 'Audiophile',
      },

      productCategory: {
         entry: './src/views/productCategory/main.js',
         template: 'public/index.html',
         filename: 'product-categories.html',
         chunks: ['chunk-vendors', 'chunk-common', 'product-categories'],
         title: 'Audiophile | Product' ,
      },

      checkout: {
         entry: './src/views/checkout/main.js',
         template: 'public/index.html',
         filename: 'checkout.html',
         chunks: ['chunk-vendors', 'chunk-common', 'checkout'],
         title: 'Checkout',
      },

      '404': {
         entry: './src/views/404/main.js',
         template: 'public/index.html',
         filename: '404.html',
         chunks: ['chunk-vendors', 'chunk-common', '404'],
         title: '404',
      },
   }
})
