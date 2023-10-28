<template>
    <div class="wrapper">
        <app-sidebar
            v-if="isDesktop"
            :isCollapsed="isCollapsed"
            @collapse="collapseSidebar"
        />
        <app-header v-else/>
        <div :class="containerClasses">
            <router-view />
        </div>
        <app-footer 
            v-if="isDesktop" 
            :isCollapsed="isCollapsed"
        />
        <v-modal />
    </div>
</template>

<script>
import AppHeader from '@/components/Header/AppHeader';
import AppSidebar from '@/components/Sidebar/AppSidebar';
import AppFooter from '@/components/Footer/AppFooter';
import VModal from '@/components/common/VModal';
import window from '@/mixins/window';

export default {
    name: "App",

    mixins: [window],

    components: {
        AppHeader,
        AppSidebar,
        AppFooter,
        VModal,
    },

    data() {
        return {
            isSidebarSwitcher: false,
        };
    },

    computed: {
        containerClasses() {
            return [
                'container',
                { collapsed: this.isCollapsed },
            ];
        },

        isCollapsedMode() {
            return this.width <= 1366 ? true : false;
        },

        isCollapsed() {
            return this.isCollapsedMode || this.isSidebarSwitcher;
        },
    },

    methods: {
        collapseSidebar(value) {
            this.isSidebarSwitcher = value;
        },
    },
};
</script>

<style lang="sass">
body
    font-family: "Suisse Int'l"
    font-size: 16px
    font-weight: 450
    color: $black
    background-color: $white
    min-width: 320px

#app
    height: 100vh
</style>
