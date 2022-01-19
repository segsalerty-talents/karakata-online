import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store'
import './assets/css/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

Vue.config.productionTip = false
Vue.use(Chakra)

new Vue({
  router,
  store,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
  // render: h => h(App)
}).$mount('#app')
