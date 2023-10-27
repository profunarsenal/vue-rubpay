<template>
    <header :class="['header', {open: isOpen}]">
        <div class="logo">
            <img src="/icons/logo.svg" alt="Логотип">
        </div>
        <ul class="navigation">
            <li 
                v-for="item in menuItems" 
                :key="item.title" 
                :class="['nav-item', { active: item.path === $route.path}]"
            >
                <router-link 
                    class="nav-link"
                    :to="item.path"
                    @click="closeMenu"
                >
                    <img
                        v-svg-inline
                        class="nav-icon"
                        :src="item.icon"
                        :alt="item.title"
                    />
                    <span>{{ item.title }}</span>
                </router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <img
                        v-svg-inline
                        class="button-icon"
                        src="@/assets/img/telegram-sidebar.svg"
                        alt="Поддержка" 
                    />
                    <span>Поддержка</span>
                </a>
            </li>
            <li class="nav-item">
                <button class="nav-link">
                    <img
                        v-svg-inline
                        class="button-icon"
                        src="@/assets/img/exit.svg"
                        alt="Выйти"
                    />
                    <span>Выйти</span>
                </button>
            </li>
        </ul>
        <button
            class="burger"
            @click="toggleMenu"
        >
            <div v-if="isOpen">
                <img
                    v-svg-inline
                    src="/icons/close.svg"
                    class="burger-icon"
                >
            </div>
            <div v-else>
                <img
                    v-svg-inline
                    src="/icons/burger.svg"
                    class="burger-icon"
                >
            </div>
        </button>
        <div class="copy">
            <a class="text" href="#">Документация API</a>
            <span class="text">© 2023 RubPay, Inc</span>
        </div>
    </header>
</template>

<script>
import { MENU_ITEMS } from '@/helpers/constants';

export default {
    name: 'AppHeader',

    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        
        closeMenu() {
            this.isOpen = false;
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
                background-image: url("@/assets/img/arrow.svg")
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