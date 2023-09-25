import Vue from 'vue'
import App from './App.vue'

require('@/plugins/agGrid.js')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
