// 导入vue
import  Vue  from 'vue'
// 导入app组件
import App from './app.vue';



// 导入使用mint-ui包
import MintUI from 'mint-ui'
Vue.use(MintUI)

//导入mint-ui&mui样式
import 'mint-ui/lib/style.css'
import '../src/lib/css/mui.min.css'
import '../src/lib/css/icons-extra.css'
import '../src/css/base.css'

//使用特定的组件
import { Header,Swipe, SwipeItem  } from 'mint-ui';
//使用头部
Vue.component(Header.name, Header);
//使用轮播
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入自定义的router
import router from './router.js'


// 导入使用网络请求包  vue-resource
import Resource from 'vue-resource'
Vue.use(Resource)


//注册app项目
var vm = new Vue({
    el:"#app",
    //将app.vue插入到index.html
    render:c=>c(App),
    //挂载路由
    router
})