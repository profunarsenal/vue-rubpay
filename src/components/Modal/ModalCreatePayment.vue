<template lang="pug">
.content
    h4.title Новый платеж
    .labels
        v-select(
            placeholder="Касса"
            :options="items"
            :selected="form.checkout"
            @select="setValue"
        )

        v-input(placeholder="Платежная система")

        v-input(placeholder="Сумма")

        v-input(placeholder="Номер заказа")

        v-input(placeholder="Валюта")

    .buttons
        v-button(type="secondary") Отмена
        v-button(isDisabled) Создать
</template>

<script>
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VButton from '@/components/common/VButton';

export default {
    name: 'ModalCreatePayment',

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
            items: [
                { name: 'Все', value: 1 },
                { name: '4', value: 2 },
            ],
            form: {
                checkout: {},
            },
        };
    },

    methods: {
        setValue(value) {
            this.form.checkout = value;
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