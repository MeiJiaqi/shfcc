<template>
  <div class="img-contain">
    
    <el-card :body-style="{ padding: '0px' }">
        <el-image  style="width: 256px; height: 256px;margin-left: 46px;"
        :src="require('../assets/images/'+url)"
        :preview-src-list="[
           require('../assets/images/'+imgType+index+'.jpg'),
          ]">
        </el-image>
        <div>
            <div class="bottom clearfix" style="display: flex;">
            <el-button type="butten" class="button" @click="lastImg">上一张</el-button>
            <el-input v-model="index" style="width: 100px;"></el-input>
            <el-button type="butten" class="button" @click="toImg(index)">跳转</el-button>
            <el-button type="button" class="button" style="margin-left: 0px;" @click="nextImg">下一张</el-button>
            </div>
        </div>
        </el-card>
    </div>
</template>

<script>
export default {
    props:{
        imgType:{
            type:String,
            default:'or/leijinqiong_o_'
        },
        index:{
            type:Number,
            default:0
        },
        length:{
            type:Number,
            default:193
        }
    },
    data(){
        return {
          
          baseURL:'D:/作业文件夹/深度学习文件/大创/gddp/data/dataset/rddata/rd/leijinqiong_rd_87.jpg',
          url:this.imgType+'0'+'.jpg',
          index:0,
          length:193,
        }
    },
    methods:{
      lastImg(){
        if(this.index>0)
        {
          this.index--;
          this.url=`${this.imgType+this.index}.jpg`
        }
        else
        {
          this.$message.error('这已经是第一张了');
        }
        console.log(this.index)
      },
      nextImg(){
        if(this.index<this.length)
        {
          this.index++
          this.url=`${this.imgType+this.index}.jpg`
        }
        else
        {
          this.$message.error('这已经是最后一张了');
        }

      },
      toImg(index)
      {
        if(index>=0&&index<=this.length)
        {
          this.url=`${this.imgType+this.index}.jpg`
        }
        else
        {
          this.$message.error('不存在！');
          this.index=0
        }
      },

    }
}
</script>

<style lang="less" scoped>
.img-contain{
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: space-evenly; /* 水平均匀分布 */
    align-items: center; /* 垂直居中 */
    flex-direction: column;
}

</style>