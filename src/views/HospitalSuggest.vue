<template>
  <div>
    <div class="map">
      <baidu-map :scroll-wheel-zoom="true" center="成都">
        <bm-view class="bm-view"></bm-view>
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :show-address-bar="true"
                        :auto-location="true"></bm-geolocation>
        <!--        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT" type="BMAP_NAVIGATION_CONTROL_LARGE"></bm-navigation>-->
        <bm-panorama></bm-panorama>
        <bm-local-search
            v-if="this.$store.state.hospital.ifNeedSearch"
            location="成都"
            keyword="医院"
            :auto-viewport="true"
            @searchcomplete="searchComplete"
            :panel="false">
        </bm-local-search>
      </baidu-map>
    </div>

    <el-card style="margin:10px 10px 10px 10px">
      <p>医院推荐</p>
      <div class="select-div">
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </div>
      <div class="hospital-list">
        <div class="hospital-item" @click="viewHospitalInfo(item)" v-for="item in hos_List" :key="item.uid">
          <el-image
              class="item-img"
              :src="item.imgUrl"
              style="width: 20%;height: 100%"
              fit="contain"
          >
            <div slot="error" class="image-slot" style="width: 100%;height: 100%;display: flex;
            align-items: center;justify-content:center;vertical-align: center">
              <i class="el-icon-loading" style=""></i>
            </div>

          </el-image>
          <div class="item-text">
            <div class="row1" style="display: flex;flex-direction: row">
              <p style="font-size: 25px">{{ item.title }}</p>
              <div style="border: 1px solid rgba(0,200,200,.5);border-radius: 4px;align-items: center;
    justify-content: center;padding: 3px 4px 2px;height: 16px;
    font-size: 12px;color: #00c8c8;background: #fff;line-height: 16px;margin-left: 5px;margin-top: 5px">三甲
              </div>
              <div style="border: 1px solid rgba(0,200,200,.5);border-radius: 4px;align-items: center;
    justify-content: center;padding: 3px 4px 2px;height: 16px;
    font-size: 12px;color: #00c8c8;background: #fff;line-height: 16px;margin-left: 5px;margin-top: 5px">医保定点
              </div>
              <div style="border: 1px solid rgba(0,200,200,.5);border-radius: 4px;align-items: center;
    justify-content: center;padding: 3px 4px 2px;height: 16px;
    font-size: 12px;color: #00c8c8;background: #fff;line-height: 16px;margin-left: 5px;margin-top: 5px">综合医院
              </div>
            </div>
            <div class="row2">
              <p>有22个省重点专科</p>
            </div>
            <div class="row3">
              <p>{{ item.address }}</p>
            </div>
          </div>

        </div>

      </div>


    </el-card>

  </div>
</template>

<script>

import hospitalInfo from "@/store/hospitalInfo";

export default {
  name: "HospitalSuggest.vue",
  data() {
    return {
      location: "成都",
      keyword: "医院",
      cities: [
        {
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
      value: '',
      hos_List: [
        //         {
        //           address:"",
        //           title:"",
        //           imgUrl:"",
        //           detailUrl:"",
        //           url:"",
        // },
      ],
    }
  },
  methods: {
    async searchComplete(res) {
      console.log(res)

      for (let i = 0; i < res.Yr.length; i++) {
        let item = {
          address: res.Yr[i].address,
          title: res.Yr[i].title,
          imgUrl: "",
          detailUrl: res.Yr[i].detailUrl,
          url: res.Yr[i].url,
        }
        this.hos_List.push(item)

      }

      this.$store.state.hospital.ifNeedSearch = false
      for (let i = 0; i < this.hos_List.length; i++) {
        let res = await this.$http.post('/test/picture', {
          "current": 1,
          "pageSize": 1,
          "searchFiled": this.hos_List[i].title,
        })
        this.hos_List[i].imgUrl = res.data.data[0].url

      }
      this.$store.state.hospital.hospitalList = this.hos_List
      this.$forceUpdate()

    },

    viewHospitalInfo(hospital){
      console.log(hospital)
      hospitalInfo= hospital;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.$router.push('/hospitalInfo')
    }

  },
  mounted() {
    setTimeout(() => {
    }, 2000)
    this.hos_List = this.$store.state.hospital.hospitalList


  }
}
</script>

<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: 400px;
}

/deep/ .el-card__body {
  padding: 0;
}

p {
  padding: 10px 10px;
}

.select-div {
  display: flex;
  flex-direction: row;

  .el-select {
    margin-left: 10px;
  }

}

.hospital-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;


  .hospital-item {
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100px;
    margin-top: 20px;
    box-shadow: 0 0 5px #e5e3e3;

    .item-img {
      width: fit-content;
    }

    .item-text {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 5px 0px 5px 0px;
      justify-content: space-between;

      p {
        padding: 0;
        line-height: 30px;
      }

      .row3 {
        p {
          font: 14px/20px Arial, Helvetica, sans-serif;
          font-size: 14px;
          color: #858585;
          font-weight: normal;
        }

      }
    }
  }
}
</style>