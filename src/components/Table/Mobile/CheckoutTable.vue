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
                        v-if="key.title === 'Название'" 
                        class="value"
                    >
                        {{ item.name }}
                    </div>

                    <div 
                        v-if="key.title === 'URL'" 
                        class="value"
                    >
                        {{ item.url }}
                    </div>

                    <div 
                        v-if="key.title === 'Активен'" 
                        class="value"
                    >
                        <img :src="setIconActive(item.active)">
                    </div>

                    <div 
                        v-if="key.title === 'Баланс'" 
                        class="value"
                    >
                        <div class="balance">
                            <div class="balance-item">
                                <span class="sum">{{ item.balance.RUB }}</span>
                                <span class="currency">RUB</span>
                            </div>
                            <div class="balance-item">
                                <span class="sum">{{ item.balance.KZT }}</span>
                                <span class="currency">KZT</span>
                            </div>
                            <div class="balance-item">
                                <span class="sum">{{ item.balance.UAH }}</span>
                                <span class="currency">UAH</span>
                            </div>
                        </div>
                    </div>

                    <div 
                        v-if="key.title === 'API'" 
                        class="value"
                    >
                        <div class="api">
                            <button @click="toggleApi(item)">
                                <img v-if="item.isShowApi" src="/icons/eye-hide.svg">
                                <img v-else src="/icons/eye.svg">
                            </button>
                            <span
                                v-if="item.isShowApi"
                                class="api-value"
                            >
                                {{ item.api }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <v-button
                        type="outline"
                    >
                        Подробнее
                    </v-button>
                    <v-button
                        type="outline"
                    >
                        Редактировать
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