<template>
    <div class="wrapper">
        <app-sidebar/>
        <div class="test">test</div>
        <router-view/>
    </div>
</template>

<script>
import AppSidebar from './components/Sidebar/AppSidebar';

export default {
    name: "App",
    components: {
        AppSidebar
    },
};
</script>

<style lang="sass">
body
    font-family: "Suisse Int'l"
    font-size: 16px
    color: $black
    background-color: $white
    min-width: 320px

#app
    height: 100vh
</style>
