<template lang="pug">
.inner-scroll
    header-inner
        v-button(
            type="tertiary"
            iconSrc="/icons/plus.svg"
            @click="addCheckout"
        ) Добавить

    main.checkout
        checkout-table.checkout-table(
            v-if="isDesktop"
            :table="checkoutTable"
        )
        checkout-table-mobile(
            v-else
            :table="checkoutTable"
        )

    app-pagination.checkout-pagination(v-if="!isDesktop")
</template>

<script>
import HeaderInner from '@/components/Header/HeaderInner';
import VButton from '@/components/common/VButton';
import { CHECKOUT_TABLE } from '@/helpers/constants';
import CheckoutTable from '@/components/Table/CheckoutTable';
import CheckoutTableMobile from '@/components/Table/Mobile/CheckoutTable';
import AppPagination from '@/components/Pagination/AppPagination';
import window from '@/mixins/window';

export default {
    name: 'Checkout',

    mixins: [window],

    components: {
        HeaderInner,
        VButton,
        CheckoutTable,
        CheckoutTableMobile,
        AppPagination,
    },

    methods: {
        addCheckout() {
            this.$store.commit('modal/open', {
                component: 'ModalCheckout',
            });
        },
    },

    created() {
        this.checkoutTable = CHECKOUT_TABLE;
    },
};
</script>

<style lang="sass" scoped>
.checkout
    flex: 1 1 auto

.checkout-table
    height: calc(100vh - 128px)
    overflow-y: auto

@media(max-width: 767px)
    .checkout-pagination
        position: fixed
        bottom: 0
        left: 0
        width: 100%
        margin-left: 0
        background-color: $white
</style>