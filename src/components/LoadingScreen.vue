<template>
  <div class="loading-screen" v-if="isVisible">
    <video
      ref="videoPlayer"
      class="loading-video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
    >
      <source src="@/assets/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    isInitialLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    hide() {
      this.isVisible = false;
    },
  },
  mounted() {
    const video = this.$refs.videoPlayer;
    if (video) {
      // Forzamos la carga y reproducción
      video.load();
      video.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
      });
    }

    setTimeout(() => {
      this.hide();
      if (this.isInitialLoad) {
        this.$router.push("/slider");
      }
    }, 4500);
  },
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 1000;
}

.loading-video {
  max-width: 50vw;
  max-height: 50vh;
  object-fit: cover;
  margin: auto;
}
</style>
