<template lang="pug">
.table
    .table-header
        .header-item(
            v-for="item in tableItems.header" 
            :key="item.title"
        ) {{ item.title }}

    .table-content
        .table-row(
            v-for="item in tableItems.content" 
            :key="item.id"
        ) 
            .row-item {{ item.tariff }}
            .row-item {{ item.limit }}
            .row-item {{ item.comission }}
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
    name: "CheckoutInfoTable",

    props: {
        table: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        return {
            tableItems: cloneDeep(this.table),
        };
    },
};
</script>

<style lang="sass" scoped>
.table-header
    position: sticky
    display: flex
    align-items: center
    justify-content: space-between
    gap: 20px
    border-bottom: 1px solid $gray-light
    z-index: 3
    top: 0
    left: 0
    background-color: #FFFFFF
    padding: 0 12px
    &::after
        content: ''
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: rgba($gray-light, 0.15)
    &::before
        content: ""
        position: absolute
        z-index: 10
        top: 0
        left: 0
        width: 100%
        height: 1px
        background-color: $gray-light

.header-item
    padding: 11.5px 0
    color: $gray-dark
    font-size: 14px
    font-weight: 450
    line-height: 20px
    white-space: nowrap

.table-row
    position: relative
    padding: 0 12px
    display: flex
    align-items: flex-start
    justify-content: space-between
    gap: 20px
    cursor: pointer
    @media(any-hover:hover)
        &:hover
            background-color: rgba($gray-light, 0.10)
    &::before
        content: ""
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 1px
        background-color: $gray-light
    &:nth-last-child(-n+2)
        &::before
            height: 0
    &:nth-last-child(-n+1)
        &::before
            height: 1px

.row-item
    position: relative
    padding: 10px 0
    font-size: 12px
    line-height: 20px
    word-break: break-word

.header-item,
.row-item
    overflow-x: hidden
    &:nth-child(1)
        flex: 0 1 49.39%
    &:nth-child(2)
        flex: 0 1 30.49%
    &:nth-child(3)
        flex: 0 1 16.46%
</style>