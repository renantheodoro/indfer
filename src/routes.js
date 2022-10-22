import Home from "@/presentation/views/Home.vue";
import About from "@/presentation/views/About.vue";
import Products from "@/presentation/views/ProductList.vue";
import ProductDetails from "@/presentation/views/Product.vue";
import Catalog from "@/presentation/views/Catalog.vue";
import Contact from "@/presentation/views/Contact.vue";
import NotFound from "@/presentation/views/NotFound.vue";

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
