import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { state } from './utils/store'
Vue.prototype._state = state
import './utils/ui'
// import axios from 'axios'
// Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
