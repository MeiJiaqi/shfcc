<template>
  <div class="public-contain">
    这是public页面
<!--    <div class="home-page1">-->
<!--      <el-carousel class="page1-back" indicator-position="none" arrow="never" interval="2000">-->
<!--        <el-carousel-item v-for="item in 3" :key="item">-->
<!--          <img :src=srcList[item-1]>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->

<!--      <div class="page-text">-->
<!--        <h1>Medic Care</h1>-->
<!--        <p>Medic Care is a medical service platform that provides medical services for patients and doctors.</p>-->
<!--        <el-button type="primary" round>了解更多</el-button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "PublicPage.vue",
  data(){
    return {
      // srcList: [
      //   require('../assets/page1-1.jpg'),
      //   require('../assets/page1-2.jpg'),
      //   require('../assets/page1-3.jpg'),
      // ]
    }
  }
}
</script>

<style lang="less" scoped>

//.home-page1{
//
//  .page1-back{
//    height: 650px;
//    width: 100%;
//    position:absolute;
//    img{
//      height: 600px;
//      width: 90%;
//      z-index: -5;
//    }
//    /deep/.el-carousel__container{
//      height: 600px;
//      width: 100%;
//    }
//  }
//}
</style>