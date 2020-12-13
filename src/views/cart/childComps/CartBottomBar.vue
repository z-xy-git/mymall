<template>
  <div class="bottom-bar">
    <div class="check-button">
      <check-button :is-checked="isSelectAll" @click.native="allCheckClick"></check-button>
    </div>
    <div class="check-text">全选</div>
    <div class="price">合计：￥{{totalPrice}}</div>
    <div class="goToBuy" @click="goToBuyClick">去结算({{checkedLength}})</div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

  export default {
    name: "CartBottomBar",
    components:{
      CheckButton
    },
    computed:{
      totalPrice(){
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return (preValue + item.price * item.count)
        },0).toFixed(2)
      },
      checkedLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
        if(this.$store.state.cartList.length === 0)
          return false;
        for(let item of this.$store.state.cartList){
          if(!item.checked){
            return false
          }
        }
        return true
        // 或者使用 find 方法
        // return !this.$store.state.cartList.find(item => !item.checked)
      }
    },
    methods: {
      allCheckClick(){
        if(this.isSelectAll){
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else{
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      goToBuyClick(){
        if(!this.checkedLength)
        this.$toast.showToast('请选中商品！')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    /*bottom: 49px;*/
    display: flex;
    align-items: center;

    box-shadow: 0 -1px 3px rgba(0,0,0,0.08);
    background-color: #fff;
    height: 40px;
  }
  .check-button{
    margin-left: 20px;
    margin-top: 3px;
    width: 20px;
    height: 24px;
  }
  .check-text{
    margin-left: 3px;
    width: 40px;
    height: 25px;
    color: #aaa;
    line-height: 25px;
    text-align: center;
  }
  .price{
    margin-left: 20px;
    font-size: 14px;
  }
  .goToBuy{
    position: absolute;
    right: 10px;

    width: 80px;
    height: 28px;
    border-radius: 15px;

    background-color: #ff8036;
    font-size: 15px;
    color: #fff;
    text-align: center;
    line-height: 30px;
  }
</style>