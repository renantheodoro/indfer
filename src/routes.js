import Home from "./presentation/views/home.vue";
import About from "./presentation/views/about.vue";
import Products from "./presentation/views/product-list.vue";
import ProductDetails from "./presentation/views/product.vue";
import Catalog from "./presentation/views/catalog.vue";
import Contact from "./presentation/views/contact.vue";
import NotFound from "./presentation/views/not-found.vue";

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
    
    children: [
      {
        path: '',
        name: "products",
        component: Products,
      },
      {
        path: "metalurgia/:id",
        component: ProductDetails,
      },
    
      {
        path: "construcao-civil/:id",
        component: ProductDetails,
      },
    
      {
        path: "ferramentas-ouro/:id",
        component: ProductDetails,
      },
    ]
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

  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
