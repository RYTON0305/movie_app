import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { state } from './utils/store'
Vue.prototype._state = state
import './utils/ui'
import './utils/filter'
// import axios from 'axios'
// Vue.prototype.axios = axios
// Vue.filter('SetImgSize', (url, width = 600, height = 800) => {
//   if (!url) {
//     return url
//   }
//   return url.replace(/w\.h/, `${width}.${height}`)
// })
Vue.config.productionTip = false

let vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default vue
