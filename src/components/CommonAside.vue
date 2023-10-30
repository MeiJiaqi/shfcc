<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#fafafa"
        text-color="#262626">
     <h3>Medic Care</h3>
      <el-menu-item @click="clickMenu(item)" v-for="item in menuData" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: "CommonAside.vue",
  data(){
    return{
          menuData:[
            {
              path: '/user',
              name: 'user',
              label: '主页',
              icon: 's-home',
              url: 'Home/User'
            },
            {
              path: '/statistics',
              name: 'statistics',
              label: '数据统计',
              icon: 'pie-chart',
              url: 'Home/Statistics'
            },
            {
              path: '/suggest',
              name: 'suggest',
              label: '建议',
              icon: 'first-aid-kit',
              url: 'Home/Suggest'
            },

          ],

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      // console.log(item)
      if(this.$route.path !== item.path && !(this.$route.path ==='/home' &&(item.path === '/'))){
        this.$router.push(item.path)
      }
    },

  },
  computed:{
    isCollapse(){
      return this.$store.state.tab.isCollapse
    },
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 1000px;
}
</style>