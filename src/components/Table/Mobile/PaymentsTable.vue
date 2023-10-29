<template lang="pug">
.table
    ul.list
        li.item(
            v-for="item in tableItems.content" 
            :key="item.id"
        )
            .row(
                v-for="key in headerItems" 
                :key="key.title"
            )
                .title {{ key.title }}

                .value(v-if="key.title === 'ID'") {{ item.id }}

                .value(v-if="key.title === 'Заказ'") {{ item.order }}

                .value(v-if="key.title === 'Касса'") {{ item.cashbox }}

                .value(v-if="key.title === 'Сумма'") {{ item.sum }}

                .value(v-if="key.title === 'Зачислено'") {{ item.enrolled }}

                .value(v-if="key.title === 'ПС'") {{ item.paySystem }}

                .value(v-if="key.title === 'Статус'")
                    .status(:class="setStatusClass(item.status)") {{ setStatus(item.status) }}

                .value(v-if="key.title === 'Дата'") {{ item.date }}

                .value(v-if="key.title === 'Чек ID'") {{ item.checkId }}

                .value(v-if="key.title === 'UID'") {{ item.uid }}

            .buttons
                v-button(
                    type="outline"
                    @click="openInfo"
                ) Подробнее
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import VButton from '@/components/common/VButton';

export default {
    name: 'PaymentsTableMobile',

    components: {
        VButton,
    },

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

    computed: {
        headerItems() {
            return this.tableItems.header.filter(item => item.title !== 'Инфо');
        },
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
    font-size: 14px
    font-weight: 450
    line-height: 20px
    color: $gray-dark

.value
    flex: 1 0 45%
    display: flex
    padding: 6px 0
    font-size: 12px
    line-height: 20px
    overflow: hidden
    word-break: break-word

.buttons
    display: flex
    gap: 8px
    word-break: normal
    margin-top: 12px
    padding: 0 20px
    ::v-deep
        .button
            flex: 1 1 50%

.status
    padding: 6px 12px
    border-radius: 56px
    min-width: 84px
    text-align: center
    &.success
        background-color: rgba($green, 0.2)
    &.cancel
        background-color: rgba($red, 0.2)
</style>