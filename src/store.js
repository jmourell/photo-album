import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "Photo Upload App",
    currentView: "AllPhotos",
    photos: [],
    selectedPhoto: ""
  },
  actions: {
    loadImages: ({ commit }) => {
      console.log("loadImages action called");
      //TODO: server call to fetch images
      setTimeout(() => {
        const photos = [
          "https://i.imgur.com/GURx9rK.png",
          "https://i.imgur.com/diWk7uJ.png"
        ];

        //udpate photos to fetched photos
        commit("setImages", { photos });
      }, 1000);
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
