import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductsView from "../views/ProductsView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import OrderView from "../views/OrderView.vue";
import CustomerDetailsView from "../views/CustomerDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/contactus",
      name: "contactus",
      component: ContactUsView,
    },
    {
      path: "/order",
      name: "order",
      component: OrderView,
    },
    {
      path: "/customerDetails",
      name: "customerDetails",
      component: CustomerDetailsView,
    },
  ],
});

export default router;
