import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    comments: [],
    links: [],
    url: "https://jordan.ashton.fashion/api/goods/30/comments",
    currentPage: 1,
    lastPage: null,
  },
  actions: {
    async GET_COMMENTS({ commit, getters }) {
      const response = await fetch(getters.getUrl);
      const result = await response.json();
      commit("setComments", result.data);
      commit("setLinks", result.links);
      commit("setCurentPage", result.current_page);
      commit("setLastPage", result.last_page);
      console.log(result);
    },
  },
  mutations: {
    setLastPage(state, page) {
      state.lastPage = page;
    },
    setCurentPage(state, page) {
      state.currentPage = page;
    },
    setUrlWithCurentPage(state) {
      state.url = `https://jordan.ashton.fashion/api/goods/30/comments?page=${state.currentPage}`;
    },
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
    getCurrentPage(state) {
      return state.currentPage;
    },
    getComments(state) {
      return state.comments;
    },
    getUrl(state) {
      return state.url;
    },
    getLinks(state) {
      return state.links;
    },
    getLastPage(state) {
      return state.lastPage;
    },
  },
});

export default store;
