import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import Page404 from "../views/Page404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard/:page",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/dashboard",
    component: DashBoard,
  },
  {
    path: "/about",
    name: "About",
    // component: () => import("../views/Page404.vue"),
    component: () => import("../views/About.vue"),
  },

  {
    path: "/404",
    name: "Page404",
    component: Page404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

const userAuthExists = true;

const getTitleByRouteName = (routeName) => {
  return {
    Dashboard: "Take a look on your payments and add more!",
    About: "Anything about our awesome application!",
    Page404: "Oops! Seems like we lost this page :(",
  }[routeName];
};

router.beforeEach((to, from, next) => {
  if (to.name !== "Page404" && !userAuthExists) {
    next({
      name: "Page404",
    });
  } else {
    next();
  }
});

router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name);
});

export default router;
