<template>
  <div class="user">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "User"
  }
</script>

<style scoped>
  .user{
    display: flex;
    height: 80px;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>