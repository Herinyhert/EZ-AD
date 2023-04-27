import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import icon from '../node_modules/bootstrap-icons/font/fonts/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  icon,
  render: h => h(App)
}).$mount('#app')
