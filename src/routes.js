// route-level code splitting (lazy)
const Home = () => import("@/presentation/views/Home.vue");
const About = () => import("@/presentation/views/About.vue");
const Products = () => import("@/presentation/views/ProductList.vue");
const ProductDetails = () => import("@/presentation/views/Product.vue");
const Catalog = () => import("@/presentation/views/Catalog.vue");
const Contact = () => import("@/presentation/views/Contact.vue");
const NotFound = () => import("@/presentation/views/NotFound.vue");

export default [
  { path: "/", name: "home", component: Home },
  { path: "/sobre", name: "about", component: About },

  // lista de produtos
  { path: "/produtos", name: "products", component: Products },

  // detalhes (cada categoria com sua rota)
  {
    path: "/produtos/metalurgia/:id",
    name: "product-metalurgia",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/produtos/construcao-civil/:id",
    name: "product-construcao-civil",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/produtos/ferramentas-ouro/:id",
    name: "product-ferramentas-ouro",
    component: ProductDetails,
    props: true,
  },

  { path: "/catalogo", name: "catalog", component: Catalog },
  { path: "/contato", name: "contact", component: Contact },

  // 404
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
