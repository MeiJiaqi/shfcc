import Vue from "vue";
import Vuex from 'vuex'
import tab from './tab'
import hospital from "./hospital";
import doctorInfo from './doctorInfo'
import hospitalInfo from "./hospitalInfo";
Vue.use(Vuex)

//创建vuex实例
export default new Vuex.Store({
    modules:{
        tab,
        doctorInfo,
        hospital,
        hospitalInfo,
    }
})