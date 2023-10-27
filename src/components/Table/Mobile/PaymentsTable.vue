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
                        {{ item.id }}
                    </div>

                    <div 
                        v-if="key.title === 'Заказ'" 
                        class="value"
                    >
                        {{ item.order }}
                    </div>

                    <div 
                        v-if="key.title === 'Касса'" 
                        class="value"
                    >
                        {{ item.cashbox }}
                    </div>

                    <div 
                        v-if="key.title === 'Сумма'" 
                        class="value"
                    >
                        {{ item.sum }}
                    </div>

                    <div 
                        v-if="key.title === 'Зачислено'" 
                        class="value"
                    >
                        {{ item.enrolled }}
                    </div>

                    <div 
                        v-if="key.title === 'ПС'" 
                        class="value"
                    >
                        {{ item.paySystem }}
                    </div>

                    <div 
                        v-if="key.title === 'Статус'" 
                        class="value"
                    >
                        <div :class="setStatusClass(item.status)">
                            {{ setStatus(item.status) }}
                        </div>
                    </div>

                    <div 
                        v-if="key.title === 'Дата'" 
                        class="value"
                    >
                        {{ item.date }}
                    </div>

                    <div 
                        v-if="key.title === 'Чек ID'" 
                        class="value"
                    >
                        {{ item.checkId }}
                    </div>

                    <div 
                        v-if="key.title === 'UID'" 
                        class="value"
                    >
                        {{ item.uid }}
                    </div>

                </div>
                <div class="buttons">
                    <v-button
                        type="outline"
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
            const statusClass = status ? 'success' : 'cancel';
            return ['status', statusClass];
        },

        setStatus(status) {
            return status ? 'Выполнено' : 'Отмена';
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