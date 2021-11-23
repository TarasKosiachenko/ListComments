import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    comments: [],
  },
  actions: {
    async GET_COMMENTS({ commit }) {
      const response = await fetch(
        "https://jordan.ashton.fashion/api/goods/30/comments"
      );
      const result = await response.json();
      commit("setComments", result.data);
      console.log(result.data);
    },
  },
  mutations: {
    setComments(state, comments) {
      state.comments = [...comments];
    },
  },
  getters: {
    getComments(state) {
      return state.comments;
    },
  },
});

export default store;
