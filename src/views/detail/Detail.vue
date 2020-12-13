<template>
  <div id="detail">
    <detail-nav-bar class="navFixed" @titleClick="titleClick" ref="detNavBar"/>
    <scroll class="content" ref="scroll" :probeType="3" @isScroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCar"/>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
    <!--<toast :message="toastMessage" :isShow="isShowToast"></toast>-->
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
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'
  // import Toast from 'components/common/toast/Toast'

  import {getDetailData,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
  import {debounce} from 'common/utils'

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
      GoodsList,
      DetailBottomBar,
      BackTop,
      // Toast
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
        recommends: [],
        titleTopY: [],
        getTitleTopY: null,
        currentIndex: 0,
        isShowBackTop: false,
        // toastMessage: '',
        // isShowToast: false
      }
    },
    created(){
      // 保存传入的 iid（指的是首页中用户点击了哪个图片）
      this.iid = this.$route.params.iid

      // 根据 iid 请求详情页的数据
      getDetailData(this.iid).then(res => {
        const data = res.result;
        // console.log(data);
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

        // 请求推荐部分的数据
        getRecommend().then(res => {
          this.recommends = res.data.list
        })

        /*
         * getTitleTopY 赋值的时候 调用 debounce函数 防止 getTitleTopY 调用太频繁
         */
        this.getTitleTopY = debounce(() => {
          this.titleTopY.push(0);
          this.titleTopY.push(this.$refs.params.$el.offsetTop);
          this.titleTopY.push(this.$refs.comment.$el.offsetTop);
          this.titleTopY.push(this.$refs.recommend.$el.offsetTop);
        },200)

      })
    },
    methods: {
      imageLoad(){
        this.$refs.scroll.refresh();

        // 调用 getTitleTopY 函数  只有图片加载完以后所获得的每个 offsetTop 才是正确的
        this.getTitleTopY();
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0, -this.titleTopY[index], 500)
      },
      contentScroll(position){
        const positionY = -position.y
        let length = this.titleTopY.length
        for(let i = 0; i < length; i++){
          // this.currentIndex !== i
          // 防止赋值的过程过于频繁
          if((this.currentIndex !== i) && ((i < length - 1 && positionY >= this.titleTopY[i] && positionY < this.titleTopY[i+1])
            || (i === length - 1 &&  positionY >= this.titleTopY[i]))){
            this.currentIndex = i;
            this.$refs.detNavBar.currentIndex = this.currentIndex;
          }
        }
        this.isShowBackTop = positionY > 1000
      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0,300)
      },
      addToCar(){
        // 获取购物车需要保存的商品信息
        const product = {};
        product.iid = this.iid;
        product.title = this.goods.title;
        product.image = this.topImages[0];
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;

        // 将商品加入到购物车
        this.$store.dispatch('addCart',product).then(res => {
          this.$toast.showToast(res,1500)

          //第一次封装的 Toast
          //   this.isShowToast = true;
          //   this.toastMessage = res;
          //   setTimeout(() => {
          //     this.isShowToast = false;
          //     this.toastMessage = '';
          //   },1500)
        })
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