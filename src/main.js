import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/Reset.css";
import "./assets/styles/configs/_configFonts.sass";
import "./assets/styles/configs/_configGeneral.sass";

const app = createApp(App);

app.use(router);

app.mount("#app");
