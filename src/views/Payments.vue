<template>
    <div class="inner-scroll">
        <header-inner>
        <div class="header-body">
            <div class="header-buttons">
                <v-button
                    type="tertiary"
                    :iconSrc="isVisibleIcon('plus')"
                    @click="createPayment"
                >
                    Создать платеж
                </v-button>
                <v-button
                    type="tertiary"
                    :iconSrc="isVisibleIcon('download')"
                    @click="exportPayment"
                >
                    Экспорт
                </v-button>
            </div>
            <div class="header-filters">
                <div
                    class="filter-block"
                    v-click-outside="closeFilter"
                >
                    <v-button
                        type="outline"
                        iconSrc="/icons/filter.svg"
                        isIconOnly
                        @click="toggleFilter"
                    >
                    </v-button>
                    <app-filter :isOpened="isFilterOpened" />
                </div>
                <v-search
                    v-model="searchValue"
                    @clear="clearSearch"
                />
            </div>
        </div>
        </header-inner>
        <main class="payments">
            <payments-table 
                v-if="isDesktop"
                :table="paymentsTable"
            />
            <payments-table-mobile
                v-else
                :table="paymentsTable"
            />
        </main>
        <app-pagination class="payments-pagination" />
    </div>
</template>

<script>
import HeaderInner from '@/components/Header/HeaderInner';
import VButton from '@/components/common/VButton';
import VSearch from '@/components/common/VSearch';
import AppFilter from '@/components/Filter/AppFilter';
import { PAYMENTS_TABLE } from '@/helpers/constants';
import PaymentsTable from '@/components/Table/PaymentsTable';
import AppPagination from '@/components/Pagination/AppPagination';
import PaymentsTableMobile from '@/components/Table/Mobile/PaymentsTable';
import window from '@/mixins/window';

export default {
    name: 'Payments',

    mixins: [window],

    components: {
        HeaderInner,
        VButton,
        VSearch,
        AppFilter,
        PaymentsTable,
        AppPagination,
        PaymentsTableMobile,
    },

    data() {
        return {
            searchValue: '',
            isFilterOpened: false,
        };
    },

    methods: {
        clearSearch() {
            this.searchValue = '';
        },

        toggleFilter() {
            this.isFilterOpened = !this.isFilterOpened;
        },

        closeFilter() {
            this.isFilterOpened = false;
        },

        isVisibleIcon(icon) {
            return this.isDesktop ? `/icons/${icon}.svg` : '';
        },

        createPayment() {
            this.$store.commit('modal/open', {
                component: 'ModalCreatePayment',
            });
        },

        exportPayment() {
            this.$store.commit('modal/open', {
                component: 'ModalExport',
            });
        },
    },

    created() {
        this.paymentsTable = PAYMENTS_TABLE;
    },
}
</script>

<style lang="sass" scoped>
.header-body
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    gap: 8px

.header-buttons,
.header-filters
    display: flex
    align-items: center
    justify-content: space-between
    gap: 8px

@media(max-width: 992px)
    .header-body
        flex-wrap: wrap

    .header-filters
        flex: 0 0 100%
        justify-content: flex-start

@media(max-width: 767px)
    .header-filters
        flex: 1 0 auto
        ::v-deep
            .search,
            .input
                width: 100%

    .header-buttons
        flex: 1 1 100%
        ::v-deep
            .button
                padding: 10px 16px
                flex: 1 1 50%
                justify-content: center

    .payments-pagination
        position: fixed
        bottom: 0
        left: 0
        width: 100%
        margin-left: 0
        background-color: $white
</style>
