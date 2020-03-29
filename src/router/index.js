import Vue from "vue";
import VueRouter from "vue-router";
import UserService from "@/common/user.service";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../pages/Dashboard"),
    meta: { requiresAuth: true }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/Auth/Register")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Auth/Login")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = UserService.user();
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: "login" });
  } else next();
});

export default router;
