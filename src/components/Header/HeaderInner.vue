<template>
    <header class="header-inner">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'HeaderInner',
}
</script>

<style lang="sass" scoped>
.header-inner
    padding: 24px 40px 16px 40px

@media(max-width: 992px)
    .header-inner
        padding: 20px 16px 16px 16px

@media(max-width: 767px)
    .header-inner
        padding: 80px 16px 16px 16px
</style>