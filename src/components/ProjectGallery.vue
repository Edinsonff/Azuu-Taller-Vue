<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 m-4"
    role="list"
    aria-label="Lista de proyectos"
  >
    <div
      v-for="project in projects"
      :key="project.id"
      class="relative rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500 justify-center"
      role="listitem"
      aria-labelledby="project-title"
    >
      <router-link
        :to="{ name: 'project-detail', params: { id: project.id } }"
        aria-label="Ver detalles del proyecto: {{ project.title[language] }}"
      >
        <img
          :src="project.images[0]"
          :alt="project.altText"
          class="w-full h-full object-contain"
          loading="lazy"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 pointer-events-none"
          role="presentation"
          aria-hidden="true"
        ></div>
        <div
          class="absolute bottom-0 left-0 right-0 flex justify-center items-center text-white text-center pb-2"
        >
          <h3 id="project-title" class="text-xl font-bold cursor-default">
            {{ project.title[language] }}
          </h3>
        </div>
      </router-link>
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
