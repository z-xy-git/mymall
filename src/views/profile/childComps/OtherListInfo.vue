<template>
  <div class="other-info">
    <div v-for="(item, index) in listItem" :key="index" class="listItem"
         @click="itemClick(index)">
      <span class="icon"><img :src="iconURL(item)" alt=""></span>
      <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OtherListInfo",
    props:{
      listItem:{
        type: Array,
        default(){
          return []
        }
      }
    },
    methods:{
      iconURL(item){
        return require('assets/img/profile/' + item.icon)
      },
      itemClick(index){
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style scoped>
  .listItem{
    display: flex;
    align-items: center;
    height: 44px;
  }
  .icon{
    width: 50px;
    text-align: center;
  }
  .icon img{
    width: 20px;
    height: 20px;
  }
  .desc{
    flex: 1;
    padding-left: 7px;
    line-height: 44px;
    font-size: 15px;
    border-bottom: 1px solid #ccc;
  }
</style>