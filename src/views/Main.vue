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

    <el-popover
        placement="top-start"
        trigger="manual"
        class="chatvue"
        popper-class="el_popover_class"
        transition="fade-in-transition"
        v-model="visiblechat"
        ref="popoverRef"
    >
      <common-chat class="chatbox"/>
      <el-button slot="reference" :icon="iconname" class="chat" circle @click="handleChat"></el-button>
    </el-popover>
  </el-container>
</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import CommonChat from '@/components/CommonChat.vue';
export default {
  name: "Main",
  data(){
    return{
        icon: 'caret-left',//,'caret-right'
        visiblechat:false,
        iconname:'el-icon-message'  //el-icon-arrow-down

    }
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonChat,
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
    },
    handleChat(){
      this.visiblechat=!this.visiblechat
      if(this.visiblechat){
        this.iconname='el-icon-arrow-down'
      }
      else
      {
        this.iconname='el-icon-message'
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


.chatvue{
  .chatbox{
    position: fixed;
    z-index: 100;
    right:50px; bottom:50px;
    margin-right: 50px;
  }
  .chat {
    position: fixed;
    z-index: 9999;
    right:50px; bottom:50px;

    width: 50px;
    height: 50px;
    background-color: #565185;

    /deep/.el-icon-message{
      font-size:20px;
      color: white;
      transition-duration: 0.5s;
    }
    /deep/.el-icon-arrow-down{
      font-size:20px;
      color: white;
      transition-duration: 0.5s;
    }
    transition-duration: 0.5s;
  }


}

.chat:hover{
  width: 60px;
  height: 60px;
  right:45px; bottom:45px;
  /deep/.el-icon-message{
    font-size:25px;
    color: white;
  }
  /deep/.el-icon-arrow-down{
    font-size:25px;
    color: white;
  }
}
</style>