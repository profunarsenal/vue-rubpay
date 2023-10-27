<template>
    <div class="table">
        <div class="table-header">
            <div 
                v-for="item in tableItems.header" 
                :key="item.title" 
                class="header-item"
            >
                {{ item.title }}
            </div>
        </div>
        <div class="table-content">
            <div 
                v-for="item in tableItems.content" 
                :key="item.id" 
                class="table-row"
            >
                <div class="row-item">
                    <div>{{ item.id }}</div>
                    <div class="api">API</div>
                </div>
                <div class="row-item">{{ item.cashbox }}</div>
                <div class="row-item">{{ item.order }}</div>
                <div class="row-item">{{ item.writtenOff }}</div>
                <div class="row-item">{{ item.enrolled }}</div>
                <div class="row-item">{{ item.payMethod }}</div>
                <div class="row-item">
                    <div>{{ item.wallet.number }}</div>
                    <div class="system">{{ item.wallet.system }}</div>
                </div>
                <div class="row-item">
                    <div class="status success">{{ item.status }}</div>
                </div>
                <div class="row-item">{{ item.date }}</div>
                <div class="row-item">
                    <button class="button-info">
                        <img 
                            v-svg-inline
                            src="/icons/info.svg"
                        >
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
    name: "PayoutsTable",

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
.table
    height: calc(100vh - 180px)
    overflow-y: auto

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
    padding: 0 40px
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
    font-weight: 500
    line-height: 20px
    white-space: nowrap

.table-row
    position: relative
    padding: 0 40px
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
    &:nth-last-child(-n+1)
        &::before
            height: 0

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
        flex: 0 1 8.06%
    &:nth-child(2)
        flex: 0 1 6.74%
    &:nth-child(3)
        flex: 0 1 6.41%
    &:nth-child(4)
        flex: 0 1 9.87%
    &:nth-child(5)
        flex: 0 1 9.87%
    &:nth-child(6)
        flex: 0 1 11.84%
    &:nth-child(7)
        flex: 0 1 12.17%
    &:nth-child(8)
        flex: 0 1 14.47%
    &:nth-child(9)
        flex: 0 1 10.86%
    &:nth-child(10)
        flex: 0 0 40px

.button-info
    display: flex
    align-items: center
    justify-content: center
    margin: 0 auto

.api
    display: inline-block
    padding: 2px 4px
    border-radius: 6px
    background-color: rgba($gray-light, 0.5)
    line-height: 12px

.system
    color: $gray-dark

.status
    padding: 6px 12px
    border-radius: 56px
    min-width: 84px
    text-align: center
    &.success
        background-color: rgba($green, 0.2)
    &.cancel
        background-color: rgba($red, 0.2)

@media(max-width: 1366px)
    .table
        overflow-x: auto

    .table-header,
    .table-content
        min-width: 1216px
</style>