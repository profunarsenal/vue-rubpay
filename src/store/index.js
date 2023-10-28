import { createStore } from 'vuex';
import modal from '@/store/modal/modal';

export default createStore({
    modules: {
        modal,
    },
});
