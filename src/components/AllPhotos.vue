<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="page-content" v-if="photos">
      <div
        class="thumbnail-container"
        v-for="(photo, index) in photos"
        :key="index"
      >
        <img class="thumbnail" :src="photo" />
      </div>
    </div>
    <div v-else class="spinner-container">
      <img class="spinner" src="../assets/logo.png" />
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
.page-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.thumbnail-container {
  height: 250px;
  width: 250px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #777;
  box-shadow: 2px 5px 4px #888;
  padding: 5px;
}
.thumbnail {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  object-fit: contain;
}

.spinner-container {
  display: flex;
  align-items: center;
  margin-top: 100px;
  justify-content: center;
}
</style>
