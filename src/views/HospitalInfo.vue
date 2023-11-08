<template>
  <div class="hospital-info-contain">
    <div class="header">
      <div class="header-hos-info">
        <img class="bg" src="../assets/img/hospital/hospitalInfo_bg.png" alt="">
        <div class="info">
          <div class="icon-contain" style="width: 84px">
            <div class="icon">
              <img src="../assets/img/hospital/hos-icon.webp" alt="" style="object-fit: cover">
            </div>
          </div>
          <div class="text-contain">
            <div class="title">
              <h1>四川大学华西医院</h1>
            </div>
            <div class="jiancheng">
              <span>简称：华西医院</span>
            </div>
            <div class="label">
              <div class="label-contain"><span>三级甲等</span></div>
              <div class="label-contain"><span>综合医院</span></div>
              <div class="label-contain"><span>公立</span></div>
            </div>
            <div class="rank">
              <span>全国医院综合排行榜第2名</span><br>
              <span>西南区医院综合排行榜第1名</span>
            </div>
          </div>
        </div>
      </div>
      <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">医院主页</el-menu-item>
        <el-menu-item index="2">医院简介</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div id="hos-index">
        医院主页
        <div class="tips">

        </div>
      </div>

      <div id="hos-profile">
        医院简介
      </div>
    </div>
  </div>
</template>

<script>


export default {

  data() {
    return {
      activeIndex: '1',
      selectedIndex:'0'
    };
  },
  methods: {
    handleSelect(key) {
      this.selectedIndex=this.selectedIndex?key:this.selectedIndex===key;

    }
  },
  watch: {
    selectedIndex(val){
      const index=document.getElementById("hos-index");
      const profile=document.getElementById("hos-profile");
      if(val === '1'){

        index.style.display='block';
        profile.style.display='none';
      }
      else if(val === '2'){
        index.style.display='none';
        profile.style.display='block';
      }
    }
  },
  mounted() {
    const index=document.getElementById("hos-index");
    const profile=document.getElementById("hos-profile");
    index.style.display='block';
    profile.style.display='none';
  }
}
</script>



<style scoped lang="less">

.hospital-info-contain{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 350px;
    border-bottom: 3px solid rgb(250,250,250);
  }
  .header-hos-info{
    position: relative;
    width: 100%;
    height: 200px;
    .bg{
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .info{
      width: 310px;
      height:145px;
      position:absolute;
      top:30px;
      left:200px;
      display: flex;
      flex-direction: row;
      .icon{
        height: 72px;
        width: 72px;
        background-color: #fff;
        border-radius: 50%;
        margin-top: 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .text-contain{
        .title h1{
          color: #fff;
          font-size: 24px;
          font-family: Arial;
          margin-top: 10px;
          margin-bottom:10px;
        }
        .jiancheng{

          margin-bottom: 7px;
          span{
            color: #fff;
            font-size: 15px;
            font-family: "PingFang SC";
          }
        }
        .label{
          display: flex;
          flex-direction: row;
          margin-bottom: 7px;
          .label-contain{
            background-color: #fff;
            margin-right: 10px;
            border-radius: 4px;
            height: 16px;
            span{
              color: rgb(0,200,200);
              font-size: 12px;
              font-family: "Arial";
              margin-left: 4px;
              margin-right: 4px;
              position: relative;
              top:-4px;
            }
          }
        }
        .rank{
          color: #fff;
          font-family: "PingFang SC";
        }
      }
    }

  }
  .content{
    width:1200px;
    height: 650px;
    display: flex;
    flex-direction: column;
  }

  .el-menu-item{
    font-size:18px;
    font-family: 'Arial';
    margin: 20px;
  }


  .el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 2px solid rgb(0,200,200);
    color: rgb(0,200,200);
    font-family: 'PingFangSC-Semibold';
    font-weight: 600;
  }
}

</style>