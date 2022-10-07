import Home from "./presentation/views/Home.vue";
import About from "./presentation/views/About.vue";
import Products from "./presentation/views/Products.vue";
import ProductDetails from "./presentation/views/ProductDetails.vue";
import Catalog from "./presentation/views/Catalog.vue";
import Contact from "./presentation/views/Contact.vue";
import NotFound from "./presentation/views/404.vue";
import Admin from "./Admin.vue";

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
    path: "/produtos/:id",
    name: "product-detail",
    component: ProductDetails,
  },

  {
    path: "/produtos/metalurgia/:id",
    name: "product-detail-metallurgy",
    component: ProductDetails,
  },

  {
    path: "/produtos/construcao-civil/:id",
    name: "product-detail-civil-building",
    component: ProductDetails,
  },

  {
    path: "/produtos/ferramentas-ouro/:id",
    name: "product-detail-gold-tools",
    component: ProductDetails,
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

  {
    path: "/admin",
    name: "admin",
    component: Admin
  },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
