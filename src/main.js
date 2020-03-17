import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import vuetify from './plugins/vuetify';
import store from './store';
import './assets/scss';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
