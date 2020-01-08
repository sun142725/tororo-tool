import Vue from 'vue'
import App from './App.vue'
import './sass/common.scss'
import './utils/rem'
import 'babel-polyfill'
import store from './store/index'
import router from './router'
import componnets from './components'
import { Dialog, Toast } from 'vant'

Vue.config.productionTip = false
Vue.use(Dialog).use(Toast)
Vue.use(componnets)
Vue.prototype.$SUNJIHONG = {}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
