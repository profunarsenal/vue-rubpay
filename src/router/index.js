import { createRouter, createWebHistory } from 'vue-router';
import Payments from '@/views/Payments';
import Payouts from '@/views/Payouts';
import Settings from '@/views/Payments';
import Error from '@/views/Payments';

const routes = [
    {
        path: '/',
        name: 'Payments',
        component: Payments,
    },
    {
        path: '/payouts',
        name: 'Payouts',
        component: Payouts,
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    },
    {
        path: '/error',
        name: 'Error',
        component: Error,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
