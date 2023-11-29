<template>
    <div class="statist-contain">
      <div class="statist-up">
          <el-card>
            <h2>统计数据参考</h2>
            <p>基于群体数据得出的统计学结果</p>
          </el-card>
      </div>
      <div class="down-data">
            <div class="data-item" style="margin-left: 20px;">
                  <img src="../assets/img/user.png">
              <div class="item-data">
                  <p>患者基数</p>
                  <p class="item-data-big">35106</p>
              </div>
            </div>
            <div class="data-item">
              <img src="../assets/img/user.png">
              <div class="item-data">
                <p>您是第</p>
                <p class="item-data-big">36位患者</p>
              </div>
            </div>
            <div class="data-item" style="margin-right: 20px;">
              <img src="../assets/img/烧瓶.png">
              <div class="item-data">
                <p>共有典型疾病</p>
                <p class="item-data-big">351种</p>
              </div>
            </div>
      </div>
      <div class="down-echarts">
        <el-card>
          <p class="echarts-title">比例</p>
          <div class="echarts-body">
            <div class="echarts-left-box">
              <div class="left-box-row1" style="width: 100%;height: 300px" >
                <div class="echart-base-box" style="height: 100%;width: 50%">
                  <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                    <p>接种HPV疫苗</p>
                  </div>
                  <div ref="echarts1" style="height: 100%;width: 100%;"></div>
                </div>
                <div class="echart-base-box" style="height: 100%;width: 50%">
                  <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                    <p>年龄段</p>
                  </div>
                  <div ref="echarts2" style="height: 100%;width: 100%;">
                  </div>
                </div>
              </div>


              <div class="echart-base-box" style="margin-top: 40px">
                <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                  <p>典型疾病</p>
                </div>
                <div ref="echarts3" style="width: 100%;height: 400px"></div>
              </div>

            </div>
            <div class="echarts-right-box">
              <div class="right-box-row1" style="width: 100%;height: 300px" >
                <div class="echart-base-box" style="height: 100%;width: 50%">
                  <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                    <p>ABO血型</p>
                  </div>
                  <div ref="echarts4" style="height: 100%;width: 100%;"></div>
                </div>
                <div class="echart-base-box" style="height: 100%;width: 50%">
                  <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                    <p>RH血型</p>
                  </div>
                  <div ref="echarts5" style="height: 100%;width: 100%;">
                  </div>
                </div>
              </div>

              <div class="echart-base-box" style="margin-top: 40px">
                <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                  <p>既往史</p>
                </div>
                <div class="right-box-row1" style="width: 100%;height: 300px;" >
                  <div class="echart-base-box" style="height: 100%;width: 50%">
                    <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                      <p>传染病史</p>
                    </div>
                    <div ref="echarts6" style="height: 100%;width: 100%;"></div>
                  </div>
                  <div class="echart-base-box" style="height: 100%;width: 50%">
                    <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                      <p>接种史</p>
                    </div>
                    <div ref="echarts7" style="height: 100%;width: 100%;">
                    </div>
                  </div>
                </div>
                <div class="right-box-row1" style="width: 100%;height: 300px;margin-top: 10px" >
                  <div class="echart-base-box" style="height: 100%;width: 50%">
                    <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                      <p>手术史</p>
                    </div>
                    <div ref="echarts8" style="height: 100%;width: 100%;"></div>
                  </div>
                  <div class="echart-base-box" style="height: 100%;width: 50%">
                    <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                      <p>输血史</p>
                    </div>
                    <div ref="echarts9" style="height: 100%;width: 100%;">
                    </div>
                  </div>
                </div>
                <div class="right-box-row1" style="width: 100%;height: 300px;margin-top: 10px" >
                  <div class="echart-base-box" style="height: 100%;width: 50%">
                    <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                      <p>过敏史</p>
                    </div>
                    <div ref="echarts10" style="height: 100%;width: 100%;"></div>
                  </div>
                  <div class="echart-base-box" style="height: 100%;width: 50%">
                    <div class="echart-base-box-title" style="background-color: rgb(244,244,244)">
                      <p>家族史</p>
                    </div>
                    <div ref="echarts11" style="height: 100%;width: 100%;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </el-card>
      </div>
    </div>
</template>

<script>
import *  as echarts from 'echarts';
export default {
  name: "Statistics",
  data(){
    return{

    }
  },
  mounted(){
    // 基于准备好的dom，初始化echarts实例
    const myChart1 = echarts.init(this.$refs.echarts1);
    const myChart2 = echarts.init(this.$refs.echarts2);
    const myChart3 = echarts.init(this.$refs.echarts3);
    const myChart4 = echarts.init(this.$refs.echarts4);
    const myChart5 = echarts.init(this.$refs.echarts5);
    const myChart6 = echarts.init(this.$refs.echarts6);
    const myChart7 = echarts.init(this.$refs.echarts7);
    const myChart8 = echarts.init(this.$refs.echarts8);
    const myChart9 = echarts.init(this.$refs.echarts9);
    const myChart10 = echarts.init(this.$refs.echarts10);
    const myChart11 = echarts.init(this.$refs.echarts11);
    myChart1.setOption({
      title: {
        text: 'HPV疫苗',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '接种HPV疫苗',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '未接种' },
            { value: 300, name: '接种' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    myChart2.setOption({
      title: {
        text: '年龄段',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: '年龄段',
          type: 'pie',
          radius: [20, 100],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 33, name: '0-5' },
            { value: 50, name: '5-10' },
            { value: 100, name: '10-20' },
            { value: 150, name: '20-30' },
            { value: 200, name: '30-40' },
            { value: 250, name: '40-50' },
            { value: 300, name: '50-60' },
          ]
        }
      ]
    });
    myChart3.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: '典型疾病',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner',
            fontSize: 10
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1200, name: '传染病' , selected: true },
            { value: 800, name: '恶性肿瘤' },
            { value: 600, name: '内分泌疾病'},
            { value: 400, name: '循环系统疾病' },
            { value: 200, name: '寄生虫病'},
          ]
        },
        {
          name: '典型疾病',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 3
          },
          label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4
              }
            }
          },
          data: [
            { value: 1048, name: 'Baidu' },
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 251, name: 'Google' },
            { value: 234, name: 'Union Ads' },
            { value: 147, name: 'Bing' },
            { value: 135, name: 'Video Ads' },
            { value: 102, name: 'Others' }
          ]
        }
      ]
    });
    myChart4.setOption({
      title: {
        text: 'ABO血型',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '血型',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'A型' },
            { value: 735, name: 'B型' },
            { value: 735, name: 'O型' },
            { value: 200, name: '不确定' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    myChart5.setOption({
      title: {
        text: 'Rh血型',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Rh血型',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '阴型' },
            { value: 735, name: '阳型' },
            { value: 735, name: '不确定' },
            { value: 735, name: '未检出' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    myChart6.setOption({
      title: {
        text: '传染病史',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '传染病史',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '无病史' },
            { value: 735, name: '有病史' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    myChart7.setOption({
      title: {
        text: '接种史',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '接种史',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 735, name: '有接种史' },
            { value: 735, name: '无接种史' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    myChart8.setOption({
      title: {
        text: '手术史',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '手术史',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 400, name: '有手术史' },
            { value: 735, name: '无手术史' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    myChart9.setOption({
      title: {
        text: '输血史',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '输血史',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 836, name: '有输血史' },
            { value: 735, name: '无输血史' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    myChart10.setOption({
      title: {
        text: '过敏史',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '过敏史',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 756, name: '有过敏史' },
            { value: 735, name: '无过敏史' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    myChart11.setOption({
      title: {
        text: '家族史',
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '家族史',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '有家族史' },
            { value: 735, name: '无家族史' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });


  },
}
</script>

<style lang="less" scoped>
.statist-contain{

  .down-data{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-between;
    .data-item{
      width: 32%;
      background-color: rgb(25,169,138);
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 5px;

      img{
        width: 50px;
        height: 50px;
        padding: 5px 10px;
      }
      p{
        color: white;
        font-size: 15px;
      }
      .item-data{
        text-align: right;
        padding: 1px 20px 10px 1px;
      }
      .item-data-big{
        font-size: 30px;
      }
    }
  }

  .down-echarts{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 5px;
    background-color: white;
    border-radius: 5px;

    /deep/.el-card__body {
      padding: 0;
    }
    .echarts-title{
      padding: 10px 10px;
      font-size: 15px;
    }

    .echart-base-box{

      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
      border: rgb(244,244,244) solid 1px;
      border-radius: 5px;
      .echart-base-box-title{

        p{
          padding: 5px 5px;
        }
      }
    }

    .echarts-body{
      display: flex;
      flex-direction: row;

      .echarts-left-box{
        width: 50%;

        .left-box-row1{
          display: flex;
          flex-direction: row;
        }


      }

      .echarts-right-box{
        width: 50%;

        .right-box-row1{
          display: flex;
          flex-direction: row;
        }
      }
    }


  }
}
</style>