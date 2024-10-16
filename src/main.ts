import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import { createI18n } from "vue-i18n";
import { messages } from "./utils/translations";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("language") || "es",
  globalInjection: true,
  messages,
});

createApp(App).use(store).use(router).use(i18n).mount("#app");
