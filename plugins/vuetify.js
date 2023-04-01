// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme: {
          dark: false,
          colors: {
            background: "#00ff00",
            surface: "#FFFFFF",
            primary: "#6200EE",
            "primary-darken-1": "#3700B3",
            secondary: "#03DAC6",
            "secondary-darken-1": "#018786",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
            something: "#00ff00",
          },
          variables: { primary: "#6200EE" },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
