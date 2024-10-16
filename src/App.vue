<template>
  <div
    id="app"
    class="min-h-screen min-w-screen bg-white dark:bg-gray-900 text-black dark:text-white"
  >
    <!-- Pantalla de carga con transición -->
    <transition name="fade" mode="out-in" @after-leave="handleLoaded">
      <LoadingScreen v-if="isLoading" />
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
      <transition
        name="fade"
        mode="out-in"
        @after-enter="handleProjectSliderEnter"
      >
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
    };
  },
  methods: {
    handleLoaded() {
      this.isLoading = false;
      this.showSlider = true;
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.showSlider = true;
    }, 5000);
  },
  watch: {
    $route(to) {
      this.currentPage = to.name;
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
</style>
