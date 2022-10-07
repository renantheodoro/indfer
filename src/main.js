import { createApp } from "vue";
import * as VueRouter from "vue-router";
import routes from "./routes";

import App from "./App.vue";

import CMS from "netlify-cms-app";
import Admin from "./Admin.vue";
// Initialize the CMS object
CMS.init({
  backend: {
    name: "git-gateway",
    branch: "main",
    publish_mode: "editorial_workflow",
    media_folder: "dist/images/uploads",
    public_folder: "images/uploads",
    collections: [
      {
        name: "products",
        label: "Produts",
        folder: "_products",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        fields: [
          { label: "Título", name: "title", widget: "string" },
          { label: "Subtítulo", name: "subtitle", widget: "string" },
          { label: "Conteúdo", name: "content", widget: "markdown" },
          { label: "Detalhes", name: "details", widget: "markdown" },
          { label: "Imagem de destaque", name: "thumbnail", widget: "image" },
        ],
      },
    ],
  },
});
// Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)
CMS.registerPreviewTemplate("index", Admin);

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
library.add(faAngleLeft);
library.add(faMagnifyingGlass);
library.add(faGears);

library.add(faWhatsapp);
library.add(faFacebookF);
library.add(faInstagram);
library.add(faLinkedinIn);

// Route definition
const router = new VueRouter.createRouter({
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

// App mount
app.mount("#app");
