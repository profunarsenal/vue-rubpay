<template lang="pug">
.pagination
    .info
        .info-block
            span Общее количество:
            span.count 561
        .info-block
            span Показано:
            span.count 50

    .navigation
        button.button.button-prev
            img(src="/icons/mark.svg")
        ul.list
            li.item(
                v-for="item in pages" 
                :key="item" 
                :class="{active: item === currentPage}"
                @click="toPage(item)"
            )
                | {{ item }}
        .button.button-next
            img(src="/icons/mark.svg")
</template>

<script>
export default {
    name: 'AppPagination',

    data() {
        return {
            pages: 5,
            currentPage: 1,
        };
    },

    methods: {
        toPage(page) {
            this.currentPage = page;
        },
    },
};
</script>

<style lang="sass" scoped>
.pagination
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    padding: 12px 32px 12px 40px
    margin-top: auto
    &::before
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 1px
        background-color: $gray-light

.info
    display: flex
    gap: 20px
    font-weight: 450
    font-size: 12px
    line-height: 20px

.info-block
    display: flex
    gap: 4px
    
.count
    color: $gray-dark

.navigation
    display: flex
    align-items: center
    gap: 4px

.button
    width: 28px
    height: 28px
    background-color: transparent
    border-radius: 8px
    transition: all 0.3s ease
    @media(any-hover:hover)
        &:hover
            background-color: rgba($gray-light, 0.50)

.list
    display: flex
    gap: 4px

    .item
        display: flex
        align-items: center
        justify-content: center
        width: 28px
        height: 28px
        font-weight: 450
        font-size: 12px
        line-height: 20px
        border-radius: 8px
        cursor: pointer
        transition: all 0.3s ease
        @media(any-hover:hover)
            &:hover
                background-color: rgba($gray-light, 0.50)
        &.active
            color: $white
            background-color: $blue

.button-prev
    transform: rotate(90deg)

.button-next
    transform: rotate(-90deg)

@media(max-width: 576px)
    .pagination
        justify-content: center

    .info
        display: none
</style>