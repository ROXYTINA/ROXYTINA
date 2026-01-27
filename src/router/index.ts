import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";


import publicRoutes from "@/router/modules/public";


const routes: RouteRecordRaw[] = [
    ...publicRoutes,
    { path: "/:catchAll(.*)", redirect: '/' },
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router
