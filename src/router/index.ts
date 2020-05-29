import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { VueEasyJwt } from "vue-easy-jwt";
const jwt = new VueEasyJwt();

//Componentes
import Home from "../views/Home.vue";
import NewShipment from "../views/NewShipment.vue";
import SignUp from "../views/SignUp.vue";
import DetailShipment from "../views/DetailShipment.vue";
import Shipments from "../views/Shipments.vue";
import Profile from "../views/Profile.vue";
import RecoverPassword from "../views/RecoverPassword.vue";
import Login from "../views/Login.vue";
import Discounts from "../views/Discounts.vue"

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
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
      hideBasicComponents: true,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
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
    path: "/shipment/new",
    name: "NewShipment",
    component: NewShipment,
    meta: {
      requiresAuth: true,
      hideBasicComponents: false,
    },
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    props: true,
    meta: {
      requiresAuth: true,
      hideBasicComponents: false,
    },
  },
  {
    path: "/discounts",
    name: "Discounts",
    component: Discounts,
    meta: {
      requiresAuth: true,
      hideBasicComponents: false,
    },
  },
  {
    path: "/recover",
    name: "RecoverPassword",
    component: RecoverPassword,
    meta: {
      requiresAuth: false,
      hideBasicComponents: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  to.matched.some((route) => {
    if (route.meta.requiresAuth) {
      const token: any = localStorage.getItem("token");
      if (jwt.isExpired(token)) {
        localStorage.clear();
        next({ path: "/login" });
      } else {
        next();
      }
    } else {
      next();
    }
  });
});

export default router;
