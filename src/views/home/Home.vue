<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="topControl"
                 class="control" v-show="isTabControlFixed"/>
    <scroll class="content" ref="scroll"
            :probeType="3"
            @isScroll="contentScroll"
            :pull-up-load="true"
            @isPullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']"
                    @tabClick="tabClick"
                    ref="contentControl"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  // 导入公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  // 导入业务相关的组件
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  // 导入网络请求相关的功能函数
  import {getHomeMultidata, getHomeGoods} from 'network/home'

  // 导入工具类函数
  import {debounce} from 'common/utils'

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabControlOffsetTop: 0,
        isTabControlFixed: false,
        currentIndex1: 0,
        currentIndex2: 0,
        saveY: 0
      }
    },
    created() {
      // 请求多个数据
      this.getHomeMultidata()

      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      /*
       * 监听 GoodsListItem 组件中的 图片加载情况
       * 加载完毕后调用 refresh 重新计算当前可滚动区域的高度
       */
      const newRefresh = debounce(this.$refs.scroll.refresh,300);
      this.$bus.$on('itemImageLoad',() =>{
        newRefresh()
      });
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      this.$refs.scroll.refresh()
    },
    deactivated(){
      // 记录离开组件时滚动的位置
      this.saveY = this.$refs.scroll.scroll.y
    },
    methods: {
      /*
      ** 事件监听相关的方法
       */
      tabClick(index){
        switch(index){
          case 0: this.currentType = 'pop'
            break;
          case 1: this.currentType = 'new'
            break;
          case 2: this.currentType = 'sell'
            break
        }
        this.$refs.contentControl.currentIndex = index;
        this.$refs.topControl.currentIndex = index;
      },
      backTopClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position){
        // 是否显示回到顶部
        this.isShowBackTop = (-position.y) > 1000

        // tabControl 是否固定定位
        this.isTabControlFixed = (-position.y) > this.tabControlOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImgLoad(){
        this.tabControlOffsetTop = this.$refs.contentControl.$el.offsetTop
      },

      /*
      **  网络请求相关的方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
    padding-top: 44px;
    height: 100vh;
    /*background-color: #eee;*/
  }
  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background-color: #c55;
    color: #fff;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
  .control{
    position: relative;
  }
  /*.fixed{*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 44px;*/
  /*}*/
</style>