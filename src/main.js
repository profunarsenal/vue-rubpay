import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import InlineSvg from 'vue-inline-svg';
import { clickOutside } from '@/directives/clickOutside';

createApp(App)
    .use(store)
    .use(router)
    .component('inline-svg', InlineSvg)
    .directive('click-outside', clickOutside)
    .mount('#app');