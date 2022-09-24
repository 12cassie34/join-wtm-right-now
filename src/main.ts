import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";
import "vuetify/styles";

import "./assets/main.css";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#5186EC",
          secondary: "#6DE4B9",
          heading: "none",
        },
      },
    },
  },
});

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
