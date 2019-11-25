<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="thumbnail-container" v-for="(photo, index) in photos">
      <img class="thumbnail" :src="photo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPhotos",
  computed: {
    photos() {
      return this.$store.state.photos;
    }
  },
  data: () => ({
    title: "All Photos"
  })
};
</script>

<style>
.thumbnail-container {
  height: 250px;
  width: 250px;
  margin: 2px;
  display: flex;
  float: left;
  justify-content: center;
  box-shadow: 2px 5px 4px #888;
  padding: 2px;
}
.thumbnail {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  object-fit: contain;
}
</style>
