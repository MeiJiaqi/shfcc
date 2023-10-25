<template>
 <div class="user-contain">
   这是user页面

   <div class="user-info-up">
     <div class="user_left">

     </div>
     <div class="user_right">
       2
     </div>
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
    display: flex;
    flex-direction: row;
  }
}
</style>