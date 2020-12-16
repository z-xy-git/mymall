<template>
  <div class="user-info">
    <user class="user">
      <div slot="left" class="info-left"><img src="~assets/img/profile/avatar.svg" alt=""></div>
      <div slot="center" class="info-center">
        <div><span>登录/</span><span>注册</span></div>
        <span>暂无绑定手机号</span>
      </div>
      <div slot="right" class="info-right"><img src="~assets/img/common/arrow-left.svg" alt=""></div>
    </user>
  </div>
</template>

<script>
  import User from 'components/common/user/User'

  export default {
    name: "UserInfo",
    components:{
      User
    }
  }
</script>

<style scoped>
  .user{
    align-items: center;
    /*border-top: 1px solid #eee;*/
    background-color: #c55;
    height: 70px;
    color: #fff;
  }
  .info-left{
    padding-left: 10px;
  }
  .info-left img{
    width: 55px;
    height: 55px;
  }
  .info-center{
    padding-left: 10px;
  }
  .info-right img{
    width: 25px;
    height: 25px;
  }
</style>