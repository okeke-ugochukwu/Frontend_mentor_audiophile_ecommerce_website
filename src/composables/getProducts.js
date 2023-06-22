const GET_PRODUCTS = async (store) => {
   const temp = require('@/data/data.json') 
   store.commit('SET_PRODUCTS', temp)
}


export default GET_PRODUCTS
