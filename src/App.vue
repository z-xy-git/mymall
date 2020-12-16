<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/tabbar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    },
    // provide(){
    //   return{
    //     reload: this.reload
    //   }
    // },
    // data(){
    //   return{
    //     isRouterAlive: true
    //   }
    // },
    // methods:{
    //   reload(){
    //     this.isRouterAlive = false
    //     this.$nextTick(function () {
    //       this.isRouterAlive = true
    //     })
    //   }
    // }
  }
</script>

<style>
  @import "assets/css/base.css";

</style>
