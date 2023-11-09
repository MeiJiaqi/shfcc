<template>
  <el-container id="main-contain">
    <el-aside class="el-aside" width="auto">
      <common-aside></common-aside>
    </el-aside>

    <el-container>
      <div class="collapse-div" style="height: 100%;width: 1px;">
        <div class="collapse-item" style="" @click="handleMenu">
          <i :class="`el-icon-${icon}`" style="margin-left: 1px;margin-top: 15px" ></i>
        </div>
      </div>
      <el-main style="background-color: rgb(250, 250, 250);padding: 0">
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
        icon: 'caret-left',//,'caret-right'

    }
  },
  components: {
    CommonAside,
    CommonHeader
  },
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
      if(this.$store.state.tab.isCollapse)
      {
        this.icon = 'caret-right'
      }
      else
      {
        this.icon = 'caret-left'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-header{
  padding: 0;
}

.el-aside{
  display: flex;
  flex-direction: row;
  height: 1000px;


}
.collapse-div{
   z-index: 1010;
   position: relative;
   user-select: none;
  background-color: rgb(250,250,250);
    right: 1px;

  .collapse-item{
     position: absolute;
     top: 25%;
     width:16px;
     height: 50px;
     right: -8px;
     border-radius: 50px;
     display: none
   }

 }
.collapse-div:hover  .collapse-item{
  display: block;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
}
</style>