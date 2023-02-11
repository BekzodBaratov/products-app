import { createApp } from "vue";
import router from "./routes";
import Paginate from "vuejs-paginate-next";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import "./plugins/axios";

createApp(App).use(createPinia()).use(router).use(Paginate).mount("#app");
