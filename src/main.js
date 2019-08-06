import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    title: "Photo Upload App",
    currentView: "AllPhotos",
    selectedPhoto: null,
    photos: []
  },
  mutations: {
    setSelectedPhotoByIndex: function(state, index) {
      state.selectedPhoto = state.photos[index];
    }, 
    setCurrentView: function(state, viewName) {
      state.currentView = viewName;
    }, 
    setPhotos: function(state,photoArr) {
      state.photos = photoArr;
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
