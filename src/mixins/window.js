export default {
    data() {
        return {
            isDesktop: true,
        };
    },

    mounted() {
        this.windowUpdateWidth();
        window.addEventListener('resize', this.windowUpdateWidth);
    },

    methods: {
        windowUpdateWidth() {
            const SCREEN_SIZE = 767;
            const width = window.innerWidth;

            this.isDesktop = width > SCREEN_SIZE ? true : false;
        },
    },
};