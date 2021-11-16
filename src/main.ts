import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVm6ATlGSUE0OkIvT_km3_b5RFvO4Pl00",
  authDomain: "portafolio-cibernetico.firebaseapp.com",
  databaseURL: "https://portafolio-cibernetico-default-rtdb.firebaseio.com",
  projectId: "portafolio-cibernetico",
  storageBucket: "portafolio-cibernetico.appspot.com",
  messagingSenderId: "313336567642",
  appId: "1:313336567642:web:e2696e9e23e5bb9d370563",
  measurementId: "G-WLMVFJ9WTZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
