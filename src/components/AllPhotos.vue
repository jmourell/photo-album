<template>
  <div>
    <img
      class="thumbnail"
      @click="handleClick(index)"
      v-for="(photo, index) in photos"
      alt="A picture uploaded"
      :src="photo"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  name: "AllPhotos",
  props: ["photos"],
  methods: {
    handleClick: function(index) {
      this.$emit("set-single-photo", index);
    }
  }
};
</script>

<style scoped>
.thumbnail {
  width: 100px;
  height: 100px;
}
</style>
