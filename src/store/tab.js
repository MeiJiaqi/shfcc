export default {
    state:{
        isCollapse: false, //控制菜单展开或收起

    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },

    }
}