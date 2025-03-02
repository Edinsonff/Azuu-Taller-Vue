<template>
  <header
    class="w-full top-0 z-10 flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-900 h-32"
  >
    <div class="flex items-center pl-[60px]">
      <router-link to="/slider" class="flex items-center">
        <img
          src="@/assets/img/logo.png"
          alt="Logo de Azuu Taller"
          class="h-[70px] w-[105px] mr-2 transition-transform duration-300 hover:scale-105"
        />
        <div class="flex">
          <span class="text-[16px] text-black dark:text-white">AZUU</span>
        </div>
      </router-link>
    </div>
    <div class="flex items-center md:hidden pr-10">
      <button id="toggle" class="mr-4" @click="toggleDarkMode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-black dark:text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </button>
      <button
        class="text-black dark:text-white mr-4"
        @click="toggleLanguage"
        aria-label="Cambiar idioma"
      >
        {{ currentLanguage === "es" ? "ESP" : "ENG" }}
      </button>
      <button
        class="text-black dark:text-white"
        @click="toggleMobileMenuAndEmit"
        aria-label="Abrir menú móvil"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <nav class="hidden md:flex space-x-4 justify-center pr-[60px]">
      <router-link
        v-if="currentPage === 'project-detail'"
        to="/nosotros"
        id="nosotros-link"
        class="flex items-center space-x-2 text-white"
      >
        <img
          src="@/assets/img/nosotros-icon.png"
          class="h-7 w-7 dark:invert dark:filter"
          alt="Nosotros"
        />
      </router-link>
      <router-link
        v-if="currentPage === 'project-detail'"
        to="/gallery"
        id="proyectos-link"
        class="text-black dark:text-white"
      >
        <p>{{ $t("navbar.projects") }}</p>
      </router-link>
      <router-link
        v-else-if="currentPage === 'ProjectGallery'"
        to="/nosotros"
        id="nosotros-link"
      >
        <img
          src="@/assets/img/nosotros-icon.png"
          class="h-7 w-7 dark:invert dark:filter"
          alt="Enlace a la sección Nosotros"
        />
      </router-link>

      <router-link v-else to="/gallery" id="proyectos-link">
        <p class="text-black dark:text-white">{{ $t("navbar.projects") }}</p>
      </router-link>
      <a
        href="https://wa.me/573232175634?text=¡Hola! Me gustaría saber más acerca de Azuu Taller."
        target="_blank"
        class="hover:text-gray-900"
      >
        <img
          src="@/assets/icons/whatsapp.png"
          alt="Enlace a WhatsApp de Azuu Taller"
          class="h-6 w-6 dark:invert"
        />
      </a>
      <a
        href="https://www.instagram.com/azuu_taller?igsh=MWN4ZXd2NThiY29hdw%3D%3D&utm_source=qr"
        target="_blank"
        class="hover:text-gray-900"
      >
        <img
          src="@/assets/icons/instagram.png"
          alt="Enlace a Instagram de Azuu Taller"
          class="h-6 w-6 dark:invert"
        />
      </a>
      <a href="mailto:equipo@azuutaller.com" class="hover:text-gray-900">
        <img
          src="@/assets/icons/email.png"
          alt="Enlace al correo de Azuu Taller"
          class="h-6 w-6 dark:invert"
        />
      </a>
      <button
        id="toggle"
        class="text-black dark:text-white hidden md:block"
        @click="toggleDarkMode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            class="fill-current"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </button>
      <button
        id="change-language"
        class="cursor-pointer text-black dark:text-white ml-0"
        @click="toggleLanguage"
      >
        {{ currentLanguage === "es" ? "ESP" : "ENG" }}
      </button>
    </nav>

    <div
      id="mobile-menu"
      class="fixed inset-0 bg-gray-900 dark:bg-white bg-opacity-95 dark:bg-opacity-95 z-20 flex items-center justify-center p-4 hidden"
    >
      <div
        class="w-full max-w-md bg-gray-200 dark:bg-gray-800 rounded-lg shadow-2xl p-6"
      >
        <div class="flex justify-between items-center w-full mb-6">
          <p class="text-2xl font-bold text-gray-600 dark:text-white">
            Azuu Taller
          </p>
          <button
            @click="toggleMobileMenu"
            class="text-black dark:text-white hover:text-gray-900 dark:hover:text-gray-700 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav class="flex flex-col space-y-4">
          <router-link
            v-if="
              currentPage === 'ProjectGallery' ||
              currentPage === 'project-detail'
            "
            to="/nosotros"
            @click="toggleMobileMenu"
            class="flex items-center px-4 py-2 text-md text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-300 rounded"
            id="nosotros-link"
          >
            <img
              src="@/assets/img/nosotros-icon.png"
              class="h-6 w-6 mr-2 dark:invert"
              alt="Nosotros"
            />
            {{ $t("modal.about") }}
          </router-link>
          <router-link
            v-if="
              currentPage === 'nosotros' || currentPage === 'project-detail'
            "
            to="/gallery"
            @click="toggleMobileMenu"
            class="flex items-center px-4 py-2 text-md text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-300 rounded"
          >
            <img
              src="@/assets/img/projects-icon.png"
              class="h-7 w-7 mr-1 dark:invert"
              alt="Proyectos"
            />
            {{ $t("modal.projects") }}
          </router-link>
          <a
            class="flex items-center px-4 py-2 text-md text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-300 rounded"
            href="https://wa.me/573232175634?text=¡Hola! Quiero saber más acerca de Azuu Taller."
            target="_blank"
          >
            <img
              src="@/assets/icons/whatsapp.png"
              alt="Enlace a Whatsapp de Azuu Taller"
              class="h-6 w-6 mr-2 dark:invert"
            />
            WhatsApp
          </a>
          <a
            class="flex items-center px-4 py-2 text-md text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-300 rounded"
            href="https://www.instagram.com/azuu_taller"
            target="_blank"
          >
            <img
              src="@/assets/icons/instagram.png"
              alt="Enlace a Instagram de Azuu Taller"
              class="h-6 w-6 mr-2 dark:invert"
            />
            Instagram
          </a>
          <a
            class="flex items-center px-4 py-2 text-md text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-300 rounded"
            href="mailto:equipo@azuutaller.com"
            target="_blank"
          >
            <img
              src="@/assets/icons/email.png"
              alt="Gmail"
              class="h-6 w-6 mr-2 dark:invert"
            />
            equipo@azuutaller.com
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { toggleDarkMode, applyThemeFromLocalStorage } from "@/utils/themeUtils";
import { toggleMobileMenu } from "@/utils/menuUtils";
import { useI18n } from "vue-i18n";

export default {
  name: "MainNavbar",
  setup() {
    const { locale } = useI18n();

    return {
      locale,
    };
  },
  props: {
    currentPage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentLanguage: localStorage.getItem("language") || "es",
    };
  },
  methods: {
    toggleDarkMode,
    toggleMobileMenu,
    toggleMobileMenuAndEmit() {
      this.toggleMobileMenu();
    },
    toggleLanguage() {
      const newLang = this.currentLanguage === "es" ? "en" : "es";
      this.locale = newLang;
      localStorage.setItem("language", newLang);
      this.currentLanguage = newLang;
    },
  },
  mounted() {
    applyThemeFromLocalStorage();
  },
};
</script>

<style scoped>
.logo-img {
  filter: invert(0);
  transition: filter 0.3s ease;
}

.dark .logo-img {
  filter: invert(1);
}

.dark img {
  filter: invert(1);
}

.text-black {
  color: black;
}

.dark .text-white {
  color: white;
}

.modal {
  background-color: white;
  color: black;
}

.dark .modal {
  background-color: #2d3748;
  color: white;
}
</style>
