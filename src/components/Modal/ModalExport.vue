<template>
    <div class="content">
        <h4 class="title">Экспорт данных</h4>
        <div class="labels">
            <v-select 
                placeholder="Касса"
                :options="items"
                :selected="form.checkout"
                @select="selectOption($event, 'checkout')"
            />
            <v-datepicker 
                :value="date"
                @setDate="setDate"
            />
            <v-select
                :selected="form.status"
                :options="statusOptions"
                placeholder="Статус платежа"
                @select="selectOption($event, 'status')"
            />
        </div>
        <div class="buttons">
            <v-button type="secondary">
                Отмена
            </v-button>
            <v-button isDisabled>
                Выгрузить
            </v-button>
        </div>
    </div>
</template>

<script>
import VSelect from '@/components/common/VSelect';
import VButton from '@/components/common/VButton';
import VDatepicker from '@/components/common/VDatepicker';

export default {
    name: 'ModalExport',

    components: {
        VSelect,
        VButton,
        VDatepicker,
    },

    props: {
        componentData: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        return {
            items: [
                { name: 'Все', value: 1 },
                { name: '4', value: 2 },
            ],
            statusOptions: [
                { name: 'Все', value: 1 },
                { name: 'Выполнен', value: 2 },
            ],
            form: {
                checkout: {},
                status: {},
            },
            date: '',
        };
    },

    methods: {
        selectOption(value, field) {
            this.form[field] = value;
        },

        setDate(value) {
            this.date = value;
        },
    }
};
</script>

<style lang="sass" scoped>
.content
    min-width: 336px

.title
    margin-bottom: 24px
    font-weight: 500
    font-size: 20px
    line-height: 28px
    text-align: center

.labels
    display: flex
    flex-direction: column
    gap: 20px
    margin-bottom: 24px

.buttons
    display: flex
    gap: 8px
    ::v-deep
        .button
            flex: 1 1 50%

@media(max-width: 767px)
    .content
        min-width: 100%
</style>