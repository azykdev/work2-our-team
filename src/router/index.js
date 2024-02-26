import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: () => import("@/layouts/landing.vue"),
    children: [
      {
        name: "home",
        path: "/home",
        component: () => import("@/views/landing/HomeView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
