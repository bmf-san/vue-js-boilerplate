import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/post",
    name: "Post",
    component: () =>
      import("../pages/Post.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
