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

                .value(v-if="key.title === 'Название'") {{ item.name }}

                .value(v-if="key.title === 'URL'") {{ item.url }}

                .value(v-if="key.title === 'Активен'")
                    inline-svg(:src="setIconActive(item.active)")

                .value(v-if="key.title === 'Баланс'")
                    .balance
                        .balance-item
                            .sum {{ item.balance.RUB }}
                            .currency RUB
                        .balance-item
                            .sum {{ item.balance.KZT }}
                            .currency KZT
                        .balance-item
                            .sum {{ item.balance.UAH }}
                            .currency UAH

                .value(v-if="key.title === 'API'")
                    .api
                        button(@click="toggleApi(item)")
                            inline-svg(:src="iconSrc(item.isShowApi)")
                        .api-value(v-if="item.isShowApi") {{ item.api }}

            .buttons
                v-button(
                    type="outline"
                    @click="openInfo"
                ) Подробнее
                v-button(
                    type="outline"
                    @click="edit"
                ) Редактировать
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import VButton from '@/components/common/VButton';

export default {
    name: 'CheckoutTableMobile',

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
        setIconActive(isActive) {
            return isActive ? '/icons/check.svg' : '/icons/close.svg';
        },

        toggleApi(item) {
            item.isShowApi = item.isShowApi ? false : true;
        },

        openInfo() {
            this.$store.commit('modal/open', {
                component: 'ModalCheckoutInfo',
            });
        },

        edit() {
            this.$store.commit('modal/open', {
                component: 'ModalCheckout',
                componentData: {
                    isEdit: true,
                    apiKey: 't5y6t5',
                },
            });
        },

        iconSrc(isShowApi) {
            return isShowApi ? '/icons/eye-hide.svg' : '/icons/eye.svg'
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

.balance
    display: flex
    flex-direction: column
    font-size: 12px
    line-height: 20px

.balance-item
    display: flex
    gap: 4px

.currency
    color: $gray-dark

.api
    display: flex
    gap: 8px

.api-value
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
    max-width: 100px

.buttons
    display: flex
    gap: 8px
    word-break: normal
    margin-top: 12px
    padding: 0 20px
    ::v-deep
        .button
            flex: 1 1 50%
</style>