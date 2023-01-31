import { createApp } from "vue";
import router from "./routes";
import Paginate from "vuejs-paginate-next";

import "./style.css";
import App from "./App.vue";
import "./plugins/axios";

createApp(App).use(router).use(Paginate).mount("#app");
