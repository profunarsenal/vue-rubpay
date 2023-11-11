<template lang="pug">
.wrapper
    app-sidebar(
        v-if="isDesktop"
        :isCollapsed="isCollapsed"
        @collapse="collapseSidebar"
    )
    app-header(v-else)

    .container(:class="containerClasses")
        router-view
    
    app-footer(
        v-if="isDesktop" 
        :isCollapsed="isCollapsed"
    )

    v-modal
</template>

<script>
import AppHeader from '@/components/Header/AppHeader';
import AppSidebar from '@/components/Sidebar/AppSidebar';
import AppFooter from '@/components/Footer/AppFooter';
import VModal from '@/components/common/VModal';
import window from '@/mixins/window';

export default {
    name: 'MainLayout',

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
            return { collapsed: this.isCollapsed };
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
}
</script>