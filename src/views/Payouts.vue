<template lang="pug">
.inner-scroll
    header-inner
        .header-body
            .header-buttons
                v-button(
                    type="tertiary"
                    :iconSrc="isVisibleIcon('plus')"
                    @click.stop="requestPayout"
                )   Запросить выплату
                v-button(
                    type="tertiary"
                    :iconSrc="isVisibleIcon('download')"
                    @click.stop="exportPayout"
                )   Экспорт
            v-select(
                :options="currencies"
                placeholder="Курсы вылют"
                class="select-currencies"
                isReadonly
            )
                template(v-slot="{ option }")
                    .currencies
                        .currencies-name {{ option.name }}
                        .currencies-value {{ option.value }}

            .header-filters
                .filter-block(v-click-outside="closeFilter")
                    v-button(
                        type="outline"
                        iconSrc="/icons/filter.svg"
                        isIconOnly
                        @click="toggleFilter"
                    )
                    app-filter(:isOpened="isFilterOpened")

                v-search(
                    v-model="searchValue"
                    @clear="clearSearch"
                )

    main.payouts
        payouts-table(
            v-if="isDesktop"
            :table="payoutsTable"
        )
        payouts-table-mobile(
            v-else
            :table="payoutsTable"
        )
    app-pagination.payouts-pagination
</template>

<script>
import HeaderInner from '@/components/Header/HeaderInner';
import VButton from '@/components/common/VButton';
import VSearch from '@/components/common/VSearch';
import VSelect from '@/components/common/VSelect';
import AppFilter from '@/components/Filter/AppFilter';
import { PAYOUTS_TABLE } from '@/helpers/constants';
import PayoutsTable from '@/components/Table/PayoutsTable';
import AppPagination from '@/components/Pagination/AppPagination';
import PayoutsTableMobile from '@/components/Table/Mobile/PayoutsTable';
import window from '@/mixins/window';

export default {
    name: 'Payouts',

    mixins: [window],

    components: {
        HeaderInner,
        VButton,
        VSearch,
        AppFilter,
        VSelect,
        PayoutsTable,
        AppPagination,
        PayoutsTableMobile,
    },

    data() {
        return {
            searchValue: '',
            isFilterOpened: false,
            currencies: [
                {
                    name: 'USDT/RUB',
                    value: '43,83',
                },
                {
                    name: 'USDT/RUB',
                    value: '23,83'
                },
                {
                    name: 'USDT/RUB',
                    value: '83,83'
                },
            ],
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

        exportPayout() {
            this.$store.commit('modal/open', {
                component: 'ModalExport',
            });
        },

        requestPayout() {
            this.$store.commit('modal/open', {
                component: 'ModalRequestPayout',
            });
        },
    },

    created() {
        this.payoutsTable = PAYOUTS_TABLE;
    },
};
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

.select-currencies
    min-width: 160px
    ::v-deep
        .field
            border-radius: 100px
            padding: 12px 16px 12px 20px
            line-height: 20px
            min-height: 44px
            background: rgba($gray-light, 0.15)
        .placeholder
            color: $gray-dark
            left: 20px
            top: 12px
            transform: translateY(0)
        .icon
            top: 10px
            right: 16px
            transform: rotate(180deg)
        .list
            min-width: 210px
            max-width: 210px
            max-height: 260px
        .list-item
            padding: 8px 12px
            cursor: auto
            transition: none
            @media(any-hover:hover)
                &:hover
                    background-color: transparent
    &.open
        ::v-deep
            .field
                background: rgba($gray-dark, 0.15)
            .icon
                transform: rotate(0)

.currencies
    display: flex
    justify-content: space-between
    align-items: center

.currencies-name
    font-weight: 450
    color: $gray-dark

.currencies-value
    font-weight: 450

@media(max-width: 992px)
    .header-body
        flex-wrap: wrap

    .header-filters
        flex: 0 0 100%
        justify-content: flex-start

    .select-currencies
        ::v-deep 
            .list
                left: -40px

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

    .payouts-pagination
        position: fixed
        bottom: 0
        left: 0
        width: 100%
        margin-left: 0
        background-color: $white

    .select-currencies
        order: 1
        ::v-deep
            .field
                min-height: 40px
            .placeholder
                top: 10px
            .icon
                top: 8px

@media(max-width: 576px)
    .select-currencies
        flex: 1 1 100%
        ::v-deep 
            .list
                left: 0
                min-width: 100%
                max-width: 100%
</style>
