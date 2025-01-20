<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <div class="absolute inset-0 w-full h-full">
      <div class="relative h-full w-full">
        <transition-group name="fade">
          <div
            v-for="(project, index) in filteredProjects"
            :key="index"
            class="absolute inset-0 w-full h-full slide-container"
            :class="{
              active: index === currentIndex,
              inactive: index !== currentIndex,
              'mobile-slide': isMobile,
            }"
          >
            <div
              class="absolute inset-0 w-full h-full background-image"
              :style="{
                backgroundImage: `url(${project.imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: getBackgroundPosition(index),
              }"
            ></div>
          </div>
        </transition-group>
      </div>
    </div>

    <div
      class="absolute inset-0 flex flex-col mt-20 items-center z-10 space-y-4 text-white lg:top-20 md:right-24 md:items-end md:justify-start lg:mt-0"
    >
      <router-link
        to="/gallery"
        class="block text-outline text-2xl font-extrabold hover:text-gray-300"
      >
        {{ $t("slider.projects") }}
      </router-link>
      <router-link
        to="/nosotros"
        class="block text-2xl text-outline font-extrabold hover:text-gray-300"
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
      isMobile: false,
      isTransitioning: false,
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((project) => project.imgSrc);
    },
  },
  methods: {
    startAutoSlide() {
      const intervalTime = this.isMobile ? 15000 : 6000;

      if (!this.slideInterval) {
        this.slideInterval = setInterval(this.nextSlide, intervalTime);
      }
    },
    async nextSlide() {
      if (this.isTransitioning) return;

      this.isTransitioning = true;
      await new Promise((resolve) => setTimeout(resolve, 100));

      this.currentIndex =
        (this.currentIndex + 1) % this.filteredProjects.length;

      setTimeout(() => {
        this.isTransitioning = false;
      }, 1500);
    },
    checkMobile() {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth < 1023;

      if (wasMobile !== this.isMobile) {
        clearInterval(this.slideInterval);
        this.slideInterval = null;
        this.startAutoSlide();
      }
    },
    getBackgroundPosition(index) {
      if (!this.isMobile) {
        return "bottom center";
      }
      return index === (this.currentIndex + 1) % this.filteredProjects.length
        ? "left"
        : "right";
    },
  },
  mounted() {
    this.checkMobile();
    this.startAutoSlide();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
    window.removeEventListener("resize", this.checkMobile);
  },
};
</script>

<style scoped>
.text-outline {
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
}

.slide-container {
  transition: opacity 1.5s ease-in-out;
  will-change: opacity;
}

.slide-container.inactive {
  opacity: 0;
  pointer-events: none;
}

.slide-container.active {
  opacity: 1;
}

.background-image {
  background-position: center;
  background-size: cover;
  transition: background-position 1.5s ease-out;
  will-change: background-position;
}

/* Estilos y animaciones específicas para móvil */
@media (max-width: 1023px) {
  .mobile-slide.active .background-image {
    animation: slideLeftRight 15s linear;
    animation-play-state: running;
  }

  .mobile-slide.inactive .background-image {
    animation: none;
    background-position: right;
  }
}

@keyframes slideLeftRight {
  0% {
    background-position: left;
  }
  5% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
