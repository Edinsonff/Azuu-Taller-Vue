<template>
  <div v-if="project" class="flex flex-col items-center py-12">
    <div class="relative w-full max-w-4xl h-[500px] overflow-hidden m-10">
      <div
        v-for="(image, index) in project.images"
        :key="index"
        class="absolute inset-0 transition-opacity duration-500"
        :class="{
          'opacity-1': currentSlide === index,
          'opacity-0': currentSlide !== index,
        }"
      >
        <img
          :src="image"
          :alt="project.title"
          class="w-full h-full object-cover"
        />
      </div>

      <div
        class="absolute top-0 left-0 w-1/2 h-full cursor-custom-prev"
        @click="prevSlide"
      ></div>
      <div
        class="absolute top-0 right-0 w-1/2 h-full cursor-custom-next"
        @click="nextSlide"
      ></div>
    </div>

    <div class="flex mt-4">
      <span
        v-for="(image, index) in project.images"
        :key="index"
        :class="{ 'bg-gray-800': currentSlide === index }"
        class="h-3 w-3 bg-gray-400 rounded-full mx-1 cursor-pointer"
        @click="setSlide(index)"
      ></span>
    </div>

    <div class="text-center max-w-2xl mt-4">
      <p class="text-base mb-4">{{ project.description[language] }}</p>
      <h1 class="text-3xl font-bold mb-2">
        {{ project.title[language] }}
      </h1>
      <p class="text-lg text-gray-600">
        {{ project.location[language] }}
      </p>
    </div>

    <div class="prev-project hidden lg:flex" @click="prevProject">
      <img
        src="../assets/arrow-back-direction-svgrepo-com.svg"
        alt="Anterior"
        class="w-12 h-12 dark:invert"
      />
      <div class="preview-container">
        <div class="preview-content">
          <img
            :src="getPrevProjectImage()"
            alt="Previous Project"
            class="arrow-preview"
          />
          <p class="preview-title dark:text-white">
            {{ getPrevProjectTitle() }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="next-project hidden lg:flex fixed top-1/2 right-0 items-center justify-center"
      @click="nextProject"
    >
      <img
        src="../assets/arrow-direction-next-svgrepo-com.svg"
        alt="Siguiente"
        class="w-12 h-12 dark:invert"
      />
      <div class="preview-container">
        <div class="preview-content">
          <img
            :src="getNextProjectImage()"
            alt="Next Project"
            class="arrow-preview"
          />
          <p class="preview-title dark:text-white">
            {{ getNextProjectTitle() }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="flex items-center justify-center py-12">
    <p>{{ $t("projectDetail.loading") }}</p>
  </div>
</template>

<script>
import { projects } from "@/utils/projects";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  setup() {
    const { locale } = useI18n();
    const language = computed(() => locale.value);
    return { language };
  },
  data() {
    return {
      project: null,
      currentSlide: 0,
      projects,
    };
  },
  methods: {
    loadProject(id) {
      const projectId = Number(id);
      this.project =
        projects.find((project) => project.id === projectId) || null;
    },
    setSlide(index) {
      this.currentSlide = index;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.project.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.project.images.length) %
        this.project.images.length;
    },
    nextProject() {
      const nextProjectId = (Number(this.id) + 1) % projects.length;
      this.$router.push({
        name: "project-detail",
        params: { id: nextProjectId },
      });
    },
    prevProject() {
      const prevProjectId =
        (Number(this.id) - 1 + projects.length) % projects.length;
      this.$router.push({
        name: "project-detail",
        params: { id: prevProjectId },
      });
    },
    getNextProjectImage() {
      const nextProjectId = (Number(this.id) + 1) % projects.length;
      return projects[nextProjectId]?.images[0] || "";
    },
    getPrevProjectImage() {
      const prevProjectId =
        (Number(this.id) - 1 + projects.length) % projects.length;
      return projects[prevProjectId]?.images[0] || "";
    },
    getNextProjectTitle() {
      const nextProjectId = (Number(this.id) + 1) % projects.length;
      return projects[nextProjectId]?.title[this.language] || "";
    },
    getPrevProjectTitle() {
      const prevProjectId =
        (Number(this.id) - 1 + projects.length) % projects.length;
      return projects[prevProjectId]?.title[this.language || ""];
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(newId) {
        this.loadProject(newId);
      },
    },
  },
  mounted() {
    this.loadProject(this.id);
  },
};
</script>

<style scoped>
.prev-project,
.next-project {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1020px) {
  .prev-project,
  .next-project {
    display: none;
  }
}

.prev-project {
  left: 0;
}

.next-project {
  right: 0;
}

.preview-container {
  position: relative;
  display: none;
  width: 150px;
  height: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  background-color: transparent;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.prev-project:hover .preview-container,
.next-project:hover .preview-container {
  display: block;
  opacity: 1;
}

.arrow-preview {
  border-top: 10px;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 10px;
}

.preview-title {
  font-size: 1rem;
  color: #333;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}

.prev-project .preview-container {
  position: absolute;
  left: 60px;
}

.next-project .preview-container {
  position: absolute;
  right: 60px;
}

.prev-project img,
.next-project img {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

.prev-project:hover img,
.next-project:hover img {
  transform: scale(1.2);
}

.cursor-custom-next {
  cursor: url("../assets/arrow-next-svgrepo-com.svg"), auto;
}

.cursor-custom-prev {
  cursor: url("../assets/arrow-prev-svgrepo-com.svg"), auto;
}
</style>
