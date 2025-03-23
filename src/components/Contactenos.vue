<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
    <div class="container mx-auto max-w-4xl">
      <h1 class="text-3xl text-gray-700 dark:text-white mb-8">| CONTÁCTENOS</h1>

      <form @submit.prevent="sendEmail" class="space-y-6">
        <div>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            class="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-500 focus:outline-none text-black dark:text-white dark:bg-gray-900"
            placeholder="Nombre*"
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            class="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-500 focus:outline-none text-black dark:text-white dark:bg-gray-900"
            placeholder="Email*"
          />
        </div>

        <div>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            required
            class="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-500 focus:outline-none text-black dark:text-white dark:bg-gray-900"
            placeholder="Asunto"
          />
        </div>

        <div>
          <textarea
            id="message"
            v-model="formData.message"
            rows="6"
            required
            class="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-500 focus:outline-none resize-none text-black dark:text-white dark:bg-gray-900"
            placeholder="Mensaje"
          ></textarea>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="px-6 py-2 text-gray-700 border border-gray-800 dark:text-white hover:bg-gray-500 font-medium text-xl transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        project: "",
        subject: "",
        message: "",
        terms: false,
      },
    };
  },
  methods: {
    async sendEmail() {
      const serviceID = "service_1v6v5pk";
      const templateID = "template_x9wq00o";
      const userID = "SWOFdnQGVvKhuFXJJ";

      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message,
      };

      try {
        await emailjs.send(serviceID, templateID, templateParams, userID);

        this.$nextTick(() => {
          const notification = document.createElement("div");
          notification.className =
            "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out";
          notification.innerHTML = `
              <div class="flex items-center">
                <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Mensaje enviado correctamente</span>
              </div>
            `;
          document.body.appendChild(notification);

          setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => {
              document.body.removeChild(notification);
            }, 500);
          }, 3000);
        });

        this.formData = {
          name: "",
          email: "",
          phone: "",
          project: "",
          subject: "",
          message: "",
          terms: false,
        };
      } catch (error) {
        console.error("Error enviando el correo:", error);

        this.$nextTick(() => {
          const notification = document.createElement("div");
          notification.className =
            "fixed bottom-4 right-4 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg";
          notification.innerHTML = `
              <div class="flex items-center">
                <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Hubo un error al enviar el mensaje</span>
              </div>
            `;
          document.body.appendChild(notification);

          setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => {
              document.body.removeChild(notification);
            }, 500);
          }, 3000);
        });
      }
    },
  },
};
</script>

<style scoped>
input,
textarea,
button {
  transition: all 0.3s ease;
}
</style>
