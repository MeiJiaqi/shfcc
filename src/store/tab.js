export default {
    state:{
        isCollapse: false, //控制菜单展开或收起
        tabList:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            },
        ], //面包屑数据
        ifHaveCT: false, //是否有CT
        ifHavePTV: false, //是否有PTV
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },

    }
}