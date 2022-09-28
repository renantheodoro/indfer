import { createApp } from "vue";
import App from "./App.vue";
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
  faStar,
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
library.add(faWhatsapp);
library.add(faFacebookF);
library.add(faInstagram);
library.add(faLinkedinIn);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
