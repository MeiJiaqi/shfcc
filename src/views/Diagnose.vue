<template>
<div class="contain">
  <tinymce ref="tinymce" :tinymceHtml="content"></tinymce>
</div>
</template>

<script>
import tinymce from "@/components/Tinymce";
export default {
  name: "Diagnose.vue",
  components: {tinymce},
  data(){
    return {
      content: ''
    }
  }
}
</script>

<style lang="less" scoped>
.contain{
  width: 100%;
}
</style>