<template lang="pug">
.error
    .content
        .image
            img(src="/icons/error.svg")
        .title Страница не найдена
        .text Страница, на которую вы пытаетесь попасть, не существует или была удалена. Перейдите на главную страницу
        v-button.button-error(@click="goToPage") На главную
</template>

<script>
import VButton from '@/components/common/VButton';

export default {
    name: 'Error',

    components: {
        VButton,
    },

    methods: {
        goToPage() {
            this.$router.push('/');
        },
    },
};
</script>

<style lang="sass" scoped>
.error
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    height: 100%

.content
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    max-width: 350px
    text-align: center

.image
    margin-bottom: 32px

.title
    margin-bottom: 4px
    font-size: 20px
    font-weight: 500
    line-height: 28px

.text
    margin-bottom: 16px
    font-size: 14px
    line-height: 24px
    color: $gray-dark

@media(max-width: 576px)
    .content
        max-width: 280px

    .image img
        width: 200px
        height: 200px
</style>
