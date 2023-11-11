
<template lang="pug">
.login
    .form
        .logo
            img(src="/icons/logo.svg")
        .labels
            v-input(placeholder="Логин")
            v-input(placeholder="Пароль")
            v-input(placeholder="Код")
            v-button Войти
        a.support(
            href="#"
            target="_blank"
        )
            inline-svg.icon(src="/icons/email.svg")
            span support@rubpay.ru
</template>

<script>
import VInput from '@/components/common/VInput';
import VButton from '@/components/common/VButton';

export default {
    name: 'LoginPage',

    components: {
        VInput,
        VButton,
    }
}
</script>

<style lang="sass" scoped>
.login
    display: flex
    align-items: center
    justify-content: center
    height: 100%
    background-color: rgba($gray-light, 0.4)

.logo
    display: flex
    align-items: center
    justify-content: center
    padding: 20px 0

.form
    display: flex
    flex-direction: column
    gap: 48px
    min-width: 320px
    padding: 20px
    border-radius: 32px
    background: $white
    box-shadow: 0px 21px 34px 0px rgba(0, 0, 0, 0.06)

.labels
    display: flex
    flex-direction: column
    gap: 12px

.icon
    transition: all 0.3s ease

.support
    display: flex
    align-items: center
    justify-content: center
    gap: 10px
    color: $black
    font-size: 14px
    line-height: 24px
    padding: 8px 0
    border-radius: 20px
    background: rgba($gray-light, 0.3)
    transition: all 0.3s ease
    @media(any-hover:hover)
        &:hover
            background: rgba($blue, 0.1)
            .icon
                fill: $blue
                fill-opacity: 1

@media(max-width: 480px)
    .form
        min-width: 90%
</style>