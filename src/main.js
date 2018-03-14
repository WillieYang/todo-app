// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import echarts from 'echarts';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';
import router from './router';
import store from './store/store';
import i18n from './lang/lang';

Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
});
