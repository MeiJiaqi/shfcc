<template>
  <div class="login-contain">
    <!-- 搭建结构 -->
    <div class="container">
      <!-- 注册页面 -->
      <div class="container-form container-signup">
        <form action="" class="form">
          <h2 class="form-title">注册</h2>
          <input type="text" placeholder="User" class="input">
          <input type="email" placeholder="Email" class="input">
          <input type="password" placeholder="Password" class="input">
          <button class="submit">注册</button>
        </form>
      </div>
      <!-- 登录页面 -->
      <div class="container-form container-signin">
        <form action="javascript:void(0);" class="form">
          <h2 class="form-title">登录</h2>
          <input v-model="username"  type="text" placeholder="User" class="input" @focus="inputFocus">
          <input v-model="password" type="password" placeholder="Password" class="input" @focus="inputFocus">
          <a href="javascript:void(0);" style="text-decoration: underline">忘记密码?</a>
          <button class="submit" @click="login">登录</button>
          <label class="tip">用户名或密码错误</label>
        </form>
      </div>
      <!-- 覆盖层 -->
      <div class="container-overlay">
        <div class="overlay">
          <div class="overlay-slide overlay-left">
            <button class="submit" id="goSignIn" @click="switchUi">去登录</button>
          </div>
          <div class="overlay-slide overlay-right">
            <button class="submit" id="goSignUp" @click="switchUi">去注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    async login(){
      this.$http.post('/user/login',{
        "username":this.username,
        "password":this.password
      }).then((ans)=>{
        if(ans.data.data!==undefined&&ans.data.msg==='ok'){
          this.$router.push('/main')
        }
        else{
          // alert('用户名或密码错误')
          const tip = document.querySelector('.tip');
          tip.style.display = 'block';
        }
      })
    },

    switchUi(){
      const container = document.querySelector('.container');
      if(container.classList.contains('switch')){
        container.classList.remove('switch');
      }
      else{
        container.classList.add('switch');
      }
    },

    inputFocus(){
      const tip = document.querySelector('.tip');
      tip.style.display = 'none';
    }


  },

}
</script>

<style lang="less" scoped>
/* 清除所有元素内外边距 转换为c3盒子模型 */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.login-contain{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: rgb(250,250,250);
  //background: url('../assets/img/login2.png') no-repeat fixed center;
  //background-size: cover;


  //background:
  //linear-gradient(to right bottom, #19a98a, #11ad95, #0cb1a0, #0cb5aa, #13b9b4, #36bec5, #53c3d4, #6ec8df, #9ccfeb, #c1d7ef, #dde1ef, #eeeeee);
  //background-size: 250% 250%;
  //animation: bgAnimation 10s infinite;
  //
  //@keyframes bgAnimation{
  //  0%{
  //    background-position: 0 50%;
  //  }
  //  50%{
  //    background-position: 100% 50%;
  //  }
  //  100%{
  //    background-position: 0 50%;
  //  }
  }


  /* 清除input、button默认边框以及点击高亮 */
  input,
  button{
    outline: none;
    border: none;
  }
  /* 清除a标签默认下划线 颜色设置为#333 */
  a{
    text-decoration: none;
    color: #333;
    margin: 1.25rem 0;
  }
  /* 盒子样式 */
  .container{
    position: relative;
    width: 50vw;
    height: 60vh;
    background-color: rgba(233,233,233,0.5);
    box-shadow: 0 1rem 1.5rem rgba(0,0,0,.3),
    0 .5rem .5rem rgba(0,0,0,.2);
    border-radius: 1rem;
    overflow: hidden;

  }
  /* 将两个form表单设置绝对定位 */
  .container-form{
    position: absolute;
    top: 0;
    height: 100%;
    transition: all .5s ease-in-out;
  }
  /* 设置注册页样式 */
  .container-signup{
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;
  }
  /* 设置登录页样式 */
  .container-signin{
    left: 0;
    width: 50%;
    z-index: 2;
    opacity: 1;
  }
  /* 默认显示signup注册页，通过操作switch类名 显示登录页 */
  .container.switch .container-signup{
    transform: translateX(100%);
    z-index: 5;
    opacity: 1;
  }
  .container.switch .container-signin{
    transform: translateX(100%);
    opacity: 0;
  }
  /* 设置覆盖层 */
  .container-overlay{
    position: absolute;
    left: 50%;
    top: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transform: translateX(0);
    transition: transform .5s ease-in-out;
    z-index: 999;
  }
  /* 设置显示背景图 */
  .overlay{
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;


    background: url('../assets/img/login2.png') no-repeat fixed
    center;
    background-size: cover;
    opacity: 1;


    transition: transform .5s ease-in-out;
    /* 完工！ */
  }
  /* 默认左边显示 通过操作switch类名显示登录页 */
  .container.switch .container-overlay{
    transform: translateX(-100%);
  }
  .container.switch .overlay{
    transform: translateX(50%);
  }
  /* 设置切换按钮页样式 */
  .overlay-slide{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    transition: transform .5s ease-in-out;
  }
  /* 这一块在最后讲解 */
  /* 这里的意思就是让按钮跟随页面一起进行移动 如果不加会有点难看 */
  /* 是不是很难看！ */
  .overlay-left{
    transform: translateX(-20%);
  }
  .overlay-right{
    transform: translateX(0);
    right:0;
  }
  .container.switch .overlay-left{
    transform: translateX(0);
  }
  .container.switch .overlay-right{
    transform: translateX(20%);
  }
  /* 设置表单内元素样式 */
  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
  }
  /* 设置input标签样式 */
  .input{
    width: 100%;
    margin: 0.5rem 0;
    padding: 1rem;
  }
  /* 设置表单标题样式 */
  .form-title{
    font-weight: 300;
    margin-bottom: 1rem;
  }
  /* 设置按钮样式 */
  .submit{
    padding: 1rem 3rem;
    background-image: -webkit-linear-gradient(40deg,rgb(33,190,193) 0%,rgb(25,169,138) 70%);
    border-radius: 1rem;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    transition: transform .1s ease-in-out;
  }
  /* 偷偷添加个小手  对了！ */
  /* 只设置表单按钮的外边距 */
  .form>.submit{
    margin-top: 1.5rem;
  }
  /* 设置按钮按下样式 */
  .submit:active{
    transform: scale(0.95);
  }

  .tip{
    position: absolute;
    top:50vh;
    display: none;
    margin-top: 10px;
    color: #e01616;
    animation: tipAnimation 0.3s ease-in-out;
  }

  @keyframes tipAnimation {
    0%{
      transform: translateX(-10%);
    }
    50%{
      transform: translateX(10%);
    }
    100%{
      transform: translateX(0%);
    }
  }
</style>