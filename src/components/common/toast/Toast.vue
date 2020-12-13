<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    // props:{
    //   message:{
    //     type: String,
    //     default: 'toast'
    //   },
    //   isShow: {
    //     type: Boolean,
    //     default: false
    //   }
    // }
    data(){
      return{
        message: '',
        isShow: false
      }
    },
    methods: {
      showToast(showMessage='请传入提示信息',duration=2000){
        this.isShow = true;
        this.message = showMessage;

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 6px 8px;
    color: #fff;
    background: rgba(0,0,0,0.7);
  }
</style>