<template>
  <div class="container">
    <div class="column-container">
      <div v-for="column in columns" class="column">
        <div v-for="photo in column" class="photo-container">
          <img class="photo" :src="photo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridPhotos",
  data: () => ({
    windowWidth: 1000
  }),
  computed: {
    columns() {
      const columns = [];
      const photos = this.$store.state.photos;
      if (photos === null) return [];
      for (let i = 0; i < 5; i++) {
        columns[i] = [];
      }
      photos.forEach((photo, index) => {
        columns[index % 5].push(photo);
      });
      return columns;
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.column-container {
  width: 100%;
  padding: 20px;
  display: flex;
  background-color: red;
}

.column:nth-child(2n) {
  background-color: orange;
}

.column {
  flex: 1;
  padding: 0 5px;
  background-color: rgb(0, 255, 64);
}

.photo-container {
  width: 100%;
  padding: 0 2px;
}

.photo {
  width: 100%;
  height: auto;
}
</style>
