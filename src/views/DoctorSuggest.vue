<template>
  <div class="doctor-contain">
    <div class="header" style="height: 100px;width: 80%;margin-top: 50px">

      <img src="../assets/img/医生库.png">
      <div class="input" style="width: 60%">
        <el-input v-model="input" placeholder="输入医生名称进行查询" ></el-input>
        <el-button type="primary" icon="el-icon-search"></el-button>
      </div>

    </div>

    <el-carousel indicator-position="outside" style="width: 1000px;">
      <el-carousel-item v-for="item in imgList" :key="item.index">
        <el-image :src="item.url"
                  style="width: 100%;height: 100%"
                  fit="contain"
        >  </el-image>
      </el-carousel-item>
    </el-carousel>


    <div class="doctor-list-box">
      <div class="list-header">
        <el-image
            style="width: 50px; height: 50px;margin-left: 10px"
            :src="require('../assets/img/doc.png')"
            fit="contain"></el-image>
        <p>推荐医生</p>
      </div>

      <div class="doctor-list">
        <div class="doctor-item" @click="viewDoctorInfo(doctor)" v-for="doctor in doctorList" :key="doctor.id">
            <el-image
                class="doctor-img"
                :src="doctor.pictureURL"
                style="border-radius: 50%"
            ></el-image>
          <div class="item-box" style="width: 60%">
            <p class="doctor-name" style="font-weight: bold;font-size:20px">{{doctor.name}}</p>
            <p class="doctor-position" style="font-size:10px;line-height: 20px">{{doctor.position}}</p>
          </div>

          <div class="item-box">
            <p class="doctor-hospital">{{doctor.hospital}}</p>
            <p class="doctor-department">{{doctor.keshi}}</p>
          </div>

          <div class="" style="width: 80%;display: flex;flex-direction: row;margin-top: 10px">
            <p style="color: rgb(153,153,173)">擅长：</p>
            <p class="doctor-description">{{doctor.expert}}</p>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import doctorInfo from "../store/doctorInfo";
export default {
  name: "DoctorSuggest.vue",
  data(){
    return{
      input: '',
      imgList:[
        {
          index:1,
          url:require('../assets/img/doctor/1.png'),
        },
        {
          index:2,
          url:require('../assets/img/doctor/2.png'),
        },
        {
          index:3,
          url:require('../assets/img/doctor/3.png'),
        },
        {
          index:4,
          url:require('../assets/img/doctor/4.png'),
        }
      ],

      doctorList:[
        {
          id:0,
          name:'张三',
          keshi:'肿瘤放射治疗科',
          position:'主治医师',
          expert:'擅长肺癌、直肠癌的放化疗、靶向治疗和免疫治疗。',
          hospital:'四川大学华西医院',
          profile:'2014年本科毕业于湘雅医学院临床医学系，保送至四川大学华西临床医学院肿瘤学硕博连读，期间担任住院医师。2019年毕业后在肿瘤中心工作至今，发表论文数篇。',
          pictureURL:'../assets/img/doctor/doctor1.jpg',
        },
        {
          id:1,
          name:'李四',
          keshi:'肿瘤放射治疗科',
          position:'主治医师',
          expert:'肿瘤放射治疗',
          hospital:'四川大学华西医院',
          profile:'2014年本科毕业于湘雅医学院临床医学系，保送至四川大学华西临床医学院肿瘤学硕博连读，期间担任住院医师。2019年毕业后在肿瘤中心工作至今，发表论文数篇。',
          pictureURL:'../assets/img/doctor/doctor1.jpg',
        },
        {
          id:2,
          name:'王五',
          keshi:'肿瘤放射治疗科',
          position:'主治医师',
          expert:'肿瘤放射治疗',
          hospital:'四川大学华西医院',
          profile:'2014年本科毕业于湘雅医学院临床医学系，保送至四川大学华西临床医学院肿瘤学硕博连读，期间担任住院医师。2019年毕业后在肿瘤中心工作至今，发表论文数篇。',
          pictureURL:'../assets/img/doctor/doctor1.jpg',
        },
        {
          id:3,
          name:'赵六',
          keshi:'肿瘤放射治疗科',
          position:'主治医师',
          expert:'肿瘤放射治疗',
          hospital:'四川大学华西医院',
          profile:'2014年本科毕业于湘雅医学院临床医学系，保送至四川大学华西临床医学院肿瘤学硕博连读，期间担任住院医师。2019年毕业后在肿瘤中心工作至今，发表论文数篇。',
          pictureURL:'../assets/img/doctor/doctor1.jpg',
        },
        {
          id:4,
          name:'周七',
          keshi:'肿瘤放射治疗科',
          position:'主治医师',
          expert:'肿瘤放射治疗',
          hospital:'四川大学华西医院',
          profile:'2014年本科毕业于湘雅医学院临床医学系，保送至四川大学华西临床医学院肿瘤学硕博连读，期间担任住院医师。2019年毕业后在肿瘤中心工作至今，发表论文数篇。',
          pictureURL:'../assets/img/doctor/doctor1.jpg',
        },
        {
          id:5,
          name:'马八',
          keshi:'肿瘤放射治疗科',
          position:'主治医师',
          expert:'肿瘤放射治疗',
          hospital:'四川大学华西医院',
          profile:'2014年本科毕业于湘雅医学院临床医学系，保送至四川大学华西临床医学院肿瘤学硕博连读，期间担任住院医师。2019年毕业后在肿瘤中心工作至今，发表论文数篇。',
          pictureURL:'../assets/img/doctor/doctor1.jpg',
        },
      ],
    }
  },
  methods:{
    viewDoctorInfo(doctor){
      doctorInfo=doctor
      console.log(doctorInfo)
      this.$router.push('/doctorInfo')
    }
  }
}
</script>

<style lang="less" scoped>


.doctor-contain{

  display: flex;
  flex-direction: column;
  align-items: center;
  .header{
    display: flex;
    flex-direction: row;
    align-items: center;

    .input{
      display: flex;
      flex-direction: row;
      align-items: center;

    }
  }

  .doctor-list-box{
    width: 80%;
    .list-header{
      width: 100%;
      height: 50px;
      background-color: rgb(248,255,255);
      display: flex;
      flex-direction: row;
      border: #cac6c6 1px solid;
      border-radius: 5px;
      p{
        padding: 15px 15px;
      }
    }
    .doctor-list{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      border: #cac6c6 1px solid;
      border-radius: 5px;
      .doctor-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        margin: 20px;
        box-shadow: 0 0 25px #cac6c6;

        p{
          font-size: 15px;
          font-weight: normal;

        }
        .item-box{
          width: 80%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 10px;
        }

        .doctor-img{
          width: 150px;
          height: 150px;
        }
        .doctor-name{

        }
        .doctor-hospital{

        }
        .doctor-department{

        }
        .doctor-position{

        }
        .doctor-description
        {

        }
      }
    }

  }

}

</style>