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
                <div class="row-item">
                    <inline-svg :src="setIconActive(item.active)"/>
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
                    <button 
                        @click="toggleApi(item)"
                        class="api-button"
                    >
                        <img v-if="item.isShowApi" src="/icons/eye-hide.svg">
                        <img v-else src="/icons/eye.svg">
                        <v-tooltip class="api-tooltip">
                            {{ tooltipText(item.isShowApi) }}
                        </v-tooltip>
                    </button>
                    <span
                        v-if="item.isShowApi"
                        class="api-value"
                    >
                        {{ item.api }}
                    </span>
                </div>
                <div class="row-item">
                    <button 
                        class="button-info"
                        @click="openInfo"
                    >
                        <inline-svg src="/icons/info.svg" />
                    </button>
                </div>
                <button 
                    class="button-edit"
                    @click="edit"
                >
                    <inline-svg src="/icons/edit.svg" />
                </button>
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
import VTooltip from '@/components/common/VTooltip';

export default {
    name: "CheckoutTable",

    components: {
        VTooltip,
    },

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

        tooltipText(isShowApi) {
            return isShowApi ? 'Скрыть информацию' : 'Показать информацию';
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
            .button-edit
                opacity: 1
                visibility: visible
                pointer-events: all
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
        flex: 0 1 7.07%
    &:nth-child(2)
        flex: 0 1 16.45%
    &:nth-child(3) 
        flex: 0 1 21.38%
    &:nth-child(4) 
        flex: 0 1 11.51%
    &:nth-child(5) 
        flex: 0 1 13.82%
    &:nth-child(6) 
        flex: 0 1 17.93%
    &:nth-child(7) 
        flex: 0 1 40px

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

.api-button
    @media(any-hover:hover)
        &:hover
            .api-tooltip
                opacity: 1
                visibility: visible
                pointer-events: all

.api-tooltip
    top: 3px
    left: 30px

.api-value
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
    max-width: 100px

.button-info
    display: flex
    align-items: center
    justify-content: center
    margin: 0 auto

.button-edit
    position: absolute
    top: 0
    right: 40px
    opacity: 0
    visibility: hidden
    pointer-events: none

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

@media(max-width: 1366px)
    .table
        overflow-x: auto

    .table-header,
    .table-content
        min-width: 1216px
</style>