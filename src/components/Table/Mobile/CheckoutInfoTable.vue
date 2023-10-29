<template lang="pug">
.table
    ul.list
        li.item(
            v-for="item in tableItems.content"
            :key="item.id"
        )
            .row(
                v-for="key in tableItems.header"
                :key="key.title"
            )
                .title {{ key.title }}

                .value(v-if="key.title === 'Тариф'") {{ item.tariff }}

                .value(v-if="key.title === 'Лимит'") {{ item.limit }}

                .value(v-if="key.title === 'Комиссия'") {{ item.comission }}
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
    name: 'CheckoutInfoTableMobile',

    props: {
        table: {
            type: Object,
            default: () => ({})
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
.list
    display: flex
    flex-direction: column

.item
    position: relative
    display: flex
    flex-direction: column
    padding: 8px 0 16px 0
    &::before 
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 1px
        background-color: $gray-light

.row
    display: flex
    align-items: flex-start
    justify-content: flex-start
    gap: 20px
    padding: 0 20px

.title
    flex: 0 1 45%
    padding: 6px 0
    font-size: 12px
    font-weight: 600
    line-height: 20px
    color: $black

.value
    flex: 1 0 45%
    display: flex
    padding: 6px 0
    font-size: 12px
    line-height: 20px
    overflow: hidden
    word-break: break-word
</style>