<template>
  <div class="doctorInfo-contain">
    <div class="box">
      <div class="bg"></div>
      <div class="infoBox">
        <div class="lbox">
          <img src="../assets/img/doctor/doctor1.jpg" alt="">
<!--          <div class="skill-text">-->
<!--            <span style="font-size: 22px;line-height: 50px;color:#fff;margin-top: 50px">专业擅长</span><br>-->
<!--            <span style="font-size: 14px;color:#fff">心脏病</span>-->
<!--          </div>-->
        </div>
        <div class="rbox">
          <div class="info">
            <span class="title">个人资料</span>
            <span class="back" @click="back"><img src="../assets/img/back-1.jpg" alt="">更多医生</span><br>
            <span class="doctor-name">{{doctorInfo.name}}</span><br>
            <span class="keshi">{{doctorInfo.keshi}}</span><br>
            <span class="hospital">{{doctorInfo.hospital}}</span>
          </div>
          <el-divider></el-divider>
          <img class="divider-icon" src="../assets/img/icon1-2.png" alt="">
          <div class="profile">
            <span style="font-size: 22px;line-height: 50px">个人简介：</span><br>
            <span style="font-size: 14px;color:#707070">{{doctorInfo.profile}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import doctorInfo from "../store/doctorInfo";

export default {
  name: "DoctorInfo.vue",
  computed: {
    doctorInfo() {
      return doctorInfo
    }
  },
  methods:{
    back(){
      this.$router.push('/doctor')
    }
  }
}

</script>

<style scoped lang="less">
.doctorInfo-contain{
  width: 100%;
  height: 600px;
  position: relative;
  top:100px;
  .box{
    width: 1350px;
    height: 600px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    .bg{
      width: 400px;
      height: 600px;
      position: absolute;
      background: rgb(25,169,138);
      //background: url("../assets/img/doctor/img.png");
      z-index: 1;
    }
    .infoBox{
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      .lbox{
        float: left;
        width:470px;
        height: 100%;
        position: relative;
        z-index: 3;
        img{
          width:250px;
          height: 250px;
          border-radius:100%;
          float: right;
          position: relative;
          top: 70px;
        }
        //.skill-text{
        //  width:250px;
        //  height:130px;
        //  background: rgb(90,130,207);
        //  position: absolute;
        //  bottom:50px;
        //  right:-10px;
        //  border-radius: 10px;
        //}
      }
      .rbox{
        float: left;
        width: 800px;
        height: 100%;
        z-index: 3;
        margin-left: 50px;
        .info{
          .title{
            line-height: 100px;
            font-size:32px;
            font-family: "Microsoft YaHei";
          }
          .back{
            line-height: 100px;
            font-size:16px;
            font-family: "Microsoft YaHei";
            float: right;
            color:#707070;
            img{
              width: 32px;
              height: 28px;
              margin-right: 10px;
              position: relative;
              top: 6px;
            }
          }

          .back:hover{
            cursor: pointer;
            color: rgb(25,169,138);
          }

          .doctor-name{
            line-height: 50px;
            font-size:24px;
            font-family: "Microsoft YaHei";
          }
          .keshi{
            font-size: 16px;
            color: #707070;
            line-height: 25px;
          }
          .hospital{
            font-size: 16px;
            color: #707070;
          }
        }

        .divider-icon{
          position: relative;
          top: -35px;
          right: -800px;
        }
        .profile{

        }
      }
    }
  }
}
</style>