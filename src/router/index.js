import { createRouter, createWebHistory } from 'vue-router';
import Checkout from '@/views/Checkout';
import Payments from '@/views/Payments';
import Payouts from '@/views/Payouts';
import Settings from '@/views/Settings';
import Error from '@/views/Error';

const routes = [
    {
        path: '/',
        name: 'Checkout',
        component: Checkout,
    },
    {
        path: '/payments',
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
