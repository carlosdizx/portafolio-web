import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    color: "primary",
  },
  mutations: {
    actualizarColor(state, payload) {
      state.color = payload;
    },
  },
  actions: {
    cambarColor: async ({ commit }, color: string) => {
      commit("actualizarColor", color);
    },
  },
  modules: {},
});
