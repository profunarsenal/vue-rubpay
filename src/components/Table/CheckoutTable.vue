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
                <div class="row-item">{{ item.id }}</div>
                <div class="row-item">{{ item.name }}</div>
                <div class="row-item">{{ item.url }}</div>
                <div class="row-item" key="icon">
                    <img 
                        v-svg-inline
                        :src="setIconActive(item.active)"
                    >
                </div>
                <div class="row-item balance">
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
                <div class="row-item api">
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
                <div class="row-item info">
                    <button>
                        <img 
                            v-svg-inline
                            src="/icons/info.svg"
                        >
                    </button>
                </div>
            </div>
            <div class="table-row total">
                <div class="row-item">Итого</div>
                <div class="row-item"></div>
                <div class="row-item"></div>
                <div class="row-item"></div>
                <div class="row-item balance">
                    <div class="balance-item">
                        <span class="sum">1,135,05</span>
                        <span class="currency">RUB</span>
                    </div>
                    <div class="balance-item">
                        <span class="sum">295,565,58</span>
                        <span class="currency">KZT</span>
                    </div>
                    <div class="balance-item">
                        <span class="sum">96,00</span>
                        <span class="currency">UAH</span>
                    </div>
                </div>
                <div class="row-item"></div>
                <div class="row-item"></div>
            </div>
        </div>
    </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
    name: "CheckoutTable",

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
        setIconActive(isActive) {
            return isActive ? '/icons/check.svg' : '/icons/close.svg';
        },

        toggleApi(item) {
            item.isShowApi = item.isShowApi ? false : true;
        },
    }
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
    padding: 0 80px 0 40px
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
    padding: 0 80px 0 40px
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
    white-space: nowrap

.header-item,
.row-item
    overflow-x: hidden
    &:nth-child(1)
        flex: 0 0 80px
    &:nth-child(2)
        flex: 0 0 220px
    &:nth-child(3)
        flex: 0 0 220px
    &:nth-child(4)
        flex: 0 0 88px
    &:nth-child(5)
        flex: 0 0 148px
    &:nth-child(6)
        flex: 0 0 180px
    &:nth-child(7)
        flex: 0 0 40px

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

.info
    text-align: center

.total
    position: sticky
    padding: 0 80px 0 40px
    bottom: 0
    width: 100%
    background-color: $white
    &::before
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 1px
        background-color: $gray-light
    @media(any-hover:hover)
        &:hover
            background-color: $white
</style>