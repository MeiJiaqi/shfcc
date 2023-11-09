<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#ffffff"
        text-color="#262626"
        >
     <h3>Medic Care</h3>
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>

      <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group  v-for="subItem in item.children" :key="subItem.path">
          <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{subItem.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

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
              label: '建议',
              icon: 'first-aid-kit',
              children: [
                {
                  path: '/doctor',
                  name: 'doctor',
                  label: '医生建议',
                  icon: 'setting',
                  url: 'Suggestions/DoctorSuggest'
                },
                {
                  path: '/hospital',
                  name: 'hospital',
                  label: '医院建议',
                  icon: 'setting',
                  url: 'Suggestions/HospitalSuggest'
                }
              ]

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
    //没有子菜单
    noChildren(){
      return this.menuData.filter(item => !item.children)
    },
    //有子菜单
    hasChildren(){
      return this.menuData.filter(item => item.children)
    },
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