<template lang="pug">
.wrapper(v-click-outside="close")
    button.close(@click="close")
        inline-svg.icon-close(src="/icons/close.svg")
    .content
        h4.title Информация о тарифах
        .tabs
            button.tab(
                v-for="(tab, index) in tabs"
                :key="tab"
                :class="{'active': index === activeTab}" 
                @click="activeTab = index"
            )
                span.text {{ tab }}

        checkout-info-table(
            v-if="isDesktop"
            :table="checkoutInfoTable"
        )

        checkout-info-mobile-table(
            v-else
            :table="checkoutInfoTable"
        )
</template>

<script>
import window from '@/mixins/window';
import CheckoutInfoTable from '@/components/Table/CheckoutInfoTable';
import CheckoutInfoMobileTable from '@/components/Table/Mobile/CheckoutInfoTable';
import { CHECKOUT_INFO_TABLE } from '@/helpers/constants';

export default {
    name: 'ModalCheckoutInfo',

    components: {
        CheckoutInfoTable,
        CheckoutInfoMobileTable,
    },

    mixins: [window],

    props: {
        componentData: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        return {
            activeTab: 0,
        };
    },

    computed: {
        tabs() {
            const tab = this.isDesktop ? 'Прием платежей' : 'Прием';
            return [tab, 'Выплата']
        },
    },

    methods: {
        close() {
            this.$store.commit('modal/close');
        },
    },

    created() {
        this.checkoutInfoTable = CHECKOUT_INFO_TABLE;
    },
};
</script>

<style lang="sass" scoped>
.wrapper
    position: relative
    top: 0
    opacity: 0
    visibility: hidden
    pointer-events: none
    width: min-content
    margin: 40px auto
    padding: 20px 16px 16px 16px
    background-color: $white
    border-radius: 28px
    transition: all 0.3s ease

.close
    position: absolute
    width: 24px
    height: 24px
    top: -18px
    right: -18px
    background-color: transparent
    @media(any-hover:hover)
        &:hover
            .icon-close
                fill: $white

.icon-close
    width: 24px
    height: 24px
    fill: rgba($white, 0.7)
    transition: all 0.3s ease

.content
    min-width: 656px

.title
    margin-bottom: 24px
    font-weight: 500
    font-size: 20px
    line-height: 28px
    text-align: center

.tabs
    position: relative
    width: 100%
    padding: 2px
    margin-bottom: 16px
    border-radius: 12px
    display: flex
    justify-content: center
    align-items: center
    background-color: rgba($gray-light, 0.6)

.tab
    position: relative
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    font-weight: 450
    padding: 12px 16px
    font-size: 14px
    line-height: 20px
    color: $gray-dark
    border-radius: 10px
    background-color: transparent
    transition: color 0.3s ease
    &::after
        content: ''
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: $white
        border-radius: 10px
        transform: scale(0)
        transition: transform 0.3s ease
    &.active
        color: $black
        &::after
            background-color: $white
            transform: scale(1)
    @media(any-hover:hover)
        &:hover
            color: $black
    .text
        position: relative
        z-index: 1

@media(max-width: 767px)
    .wrapper
        width: 90%
    .close
        top: -18px
        right: -14px
    .icon-close
        fill: $white
    .content
        min-width: 100%
</style>