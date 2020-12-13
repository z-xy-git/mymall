<template>
  <div class="bottom-bar">
    <div class="bar-item">
      <i class="shop"></i>
      <span>店铺</span>
    </div>
    <div class="bar-item">
      <i class="service"></i>
      <span>客服</span>
    </div>
    <div class="bar-item">
      <i ></i>
      <span>收藏</span>
    </div>
    <div class="bar-right">
      <div class="add-car" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addToCart(){
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    
    background-color: #fff;
    height: 49px;
    text-align: center;
    font-size: 14px;
    /*border-top: 1px solid #666666;*/
    box-shadow: 0 -2px 3px rgba(0,0,0,0.08);
  }
  .bottom-bar .bar-item {
    float: left;
    width: 15%;
    height: 100%;
  }
  .bottom-bar i{
    display: block;
    width: 22px;
    height: 22px;
    margin: 3px auto;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
  }
  .bottom-bar .shop{
    background-position: 0 -98px;
  }
  .bottom-bar .service{
    background-position: 0 -54px;
  }
  .bar-right{
    float: left;
    position: relative;

    width: 55%;
    height: 100%;
    font-size: 15px;
    font-weight: bold;
  }
  .bar-right .add-car{
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -20.5px;

    width: 50%;
    height: 41px;
    line-height: 45px;
    color: #fff;
    background-color: #ff8036;
    border: 1px solid #ff5777;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
  }
  .bar-right .buy{
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -20.5px;

    width: 50%;
    height: 41px;
    line-height: 45px;
    color: #fff;
    background-color: #ff2e2a;
    border: 1px solid #ff5777;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
  }
</style>