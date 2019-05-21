//导入vue
import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'

// 将VueRouter注册到Vue
Vue.use(VueRouter);


//导入自定义组件
import HomeContainer from './component/HomeContainer/HomeContainer.vue'
import MemberContainer from './component/MemberContainer/Member.vue'
import SearchContainer from './component/SearchContainer/SearchContainer.vue'
import ShopcarContainer from './component/ShopcarContainer/ShopcarContainer.vue'


//创建路由
var router = new VueRouter({
    routes: [
        /*
        * path:页面路由路径
        * component:使用的组件
        * */
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopcarContainer},
        {path: '/search', component: SearchContainer},
    ],
    //配合点击切换组件添加的自定义类
    linkActiveClass:'mui-active' //覆盖默认高亮类
})

//导出路由
export  default  router