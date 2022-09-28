import Home from "./presentation/views/Home.vue";
import About from "./presentation/views/About.vue";
import Products from "./presentation/views/Products.vue";
import Catalog from "./presentation/views/Catalog.vue";
import Contact from "./presentation/views/Contact.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/sobre",
    name: "about",
    component: About,
  },

  {
    path: "/produtos",
    name: "products",
    component: Products,
  },

  {
    path: "/catalogo",
    name: "catalog",
    component: Catalog,
  },

  {
    path: "/contato",
    name: "contact",
    component: Contact,
  },

];
