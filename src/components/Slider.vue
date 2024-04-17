<template>
  <div class="slider-container">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" class="slider-image"/>
      </div>
    </transition-group>

    <div class="dots">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="dot"
        @click="goTo(index)"
        :class="{ active: index === currentIndex }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
      "https://www.fasttrackemarat.com/uploads/media/michelin-tires-reviews-16478f2b81a095.jpg",
      "https://i.pinimg.com/originals/15/a0/fb/15a0fb12bbe32f5789d2a4d033201603.jpg",
      "https://s19532.pcdn.co/wp-content/uploads/2019/03/Hankook-Tire-Dynapro-AT-2-.png",
      "https://marketplace.b2btyres.com/wp-content/uploads/2019/09/mmexport1557251650336.jpg"
    ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },

    prev: function() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },

    goTo: function(index) {
      this.currentIndex = index;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>
.slider-container {
  position: relative;

}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 600px;
  width: 100%;
}

.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.slider-image {
 
  
  max-width: 100%; /* Set your desired maximum width */
  margin: auto; /* Center the image horizontally and vertically */
  display: block; /* Make sure it behaves as a block element */
  object-fit: cover; /* This property helps maintain the aspect ratio */
  
}


.dot {
  height: 20px;
  width: 20px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: rgb(34, 30, 30);
}
</style>
