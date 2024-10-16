<template>
  <div class="loading-screen" v-if="isVisible">
    <video autoplay muted loop class="loading-video">
      <source
        src="@/assets/WhatsApp Video 2024-09-22 at 5.24.40 PM.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
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
    setTimeout(() => {
      this.$router.push("/slider");
    }, 5000);
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
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-video {
  width: auto;
  height: auto;
  max-width: 50vw;
  max-height: 50vh;
  object-fit: contain;
  margin: auto;
}
</style>
