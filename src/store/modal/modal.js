export default {
    namespaced: true,

    state: {
        isOpened: false,
        component: null,
        componentData: {},
        positionCenter: false,
    },

    mutations: {
        open(state, payload) {
            state.component = payload.component;
            state.componentData = payload.componentData;
            state.positionCenter = payload.positionCenter;
            setTimeout(() => {
                state.isOpened = true;
            }, 100)
        },

        close(state) {
            state.component = null;
            state.componentData = {};
            state.positionCenter = false;
            state.isOpened = false;
        },
    },
}