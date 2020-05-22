import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import { VueEasyJwt } from "vue-easy-jwt";
// const jwt = new VueEasyJwt();

//Componentes
import Home from "../views/Home.vue";
import SignUp  from "../views/SignUp.vue";
import DetailShipment from "../views/DetailShipment.vue";
import Profile from "../views/Profile.vue";


import RecoverPassword from "../views/RecoverPassword.vue";

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
    component: SignUp,
    meta: {
      requiresAuth: false,
      hideBasicComponents: true,
    },
  },
  {
    path: "/shipments",
    name: "Shipments",
    // component: Home,
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
    component: Profile,
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


export default router;
