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
        children:[
            {path:'/user', component:()=>import('../views/User.vue'),},
            {path:'/data', component:()=>import('../views/UserData'),},
            {path:'/suggest', component:()=>import('../views/Suggest.vue'),},
            {path:'/home', component:()=>import('../views/PublicPage.vue'),},
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
