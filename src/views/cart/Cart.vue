<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      // cartLength(){
      //   return this.$store.state.cartList.length
      // }
      // 将上面的计算属性抽离出去

      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  #cart{
    height: 100vh;
    background-color: #eee;
  }
  .nav-bar{
    background-color: #c55;
    font-weight: bold;
    color: #fff;
  }
</style>