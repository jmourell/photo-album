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
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    AllPhotos,
    SinglePhoto
  },
  computed: mapState({
    currentView: state => state.currentView
  }),
  mounted() {
    this.$store.dispatch("loadImages");
  },
  data: () => ({})
};
</script>

<style>
#app {
  text-align: center;
}
</style>
