<template>
    <header-inner>
        <div class="header-body">
            <div class="header-buttons">
                <v-button
                    type="tertiary"
                    iconSrc="/icons/plus.svg"
                >
                    Создать платеж
                </v-button>
                <v-button
                    type="tertiary"
                    iconSrc="/icons/download.svg"
                >
                    Экспорт
                </v-button>
            </div>
            <div class="header-filters">
                <div class="filter-block">
                    <v-button
                        type="outline"
                        iconSrc="/icons/filter.svg"
                        isIconOnly
                        @click="toggleFilter"
                    >
                    </v-button>
                    <app-filter :isOpen="isFilterOpen"/>
                </div>
                <v-search 
                    v-model="searchValue"
                    @clear="clearSearch"
                />
            </div>
        </div>
    </header-inner>
    <main class="payments">
        
    </main>
</template>

<script>
import HeaderInner from '@/components/Header/HeaderInner';
import VButton from '@/components/common/VButton';
import VSearch from '@/components/common/VSearch';
import AppFilter from '@/components/Filter/AppFilter';

export default {
    name: 'Payments',

    components: {
        HeaderInner,
        VButton,
        VSearch,
        AppFilter,
    },

    data() {
        return {
            searchValue: '',
            isFilterOpen: false,
        };
    },

    methods: {
        clearSearch() {
            this.searchValue = '';
        },

        toggleFilter() {
            this.isFilterOpen = !this.isFilterOpen;
        },
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
</style>
