import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'

import Game from './pages/game.vue'

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: App },
  { path: "/game", component: Game }
];

const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
