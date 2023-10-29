<template lang="pug">
.wrapper(v-click-outside="close")
    button.close(@click="close")
        inline-svg.icon-close(src="/icons/close.svg")
    .content
        inline-svg.icon(src="/icons/exit.svg")
        h5.title Выход из аккаунта
        .text Вы действительно хотите выйти из аккаунта?
        .buttons
            v-button(type="secondary") Отмена
            v-button Выйти
</template>

<script>
import VButton from '@/components/common/VButton';

export default {
    name: 'ModalExit',

    components: {
        VButton,
    },

    methods: {
        close() {
            this.$store.commit('modal/close');
        },
    },
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
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    min-width: 336px

.icon
    width: 56px
    height: 56px
    margin-bottom: 12px
    fill: $gray-dark
    fill-opacity: 0.6

.title
    margin-bottom: 8px
    font-size: 20px
    font-weight: 500
    line-height: 28px

.text
    margin-bottom: 24px
    font-size: 14px
    line-height: 24px
    color: $gray-dark
    text-align: center

.buttons
    display: flex
    align-self: normal
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