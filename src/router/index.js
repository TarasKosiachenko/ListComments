import Vue from "vue";
import VueRouter from "vue-router";
import Task from "../views/Task.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Task",
    component: Task,
  },
  {
    path: "/solution",
    name: "Solution",
    component: () => import("../views/Solution.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
