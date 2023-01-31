import { createRouter, createWebHistory } from "vue-router";
import Products from "../view/Products.vue";
import Product from "../view/Product.vue";
import PageNotFound from "../view/404.vue";

const routes = [
  {
    path: "/",
    name: "products",
    component: Products,
  },
  {
    path: "/products/:id",
    name: "product",
    component: Product,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
