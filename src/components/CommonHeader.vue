<template>
  <div class="header-container">
    <div class="l-content">
      <el-button @click="handleMenu" icon="el-icon-menu" size="mini" style="margin-right: 20px;background-color: rgb(21,169,138)" ></el-button>

    </div>
    <div class="r-content">

    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader.vue",
  data(){
    return {

    }
  },
  methods: {
    handleMenu(){
      this.$emit("handleMenu");
    }
  }

}
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: rgb(255, 255, 255);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 25px #cac6c6;
}
</style>