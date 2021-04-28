import Vue from 'vue'
import App from './App.vue'
import vmodal from 'vue-js-modal'

Vue.use(vmodal , { dialog: true })
// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App)
})
