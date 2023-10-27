export default {
    data() {
        return {
            width: window.innerWidth,
        };
    },

    computed: {
        isDesktop() {
            return this.width > 767 ? true : false;
        },
    },

    methods: {
        windowUpdateWidth() {
            this.width = window.innerWidth;
        },
    },

    mounted() {
        this.windowUpdateWidth();
        window.addEventListener('resize', this.windowUpdateWidth);
    },
};