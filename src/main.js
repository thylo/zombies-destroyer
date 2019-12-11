import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import Game from "./pages/Game";
import Settings from "./pages/Settings";

Vue.use(VueRouter)
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Game },
  { path: "/settings", component: Settings }
];

const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
