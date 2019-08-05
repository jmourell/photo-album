<template>
  <div class="upload-container">
    <button @click="handleClick" class="upload-button">upload</button>
    <input @change="handleFileSelect" ref="uploader" class="file-upload-input" type="file" />
  </div>
</template>

<script>
export default {
  name: "Upload",
  methods: {
    handleClick: function() {
      this.$refs.uploader.click();
    },
    handleFileSelect: function(e) {
      this.$emit("upload-file", e.target.files[0]);
    }
  }
};
</script>

<style>
.file-upload-input {
  position: absolute;
  left: -99999px;
}

.upload-container {
  display: inline;
  float: right;
  width: 100px;
}

.upload-button {
  margin-right: auto;
}
</style>
