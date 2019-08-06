<template>
  <div id="app">
    <navbar @upload-file="handleFileUpload" />
    <h1>{{ title }}</h1>
    <all-photos v-if="currentView === 'AllPhotos'" />
    <single-photo v-else-if="currentView === 'SinglePhoto'" />
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
  computed: {
    title() {
      return this.$store.state.title;
    },
    currentView () {
      return this.$store.state.currentView;
    }
  },
  created: function() {
    listObjects().then(data => {
      data = data.slice(0, 20);
      Promise.all(data.map(item => getSingleObject(item.Key))).then(photos => {
        this.$store.commit('setPhotos', photos.map(photo => `data:image/jpeg;base64,${photo}`));
      });
    });
  },
  methods: {
    handleFileUpload: function(file) {
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
