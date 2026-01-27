import type { RouteRecordRaw } from 'vue-router';
import defaultlayout from '@/layout/defaultlayout.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: defaultlayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/view/home.vue'),
            },
            {
                path: 'projects',
                name: 'Projects',
                component: () => import('@/view/project.vue'),
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/view/about.vue'),
            },
            {
                path: 'contact',
                name: 'Contact',
                component: () => import('@/view/contact.vue'),
            }
        ]
    },
    {path: '/:catchAll(.*)', redirect: "/"},
];


export default routes;