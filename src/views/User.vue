<template>
 <div class="user-contain">
   <div class="user-info-up">
     <el-row>
       <el-col :span="10">
         <el-card class="user-info-left">
            <p style="font-size: 20px;"><span>您好</span>，韦明江</p>
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
           <div class="item">
             <div class="item-name"><p>健康卡号</p></div>
             <div class="item-code"><p>511445660110515</p></div>
           </div>
         </el-card>
       </el-col>
       <el-col :span="14">
         <el-card>
           <div class="user-info-right">
             <div class="info-item-1">
               <div class="info-item">
                 <p class="item-name">年龄</p>
                 <p class="item-code">20</p>
               </div>
               <div class="info-item">
                 <p class="item-name">性别</p>
                 <p class="item-code">男</p>
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
         </el-card>
       </el-col>
     </el-row>
   </div>
   <div class="user-info-down">
        <el-row>
          <el-col :span="10">
            <el-card>
              <div class="info-down-left">
                  <p class="left-title">基本健康信息</p>

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
                          <p>既往史</p>
                         <el-table
                             :data="tableData"
                             height="250"
                             border
                             style="width: 100%">
                           <el-table-column
                               prop="date"
                               width="50%">
                             <template slot-scope="scope">
                               <img :src=scope.row.date style="width: 10px;height: 10px">
                             </template>
                           </el-table-column>
                           <el-table-column
                               prop="icon"
                               width="50%">
                           </el-table-column>
                         </el-table>
                       </div>
                      <div class="left-jibing">
                         <p>疾病史</p>
                      </div>
                  </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="14">
            <el-card>
              <div class="info-down-right">
                      222
              </div>
            </el-card>
          </el-col>
        </el-row>
   </div>
 </div>
</template>

<script>
export default {
  name: "User.vue",
  data(){
    return{
      tableData:[
        {
          data:'传染病史' ,
          icon:'../assets/img/爱心 _实心.png'
        }
      ],
    }
  }
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

    .left-title{
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
      p{
        padding: 5px 20px;
        font-size: 15px;
        font-weight: bold;
      }
      .left-jiwan{
        width: 50%;
      }
      .left-jibing{
        width: 50%;
      }
    }
  }
}
</style>