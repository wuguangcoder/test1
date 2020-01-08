// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.devtools=true
Vue.config.productionTip = false
import store from './store'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'
/* eslint-disable no-new */
Vue.component("my-component",{template:"<h1>我的组件</h1>"})
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
