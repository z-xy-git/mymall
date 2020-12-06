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

        // probeType 取值为 0/1 表示不监听滚动位置 2 表示手指松开的时候 3 表示屏幕停止的时候
        probeType: this.probeType,

        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动的位置
      this.scroll.on('scroll',(position) => {
        this.$emit('isScroll',position)
      })
      // 监听上拉事件
      this.scroll.on('pullingUp',() => {
        this.$emit('isPullingUp')
      })
    },
    methods: {
      scrollTo(x,y,time) {
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>