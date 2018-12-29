// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import Vuex from 'vuex'
import { WechatPlugin, AjaxPlugin, AlertPlugin  } from 'vux'
import axios from 'axios'
import global_ from './Global'

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.prototype.axios = axios
Vue.prototype.GLOBAL = global_
Vue.prototype.GLOBAL.openid = Vue.prototype.GLOBAL.getOpenId()

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
