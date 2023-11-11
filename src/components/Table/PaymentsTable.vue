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
            class=""
            @click.stop="openInfo"
        )
            .row-item {{ item.id }}
            .row-item {{ item.order }}
            .row-item {{ item.cashbox }}
            .row-item {{ item.sum }}
            .row-item {{ item.enrolled }}
            .row-item {{ item.paySystem }}
            .row-item
                .status(:class="setStatusClass(item.status)") {{ setStatus(item.status) }}
            .row-item {{ item.date }}
            .row-item {{ item.checkId }}
            .row-item {{ item.uid }}
            .row-item
                button.button-info(@click.stop="openInfo")
                    inline-svg.icon(src="/icons/info.svg")
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
    name: "PaymentsTable",

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

    methods: {
        setStatusClass(status) {
            return status ? 'success' : 'cancel';
        },

        setStatus(status) {
            return status ? 'Выполнено' : 'Отмена';
        },

        openInfo() {
            this.$store.commit('modal/open', {
                component: 'ModalPaymentInfo',
                componentData: {
                    items: [
                        { title: 'Номера заказа', value: '52358', key: 'test'},
                        { title: 'Кошелек', value: '5336 6902 6861 0211', key: 'test'},
                        { title: 'Дата создания', value: '04.06.23 14:20', key: 'test'},
                        { title: 'Дата выплаты', value: '04.06.23 14:20', key: 'test'},
                        { title: 'Сумма зачисления', value: '279₽', key: 'test'}
                    ],
                },
            });
        },
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
    font-weight: 450
    line-height: 20px
    white-space: nowrap

.table-row
    position: relative
    padding: 0 40px
    display: flex
    align-items: center
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
    padding: 4px 0
    font-size: 12px
    line-height: 20px
    word-break: break-word

.header-item,
.row-item
    overflow-x: hidden
    &:nth-child(1)
        flex: 0 1 8.06%
    &:nth-child(2)
        flex: 0 1 6.91%
    &:nth-child(3)
        flex: 0 1 6.58%
    &:nth-child(4)
        flex: 0 1 10.36%
    &:nth-child(5)
        flex: 0 1 10.36%
    &:nth-child(6)
        flex: 0 1 10.86%
    &:nth-child(7)
        flex: 0 1 8.55%
    &:nth-child(8)
        flex: 0 1 10.86%
    &:nth-child(9)
        flex: 0 1 8.96%
    &:nth-child(10)
        flex: 0 1 9.05%
    &:nth-child(11)
        flex: 0 0 40px

.button-info
    display: flex
    align-items: center
    justify-content: center
    margin: 0 auto

.icon
    transition: all 0.3s ease
    @media(any-hover:hover)
        &:hover
            fill: $blue
            fill-opacity: 1

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

    .status
        padding: 6px
        word-break: normal
</style>