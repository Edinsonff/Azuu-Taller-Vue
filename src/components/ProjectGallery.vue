<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 m-4"
  >
    <div
      v-for="project in projects"
      :key="project.id"
      class="relative rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
    >
      <router-link :to="{ name: 'project-detail', params: { id: project.id } }">
        <img
          :src="project.imgSrc"
          :alt="project.altText"
          class="w-full h-full object-cover"
        />
      </router-link>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 pointer-events-none"
      ></div>
      <div class="absolute bottom-4 left-4 text-white">
        <h3 class="text-xl font-bold">{{ project.title[language] }}</h3>
        <p class="text-sm">{{ project.location[language] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from "@/utils/projects";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { locale } = useI18n();
    const language = computed(() => locale.value);
    return { language };
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped>
.pointer-events-none {
  pointer-events: none;
}
</style>
