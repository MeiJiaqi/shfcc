import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
// element-ui所提供的css样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import './assets/css/common.css'
import http from './utils/request'
Vue.prototype.$http= http
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
