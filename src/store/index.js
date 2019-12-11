import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 0,
    upgrades:{
      bigBullets: 0,
      fireRate: 0,
      penetration: 0
    }
  },
  mutations: {
    createMoney(state){
      state.money ++;
    },

    buyUpgrade(state, payload){
      state.money -= payload.value;
      state.upgrades[payload.name] ++;
    }
  },
  actions: {

  },
  modules: {
  }
})
