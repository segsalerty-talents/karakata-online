import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import customTheme from './custom-theme.js'
import router from './router/index'
import store from './store'
import './assets/css/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import VueCountryCode from 'vue-country-code-select'

const customBreakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px'
}

Vue.config.productionTip = false
Vue.use(Chakra, {
  extendTheme: {
    breakpoints: customBreakpoints
  }
}).use(VueCountryCode)

new Vue({
  router,
  store,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
  // render: h => h(App)
}).$mount('#app')
