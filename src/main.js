import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import store from './store/index'
import router from './router'
import componnets from './components'

Vue.config.productionTip = false
Vue.use(componnets)
Vue.prototype.$SUNJIHONG = {}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
