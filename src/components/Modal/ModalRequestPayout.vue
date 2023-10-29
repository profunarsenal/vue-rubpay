<template lang="pug">
.wrapper(v-click-outside="close")
    button.close(@click="close")
        inline-svg.icon-close(src="/icons/close.svg")
    .content
        h4.title Новая выплата
        .labels
            v-select(
                placeholder="Касса"
                :options="items"
                :selected="form.checkout"
                @select="setValue"
            )

            v-input(placeholder="Валюта")

            v-input(placeholder="Платежная система")

            v-input(placeholder="Сумма")

            v-input(placeholder="Номер заказа")

            v-input(placeholder="Реквизиты получателя") 

        .buttons
            v-button(type="secondary") Отмена
            v-button(isDisabled) Создать
</template>

<script>
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VButton from '@/components/common/VButton';

export default {
    name: 'ModalRequestPayout',

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

        close() {
            this.$store.commit('modal/close');
        },
    }
};
</script>

<style lang="sass" scoped>
.wrapper
    position: relative
    top: 0
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