<template>
  <div class>
    <img class="large-photo" alt="Large image uploaded" :src="photo" />
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  computed:{ 
    photo () {
      return this.$store.state.selectedPhoto;
    }
  }
};
</script>

<style scoped>
.large-photo {
  height: auto;
  width: auto;
  max-width: 100%;
}
</style>
