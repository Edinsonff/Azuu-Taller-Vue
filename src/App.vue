<template>
  <div
    id="app"
    class="min-h-screen min-w-screen bg-white dark:bg-gray-900 text-black dark:text-white"
    :class="{ 'overflow-hidden': isLoading }"
  >
    <!-- Pantalla de carga con transición -->
    <transition name="fade" mode="out-in" @after-leave="handleLoaded">
      <LoadingScreen v-if="isLoading" :isInitialLoad="isFirstLoad" />
    </transition>

    <!-- Navbar con animación fade -->
    <transition name="fade" mode="out-in">
      <MainNavbar
        v-if="!isLoading && $route.name !== 'ProjectSlider'"
        :currentPage="currentPage"
      />
    </transition>

    <!-- Contenido de las vistas con animación fade -->
    <router-view v-if="!isLoading && showSlider" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import MainNavbar from "@/components/MainNavbar.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  name: "App",
  data() {
    return {
      isLoading: true,
      currentPage: this.$route.name,
      isFirstLoad: true,
      showSlider: false,
    };
  },
  methods: {
    handleLoaded() {
      this.isLoading = false;
      this.showSlider = true;
    },
  },
  mounted() {
    // Detecta si la página inicial es `projectSlider`
    if (this.$route.name === "projectSlider") {
      this.isFirstLoad = false;
      this.isLoading = false;
      this.showSlider = true;
    } else {
      // Muestra la pantalla de carga durante 5 segundos si no es `projectSlider`
      setTimeout(() => {
        this.isLoading = false;
        this.showSlider = true;
      }, 5000);
    }
  },
  watch: {
    $route(to) {
      this.currentPage = to.name;
      if (this.currentPage !== "projectSlider") {
        this.isFirstLoad = false;
      }
    },
  },
  components: {
    MainNavbar,
    LoadingScreen,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: white;
  transition: background-color 0.3s ease;
  overflow-x: hidden;
}

.dark html,
.dark body {
  background-color: #1a202c;
}

.min-w-screen {
  min-width: 100vw;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  transition: background-color 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
