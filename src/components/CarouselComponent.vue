<template>
  <div class="carousel-container mx-auto max-w-4xl relative text-center">
    <div
      v-for="(project, index) in projects"
      :key="project.id"
      :class="['carousel-item', { active: index === currentIndex }]"
    >
      <router-link
        v-if="index === currentIndex"
        :to="{ name: 'project-detail', params: { id: project.id } }"
      >
        <img
          :src="project.imgSrc"
          :alt="project.altText"
          class="w-full h-auto max-h-80 md:max-h-96 lg:max-h-screen object-cover"
        />
      </router-link>
      <div class="carousel-text mt-4 text-center">
        <h2
          class="text-base md:text-lg font-bold dark:text-gray-300 text-gray-700"
        >
          {{ project.title }}
        </h2>
        <p class="text-xs md:text-sm dark:text-gray-400 text-gray-600">
          {{ project.location }}
        </p>
        <p
          v-if="project.team"
          class="team text-xs md:text-sm dark:text-gray-400 text-gray-600"
        >
          {{ project.team }}
        </p>
      </div>
    </div>

    <button @click="prevSlide" class="carousel-prev">
      <img
        src="https://img.icons8.com/?size=100&id=1806&format=png&color=FFFFFF"
        class="arrow-icon"
        alt="Flecha hacia la izquierda"
      />
    </button>
    <button @click="nextSlide" class="carousel-next">
      <img
        src="https://img.icons8.com/?size=100&id=61&format=png&color=FFFFFF"
        class="arrow-icon"
        alt="Flecha hacia la derecha"
      />
    </button>
  </div>
</template>

<script>
import { projects } from "@/utils/projects";

export default {
  data() {
    return {
      currentIndex: 0,
      projects,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.projects.length - 1
          : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex =
        this.currentIndex === this.projects.length - 1
          ? 0
          : this.currentIndex + 1;
    },
  },
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100vw;
  transition: background-color 0.3s ease;
  min-height: 91vh;
}

.carousel-item {
  width: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
  position: relative;
  transform: translateX(0);
}

.carousel-text {
  margin-top: 1rem;
  text-align: center;
}

img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: cover;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}

.dark .carousel-prev,
.dark .carousel-next {
  background-color: rgba(255, 255, 255, 0.5);
}

.arrow-icon {
  width: 24px;
  height: 24px;
  filter: invert(0);
}

.dark .arrow-icon {
  filter: invert(1);
}
</style>
