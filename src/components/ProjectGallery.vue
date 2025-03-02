<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-2"
    role="list"
    aria-label="Lista de proyectos"
  >
    <div
      v-for="project in projects"
      :key="project.id"
      class="relative shadow-lg overflow-hidden transition-transform duration-500 justify-center"
      role="listitem"
      aria-labelledby="project-title"
      @mouseenter="hoveredProject = project.id"
      @mouseleave="hoveredProject = null"
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
          class="absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none"
          :class="{
            'opacity-30': hoveredProject === project.id,
            'opacity-0': hoveredProject !== project.id,
          }"
          role="presentation"
          aria-hidden="true"
        ></div>
        <div
          class="absolute bottom-0 left-0 right-0 flex justify-center items-center text-white text-center pb-2 transition-opacity duration-300"
          :class="{
            'opacity-100': hoveredProject === project.id,
            'opacity-0': hoveredProject !== project.id,
          }"
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
      hoveredProject: null, // Estado para rastrear la tarjeta sobre la que está el mouse
    };
  },
};
</script>

<style scoped>
/* Oculta el título por defecto */
.opacity-0 {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* Muestra el título cuando se hace hover */
.opacity-100 {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
</style>
