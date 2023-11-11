import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login';
import Checkout from '@/views/Checkout';
import Payments from '@/views/Payments';
import Payouts from '@/views/Payouts';
import Settings from '@/views/Settings';
import Error from '@/views/Error';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {
            layout: 'empty',
        },
    },
    {
        path: '/checkout',
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
        path: '/:pathMatch(.*)*',
        name: 'Error',
        component: Error,
        meta: {
            layout: 'empty',
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
