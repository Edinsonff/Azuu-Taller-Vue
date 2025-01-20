<template>
  <div
    class="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white"
  >
    <main
      class="flex flex-col w-full max-w-7xl mx-auto relative px-4 text-center mt-16 space-y-8"
    >
      <section
        class="flex flex-col justify-center items-center"
        aria-labelledby="about-title"
      >
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-700 dark:text-white"
        >
          {{ $t("about.title") }}
        </h1>

        <img
          src="@/assets/img/nosotros.png"
          alt="Imagen de Jean Rodriguez & Carlos Perez, miembros del equipo"
          class="mt-4 w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          loading="lazy"
        />

        <p class="text-center text-sm mt-2 mb-3 text-gray-600 dark:text-white">
          Jean Rodriguez & Carlos Perez
        </p>

        <p
          class="mt-2 text-sm md:text-base leading-relaxed text-gray-600 dark:text-white text-justify max-w-4xl"
        >
          {{ $t("about.description1") }}
        </p>

        <p
          class="mt-4 text-sm md:text-base leading-relaxed text-gray-600 dark:text-white text-justify max-w-4xl"
        >
          {{ $t("about.description2") }}
        </p>

        <p class="text-sm italic text-gray-600 dark:text-white my-4">
          Azuu taller de arquitectura. 2024
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "NosotrosView",
};
</script>

<style scoped></style>
