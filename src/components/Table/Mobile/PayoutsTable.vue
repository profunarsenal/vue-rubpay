<template>
    <div class="table">
        <ul class="list">
            <li 
                v-for="item in tableItems.content" 
                :key="item.id" 
                class="item"
            >
                <div 
                    v-for="key in headerItems" 
                    :key="key.title" 
                    class="row"
                >
                    <div class="title">{{ key.title }}</div>

                    <div 
                        v-if="key.title === 'ID'" 
                        class="value"
                    >
                        <div>{{ item.id }}</div>
                        <div class="api">API</div>
                    </div>

                    <div 
                        v-if="key.title === 'Касса'" 
                        class="value"
                    >
                        <div>{{ item.cashbox }}</div>
                    </div>

                    <div 
                        v-if="key.title === 'Заказ'" 
                        class="value"
                    >
                        <div>{{ item.order }}</div>
                    </div>

                    <div 
                        v-if="key.title === 'Списано'" 
                        class="value"
                    >
                        <div>{{ item.writtenOff }}</div>
                    </div>

                    <div 
                        v-if="key.title === 'Зачислено'" 
                        class="value"
                    >
                        <div>{{ item.enrolled }}</div>
                    </div>

                    <div 
                        v-if="key.title === 'Способ выплаты'" 
                        class="value"
                    >
                        <div>{{ item.payMethod }}</div>
                    </div>

                    <div 
                        v-if="key.title === 'Кошелек'" 
                        class="value"
                    >
                        <div class="wallet">
                            <div>{{ item.wallet.number }}</div>
                            <div class="system">{{ item.wallet.system }}</div>
                        </div>
                    </div>

                    <div 
                        v-if="key.title === 'Статус'" 
                        class="value"
                    >
                        <div class="status success">{{ item.status }}</div>
                    </div>

                    <div 
                        v-if="key.title === 'Дата'" 
                        class="value"
                    >
                        <div>{{ item.date }}</div>
                    </div>

                </div>
                <div class="buttons">
                    <v-button
                        type="outline"
                        @click="openInfo"
                    >
                        Подробнее
                    </v-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import VButton from '@/components/common/VButton';

export default {
    name: 'PayoutsTableMobile',

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
    align-items: center
    gap: 4px
    padding: 6px 0
    font-size: 12px
    line-height: 20px
    overflow: hidden
    word-break: break-all

.buttons
    display: flex
    gap: 8px
    word-break: normal
    margin-top: 12px
    padding: 0 20px
    ::v-deep
        .button
            flex: 1 1 50%

.api
    display: inline-block
    padding: 2px 4px
    border-radius: 6px
    background-color: rgba($gray-light, 0.5)
    line-height: 12px

.wallet
    display: flex
    flex-direction: column

.system
    color: $gray-dark

.status
    padding: 6px 12px
    border-radius: 56px
    min-width: 84px
    text-align: center
    word-break: break-word
    &.success
        background-color: rgba($green, 0.2)
    &.cancel
        background-color: rgba($red, 0.2)
</style>