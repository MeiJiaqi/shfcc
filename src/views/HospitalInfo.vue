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
      <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect" style="width: 100%">
        <el-menu-item index="1">医院主页</el-menu-item>
        <el-menu-item index="2">医院简介</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div id="hos-index">
        <div class="tips">
          <span><img src="../assets/img/hospital/opc_icon.webp" alt=""></span>
          <span class="tip">该医院提供【核酸检测、发热门诊、急诊】服务</span>
        </div>

        <div class="hos-info">
          <div class="title-header">
            <span class="title-info">华西医院基础信息</span>
            <span class="view-more" @click="viewMore">查看更多></span>
          </div>
          <p class="description">
            锦江春色来天地，玉垒浮云变古今。

            　　在中国历史文化名城成都市锦江万里桥头的华西坝，有一座闻名遐迩的医学城，她就是四川大学华西临床医学院/华西医院。

            　　四川大学华西医院（简称华西医院）始建于1892年，是中国西部疑难危急重症诊疗的国家级中心、中国著名的高等医学学府，也是中国一流的医学科学研究和技术创新的国家级基地，综合实力处于国内一流、国际先进行列。

            　　医院学科综合实力强大，临床医学ESI排名处于国际顶尖行列（全球前1‰）。在教育部2017年一级学科评估中，临床医学和护理学排名A-，中西医结合医学均排名B+；现有教育部国家重点学科9个，重点培育学科2个；有国家临床重点专科34个，数量名列全国医院第一。在国家三级公立医院绩效考核连续两年排名全国第二，等级A++。在复旦大学中国最佳专科声誉和最佳医院排行榜上，连续12年名列全国第二，其中12个专科前三、20个前五、30个前十。领军人才方面，有两院院士1人、CJ学者13人、国家教学名师4人、国家杰青14人、高级职称1404人、研究生导师940人。

            　　医疗方面，医疗院区占地577余亩，业务用房约58万平方米，直属2个医疗院区，编制床位4300张，有48个临床科室、9个医技科室；设专科、专病门诊200余种，开展58个疑难多学科联合门诊、27个罕见病专科门诊、30个住院MDT；收治疑难复杂病种患者比例在80%以上，出院患者病例组合系数（CMI）1.48，排名全国第三；全院微创手术占比超过20%，四级手术占比40.22%，每年四级手术总量位列全国第二；2021年门、急诊量775万人次，出院病人28.3万人次，手术19.6万台次，平均住院日6.80天；在成人活体肝脏移植、肺癌外科和微创治疗、心脏介入治疗、脑神经外科及功能神经外科、中西医结合治疗重症胰腺炎、胃肠微创手术、临床麻醉、功能磁共振、核医学等多个领域处于国内乃至世界领先水平。

            　　教学方面，华西临床医学院/华西医院院院合一、两块牌子、一套班子，构建了覆盖在校教育、毕业后教育、继续医学教育于一体的以胜任力为导向的卓越医学生培养体系。医院于2000年在国内最早开展住院医师培训，并在全国范围推广，已为全国377家医院培养1600余人，并免费为西藏培养580余名住院医师和护技药人员。

            　　科研方面，华西医院建立了32万余平米的独立的科研院区，现有包括生物治疗国家重点实验室、“2011”协同创新计划、国家生物治疗转化医学重大科技基础设施、国家老年疾病临床医学研究中心在内的9个国家级和30个省部级创新研究平台，以及动物影像、色谱/质谱、显微图像、基因测序、流式细胞、电镜技术平台等一系列前沿公共创新平台。构建了全球唯一一条从原始靶点发现，到新药筛选、临床前试验、临床试验及上市后评价的创新链、服务链，形成基础研究、转化研究、临床研究为一体的创新平台。在中国医学科学院中国医院科技量值（STEM）综合排名中连续第8年位列全国第一；在复旦大学中国最佳医院排行榜上，科研得分连续12年名列全国第一。自然指数NatureIndex排名全国医院第一、全球第19位。近五年来，获得国家自然科学基金、科技重大专项、国家重点研发计划、科技创新2030重大项目等国家计划项目近千项，年均科研项目经费超过10亿元。牵头获包括国家自然科学奖二等奖、国家科技进步二等奖在内的各级政府科技奖240余项；高水平研究成果相继发表在Cell、Nature、Science等国际顶级期刊；专利申请及授权方面，连续4年在中国医院知库排行榜排名全国第一，2021年专利授权790项，包括新冠疫苗、国家麻醉一类新药、3D打印血管在内的新药和新材料，转让42项，转让金额超1亿元。

            　　医院积极投身健康精准扶贫和乡村振兴。聚焦民族贫困地区，“一地一策”推进精准健康扶贫与乡村振兴。探索建立医疗和科技互为支撑的“多学科组团”援疆模式，建立克拉玛依“数据驱动”的医院管理新模式；首创由党委领导、农工民主党华西支部主导、党外知识分子专家共同参与的“华西同心行动”，在云南镇雄县人民医院建立7个专家工作站，从无到有建立重症监护病房，开展新业务新技术或适宜技术93项；以“三级联动、辐射帮扶”方式构建“华西-援藏”的“健康维护网络”，帮扶西藏成办医院成功创建三甲综合医院，近三年招收西藏委托培训住院医师531人；形成“华西-甘孜”模式，以肝包虫病为切入点，石渠县肝包虫病患病率下降至6.421%，90%的患者能在当地得到治疗，基本实现肝包虫病治疗不出州；打造“华西-马边”模式，马边县人民医院成功创建二级甲等医院，病人外出就医率由40%下降至5%以下，群众满意度由56%提升至92%；建立艾滋病防治的“华西-昭觉”综合帮扶工作模式，艾滋病三项核心指标治疗覆盖率由39%上升到95%，抗病毒治疗成功率由71%升至94%，母婴传播率由7.12%降至3.24%。

            　　医院作为国家队，在历次重大公共卫生事件中也始终冲锋在前。在08年汶川地震、10年玉树地震、13年芦山地震、15年尼泊尔地震、17年九寨沟地震、19年宜宾地震、2020年以来抗击新冠，以及历次援藏、援疆、援非、援朝中，四川大学华西医院始终奋战在第一线，展现了国家队“中流砥柱”本色，获中共中央、国务院、中央军委授予的全国抗震救灾英雄集体、全国抗击新冠肺炎疫情先进集体等称号。我院于2018年也成功获批成为全球唯一一支世界卫生组织认证通过的最高级别的非军方国际应急医疗队，在全球应急医疗领域展现中国实力与担当。
          </p>
          <div><el-divider></el-divider></div>
          <div class="basic-info">
            <span>门诊服务：核酸检测发热门诊急诊</span><br>
            <span>门诊时间：周一至周五：上午8:00-12:00；下午12:30-16:30；周六上午8:00-12:00；下午12:30-16:00；周日8:00-12:00</span><br>
            <span>医院电话：028-85422114</span><br>
            <span>医院地址：四川省成都市温江区永宁街道芙蓉大道三段363号</span><span><a class="addr-nav" target="_blank" href="https://map.baidu.com/@11585034.140820738,3564944.7012796346,17z/latlng%3D30.6465%252C104.069%26title%3D%25E5%259B%259B%25E5%25B7%259D%25E5%25A4%25A7%25E5%25AD%25A6%25E5%258D%258E%25E8%25A5%25BF%25E5%258C%25BB%25E9%2599%25A2%26content%3D%25E5%259B%259B%25E5%25B7%259D%25E7%259C%2581%25E6%2588%2590%25E9%2583%25BD%25E5%25B8%2582%25E5%259B%25BD%25E5%25AD%25A6%25E5%25B7%25B737%25E5%258F%25B7%26autoOpen%3Dtrue">导航></a></span>
          </div>
        </div>

        <div class="hos-func">
          <div class="func-contain">
            <img src="../assets/img/hospital/func1.webp" alt="">
            <div class="func-info">
              <span class="func-name">预约挂号</span><br>
              <span class="func-des">认证医生线上挂号</span>
            </div>
          </div>
          <div class="func-contain">
            <img src="../assets/img/hospital/func2.webp" alt="">
            <div class="func-info">
              <span class="func-name">在线问诊</span><br>
              <span class="func-des">本院专家线上咨询</span>
            </div>
          </div>
          <div class="func-contain">
            <img src="../assets/img/hospital/func3.webp" alt="">
            <div class="func-info">
              <span class="func-name">出诊信息</span><br>
              <span class="func-des">科室出诊信息查询</span>
            </div>
          </div>
          <div class="func-contain">
            <img src="../assets/img/hospital/func4.webp" alt="">
            <div class="func-info">
              <span class="func-name">健康体检</span><br>
              <span class="func-des">在线预约体检服务</span>
            </div>
          </div>
        </div>

      </div>

      <div id="hos-profile">
        <div class="addr-phone">
          <span class="addr-phone-title">华西医院地址与电话</span><br>
          <span class="ap-title">医院地址：</span><span class="addr-phone-value">四川省成都市国学巷37号</span><span><a class="addr-nav" target="_blank" href="https://map.baidu.com/@11585034.140820738,3564944.7012796346,17z/latlng%3D30.6465%252C104.069%26title%3D%25E5%259B%259B%25E5%25B7%259D%25E5%25A4%25A7%25E5%25AD%25A6%25E5%258D%258E%25E8%25A5%25BF%25E5%258C%25BB%25E9%2599%25A2%26content%3D%25E5%259B%259B%25E5%25B7%259D%25E7%259C%2581%25E6%2588%2590%25E9%2583%25BD%25E5%25B8%2582%25E5%259B%25BD%25E5%25AD%25A6%25E5%25B7%25B737%25E5%258F%25B7%26autoOpen%3Dtrue">导航></a></span><br>
          <div><el-divider></el-divider></div>
          <span class="ap-title">医院电话：</span><span class="addr-phone-value">028-85422114</span>
        </div>



        <div class="profile">
          <h2 class="pro-title">华西医院简介</h2>
          <p>锦江春色来天地，玉垒浮云变古今。</p>
          <p>在中国历史文化名城成都市锦江万里桥头的华西坝，有一座闻名遐迩的医学城，她就是四川大学华西临床医学院/华西医院。</p>
          <p>四川大学华西医院（简称华西医院）始建于1892年，是中国西部疑难危急重症诊疗的国家级中心、中国著名的高等医学学府，也是中国一流的医学科学研究和技术创新的国家级基地，综合实力处于国内一流、国际先进行列。</p>
          <p>医院学科综合实力强大，临床医学ESI排名处于国际顶尖行列（全球前1‰）。在教育部2017年一级学科评估中，临床医学和护理学排名A-，中西医结合医学均排名B+；现有教育部国家重点学科9个，重点培育学科2个；有国家临床重点专科34个，数量名列全国医院第一。在国家三级公立医院绩效考核连续两年排名全国第二，等级A++。在复旦大学中国最佳专科声誉和最佳医院排行榜上，连续12年名列全国第二，其中12个专科前三、20个前五、30个前十。领军人才方面，有两院院士1人、CJ学者13人、国家教学名师4人、国家杰青14人、高级职称1404人、研究生导师940人。</p>
          <p>医疗方面，医疗院区占地577余亩，业务用房约58万平方米，直属2个医疗院区，编制床位4300张，有48个临床科室、9个医技科室；设专科、专病门诊200余种，开展58个疑难多学科联合门诊、27个罕见病专科门诊、30个住院MDT；收治疑难复杂病种患者比例在80%以上，出院患者病例组合系数（CMI）1.48，排名全国第三；全院微创手术占比超过20%，四级手术占比40.22%，每年四级手术总量位列全国第二；2021年门、急诊量775万人次，出院病人28.3万人次，手术19.6万台次，平均住院日6.80天；在成人活体肝脏移植、肺癌外科和微创治疗、心脏介入治疗、脑神经外科及功能神经外科、中西医结合治疗重症胰腺炎、胃肠微创手术、临床麻醉、功能磁共振、核医学等多个领域处于国内乃至世界领先水平。</p>
          <p>教学方面，华西临床医学院/华西医院院院合一、两块牌子、一套班子，构建了覆盖在校教育、毕业后教育、继续医学教育于一体的以胜任力为导向的卓越医学生培养体系。医院于2000年在国内最早开展住院医师培训，并在全国范围推广，已为全国377家医院培养1600余人，并免费为西藏培养580余名住院医师和护技药人员。</p>
          <p>科研方面，华西医院建立了32万余平米的独立的科研院区，现有包括生物治疗国家重点实验室、“2011”协同创新计划、国家生物治疗转化医学重大科技基础设施、国家老年疾病临床医学研究中心在内的9个国家级和30个省部级创新研究平台，以及动物影像、色谱/质谱、显微图像、基因测序、流式细胞、电镜技术平台等一系列前沿公共创新平台。构建了全球唯一一条从原始靶点发现，到新药筛选、临床前试验、临床试验及上市后评价的创新链、服务链，形成基础研究、转化研究、临床研究为一体的创新平台。在中国医学科学院中国医院科技量值（STEM）综合排名中连续第8年位列全国第一；在复旦大学中国最佳医院排行榜上，科研得分连续12年名列全国第一。自然指数NatureIndex排名全国医院第一、全球第19位。近五年来，获得国家自然科学基金、科技重大专项、国家重点研发计划、科技创新2030重大项目等国家计划项目近千项，年均科研项目经费超过10亿元。牵头获包括国家自然科学奖二等奖、国家科技进步二等奖在内的各级政府科技奖240余项；高水平研究成果相继发表在Cell、Nature、Science等国际顶级期刊；专利申请及授权方面，连续4年在中国医院知库排行榜排名全国第一，2021年专利授权790项，包括新冠疫苗、国家麻醉一类新药、3D打印血管在内的新药和新材料，转让42项，转让金额超1亿元。</p>
          <p>医院积极投身健康精准扶贫和乡村振兴。聚焦民族贫困地区，“一地一策”推进精准健康扶贫与乡村振兴。探索建立医疗和科技互为支撑的“多学科组团”援疆模式，建立克拉玛依“数据驱动”的医院管理新模式；首创由党委领导、农工民主党华西支部主导、党外知识分子专家共同参与的“华西同心行动”，在云南镇雄县人民医院建立7个专家工作站，从无到有建立重症监护病房，开展新业务新技术或适宜技术93项；以“三级联动、辐射帮扶”方式构建“华西-援藏”的“健康维护网络”，帮扶西藏成办医院成功创建三甲综合医院，近三年招收西藏委托培训住院医师531人；形成“华西-甘孜”模式，以肝包虫病为切入点，石渠县肝包虫病患病率下降至6.421%，90%的患者能在当地得到治疗，基本实现肝包虫病治疗不出州；打造“华西-马边”模式，马边县人民医院成功创建二级甲等医院，病人外出就医率由40%下降至5%以下，群众满意度由56%提升至92%；建立艾滋病防治的“华西-昭觉”综合帮扶工作模式，艾滋病三项核心指标治疗覆盖率由39%上升到95%，抗病毒治疗成功率由71%升至94%，母婴传播率由7.12%降至3.24%。</p>
          <p>医院作为国家队，在历次重大公共卫生事件中也始终冲锋在前。在08年汶川地震、10年玉树地震、13年芦山地震、15年尼泊尔地震、17年九寨沟地震、19年宜宾地震、2020年以来抗击新冠，以及历次援藏、援疆、援非、援朝中，四川大学华西医院始终奋战在第一线，展现了国家队“中流砥柱”本色，获中共中央、国务院、中央军委授予的全国抗震救灾英雄集体、全国抗击新冠肺炎疫情先进集体等称号。我院于2018年也成功获批成为全球唯一一支世界卫生组织认证通过的最高级别的非军方国际应急医疗队，在全球应急医疗领域展现中国实力与担当。</p>


        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {

  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key) {
      this.activeIndex=key;
    },
    viewMore(){
      this.activeIndex='2';
    }
  },
  watch: {
    activeIndex(val){
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
        width: auto;
        .title{
          h1{
            color: #fff;
            font-size: 24px;
            font-family: Arial;
            margin-top: 10px;
            margin-bottom:10px;
          }
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
    width:1000px;
    height: 650px;
    display: flex;
    flex-direction: column;
    #hos-index{
      width: 1000px;
      height: 100%;
      background-color: rgb(250,250,250);
      display: flex;
      flex-direction: column;
      .tips{
        height: 35px;
        background-color: rgb(255,249,232);
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
          width: 14px;
          height: 14px;
          margin-right: 6px;
          margin-left: 15px;
        }

        .tip{
          font-family: "PingFang SC";
          font-size: 14px;
          color: #525252;
        }
      }
      .hos-info{
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 4px;
        .title-header{
          height: 30px;
          margin-top: 10px;
          margin-bottom: 10px;
          .title-info{
            font-family: "PingFang SC-Medium";
            font-size: 20px;
          }
          .view-more{
            float: right;
            margin-right: 10px;
            font-family: "PingFangSC-Regular";
            font-size: 14px;
            color: #00c8c8;
          }
          .view-more:hover{
            cursor: pointer;
          }
        }
        .description{
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #1f1f1f;
          line-height: 30px;
          font-weight: 400;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .basic-info{
          span{
            font-size: 14px;
            font-family: PingFangSC-Regular;
            line-height: 30px;
          }

          .addr-nav{
            float: right;
            margin-right: 10px;
            font-family: "PingFangSC-Regular";
            font-size: 14px;
            color: #00c8c8;
            text-decoration: none;
          }

        }

      }
      .hos-info > *{
        margin-left: 20px;
        margin-right: 20px;
      }
      .hos-func{
        width: 1000px;
        height: 100px;
        display: flex;
        flex-direction: row;
        background-color: #fff;
        border-radius: 6px;
        margin-top: 30px;

        .func-contain{
          height: 70px;
          width:200px;
          margin:auto;
          border: 1px solid #f1f1f1;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          align-items: center;
          img{
            height: 40px;
            width: 40px;
            margin-right: 3px;
          }
          .func-info{
            margin-left: 3px;
          }

          .func-name{
            font-size: 16px;
            color: #1f1f1f;
            line-height: 16px;
            font-family: PingFangSC-Regular;
          }

          .func-des{
            font-family: PingFangSC-Regular;
            margin-top: 8px;
            font-size: 12px;
            color: #858585;
            line-height: 12px;
          }
        }

        .func-contain:hover{
          border: 1px solid #00c8c8;
        }

        .func-contain > *{
          margin:auto;
        }

      }
    }
    #hos-profile{
      width: 1000px;
      height: 100%;
      background-color:rgb(250,250,250);

      .addr-phone{
        width: 1000px;
        height: 140px;
        background-color: #fff;
        border-radius: 4px;
        margin-top: 20px;
        .addr-phone-title{
          font-family: PingFangSC-Medium;
          font-size: 20px;
          color: #1f1f1f;
          line-height: 50px;
          font-weight: 500;
        }

        .ap-title{
          color: #1f1f1f;
          font-size: 14px;
          font-family: PingFangSC-Medium;
        }

        .addr-phone-value{
          color: #1f1f1f;
          font-size: 14px;
          font-family: PingFangSC-Regular;
        }
        .addr-nav{
          font-family: "PingFangSC-Regular";
          font-size: 14px;
          color: #00c8c8;
          text-decoration: none;
          margin-left: 10px;
        }

        .el-divider--horizontal {
          display: block;
          height: 1px;
          width: 100%;
          margin: 12px 0;
        }


      }

      .addr-phone > *{
        margin-left: 20px;
        margin-right: 20px;
      }

      .profile{
        width: 1000px;
        height: auto;
        background-color: #fff;
        border-radius: 4px;
        margin-top: 20px;
        .pro-title{
          font-family: PingFangSC-Medium;
          font-size: 20px;
          line-height: 20px;
          font-weight: 500;
          color: #1f1f1f;
          padding-top: 15px;
        }

        p{
          line-height: 32px;
          margin-bottom: 16px;
          color: #1f1f1f;
          font-size: 18px;
          font-family: PingFangSC-Regular;
          font-weight: 500;
          text-indent: 2em;
        }
      }

      .profile > *{
        margin-left: 20px;
        margin-right: 20px;
      }
    }
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