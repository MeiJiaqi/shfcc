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
          <button @click="login">登录</button>
        </div>
      </div>

      <div class="bg">
        <img src="../assets/bg.jpg" alt="">
        <h1>CervixAI——宫颈癌智能助手</h1>
      </div>

      <div class="content">
        <div class="contentBox" id="block1">
          <div class="block1-text-contain">
            <p class="flag1">宫颈癌智能助手是一款基于人工智能技术的宫颈癌防治服务平台，旨在帮助妇女提高宫颈癌防治知识，提升宫颈癌筛查和诊疗的效率和准确性，降低宫颈癌的发病率和死亡率。</p>
          </div>
          <div class="block1-img-contain">
            <img class="flag2" src="../assets/img/login2.png" alt="">
          </div>
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
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('active')
    }else{
      entry.target.classList.remove('active')
    }
  })
})


export default {
  name: "PublicPage.vue",
  data(){
    return {
    }
  },
  methods:{
    login(){
      this.$router.push('/login')
    }

  },
  mounted() {

    window.addEventListener('scroll', function(){
      const header = document.querySelector('.header');
      if(header==null){}
      else if(window.pageYOffset > 0){
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      }else{
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      }
    });


    const hiddenElements=document.querySelectorAll('.flag1,.flag2')
    console.log(hiddenElements)
    hiddenElements.forEach((element)=>{
      observer.observe(element)
    })
  },
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
  text-decoration-color:#21BEC1;
  text-underline-offset: 10px;
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
  background-image: -webkit-linear-gradient(40deg,rgb(33,190,193) 0%,rgb(25,169,138) 70%);
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  transition: all 0.3s ease
}

#header-right button:hover{
  background-image: -webkit-linear-gradient(40deg,#69E6BB 0%,#94F7B2 70%);
}

.content{
  height: auto;
}

.contentBox{
  height: 100vh;
  opacity: 1;
  text-align: center;
  margin-top: 30px;
  background-color: #fff;
}

.contentBox p{
  font-size: 100px;
  line-height: 1000px;
}

#block1{
  display: flex;
  flex-direction: row;
  .block1-text-contain{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      font-size: 40px;
      line-height: 60px;
      color: #000;
      margin-left: 50px;
      text-indent: 2em;
      text-align: justify;
    }





  }

  .flag1{
    opacity: 0;
    transition: all 2s;
    transform: translate(-100%);
  }
  .flag2{
    opacity: 0;
    transition: all 2s;
    transform: translate(100%);
  }

  .active{
    opacity: 1;
    transform: translateX(0);
  }


  .block1-img-contain{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

}

.bg{
  width: 100%;
  height: 100vh;
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