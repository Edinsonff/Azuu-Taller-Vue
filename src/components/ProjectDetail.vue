<template>
  <div v-if="project">
    <transition name="fade" mode="out-in">
      <div :key="project.id" class="flex flex-col items-center py-8 m-4">
        <div class="relative w-full max-w-4xl h-[500px] overflow-hidden mt-10">
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
              :alt="'Imagen del proyecto: ' + project.altText"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div
            class="absolute top-0 left-0 w-1/2 h-full cursor-custom-prev"
            @click="prevSlide"
            aria-label="Previous Slide"
          ></div>
          <div
            class="absolute top-0 right-0 w-1/2 h-full cursor-custom-next"
            @click="nextSlide"
            aria-label="Next Slide"
          ></div>
          <button
            @click="openModal"
            class="absolute bottom-2 right-2 bg-gray-50 p-1 dark:bg-gray-300 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Enlarge image"
          >
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z"
                fill="#0F0F0F"
              />
              <path
                d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z"
                fill="#0F0F0F"
              />
              <path
                d="M4 21H8C8.55228 21 9 21.4477 9 22C9 22.5523 8.55228 23 8 23H4C2.34315 23 1 21.6569 1 20V16C1 15.4477 1.44772 15 2 15C2.55228 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21Z"
                fill="#0F0F0F"
              />
              <path
                d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8L3 4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z"
                fill="#0F0F0F"
              />
            </svg>
          </button>
          <div
            v-if="isModalOpen"
            role="dialog"
            aria-modal="true"
            class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            @click.self="closeModal"
          >
            <button
              @click="closeModal"
              class="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors z-60"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div
              class="relative w-full max-w-screen-xl lg:max-w-[90vw] lg:h-[100vh] h-[80vh] mx-auto"
            >
              <img
                :src="project.images[currentSlide]"
                alt="Ampliada"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
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
          <p class="text-base my-4 text-gray-600 dark:text-white text-justify">
            {{ project.description[language] }}
          </p>
          <h1 class="text-2xl font-bold mb-2 text-gray-700 dark:text-white">
            {{ project.title[language] }}
          </h1>
          <p class="text-base text-gray-600 dark:text-white">
            {{ project.location[language] }}
          </p>
          <p
            v-if="project.team"
            class="text-base text-gray-600 dark:text-white"
          >
            {{ project.team[language] }}
          </p>
        </div>

        <transition name="fade">
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
        </transition>
        <transition name="fade">
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
        </transition>
      </div>
    </transition>
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
      isModalOpen: false,
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
    openModal() {
      this.isModalOpen = true;
      document.documentElement.classList.add("overflow-hidden");
    },
    closeModal() {
      this.isModalOpen = false;
      document.documentElement.classList.remove("overflow-hidden");
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
        this.currentSlide = 0;
      },
    },
  },
  mounted() {
    this.loadProject(this.id);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
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

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

button[aria-label="Close modal"] {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transition: background-color 0.2s ease;
  cursor: pointer;
  z-index: 50;
}

button[aria-label="Close modal"]:hover {
  background-color: rgba(0, 0, 0, 0.75);
}

@media (max-width: 768px) and (orientation: landscape) {
  button[aria-label="Close modal"] {
    top: 0.5rem;
    right: 0.5rem;
  }
}

@media (max-width: 768px) {
  .modal button[aria-label="Close modal"] {
    top: 1rem;
    right: 1rem;
  }
}
</style>
