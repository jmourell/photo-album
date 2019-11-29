<template>
  <div id="app">
    <Navbar />
    <GridPhotos v-if="currentView === 'AllPhotos'" />
    <SinglePhoto v-else-if="currentView === 'SinglePhoto'" />
    <Error v-else-if="currentView === 'Error'" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";
import GridPhotos from "./components/GridPhotos";
import Error from "./components/Error";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    AllPhotos,
    GridPhotos,
    SinglePhoto,
    Error
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
html,
body {
  height: 100%;
  width: 100%;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
