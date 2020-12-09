<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null    // 用来保存创建的 BScroll 对象
      }
    },
    mounted(){
      // 创建一个 BScroll 对象
      this.scroll = new BScroll(this.$refs.wrapper,{

        // click 属性表示被 better-scroll 包裹的滚动区域内的标签或者组件的点击事件是否有效
        click: true,

        // probeType 取值为 0/1 表示不侦测滚动位置
        // 2 表示在手指松开之前侦测，手指松开之后惯性滚动的过程不侦测
        // 3 表示只要有滚动就侦测
        probeType: this.probeType,

        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动的位置
      this.scroll.on('scroll',(position) => {
        this.$emit('isScroll',position)
      })
      // 监听是否滚动到底部
      this.scroll.on('pullingUp',() => {
        this.$emit('isPullingUp')
      })
    },
    methods: {
      // 对 scroll 对象的方法进行再次封装
      scrollTo(x,y,time) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>