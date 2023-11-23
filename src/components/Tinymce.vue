<template>
  <div class='app-container'>
    <h1>tinymce</h1>
    <div id="tinydemo">
      <Editor
          class="tinymce"
          v-model="value"
          :init="init"
      >
      </Editor>
    </div>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver/theme'
import 'tinymce/plugins/code'
import "tinymce-plugin/plugins/tpImportword";
import 'tinymce/plugins/textcolor'//颜色
import 'tinymce/plugins/advlist' //高级列表
import 'tinymce/plugins/autolink' //自动链接
import 'tinymce/plugins/link' //超链接
import 'tinymce/plugins/image' //插入编辑图片
import 'tinymce/plugins/lists' //列表插件
import 'tinymce/plugins/charmap' //特殊字符
import 'tinymce/plugins/media' //插入编辑媒体
import 'tinymce/plugins/wordcount' // 字数统计
import 'tinymce/plugins/table'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/imagetools'


export default {
  name: "tinymce",
  props: {
    tinymceHtml: '',
  },
  data()
  {
    return{
      value: this.tinymceHtml,  // 父組件通过ref拿到该组件的值
      init: {

        language_url: '/tinymce/langs/zh_CN.js',   // 语言包
        language: 'zh_CN',
        height: 600,    // 编辑器高度
        skin_url: '/tinymce/skins/ui/oxide',    // 皮肤
        content_css: '/tinymce/skins/content/default/content.css',
        plugins:  'advlist autolink link image lists charmap table fullscreen imagetools preview',   // 插件
        toolbar: 'undo redo |  formatselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent lists image | fullscreen | preview',
        branding: false,
        menubar: false,
        content_style: "p {margin: 5px 0;}",
        fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
        font_formats:
            "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",
        contextmenu: "undo redo | cut copy paste pastetext | selectall table", // 富文本右键菜单

        importword_handler: function(editor,files,next){
          var file_name = files[0].name
          if(file_name.substr(file_name.lastIndexOf(".")+1)=='docx'){
            editor.notificationManager.open({
              text: '正在转换中...',
              type: 'info',
              closeButton: false,
            });
            next(files);
          }else{
            editor.notificationManager.open({
              text: '目前仅支持docx文件格式，若为doc111，请将扩展名改为docx',
              type: 'warning',
            });
          }
          // next(files);
        },
        importword_filter: function(result,insert,message){
          // 自定义操作部分
          insert(result) //回插函数
        }
        /* images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        } */
      },



    }
  },
  components: {
    Editor
  },

    watch: {
      tinymceHtml (newV, oldV) {
        this.value = newV
      }
     },
  mounted() {
    tinymce.init({});
  },
}
</script>

<style lang="less" scoped>

</style>