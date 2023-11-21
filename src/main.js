import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import BaiduMap from 'vue-baidu-map'
import scrollReveal from 'scrollreveal'
// element-ui所提供的css样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import './assets/css/common.css'
import http from './utils/request'
import LemonIMUI from "lemon-imui";
import "lemon-imui/dist/index.css";
Vue.prototype.$http= http
Vue.use(ElementUI);
Vue.use(LemonIMUI);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Dewho3WSGHeud6zC7o8E9kecoilT3wnR'
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
