import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSvgInlinePlugin from "vue-svg-inline-plugin";

const vueSvgSettings = {
    attributes: {
        data: ["src"],
        remove: ["alt"],
    },
    cache: {
        persistent: false,
    },
};

createApp(App)
    .use(store)
    .use(router)
    .use(VueSvgInlinePlugin, vueSvgSettings)
    .mount('#app');