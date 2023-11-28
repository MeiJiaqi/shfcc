<template>
<div class="contain">
  <div class="contain-left">
    <div class="left-up">
        <div class="ct">
            <el-card style="width: 95%;height: 95%;margin-left: 2.4%;margin-top:2.2% ">
              <p>CT展示区域</p>
              <el-upload
                  v-if="!this.$store.state.tab.ifHaveCT"
                  class="upload-demo"
                  drag
                  action="/api/posts/"
                  multiple
                  :on-error="errorLog"
                  style="margin-left: 5%;margin-top: 10%">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传mha文件，且不超过500mb</div>
              </el-upload>
              <CommonImg img-type="or/leijinqiong_o_" index="0" length="193" style="margin-left: 5%" v-if="this.$store.state.tab.ifHaveCT"></CommonImg>
            </el-card>
        </div>
        <div class="gen">
            <el-button type="primary" style="width: 100%;margin-top: 100%" @click="showjin()">生成</el-button>
<!--            <el-button @click="handleCancle2">c</el-button>-->
        </div>
        <div class="ptv">
          <el-card style="width: 95%;height: 95%;margin-left: 2.4%;margin-top:2.2% ">
            <p>病灶展示区域</p>
            <CommonImg  img-type="ptv/leijinqiong_PTV_" index="0" length="193" style="margin-left: 5%" v-if="this.$store.state.tab.ifHavePTV"></CommonImg>
            <p style="font-weight: normal;color: #cac6c6">暂无</p>
          </el-card>
        </div>
    </div>

    <div class="left-down">
      <div class="tinymce">
        <tinymce :tinymceHtml="content"></tinymce>
      </div>
    </div>
  </div>
  <div class="contain-right">
    <el-card style="width: 95%;height: 95%;margin-left: 2.4%;margin-top:2.2% ">
      <p style="width: 100%;text-align: center;padding: 5px">历史报告</p>

      <div class="item-list">

        <div class="item">
          <el-card>

          </el-card>
        </div>

      </div>


    </el-card>
  </div>


  <el-dialog
      title="正在生成"
      :visible.sync="centerDialogVisible"
      width="30%"
      @close="handleCancle"
      center>
    <el-progress :percentage="this.percentage" :color="customColorMethod(this.percentage)"></el-progress>
  </el-dialog>
  <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible2"
      width="30%"
      center>
    <span>生成成功！</span>
    <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="quedin">确 定</el-button>
        </span>
  </el-dialog>
</div>
</template>

<script>
import tinymce from "@/components/Tinymce";
import CommonImg from "@/components/CommonImg";
export default {
  name: "Diagnose.vue",
  components: {tinymce,CommonImg},
  data(){
    return {
      content: '',
      content2:'<div class="tp-importword-centent-body">\n' +
          '<table class="tp-importword_3" style="width: 917px; table-layout: auto;"><colgroup><col style="width: 916px;" /></colgroup>\n' +
          '<tbody>\n' +
          '<tr style="height: 77.55px;">\n' +
          '<td style="width: 455px; border-width: 0px 0px 2.25px; border-style: solid; border-color: black black #000000; padding-left: 5.4px; padding-right: 5.4px;">\n' +
          '<p>&nbsp;</p>\n' +
          '<p style="text-align: center;"><span style="font-weight: bold; min-height: 24px; font-size: 24px;">智能医学宫颈癌诊断报告单</span></p>\n' +
          '<p style="text-indent: 21px;">&nbsp;</p>\n' +
          '<p style="text-indent: 21px;">编号：1000210</p>\n' +
          '</td>\n' +
          '</tr>\n' +
          '<tr style="height: 4.5px;">\n' +
          '<td style="width: 455px; border-width: 2.25px 0px; border-style: solid; border-color: #000000 black; padding-left: 5.4px; padding-right: 5.4px;">\n' +
          '<p><span id="_GoBack"></span></p>\n' +
          '<p><span style="font-weight: bold;">姓</span><span style="font-weight: bold;">&nbsp; </span><span style="font-weight: bold;"> 名：</span>张三 &nbsp; &nbsp; &nbsp; &nbsp; <span style="font-weight: bold;">性 </span><span style="font-weight: bold;">&nbsp; </span><span style="font-weight: bold;">别：</span>男 &nbsp; &nbsp; &nbsp; <span style="font-weight: bold;">年 </span><span style="font-weight: bold;">&nbsp; </span><span style="font-weight: bold;">龄：</span>29岁</p>\n' +
          '<p>&nbsp;</p>\n' +
          '<p><span style="font-weight: bold;">检查部位：</span>子宫颈</p>\n' +
          '</td>\n' +
          '</tr>\n' +
          '<tr style="height: 187.8px;">\n' +
          '<td style="width: 455px; border-width: 2.25px 0px; border-style: solid; border-color: #000000 black; padding-left: 5.4px; padding-right: 5.4px;">\n' +
          '<p>&nbsp;</p>\n' +
          '<p style="display: inline-block; width: 100%;"><img style="position: relative; left: 0px; top: 0px; width: 368.4px; height: 368.4px; max-width: 100%;" src="http://localhost:8080/img/leijinqiong_o_100.2594e44d.jpg" data-tp-src="rId4" />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img style="position: relative; left: 0px; top: 0px; width: 368.4px; height: 368.4px; max-width: 100%;" src="http://localhost:8080/img/synthetic.ee4c5e23.jpg" data-tp-src="rId5" /></p>\n' +
          '</td>\n' +
          '</tr>\n' +
          '<tr style="height: 144px;">\n' +
          '<td style="width: 455px; border-width: 2.25px 0px; border-style: solid; border-color: #000000 black; padding-left: 5.4px; padding-right: 5.4px;">\n' +
          '<p>&nbsp;</p>\n' +
          '<p><span style="font-weight: bold;">诊断结果：</span></p>\n' +
          '<p><span class="tp-importword-tab-stop">&emsp;</span>根据CT图像和PTV分割图的结果，张三患有一个左侧肺部囊肿，目前表现为良性特征。考虑到他的高血压病史，需要进一步评估囊肿的性质，以确定是否需要治疗。</p>\n' +
          '<p style="text-align: justify;">&nbsp;</p>\n' +
          '<p style="text-align: justify;">&nbsp;</p>\n' +
          '<p style="text-align: justify;">&nbsp;</p>\n' +
          '<p style="text-align: justify;">&nbsp;</p>\n' +
          '<p style="text-align: justify;">&nbsp;</p>\n' +
          '<p style="text-align: center;">报告日期：2023年9月5日</p>\n' +
          '</td>\n' +
          '</tr>\n' +
          '</tbody>\n' +
          '</table>\n' +
          '<p>&nbsp;</p>\n' +
          '</div>',
      percentage: 0,
      clearInt:null,//定时器名
      value: '',
      value2: '',
      centerDialogVisible:false,
      centerDialogVisible2: false,
      url1:require('../assets/images/reportimg/leijinqiong_o_99.jpg'),
      url2:require('../assets/images/reportimg/synthetic.jpg'),
    }
  },
  methods: {
    errorLog(err, file, fileList){
      console.log(file)
      this.$store.state.tab.ifHaveCT=true
    },
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399';
      } else if (percentage < 70) {
        return '#e6a23c';
      } else {
        return '#67c23a';
      }
    },
    showjin(){
      this.percentage=0
      this.centerDialogVisible=true
      let _this=this;
      _this.clearInt=setInterval(function(){
        _this.percentage++;
        if(_this.percentage==100){
          clearInterval(_this.clearInt);
        }
      },100)

    },
    handleCancle () {
      this.centerDialogVisible = false
      this.centerDialogVisible2= true
    },
    handleCancle2 () {
      console.log(this.content)
    },
    quedin(){
      this.centerDialogVisible2=false
      this.percentage=0
      this.$store.state.tab.ifHavePTV=!this.$store.state.tab.ifHavePTV
      this.content=this.content2
    }
  }
}
</script>

<style lang="less" scoped>
.contain{
  width: 100%;
  display: flex;
  flex-direction: row;

  /deep/.el-card__body {
    padding: 0;
  }
  .contain-left{
    width: 75%;
    height: 1000px;


    .left-up{
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: row;

      /deep/.el-card__body {
        padding: 0;
      }
      p{
          padding: 10px 10px;
      }
      .ct{
        width: 45%;
        height: 100%;


      }
      .gen{
        width:10%;
        height: 100%;

      }
      .ptv{
        width: 45%;
        height: 100%;

      }
    }
  }

  .contain-right{
    width: 25%;
    height: 1000px;

  }

}
</style>