import { createApp } from "vue";
import * as VueRouter from "vue-router";
import routes from "./routes";

import App from "./App.vue";

// CSS Libs
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";

// Icon libs
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
  faStar,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(faStar);
library.add(faPhone);
library.add(faEnvelopeOpen);
library.add(faLocationDot);
library.add(faAngleDown);

library.add(faWhatsapp);
library.add(faFacebookF);
library.add(faInstagram);
library.add(faLinkedinIn);

// Route definition
const router = new VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

// App config
const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

// App mount
app.mount("#app");
