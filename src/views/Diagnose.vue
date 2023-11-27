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
                  style="margin-left: 10%;margin-top: 10%">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传mha文件，且不超过500mb</div>
              </el-upload>
              <CommonImg style="margin-left: 12%" v-if="this.$store.state.tab.ifHaveCT"></CommonImg>
            </el-card>
        </div>
        <div class="gen">
          <el-card style="width: 95%;height: 95%;margin-left: 2.4%;margin-top:2.2% ">

          </el-card>
        </div>
        <div class="ptv">
          <el-card style="width: 95%;height: 95%;margin-left: 2.4%;margin-top:2.2% ">
            <p>病灶展示区域</p>
            <CommonImg style="margin-left: 12%" v-if="this.$store.state.tab.ifHavePTV"></CommonImg>
            <p style="font-weight: normal;color: #cac6c6">暂无</p>
          </el-card>
        </div>
    </div>

    <div class="left-down">
      <div class="tinymce">

      </div>
    </div>
  </div>
  <div class="contain-right">

  </div>
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
      content: ''
    }
  },
  methods: {
    errorLog(err, file, fileList){
      console.log(file)
      this.$store.state.tab.ifHaveCT=true
    },
  }
}
</script>

<style lang="less" scoped>
.contain{
  width: 100%;
  display: flex;
  flex-direction: row;
  .contain-left{
    width: 75%;
    height: 1000px;
    background-color: black;

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
        background-color: #8aa4a1;

      }
      .gen{
        width:10%;
        height: 100%;
        background-color: #ffffff;
      }
      .ptv{
        width: 45%;
        height: 100%;
        background-color: #644e4e;
      }
    }
  }

  .contain-right{
    width: 25%;
    height: 1000px;
    background-color: #0cb1a0;
  }

}
</style>