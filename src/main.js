// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScrollactive from 'vue-scrollactive'
import * as svgicon from 'vue-svgicon'

Vue.use(svgicon, {
  tagName: 'svgicon'
})
Vue.use(VueScrollactive)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
