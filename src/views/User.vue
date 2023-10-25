<template>
 <div class="user-contain">
   <div class="user-info-up">
     <el-row>
       <el-col :span="8">
         <el-card class="user-info-left">
            <p style="font-size: 20px;"><span>您好</span>，韦明江</p>
           <p>本页面显示的是你的基本信息</p>
           <p>您可以选择左边的模块查看更多的信息</p>
         </el-card>
       </el-col>
       <el-col :span="16">
         <el-card class="user-info-right">

         </el-card>
       </el-col>
     </el-row>
   </div>
   <div class="user-info-down">
     3
   </div>
 </div>
</template>

<script>
export default {
  name: "User.vue"
}
</script>

<style lang="less" scoped>

.user-contain{

  .user-info-up{

    .user-info-left{
      p{
        font-family: 微软雅黑;
        font-weight: bold;
        color:rgb(93,95,96);
        font-size: 12px;
        margin: 0;
      }
      span{
        font-size: 30px;
        font-family: 微软雅黑;
        font-weight: bold;
        color:rgb(93,95,96);
      }
    }
  }
}
</style>