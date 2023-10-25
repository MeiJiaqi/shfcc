<template>
  <el-container class="home-contain" direction="vertical">
    <el-header class="home-header" height="80px">

      <div class="header-left">
        <img src="../assets/logo.png" >
        <p>Medic Care</p>

        <li class="nav-item">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact">Contact</a>
        </li>
      </div>
      <div class="header-right">
        <el-button class="nav-login" type="primary" round>登录注册</el-button>
      </div>

    </el-header>

    <el-main class="home-main">

    </el-main>
    <el-footer class="home-footer">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {

    }
  },
}

</script>

<style lang="less" scoped>
.home-contain{
  .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    height: 100px;
  }
  .el-header {


    //position: fixed;
    z-index: 99;
    width: 100%;
    box-shadow: 0 0 25px #cac6c6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .header-left{
      display: flex;
      flex-direction: row;
      align-items: center;

      .nav-item{

      }
    }
    .header-right{

      .nav-login{
        margin-right: 50px;
      }
    }
    img{
      width: 40px;
      height: 40px;
      margin-left: 50px;
    }

    p{
      font-size: 20px;
      font-family: 'Open Sans', sans-serif;
      color: rgb(36,124,255);
      font-weight: bold;
    }
    li{
      list-style-type:none;
    }
    .nav-item {
        padding: 15px 24px;
      a{
        text-decoration: none;
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        color: rgb(120,121,124);
      }
    }
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 0;
    height: fit-content;

  }
}
</style>