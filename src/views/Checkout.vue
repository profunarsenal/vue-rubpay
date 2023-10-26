<template>
    <header-inner>
        <v-button
            type="tertiary"
            iconSrc="/icons/plus.svg"
        >
            Добавить
        </v-button>
    </header-inner>
    <main class="checkout">
        <checkout-table
            class="checkout-table"
            :table="checkoutTable"
        />
    </main>
</template>

<script>
import HeaderInner from '@/components/Header/HeaderInner';
import VButton from '@/components/common/VButton';
import { CHECKOUT_TABLE } from '@/helpers/constants';
import CheckoutTable from '@/components/Table/CheckoutTable.vue';

export default {
    name: 'Checkout',

    components: {
        HeaderInner,
        VButton,
        CheckoutTable,
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
    height: calc(100vh - 132px)
    overflow-y: auto
</style>