<template>
  <div id="detail">
    <detail-nav-bar class="navFixed"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends"></goods-list>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getDetailData,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      Scroll,
      GoodsList
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: []
      }
    },
    created(){
      // 保存传入的 iid（指的是首页中用户点击了哪个图片）
      this.iid = this.$route.params.iid

      // 根据 iid 请求详情页的数据
      getDetailData(this.iid).then(res => {
        const data = res.result;
        console.log(data);
        this.topImages = data.itemInfo.topImages;

        // 创建商品信息的对象
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        // 创建店铺信息的对象
        this.shop = new Shop(data.shopInfo);

        // 保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 创建商品参数信息对象
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
      })

      // 请求推荐部分的数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    methods: {
      imageLoad(){
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;

    background-color: #fff;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px);
  }
  .navFixed{
    position: relative;
    z-index: 9;

    background-color: #fff;
  }
</style>