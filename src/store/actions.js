export default {
  addCart(context, payload){
    return new Promise((resolve) => {
      // 查找之前的数组中是否有重复的商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

      // 进行判断
      if(oldProduct){
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量 +1')
      }else{
        payload.count = 1;
        // state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('添加购物车成功')
      }
    })
  }
}