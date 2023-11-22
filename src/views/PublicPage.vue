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
            <p class="block1-text">宫颈癌智能助手是一款基于人工智能技术的宫颈癌防治服务平台，旨在帮助妇女提高宫颈癌防治知识，提升宫颈癌筛查和诊疗的效率和准确性，降低宫颈癌的发病率和死亡率。</p>
          </div>
          <div class="block1-img-contain">
            <div class="block1-img"></div>
          </div>
        </div>


        <div class="contentBox" id="block2">
          <div class="block2-func-contain">
            <div class="block2-img flag3">

            </div>
            <label class="block2-text flag7">切割分析</label>
          </div>
          <div class="block2-func-contain">
            <div class="block2-img flag4">

            </div>
            <label class="block2-text flag7">诊断报告</label>
          </div>
          <div class="block2-func-contain">
            <div class="block2-img flag5">

            </div>
            <label class="block2-text flag7">寻取建议</label>
          </div>
          <div class="block2-func-contain">
            <div class="block2-img flag6">

            </div>
            <label class="block2-text flag7">在线咨询</label>
          </div>
        </div>


        <div class="contentBox" id="block3">
          <div class="block3-func-contain">

            <div class="block3-contain" style="margin-top:15%">
              <label class="block3-text block3-a1">AI诊断</label>
              <div class="block3-img block3-a2" >

              </div>
            </div>

          </div>
          <div class="block3-func-contain">



            <div class="block3-contain" style="margin-top:15%">
              <div class="block3-img block3-a3">

              </div>

              <label class="block3-text block3-a4">深度模型</label>
            </div>

          </div>
          <div class="block3-func-contain">
            <div class="block3-contain" style="margin-bottom:12%">
              <label class="block3-text block3-a5">功能丰富</label>
              <div class="block3-img block3-a6">

              </div>
            </div>

          </div>
          <div class="block3-func-contain">

            <div class="block3-contain" style="margin-bottom:12%">
              <div class="block3-img block3-a7">

              </div>
              <label class="block3-text block3-a8">界面友好</label>
            </div>
          </div>
        </div>

      </div>

      <div class="footer">
        footer
      </div>
    </div>
  </div>
</template>

<script>
import scrollReveal from "scrollreveal";

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
      scrollReveal: scrollReveal(),
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

    this.scrollReveal.reveal('.block1-text', {
      duration: 1200,
      delay: 0,
      origin: "left",
      reset: true,
      distance: "200%",
      opacity: 0,
      easing: 'ease-in-out',
    });

    this.scrollReveal.reveal('.block1-img', {
      duration: 1200,
      delay: 0,
      origin: "right",
      reset: true,
      distance: "300px",
      opacity: 0,
      easing: 'ease-in-out',
    });

    this.scrollReveal.reveal('.flag3', {
      duration: 1200,
      delay: 0,
      origin: "left",
      reset: true,
      distance: "200%",
      opacity: 0,
      easing: 'ease-in-out',
    });
    this.scrollReveal.reveal('.flag4', {
      duration: 1200,
      delay: 0,
      origin: "top",
      reset: true,
      distance: "50%",
      opacity: 0,
      easing: 'ease-in-out',
    });
    this.scrollReveal.reveal('.flag5', {
      duration: 1200,
      delay: 0,
      origin: "bottom",
      reset: true,
      distance: "50%",
      opacity: 0,
      easing: 'ease-in-out',
    });
    this.scrollReveal.reveal('.flag6', {
      duration: 1200,
      delay: 0,
      origin: "right",
      reset: true,
      distance: "200%",
      opacity: 0,
      easing: 'ease-in-out',
    });
    this.scrollReveal.reveal('.flag7', {
      duration: 1200,
      delay: 0,
      origin: "bottom",
      reset: true,
      distance: "50px",
      opacity: 0,
      easing: 'ease-in-out',
    });
    this.scrollReveal.reveal('.block3-a1', {
      duration: 1000,
      delay: 100,
      origin: "left",
      reset: true,
      distance: "250px",
      opacity: 0,
      easing: 'ease-in-out',
    });
    this.scrollReveal.reveal('.block3-a2', {
      duration: 1000,
      delay: 0,
      origin: "left",
      reset: true,
      distance: "250px",
      opacity: 0,
      easing: 'ease-in-out',
    });

    this.scrollReveal.reveal('.block3-a3', {
      duration: 1000,
      delay: 200,
      origin: "right",
      reset: true,
      distance: "250px",
      opacity: 0,
      easing: 'ease-in-out',
    });
    this.scrollReveal.reveal('.block3-a4', {
      duration: 1000,
      delay: 300,
      origin: "right",
      reset: true,
      distance: "250px",
      opacity: 0,
      easing: 'ease-in-out',
    });
    this.scrollReveal.reveal('.block3-a5', {
      duration: 1000,
      delay: 500,
      origin: "left",
      reset: true,
      distance: "250px",
      opacity: 0,
      easing: 'ease-in-out',
    });

    this.scrollReveal.reveal('.block3-a6', {
      duration: 1000,
      delay: 400,
      origin: "left",
      reset: true,
      distance: "250px",
      opacity: 0,
      easing: 'ease-in-out',
    });

    this.scrollReveal.reveal('.block3-a7', {
      duration: 1000,
      delay: 600,
      origin: "right",
      reset: true,
      distance: "250px",
      opacity: 0,
      easing: 'ease-in-out',
    });
    this.scrollReveal.reveal('.block3-a8', {
      duration: 1000,
      delay: 700,
      origin: "right",
      reset: true,
      distance: "250px",
      opacity: 0,
      easing: 'ease-in-out',
    });
  },
}
</script>

<style lang="less" scoped>

*{
  margin: 0;
  padding: 0;
}

.public-contain{
  width: 100vw;
  height: auto;
  position: relative;
  background-color: rgb(235,247,254);

}

.index-contain{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  top:0;
  z-index: 3;
  border-width: 1px;
  background-color:rgba(255, 255, 255, 0);
  transition: background 0.3s ease;
}

.headerBox{
  width: 33%;
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
  width: 100vw;
  opacity: 1;
  text-align: center;
  margin-top: 30px;
  background-color: #fff;
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
  .block1-img-contain{
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .block1-img{
      width: 40%;
      height: 60%;
      border-radius: 5px;
      background-color: #21bec1;
    }

  }

}

#block2{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .block2-func-contain{
    width:18%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .block2-img{
      width: 100%;
      height: 60%;
      border-radius: 5px;
      background-color: #21bec1;
    }
    .block2-text{
      font-size: 20px;
      line-height: 30px;
      color: #000;
      margin-top: 20px;
    }
  }
}


#block3{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .block3-func-contain{
    width:49%;
    height: 49%;

    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .block3-contain{
      width: 80%;
      height: 60%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .block3-img{
        width: 60%;
        height: 100%;
        border-radius: 5px;
        background-color: #21bec1;
      }
      .block3-text{
        font-size: 25px;
        line-height: 30px;
        color: #000;
        margin: auto;
      }
    }
  }
}

.bg{
  width: 100vw;
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