<template>
    <footer :class="footerClasess">
        <div class="content">
            <a class="text" href="#">Документация API</a>
            <span class="text">© 2023 RubPay, Inc</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',

    props: {
        isCollapsed: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        footerClasess() {
            return [
                'footer',
                { collapsed: this.isCollapsed },
            ];
        },
    },
};
</script>

<style lang="sass" scoped>
.footer
    margin-top: auto
    margin-left: 224px
    position: relative
    transition: all 0.3s ease
    &::before
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 1px
        background-color: $gray-light
    &.collapsed
        margin-left: 72px

.content
    padding: 12px 40px
    display: flex
    align-items: center
    justify-content: space-between

.text
    font-weight: 500
    font-size: 12px
    line-height: 20px
    color: $gray-dark

@media(max-width: 1366px)
    .footer
        margin-left: 72px
        &.collapsed
            margin-left: 72px
</style>