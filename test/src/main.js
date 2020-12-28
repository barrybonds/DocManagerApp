import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';
import '../node_modules/material-design-icons-iconfont'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
