import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    comments: [],
    links: [],
  },
  actions: {
    async GET_COMMENTS({ commit }) {
      const response = await fetch(
        "https://jordan.ashton.fashion/api/goods/30/comments"
      );
      const result = await response.json();
      commit("setComments", result.data);
      commit("setLinks", result.links);
      console.log(result);
      console.log(result.links);
    },
  },
  mutations: {
    setComments(state, comments) {
      state.comments = [...comments];
    },
    setLinks(state, links) {
      state.links = [...links];
    },
  },
  getters: {
    getComments(state) {
      return state.comments;
    },
    getLinks(state) {
      return state.links;
    },
  },
});

export default store;
