//路由代码
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//配置路由
const routes = [
    {
        path:'/publicPage',
        component:()=>import('../views/PublicPage.vue'),
    },

    {
        path:'/login',
        component:()=>import('../views/Login.vue'),
    },
    {
        path:'/',
        component:()=>import('../views/Main.vue'),
        redirect:'/user',
        children:[
            {path:'/user', component:()=>import('../views/User.vue'),},
            {path:'/data', component:()=>import('../views/UserData.vue'),},
            {path:'/suggest', component:()=>import('../views/Suggest.vue'),},
            {path:'/hospital', component:()=>import('../views/HospitalSuggest.vue'),},
            {path:'/doctor', component:()=>import('../views/DoctorSuggest.vue'),},
            {path:'/home', component:()=>import('../views/PublicPage.vue'),},
            {path: '/statistics',component:()=>import('../views/Statistics.vue'),}
    ]
    },
    {
        path:'/main',
        component:()=>import('../views/Main.vue'),
    }
]

const router = new VueRouter({
    routes
})

export default router
