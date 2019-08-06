<template>
  <div>
    <div class="hero-container">
      <img
        v-if="heroImage"
        class="hero-img"
        @click="handleClick(0)"
        alt="A picture uploaded"
        :src="heroImage"
      />
    </div>
    <carousel-3d v-if="carouselPhotos.length" :controls-visible="true" :clickable="false">
      <slide v-for="(photo, i) in carouselPhotos" :index="i">
        <img
          class="carousel-img"
          @click="handleClick(i + 1)"
          alt="A picture uploaded"
          :src="photo"
          :key="i"
        />
      </slide>
    </carousel-3d>
    <img
      v-if="photos.length > 1"
      v-for="(photo, i) in photos" :index="i"
      class="thumbnail"
      @click="handleClick(i + 12)"
      alt="A picture uploaded"
      :src="photo"
      :key="i"
    />
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  name: "AllPhotos",
  components: {
    Carousel3d,
    Slide
  },
  computed: {
    heroImage() {
      return this.$store.state.photos[0];
    },
    carouselPhotos() {
      return this.$store.state.photos.slice(1,11);
    },
    photos () {
      if(this.$store.state.photos.length > 11) return this.$store.state.photos.slice(12);
      else return [];
    }
  },
  methods: {
    handleClick: function(index) {
      this.$store.commit("setSelectedPhotoByIndex", index);
      this.$store.commit("setCurrentView", "SinglePhoto");
    }
  }
};
</script>

<style scoped>
  img {
    cursor: pointer;
  }
  .hero-container {
    display: inline-block;
    margin-right: auto;
    width:800px;
    height: 500px;
    
  }
  .hero-img {
    width: 100%;
    height: 100%;
  }
  .carousel-img {
    width: 100%;
    height: auto;
  }

  .thumbnail {
    margin-left: 5px;
    width: 150px;
    height: 150px;
    border: solid 1px black;
  }
</style>
