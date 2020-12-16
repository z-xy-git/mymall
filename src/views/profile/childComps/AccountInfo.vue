<template>
  <div class="account-info">
    <div class="item collect">
      <span>0</span><span>我的收藏</span>
    </div>
    <div class="item care">
      <span>10</span><span>关注店铺</span>
    </div>
    <div class="item card">
      <span>0</span><span>红包卡卷</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AccountInfo"
  }
</script>

<style scoped>
  .account-info{
    display: flex;
    text-align: center;
    border-top: 1px solid #eee;
    border-bottom: 10px solid #eee;
  }
  .item{
    position: relative;
    flex: 1;
    border: 1px solid #ddd;
    height: 70px;
    font-size: 18px;
    background-color: #fff;
  }
  .item span{
    display: block;
    height: 50%;
    padding-top: 5px;
  }
  .item span:nth-last-child(1){
    font-size: 14px;
    color: #888;
  }
</style>