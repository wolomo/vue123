import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import login from './login/login.vue'
import register from './register/register.vue'
import email from './login/email/email.vue'
import name from './login/name/name.vue'

var router = new VueRouter({
    routes: [
        {path: '/register', component: register},
    ]
})

export  default  router