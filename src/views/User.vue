<template>
 <div class="user-contain">
   <div class="user-info-up">
     <el-row><el-card>
       <el-col :span="10">
         <div class="user-info-left">
            <p style="font-size: 20px;"><span>您好</span>，张三</p>
           <p>本页面显示的是你的基本信息</p>
           <p>您可以选择左边的模块查看更多的信息</p>

            <div class="item">
              <div class="item-name"><p>档案编号</p></div>
              <div class="item-code"><p>511445660110515</p></div>
            </div>
           <div class="item">
             <div class="item-name"><p>患者编号</p></div>
             <div class="item-code"><p>511445660110515</p></div>
           </div>
           <div class="item" style="margin-bottom: 50px">
             <div class="item-name"><p>健康卡号</p></div>
             <div class="item-code"><p>511445660110515</p></div>
           </div>
         </div>
       </el-col>
       <el-col :span="14">

           <div class="user-info-right">
             <div class="info-item-1">
               <div class="info-item">
                 <p class="item-name">年龄</p>
                 <p class="item-code">20</p>
               </div>
               <div class="info-item">
                 <p class="item-name">性别</p>
                 <p class="item-code">女</p>
               </div>
             </div>
             <div class="info-item-1">
               <div class="info-item">
                 <p class="item-name">民族</p>
                 <p class="item-code">汉族</p>
               </div>
               <div class="info-item">
                 <p class="item-name">婚姻状况</p>
                 <p class="item-code">未婚</p>
               </div>
             </div>
             <div class="info-item-1">
               <div class="info-item">
                 <p class="item-name">住址</p>
                 <p class="item-code">四川大学江安校区西园7舍8单元302A</p>
               </div>
               <div class="info-item">
                 <p class="item-name">医疗保险类型</p>
                 <p class="item-code">城镇居民基本医疗保险</p>
               </div>
             </div>
           </div>

       </el-col>
     </el-card>
     </el-row>
   </div>
   <div class="user-info-down">
        <el-row>
          <el-col :span="10">
            <el-card style="margin-left: 20px;margin-top: 15px">
              <div class="info-down-left">
                  <p class="down-title">基本健康信息</p>

                  <div class="down-left-up">
                      <div class="item">
                          <div class="item-name">
                            <p>ABO血型</p>
                          </div>
                          <div class="item-body">
                            <img src="../assets/img/爱心 _实心.png">
                            <p>A型</p>
                          </div>
                      </div>
                     <div class="item-1">
                      <div class="item-name">
                        <p>RH血型</p>
                      </div>
                      <div class="item-body">
                        <img src="../assets/img/爱心.png">
                        <p>阴型</p>
                      </div>
                    </div>
                  </div>
                  <div class="down-left-down">
                       <div class="left-jiwan">
                         <div class="ji-title">
                           <p>既往史</p>
                         </div>
                          <div class="ji-body">
                            <div class="ji-box">
                              <div class="jiwan-item"><p>传染病史</p> <img src="../assets/img/圆形未选中.png"></div>
                              <div class="jiwan-item"><p>接种史</p> <img src="../assets/img/圆形未选中.png"></div>
                              <div class="jiwan-item"><p>手术史</p> <img src="../assets/img/圆形选中.png"></div>
                              <div class="jiwan-item"><p>输血史</p> <img src="../assets/img/圆形选中.png"></div>
                              <div class="jiwan-item"><p>过敏史</p> <img src="../assets/img/圆形未选中.png"></div>
                              <div class="jiwan-item"><p>家族史</p> <img src="../assets/img/圆形未选中.png"></div>
                            </div>

                          </div>
                       </div>
                      <div class="left-jibing">
                        <div class="ji-title">
                          <p>疾病史</p>
                        </div>
                        <div class="ji-body">
                          <div class="ji-box">
                            <div class="jiwan-item"><p>糖尿病</p> </div>
                            <div class="jiwan-item"><p>寄生虫病</p></div>
                            <div class="jiwan-item"><p>循环系统疾病</p> </div>
                            <div class="jiwan-item"><p>暂无</p></div>
                            <div class="jiwan-item"><p>暂无</p></div>
                            <div class="jiwan-item"><p>暂无</p></div>
                          </div>

                        </div>

                      </div>
                  </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="14">
                <el-card class="box-card" style="margin-right: 20px;margin-top: 15px;margin-left: 10px">
                  <div class="info-down-right">
                     <p class="down-title">医疗费用信息</p>
                      <div class="right-down-box">
                            <div class="left-table" style="width: 45%;">
                              <el-table :data="tableData" stripe>
                                <el-table-column prop="name" label="支付方式" style="font-weight: bold"></el-table-column>
                                <el-table-column prop="value" label="城镇职工基本医疗保险"></el-table-column>
                              </el-table>
                            </div>
                            <div class="right-echarts" style="width: 55%;height: 350px">
                              <div ref="echarts" style="width: 100%;height: 100%"></div>
                            </div>
                      </div>
                  </div>
                </el-card>
          </el-col>
        </el-row>
   </div>
   <div class="medical-record">
        <el-card>
          <div class="down-title">
            <p>就诊记录</p>
          </div>
          <div class="medical-record-body">
            <el-table :data="recordData" stripe>
              <el-table-column prop="time" label="就诊时间"></el-table-column>
              <el-table-column prop="hospital" label="就诊医院"></el-table-column>
              <el-table-column prop="department" label="就诊科室"></el-table-column>
              <el-table-column prop="doctor" label="就诊医生"></el-table-column>
              <el-table-column prop="type" label="就诊类型"></el-table-column>
              <el-table-column prop="value" label="就诊费用"></el-table-column>
            </el-table>
          </div>
        </el-card>

   </div>
 </div>
</template>

<script>
import *  as echarts from 'echarts';
export default {
  name: "User.vue",
  data(){
    return{
      tableData: [
          {
        value: '8333元',
        name: '门诊费用',

      },
        {
          name: '住院费用',
          value: '14000元',
        },
        {
          name: '个人费用',
          value: '5245元',
        }
      ],
      recordData:[
        {
          time: '2020-10-10',
          hospital: '四川大学华西医院',
          department: '内科',
          doctor: '张三',
          type: '门诊',
          value: '8333元',
        }
      ]
    }
  },
  mounted(){

      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(this.$refs.echarts);
       myChart.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '医疗费用信息',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {
              name: '门诊费用',
              value: 8333,
            },
            {
              name: '住院费用',
              value: 14000,
            },
            {
              name: '个人费用',
              value: 5245,
            }

          ]
        }
      ]
    });
  },
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
      .item{
        display: flex;
        flex-direction: row;
        margin-top: 20px;

        .item-name{
          background-color: rgb(25,169,138);
          p{
            color: white;
            padding: 2px;
          }
          border-radius: 2px;
        }
        .item-code{
          font-family: 微软雅黑;
          font-size: 15px;
          margin-left: 10px;
        }
      }
    }


    .user-info-right{

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .info-item{
        p{
          font-family: 微软雅黑;

          color:rgb(93,95,96);
          font-size: 12px;
          margin: 0;
          text-align: right;
        }
        .item-name{
          font-size: 10px;
          margin-top: 20px;
        }
        .item-code{
          font-size: 25px;
          margin-top: 5px;
          font-weight: bold;
        }
      }
      .info-item-1{
        width: fit-content;
        margin-top: 20px;
      }
    }
  }


  .user-info-down{
    width: 100%;
      /deep/.el-card__body {
        padding: 0;
      }
    p{
      margin: 0;
      font-family: 微软雅黑;
      font-weight: bold;
      color:rgb(93,95,96);
    }

    .down-title{
      padding: 10px 10px;
      font-size: 15px;
    }
    .down-left-up{

      display: flex;
      justify-content: space-between;

      .item{
        width: 45%;
        border: rgb(25,169,138) solid 1px;
        border-radius: 5px;
        margin-left: 5px;
        margin-right: 5px;
        .item-name{
          background-color: rgb(25,169,138);

          p{
            color: white;
            font-size: 10px;
            padding: 10px 10px;
            font-weight: normal;
          }
        }

        .item-body{
          display: flex;
          flex-direction: row;

          img{
            width: 100px;
            height: 100px;
          }

          p{
            text-align: center;
            line-height: 100px;
            font-size: 30px;
            margin-left: 20px;
            font-weight: normal;
          }
        }
      }
      .item-1{
        width: 45%;
        border: rgb(33,190,193) solid 1px;
        border-radius: 5px;
        margin-left: 5px;
        margin-right: 5px;
        .item-name{
          background-color: rgb(33,190,193);

          p{
            color: white;
            font-size: 10px;
            padding: 10px 10px;
            font-weight: normal;
          }
        }

        .item-body{
          display: flex;
          flex-direction: row;

          img{
            width: 100px;
            height: 100px;
          }

          p{
            text-align: center;
            line-height: 100px;
            font-size: 30px;
            margin-left: 20px;
            font-weight: normal;
          }
        }
      }



    }
    .down-left-down{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p{
        padding: 5px 20px;
        font-size: 15px;
        font-weight: bold;
      }
      .left-jiwan{
        width: 45%;
        border: rgb(244,244,244) solid 1px;
        border-radius: 5px;
        margin-left: 10px;
        margin-top: 20px;
        .ji-title{
          background-color: rgb(244,244,244);
          border: rgb(244,244,244) solid 1px;
        }

        .ji-body{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .ji-box{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 30px;
          }
          .jiwan-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
            border: rgb(244,244,244) solid 1px;
            border-radius: 5px;
            img{
              width: 25px;
              height: 25px;
              margin-right: 10px;
              margin-top: auto;
            }
          }

        }
      }
      .left-jibing{
        width: 45%;
        border: rgb(244,244,244) solid 1px;
        border-radius: 5px;
        margin-right: 10px;
        margin-top: 20px;
        .ji-title{
          background-color: rgb(244,244,244);
          border: rgb(244,244,244) solid 1px;
        }

        .ji-body{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .ji-box{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 30px;
          }
          .jiwan-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
            border: rgb(244,244,244) solid 1px;
            border-radius: 5px;

          }

        }

      }

    }

    .info-down-right{

      .left-table{
         /deep/.cell{
            text-align: center!important;
         }
        /deep/.el-table_16_column_33.el-table__cell{
          padding: 0;
        }
      }

      .right-down-box
      {
        width: 100%;
        display: flex;
        flex-direction: row;
      }

    }
  }

  .medical-record{
    padding: 5px 10px 5px 10px;
  }
}
</style>