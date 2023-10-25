//路由代码
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//配置路由
const routes = [

    {
        path:'/login',
        component:()=>import('../views/Login.vue'),
    },
    {
        path:'/',
        component:()=>import('../views/Home.vue'),
    }
]

const router = new VueRouter({
    routes
})

export default router
