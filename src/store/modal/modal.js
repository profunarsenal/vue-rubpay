export default {
    namespaced: true,

    state: {
        isOpen: false,
        component: null,
        componentData: {},
        positionCenter: false,
    },

    mutations: {
        open(state, payload) {
            state.component = payload.component;
            state.componentData = payload.componentData;
            state.positionCenter = payload.positionCenter;
            state.isOpen = true;
        },

        close(state) {
            state.component = null;
            state.componentData = {};
            state.positionCenter = false;
            state.isOpen = false;
        },
    },
}