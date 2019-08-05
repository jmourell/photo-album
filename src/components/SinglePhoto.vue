<template>
  <div class>
    <img class="large-photo" alt="Large image uploaded" :src="photo" />
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  props: ["photo"]
};
</script>

<style scoped>
.large-photo {
  height: auto;
  width: auto;
  max-width: 100%;
}
</style>
