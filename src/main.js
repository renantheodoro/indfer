import { createApp } from "vue";
import * as VueRouter from "vue-router";
import routes from "./routes";

import App from "./app.vue";

// prismic
import prismic from "./services/prismic";

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
  faAngleLeft,
  faMagnifyingGlass,
  faGears,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

library.add(faStar);
library.add(faPhone);
library.add(faEnvelopeOpen);
library.add(faLocationDot);
library.add(faAngleDown);
library.add(faAngleLeft);
library.add(faMagnifyingGlass);
library.add(faGears);
library.add(faWhatsapp);
library.add(faFacebookF);
library.add(faInstagram);
library.add(faLinkedinIn);
library.add(faXmark);
library.add(faCircleCheck);
library.add(faFaceSadTear);

// Route definition
const router = new VueRouter.createRouter({
  linkActiveClass: "active",
  history: VueRouter.createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

// App config
const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

// Register prismic plugin
app.use(prismic);

// App mount
app.mount("#app");
