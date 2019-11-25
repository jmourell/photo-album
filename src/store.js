import Vue from "vue";
import Vuex from "vuex";
import { getAllObjects } from "../utils";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "Photo Upload App",
    currentView: "AllPhotos",
    photos: null,
    selectedPhoto: ""
  },
  actions: {
    loadImages: ({ commit }) => {
      getAllObjects()
        .then(photos => {
          commit("setImages", { photos });
        })
        .catch(() => {
          commit("changeView", { view: "Error" });
        });
    }
  },
  mutations: {
    changeView: (state, { view }) => {
      state.currentView = view;
    },
    setImages: (state, { photos }) => {
      state.photos = photos;
    }
  }
});

export default store;
