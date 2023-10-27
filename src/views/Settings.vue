<template>
    <main class="settings">
        <div class="info">
            <h2 class="title">Основная информация</h2>
            <form class="form">

                <div class="labels">
                    <v-input
                        v-model="user.email"
                        placeholder="E-mail"
                    />
                    <v-input
                        v-model="user.password"
                        placeholder="Пароль"
                        type="password"
                    />
                    <v-input
                        v-model="user.telegram"
                        placeholder="Telegram"
                    />
                    <v-input
                        v-model="user.telegramId"
                        placeholder="Telegram ID"
                    />
                </div>

                <a class="bot" href="#">
                    <div class="bot-icon">
                        <img src="@/assets/img/telegram.svg" alt="@RubPayNotifyBot">
                    </div>
                    <div class="bot-content">
                        <div class="bot-title">Наш телеграм бот</div>
                        <div class="bot-subtitle">@RubPayNotifyBot</div>
                    </div>
                </a>

                <v-button
                    class="settings-button"
                    isDisabled
                >
                    Сохранить
                </v-button>
            </form>
        </div>
        <div class="sessions">
            <div class="sessions-header">
                <h2 class="title">Активные сессии</h2>
                <button class="sessions-close">Закрыть все сессии кроме текущей</button>
            </div>
            <ul class="sessions-list">
                <li
                    v-for="session in sessions" 
                    :key="session.id" 
                    :class="['session-item', {active: session.isActive}]"
                >
                    <span class="session-ip">5.8.16.148</span>
                    <span class="session-date">
                        <span>2023-06-03</span>
                        <span class="session-time">17:33:46</span>
                    </span>
                    <span class="session-current">Текущая сессия</span>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import VInput from '@/components/common/VInput';
import VButton from '@/components/common/VButton';

export default {
    name: 'Settings',

    components: {
        VInput,
        VButton,
    },

    data() {
        return {
            user: {
                email: '',
                password: '',
                telegram: '',
                telegramId: '',
            },

            sessions: [
                { id: 0, ip: '5.8.16.148', date: '2023-06-03', time: '17:33:46', isActive: true },
                { id: 1, ip: '5.8.16.148', date: '2023-06-03', time: '17:33:46', isActive: false },
                { id: 2, ip: '5.8.16.148', date: '2023-06-03', time: '17:33:46', isActive: false },
                { id: 3, ip: '5.8.16.148', date: '2023-06-03', time: '17:33:46', isActive: false },
                { id: 4, ip: '5.8.16.148', date: '2023-06-03', time: '17:33:46', isActive: false },
            ],
        };
    },
};
</script>

<style lang="sass" scoped>
.info
    padding: 30px 40px 32px
    ::v-deep 
        .input
            width: 360px

.title
    font-weight: 500
    font-size: 24px
    line-height: 32px
    margin-bottom: 20px

.form
    ::v-deep .button
        min-width: 140px

.labels
    display: flex
    flex-direction: column
    gap: 20px
    margin-bottom: 20px

.bot
    display: flex
    align-items: center
    gap: 16px
    width: 360px
    margin-bottom: 24px
    padding: 8px 16px 12px 16px
    border-radius: 16px
    background: rgba($gray-light, 0.30)
    transition: all 0.3s ease
    @media(any-hover:hover)
        &:hover
            background: rgba($gray-light, 0.40)

.bot-icon img
    filter: drop-shadow(0px 0.15945936739444733px 0.13952694833278656px rgba(43, 171, 238, 0.08)) drop-shadow(0px 0.3623040020465851px 0.31701597571372986px rgba(43, 171, 238, 0.11)) drop-shadow(0px 0.6305740475654602px 0.5517522692680359px rgba(43, 171, 238, 0.14)) drop-shadow(0px 1.001724123954773px 0.8765086531639099px rgba(43, 171, 238, 0.17)) drop-shadow(0px 1.5455859899520874px 1.3523876667022705px rgba(43, 171, 238, 0.19)) drop-shadow(0px 2.4117658138275146px 2.110295057296753px rgba(43, 171, 238, 0.22)) drop-shadow(0px 4.00390625px 3.503418207168579px rgba(43, 171, 238, 0.25)) drop-shadow(0px 8px 7px rgba(43, 171, 238, 0.33))

.bot-title
    padding-top: 4px
    margin-bottom: 4px
    color: rgba($gray-dark, 0.80)
    font-size: 12px
    line-height: 12px

.bot-subtitle
    color: $black
    font-size: 16px
    font-weight: 500
    line-height: 24px

.sessions
    padding-top: 32px

.sessions-header
    margin-bottom: 20px
    padding-left: 40px
    & > .title
        display: inline-block
        margin-bottom: 0
        margin-right: 24px

.sessions-close
    display: inline-block
    font-weight: 500
    font-size: 12px
    line-height: 20px
    color: $blue
    background-color: transparent
    @media(any-hover:hover)
        &:hover
            color: rgba($blue, 0.8)

.sessions-list
    display: flex
    flex-direction: column
    margin-bottom: 30px

.session-item
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    padding: 10px 40px
    font-size: 12px
    line-height: 20px
    &::before
        content: ""
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 1px
        background-color: $gray-light
    &:first-child
        &::after
            content: ""
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 1px
            background-color: $gray-light
    &.active
        background-color: rgba($gray-light, 0.15)
        .session-current
            opacity: 1
            color: $gray-dark

.session-time
    color: $gray-dark

.session-date
    display: flex
    gap: 4px

.session-current
    opacity: 0

@media(min-width: 767px)
    .settings
        height: calc(100vh - 44px)
        overflow-y: auto

@media(max-width: 767px)
    .settings
        padding-top: 50px
    
    .info
        padding: 30px 16px

    .form
        ::v-deep .button
            width: 360px

    .title
        font-size: 20px
        line-height: 28px
        margin-bottom: 12px

    .sessions
        padding-top: 18px

    .sessions-header
        gap: 8px
        display: flex
        align-items: flex-start
        flex-direction: column
        padding-left: 16px
        margin-bottom: 12px
        & > .title
            margin-right: 0

    .session-item
        padding: 6px 16px
        flex-wrap: wrap
        justify-content: flex-end

    .session-ip
        flex: 1 1 50%

    .session-current
        padding-left: 20px

@media(max-width: 576px)
    .info,
    .bot
        width: 100%

    .form
        ::v-deep 
            .button,
            .input
                width: 100%
</style>
