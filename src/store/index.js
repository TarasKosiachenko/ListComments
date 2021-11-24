import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    comments: [],
    links: [],
    url: "https://jordan.ashton.fashion/api/goods/30/comments",
  },
  actions: {
    async GET_COMMENTS({ commit, getters }) {
      const response = await fetch(getters.getUrl);
      const result = await response.json();
      commit("setComments", result.data);
      commit("setLinks", result.links);
      // console.log(result);
      // console.log(result.links);
    },
  },
  mutations: {
    setUrl(state, url) {
      state.url = url;
    },
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
    getUrl(state) {
      return state.url;
    },
    getLinks(state) {
      return state.links;
    },
  },
});

export default store;
