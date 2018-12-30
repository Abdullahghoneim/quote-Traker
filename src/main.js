import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// // Vue components 
// import Home from './components/Home.vue'

// Vue.component('app-vue', Home)

import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'

Vue.use(Toaster, { timeout: 5000 })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
