<template>
    <div class="content">
        <inline-svg
            src="/icons/close-sessions.svg"
            class="icon"
        />
        <h5 class="title">Закрыть все сессии</h5>
        <div class="text">Вы действительно хотите закрыть все сессии кроме текущей?</div>
        <div class="buttons">
            <v-button type="secondary">
                Отмена
            </v-button>
            <v-button>
                Закрыть
            </v-button>
        </div>
    </div>
</template>

<script>
import VButton from '@/components/common/VButton';

export default {
    name: 'ModalCloseSession',

    components: {
        VButton,
    },
};
</script>

<style lang="sass" scoped>
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
    .content
        min-width: 100%
</style>