<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-item-description">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {}
        }
      }

    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    position: relative;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .goods-item-description {
    font-size: 13px;
    text-align: center;
    margin-bottom: 5px;
  }
  .goods-item-description p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-item-description .price {
    color: #c55;
    margin-right: 20px;
  }
  .goods-item-description .collect {
    position: relative;
  }
  .goods-item-description .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>