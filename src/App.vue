<template>
    <div class="wrapper">
        <router-view/>
    </div>
</template>

<style lang="sass">
body
    font-family: "Suisse Int'l"
    font-size: 16px
    color: $black
    background-color: $white
    min-width: 320px
    &.open
        overflow: hidden

.wrapper
    position: relative
    height: 100vh
    display: flex
    flex-direction: column
</style>
