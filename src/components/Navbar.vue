<template>
  <div class="navbar">
    <div @click="displayAll()" class="home">Home</div>
    <upload @upload-file="handleFileUpload" />
  </div>
</template>

<script>
import Upload from "./Upload";

export default {
  name: "Navbar",
  components: {
    upload: Upload
  },
  methods: {
    handleFileUpload: function(file) {
      this.$emit("upload-file", file);
    },
    displayAll: function() {
      this.$store.commit("setCurrentView", "AllPhotos");
    }
  }
};
</script>

<style scoped>
.navbar {
  height: 100px;
}

.home {
  display: inline;
  float: left;
  width: 100px;
  cursor: pointer;
}

@media only screen and (max-width: 450px) {
  .navbar {
    height: 40px;
  }

  .home {
    font-size: 30px;
  }
}
</style>
