import Vue from 'vue'
import App from './App.vue'
import api from './api'
import router from '@/router'

import { Menu,MenuItem,Submenu,Avatar,Tooltip,Message,Image  } from 'element-ui';

import '@/assets/css/reset.css'

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Avatar)
Vue.use(Tooltip)
Vue.use(Image)

Vue.prototype.$message=Message;
Vue.config.productionTip = false

Vue.prototype.$http = api;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
