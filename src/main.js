// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 切记顺序能搞乱，引入的ui一定要在app之前
import './assets/stylus/index.styl';
import Vue from 'vue';
import App from './App';
import router from './router';
import resource from 'vue-resource';

Vue.use(resource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
