
import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
export const eventBus = new Vue();
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
