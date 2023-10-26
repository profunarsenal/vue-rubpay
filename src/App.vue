<template>
    <div class="wrapper">
        <app-sidebar
            :isCollapsed="isCollapsed"
            @collapse="collapseSidebar"
        />
        <div :class="containerClasses">
            <router-view />
        </div>
        <app-footer :isCollapsed="isCollapsed"/>
    </div>
</template>

<script>
import AppSidebar from '@/components/Sidebar/AppSidebar';
import AppFooter from '@/components/Footer/AppFooter';
import window from '@/mixins/window';

export default {
    name: "App",

    mixins: [window],

    components: {
        AppSidebar,
        AppFooter,
    },

    data() {
        return {
            isCollapsed: false,
        };
    },

    computed: {
        containerClasses() {
            return [
                'container',
                { collapsed: this.isCollapsed },
            ];
        },
    },

    methods: {
        collapseSidebar(value) {
            this.isCollapsed = value;
        },
    },

    created() {
        this.isCollapsed = this.isDesktop ? false : true;
    },
};
</script>

<style lang="sass">
body
    font-family: "Suisse Int'l"
    font-size: 16px
    font-weight: 400
    color: $black
    background-color: $white
    min-width: 320px

#app
    height: 100vh
</style>
