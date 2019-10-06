import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import {validationMixin} from 'vuelidate'


Vue.config.productionTip = false
Vue.use(validationMixin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
