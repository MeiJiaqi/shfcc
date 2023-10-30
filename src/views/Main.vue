<template>
  <el-container id="main-contain">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
      <common-header></common-header>
      </el-header>

      <el-main style="background-color: rgb(240, 237, 237);padding: 0">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
export default {
  name: "Main",
  data(){
    return{

    }
  },
  components: {
    CommonAside,
    CommonHeader
  }
}
</script>

<style lang="less" scoped>
.el-header{
  padding: 0;
}
</style>