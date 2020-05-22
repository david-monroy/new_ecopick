import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import { VueEasyJwt } from "vue-easy-jwt";
// const jwt = new VueEasyJwt();

//Componentes
import Home from "../views/Home.vue";
import DetailShipment from "../views/DetailShipment.vue";
import Shipments from "../views/Shipments.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
      hideBasicComponents: false,
    },
  },
  {
    path: "/login",
    name: "LogIn",
    // component: Home,
    meta: {
      requiresAuth: false,
      hideBasicComponents: true,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    // component: Home,
    meta: {
      requiresAuth: false,
      hideBasicComponents: true,
    },
  },
  {
    path: "/shipments",
    name: "Shipments",
    component: Shipments,
    meta: {
      requiresAuth: true,
      hideBasicComponents: false,
    },
  },
  {
    path: "/shipments/:id",
    name: "DetailShipment",
    component: DetailShipment,
    meta: {
      requiresAuth: false,
      hideBasicComponents: false,
    },
  },
  {
    path: "/shipments/new",
    name: "NewShipment",
    // component: Home,
    meta: {
      requiresAuth: true,
      hideBasicComponents: false,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    // component: Home,
    meta: {
      requiresAuth: true,
      hideBasicComponents: false,
    },
  },
  {
    path: "/discounts",
    name: "Discounts",
    // component: Home,
    meta: {
      requiresAuth: true,
      hideBasicComponents: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// router.beforeEach((to, from, next) => {
//   to.matched.some((route) => {
//     if (route.meta.requiresAuth) {
//       const token: any = localStorage.getItem("token");
//       if (jwt.isExpired(token)) {
//         localStorage.clear();
//         next({ path: "/login" });
//       } else {
//         next();
//       }
//     } else {
//       next();
//     }
//   });
// });

export default router;
