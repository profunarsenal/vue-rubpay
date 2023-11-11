<template lang="pug">
component(:is="layout")
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import EmptyLayout from '@/layouts/EmptyLayout';

export default {
    name: "App",

    components: {
        MainLayout,
        EmptyLayout,
    },

    computed: {
        layout() {
            const layoutName = this.$route.meta.layout || 'main';
            return `${layoutName}-layout`;
        },
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
