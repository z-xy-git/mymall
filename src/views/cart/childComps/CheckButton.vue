<template>
    <div>
      <div class="icon-selector" :class="{active : isChecked}">
        <img src="~assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
		  isChecked: {
		    type: Boolean,
        default: false
      }
    },
    // data: function () {
		  // return {
		  //   checked: this.value
      // }
    // },
    methods: {
      // selectItem: function () {
      //   this.$emit('checkBtnClick')
      // }
    },
    watch: {
		  // value: function (newValue) {
      //   this.checked = newValue;
      // }
    }
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .active {
    background-color: #ff8036;
    border-color: #ff8198;
  }
</style>
