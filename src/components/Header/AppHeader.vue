<template lang="pug">
header.header(:class="{open: isOpened}")
    .logo
        img(src="/icons/logo.svg")
    ul.navigation
        li.nav-item(
            v-for="item in menuItems" 
            :key="item.title" 
            :class="{ active: item.path === $route.path}"
        )
            router-link.nav-link(
                :to="item.path"
                @click="closeMenu"
            )
                inline-svg.nav-icon(:src="item.icon")
                span {{ item.title }}
        li.nav-item
            a.nav-link(
                href="#"
                target="_blank"
            )
                inline-svg.button-icon(src="/icons/telegram-sidebar.svg")
                span Поддержка
        li.nav-item
            button.nav-link(@click="exit")
                inline-svg.button-icon(src="/icons/exit.svg")
                span Выйти

    button.burger(@click="toggleMenu")
        inline-svg.burger-icon(:src="iconSrc")

    .copy
        a.text(
            href="#"
            target="_blank"
        ) Документация API
        .text © 2023 RubPay, Inc
</template>

<script>
import { MENU_ITEMS } from '@/helpers/constants';

export default {
    name: 'AppHeader',

    data() {
        return {
            isOpened: false,
        };
    },

    computed: {
        iconSrc() {
            return this.isOpened ? '/icons/close.svg' : '/icons/burger.svg'
        },
    },

    methods: {
        toggleMenu() {
            this.isOpened = !this.isOpened;
        },
        
        closeMenu() {
            this.isOpened = false;
        },

        exit() {
            this.$store.commit('modal/open', {
                component: 'ModalExit',
                positionCenter: true,
            });
        },
    },

    created() {
        this.menuItems = MENU_ITEMS;
    },
};
</script>

<style lang="sass" scoped>
.header 
    position: fixed
    z-index: 50
    top: 0
    left: 0
    width: 100%
    display: flex
    align-items: center
    max-height: 64px
    padding: 20px 20px 12px 20px
    &::before
        content: ""
        position: absolute
        z-index: 52
        top: 0
        left: 0
        width: 100%
        height: 64px
        background-color: $white
    &.open
        .navigation
            top: 0
        .copy
            bottom: 0
            opacity: 1
            visibility: visible
            pointer-events: all
.logo
    position: relative
    z-index: 52

.burger
    position: absolute
    z-index: 52
    top: 24px
    right: 20px
    width: 24px
    height: 24px

.burger-icon
    width: 24px
    height: 24px
    fill: $gray-dark
    fill-opacity: 0.6

.navigation
    position: fixed
    z-index: 51
    top: -150%
    left: 0
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    gap: 4px
    padding: 16px
    align-items: flex-start
    flex-direction: column
    background-color: $white
    transition: all 0.3s ease

.nav-item
    width: 100%
    &:last-child
        .nav-link
            color: $red
        .nav-icon
            fill: $red
    &.active
        .nav-link
            color: $white
            background-color: $blue
            &::after
                content: ""
                position: absolute
                top: 12px
                right: 12px
                width: 20px
                height: 20px
                background-image: url("~/public/icons/arrow.svg")
                background-size: 20px 20px
                background-repeat: no-repeat
            .nav-icon
                fill: $white
                ::v-deep path
                    &:first-child
                        fill-opacity: 0.2

.nav-link
    position: relative
    display: flex
    align-items: center
    width: 100%
    gap: 12px
    padding: 10px 12px
    color: $black
    font-size: 14px
    font-weight: 450
    line-height: 20px
    border-radius: 100px
    background-color: transparent

.copy
    position: fixed
    z-index: 51
    bottom: -150%
    left: 0
    width: 100%
    padding: 12px 20px
    display: flex
    align-items: flex-end
    justify-content: space-between
    transition: all 0.3s ease
    background-color: $white
    opacity: 0
    visibility: hidden
    pointer-events: none

.text
    font-weight: 450
    font-size: 12px
    line-height: 20px
    color: $gray-dark
</style>