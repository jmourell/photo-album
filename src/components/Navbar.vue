<template>
  <div @click="goHome()">
    <p>Navbar here</p>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goHome() {
      const allPhotosView = "AllPhotos";
      this.$store.commit("changeView", allPhotosView);
    }
  }
};
</script>

<style></style>
