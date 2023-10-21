//路由代码
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//配置路由
const routes = [
    /*
    {
        path:'/',
        component:Main,
        redirect:'/home',
        children:[
            {path:'home',component: Home},
            {path:'user',component: User},
            {path:'mall',component: Mall},
            {path:'page1',component: PageOne},
            {path:'page2',component: PageTwo},
        ]
    },
    {
        path:'/login',
        component:Login,
    }
     */
]

const router = new VueRouter({
    routes
})

export default router
