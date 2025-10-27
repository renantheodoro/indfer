import { createApp } from "vue";
import * as VueRouter from "vue-router";
import routes from "./routes";

import App from "./App.vue";

// prismic
import prismic from "./services/prismic";

// CSS Libs
import "materialize-css/dist/css/materialize.min.css";

// Icon libs
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
  faStar,
  faAngleDown,
  faAngleLeft,
  faMagnifyingGlass,
  faGears,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faFaceSadTear,
} from "@fortawesome/free-regular-svg-icons";

const icons = [
  faStar,
  faPhone,
  faEnvelopeOpen,
  faLocationDot,
  faAngleDown,
  faAngleLeft,
  faMagnifyingGlass,
  faGears,
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXmark,
  faCircleCheck,
  faFaceSadTear,
  faBars,
];
library.add(...icons);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior() {
    return { top: 0 };
  },
});

const app = createApp(App);

app.use(router);
app.use(prismic);
app.component("font-awesome-icon", FontAwesomeIcon);

// monta
app.mount("#app");
