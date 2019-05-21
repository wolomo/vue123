import  Vue  from 'vue'
import App from './app.vue';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../src/css/base.css'
import '../src/lib/css/mui.min.css'

Vue.use(MintUI)
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


var vm = new Vue({
    el:"#app",
    render:c=>c(App)
})