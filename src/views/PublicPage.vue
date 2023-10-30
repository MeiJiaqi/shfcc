<template>
  <div class="public-contain">
    <div class="index-contain">
      <div class="header">

        <div class="headerBox" id="header-left">
          <img id="logo" src="../assets/logo.png" alt="">
        </div>
        <div class="headerBox" id="header-middle">
          <div class="headerItem" id="hItem1">
            <h3><a href="#block1">简介</a></h3>
          </div>
          <div class="headerItem" id="hItem2">
            <h3><a href="#block2">功能</a></h3>
          </div>
          <div class="headerItem" id="hItem3">
            <h3><a href="#block3">优势</a></h3>
          </div>
        </div>

        <div class="headerBox" id="header-right">
          <button>登录</button>
        </div>
      </div>

      <div class="bg">
        <img src="../assets/bg.jpg" alt="">
        <h1>CervixAI——宫颈癌智能助手</h1>
      </div>

      <div class="content">
        <div class="contentBox" id="block1">
          <p>简介</p>
        </div>
        <div class="contentBox" id="block2">
          <p>功能</p>
        </div>
        <div class="contentBox" id="block3">
          <p>优势</p>
        </div>
      </div>

      <div class="footer">
        footer
      </div>
    </div>
  </div>
</template>

<script>
window.scroll({
  behavior: 'smooth'
});
window.addEventListener('scroll', function(){
  const header = document.querySelector('.header');
  if(window.pageYOffset > 0){
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  }else{
    header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  }
});
export default {
  name: "PublicPage.vue",
  data(){
    return {
    }
  }
}
</script>

<style lang="less" scoped>

*{
  margin: 0;
  padding: 0;
}

.public-contain{
  width: 100%;
  height: auto;
  position: relative;
  background-color: rgb(235,247,254);

}

.index-contain{
  scroll-behavior: smooth;
}

a{
  color:rgb(158, 158, 160);
  text-decoration: none;
}

a:hover{
  color:rgb(82, 82, 82);
  text-decoration: underline;
  text-decoration-color:#00d2ff;
  text-underline-offset: 5px;
}
.header{
  height: 100px;
  width: 100%;
  position: fixed;
  top:0;
  z-index: 3;
  border-width: 1px;
  background-color:rgba(255, 255, 255, 0);
  transition: background 0.3s ease;
}

.headerBox{
  position: relative;
  float: left;
  width: 33.33%;
  height: 100%;

}

.headerItem{
  float: left;
  width: 33.33%;
  height: 100%;
  text-align: center;
  line-height: 100px;
}

.headerItem h3{
  font-size: 20px;
  font-weight: bold;
}

#header-right button{
  position: absolute;
  right: 150px;
  width: 100px;
  height: 50px;
  margin-top: 25px;
  margin-left: 50px;
  border-radius: 10px;
  border: none;
  background-color: #00a6ff;
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  transition: background 0.2s ease;
}

#header-right button:hover{
  background-color: #00d2ff;

}

.content{
  height: auto;
}

.contentBox{
  height: 1000px;
  opacity: 0.5;
  text-align: center;
  margin-top: 30px;
  background-color: #fff;
}

.contentBox p{
  font-size: 100px;
  line-height: 1000px;
}


.bg{
  width: 100%;
  height: 800px;
  position: relative;
}

.bg img{
  position:absolute;
  top:0;
  width: 100%;
  height: auto;
}

.bg h1{
  font-size: 50px;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#logo{
  position: absolute;
  top:-25px;
  left: 120px;
  width: 150px;
  height: 150px;
}
</style>