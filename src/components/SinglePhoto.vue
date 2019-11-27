<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="selectedPhoto" />
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  computed: {
    selectedPhoto() {
      return this.$store.state.selectedPhoto;
    }
  },
  data: () => ({
    title: "Single Photo"
  })
};
</script>

<style></style>
