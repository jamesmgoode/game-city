import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue';
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = true;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
