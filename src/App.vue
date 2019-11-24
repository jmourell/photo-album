<template>
  <div id="app">
    <Navbar />
    <AllPhotos v-if="currentView === 'AllPhotos'" />
    <SinglePhoto v-else-if="currentView === 'SinglePhoto'" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";

export default {
  name: "App",
  components: {
    Navbar,
    AllPhotos,
    SinglePhoto
  },
  data: () => ({
    title: "Photo Upload App",
    currentView: "AllPhotos",
    photos: [],
    selectedPhoto: ""
  })
};
</script>

<style>
#app {
  text-align: center;
}
</style>
