<template>
    <form class="content">
        <h4 class="title">Добавить новую кассу</h4>
        <div class="labels">
            <v-input
                placeholder="Название"
            />
            <v-input
                placeholder="URL"
            />
            <v-input
                placeholder="Success URL"
            />
            <v-input
                placeholder="Error URL"
            />
            <v-input
                placeholder="Notification URL (Платежи)"
            />
            <v-input
                placeholder="Notification URL (Выплаты)"
            />
            <v-select 
                placeholder="Кто платит комиссию"
                :options="commissionSheet"
                :selected="form.commission"
                @select="setCommission"
            />
            <v-input
                v-if="isEdit"
                v-model="form.apiKey"
                placeholder="API KEY"
                isDisabled
            />
        </div>
        <div class="buttons">
            <v-button type="secondary">
                Отмена
            </v-button>
            <v-button isDisabled>
                Добавить
            </v-button>
        </div>
    </form>
</template>

<script>
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VButton from '@/components/common/VButton';

export default {
    name: 'ModalCheckout',

    components: {
        VInput,
        VSelect,
        VButton,
    },

    props: {
        componentData: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        return {
            commissionSheet: [
                { name: 'Магазин', value: 1 },
                { name: 'Получатель', value: 2 },
                { name: 'Магазин', value: 3 },
                { name: 'Получатель', value: 5 },
            ],
            form: {
                commission: {},
                apiKey: this.componentData?.apiKey || '',
            }
        };
    },

    computed: {
        isEdit() {
            return this.componentData?.isEdit;
        },
    },

    methods: {
        setCommission(value) {
            this.form.commission = value;
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