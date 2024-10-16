<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <div class="absolute inset-0 w-full h-full">
      <div class="relative h-full w-full">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="absolute inset-0 w-full h-full transition-opacity duration-1000"
          :class="{
            'opacity-1': index === currentIndex,
            'opacity-0': index !== currentIndex,
          }"
        >
          <img
            :src="project.imgSrc"
            class="w-full h-full object-cover pointer-events-none"
            :alt="'Image of ' + project.title"
          />
        </div>
      </div>
    </div>

    <div class="absolute top-5 right-5 z-10 text-right space-y-4 text-white">
      <router-link
        to="/gallery"
        class="block text-outline text-2xl font-bold hover:text-gray-300"
      >
        {{ $t("slider.projects") }}
      </router-link>
      <router-link
        to="/nosotros"
        class="block text-2xl text-outline font-bold hover:text-gray-300"
      >
        {{ $t("slider.about") }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { projects } from "@/utils/projects";

export default {
  data() {
    return {
      projects,
      currentIndex: 0,
      slideInterval: null,
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((project) => project.imgSrc);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      if (!this.slideInterval) {
        this.slideInterval = setInterval(() => {
          this.currentIndex =
            (this.currentIndex + 1) % this.filteredProjects.length;
        }, 5000);
      }
    },
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
};
</script>

<style scoped>
.text-outline {
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
}
</style>
