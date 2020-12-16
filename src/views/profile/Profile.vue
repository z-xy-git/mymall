<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">个人信息</div></nav-bar>
    <user-info/>
    <account-info/>
    <other-list-info :listItem="listInfoItem" @itemClick="listItemClick"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import UserInfo from './childComps/UserInfo'
  import AccountInfo from './childComps/AccountInfo'
  import OtherListInfo from './childComps/OtherListInfo'

  export default {
    name: "Profile",
    components:{
      NavBar,
      UserInfo,
      AccountInfo,
      OtherListInfo
    },
    data(){
      return {
        listInfoItem: [
          {icon: 'cart.svg', desc: '我的购物车'},
          {icon: 'pointer.svg', desc: '积分商城'},
          {icon: 'message.svg', desc: '我的消息'},
          {icon: 'shopping.svg', desc: '下载购物APP'},
        ]
      }
    },
    methods:{
      listItemClick(index){
        if(index === 0){
          this.$router.push('/cart')
        }
      }
    }

  }
</script>

<style scoped>
  #profile{
    height: 100vh;
    background-color: #eee;
  }
  .nav-bar{
    background-color: #c55;
    color: #fff;
  }
</style>