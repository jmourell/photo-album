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
      getAllObjects().then(base64Images => {
        const photos = base64Images.map(img => `data:image/jpeg;base64,${img}`);
        commit("setImages", { photos });
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
