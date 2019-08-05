<template>
  <div id="app">
    <navbar @upload-file="handleFileUpload" @set-all-photos="currentView='AllPhotos'" />
    <h1>{{ title }}</h1>
    <all-photos
      @set-single-photo="setSinglePhoto"
      :photos="photos"
      v-if="currentView === 'AllPhotos'"
    />
    <single-photo v-else-if="currentView === 'SinglePhoto'" :photo="selectedPhoto" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    "all-photos": AllPhotos,
    "single-photo": SinglePhoto
  },
  data: () => ({
    title: "Photo Upload App",
    currentView: "AllPhotos",
    selectedPhoto: null,
    photos: []
  }),
  created: function() {
    listObjects().then(data => {
      data = data.slice(0, 20);
      Promise.all(data.map(item => getSingleObject(item.Key))).then(photos => {
        this.photos = photos.map(photo => `data:image/jpeg;base64,${photo}`);
      });
    });
  },
  methods: {
    setSinglePhoto: function(index) {
      this.selectedPhoto = this.photos[index];
      this.currentView = "SinglePhoto";
    },
    handleFileUpload: function(file) {
      console.log("IT'S WORKING BABY JULES!!!");
      console.log("FILE INFO: ------");
      console.log(file);
      saveObject(file);
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
