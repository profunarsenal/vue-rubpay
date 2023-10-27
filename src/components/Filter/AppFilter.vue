<template>
    <div v-if="isOpen" class="filter-wrapper">
        <div class="filter">
            <div class="fields">
                <v-input
                    v-model="filters.id"
                    placeholder="ID"
                />
                <v-select
                    :selected="filters.status"
                    :options="statusOptions"
                    placeholder="Статус платежа"
                    @select="selectOption($event, 'status')"
                />
                <v-input
                    v-model="filters.order"
                    placeholder="Заказ"
                />
                <v-select
                    :selected="filters.payType"
                    :options="statusOptions"
                    placeholder="Методы оплаты"
                    @select="selectOption($event, 'payType')"
                />
                <v-input
                    v-model="filters.uid"
                    placeholder="UID"
                />
                <v-select
                    :selected="filters.cashbox"
                    :options="statusOptions"
                    placeholder="Касса"
                    @select="selectOption($event, 'cashbox')"
                />
                <v-select
                    :selected="filters.currency"
                    :options="statusOptions"
                    placeholder="Валюта"
                    @select="selectOption($event, 'currency')"
                />
                <v-datepicker 
                    :value="date"
                    @setDate="setDate"
                />
            </div>
            <div class="buttons">
                <v-button type="secondary">
                    Сбросить
                </v-button>
                <v-button isDisabled>
                    Применить
                </v-button>
            </div>
        </div>
    </div>
</template>

<script>
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VButton from '@/components/common/VButton';
import VDatepicker from '@/components/common/VDatepicker';

export default {
    name: 'AppFilter',

    components: {
        VInput,
        VSelect,
        VButton,
        VDatepicker,
    },

    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            filters: {
                id: '',
                status: {},
                order: '',
                payType: {},
                uid: '',
                cashbox: {},
                currency: {},
            },
            statusOptions: [
                { name: 'Все', value: 1 },
                { name: 'Выполнен', value: 2 },
            ],
            date: '',
        };
    },

    methods: {
        selectOption(option, value) {
            this.filters[value] = option;
        },

        setDate(value) {
            this.date = value;
        },
    },
};
</script>

<style lang="sass" scoped>
.filter-wrapper
    position: relative

.filter
    position: absolute
    z-index: 10
    top: 8px
    right: 0
    width: 716px
    padding: 16px
    border-radius: 28px
    background-color: $white
    border: 1px solid $gray-light
    box-shadow: 0px 6px 34px 0px rgba($black, 0.12)
    opacity: 1
    visibility: visible
    pointer-events: all

.fields
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: auto
    gap: 12px
    margin-bottom: 24px

.buttons
    display: flex
    gap: 12px
    ::v-deep .button
        flex: 0 1 50%

@media(max-width: 1124px)
    .filter-wrapper
        position: static

    .filter
        top: 80px
        right: 50%
        width: 92%
        transform: translateX(50%)

@media(max-width: 992px)
    .filter
        top: 120px

@media(max-width: 767px)
    .filter
        top: 174px
        width: 92%

    .fields
        grid-template-columns: 1fr
</style>