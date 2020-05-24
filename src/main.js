import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css' //Default theme of the UI
import 'vue-material/dist/theme/black-green-light.css' // Theme of the UI

import store from './store'

Vue.config.productionTip = false

// Use the Vue Material UI Library 
Vue.use(VueMaterial)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
