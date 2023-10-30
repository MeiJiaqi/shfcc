<template>
  <div class="chart-contain">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "CommonChart",
  props: {
    title: {
      type: String,
      default: "标题"
    }
  },
  data(){
    return {

    }
  },
}
</script>

<style lang="less" scoped>
.chart-contain{
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0 0 25px #cac6c6;
  padding: 10px;
  box-sizing: border-box;
}
</style>