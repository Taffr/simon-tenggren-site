import type { Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HOME",
      component: () => import("@/views/HomeView.vue") as Component,
    },
    {
      path: "/cv",
      name: "CV",
      component: () => import("@/views/CVView.vue") as Component,
    },
    {
      path: "/repos",
      name: "REPOS",
      component: () => import("@/views/RepoView.vue") as Component,
    },
  ],
});

export default router;
