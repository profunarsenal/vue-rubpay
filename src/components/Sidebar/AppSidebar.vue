<template lang="pug">
aside.sidebar(:class="sidebarClasess")
    .logo
        img(:src="logo")

    ul.menu
        li.menu-item(
            :class="{active: item.path === $route.path}"
            v-for="item in menuItems"
            :key="item.title"
        )
            router-link.menu-link(:to="item.path")
                inline-svg.menu-icon(:src="item.icon")
                span.text {{ item.title }}
            v-tooltip.sidebar-tooltip {{ item.title }}

    .buttons
        a.button(
            href="#"
            target="_blank"
        )
            inline-svg.button-icon(src="/icons/telegram-sidebar.svg")
            .text Поддержка
            v-tooltip.sidebar-tooltip Поддержка
        button.button(@click="exit")
            inline-svg.button-icon(src="/icons/exit.svg")
            .text Выйти
            v-tooltip.sidebar-tooltip Выйти

    button.collapse-button(
        v-if="isSwitcher"
        @click="collapseSidebar"
    )
        img.collapse-icon(src="/icons/arrow-tick.svg")
        v-tooltip.sidebar-tooltip Свернуть
</template>

<script>
import { MENU_ITEMS } from '@/helpers/constants';
import window from '@/mixins/window';
import VTooltip from '@/components/common/VTooltip';;

export default {
    name: "AppHeader",

    mixins: [window],

    components: {
        VTooltip,
    },

    props: {
        isCollapsed: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        logo() {
            const icon = this.isCollapsed ? 'logo-small' : 'logo';
            return `/icons/${icon}.svg`;
        },

        sidebarClasess() {
            return { collapsed: this.isCollapsed };
        },

        isSwitcher() {
            return this.width > 1366 ? true : false;
        },
    },

    methods: {
        collapseSidebar() {
            this.$emit('collapse', !this.isCollapsed);
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
}
</script>

<style lang="sass" scoped>
.sidebar
    position: fixed
    z-index: 99
    top: 0
    left: 0
    width: 224px
    display: flex
    flex-direction: column
    padding: 32px 12px 12px
    height: 100%
    background-color: $white
    transition: all 0.3s ease
    &::before
        content: ''
        position: absolute
        top: 0
        right: 0
        height: 100%
        width: 1px
        background-color: $gray-light
    &.collapsed
        width: 72px
        padding: 32px 14px 12px
        .text
            display: none
        .menu-item
            &.active
                &::after
                    display: none
        .collapse-icon
            transform: rotate(180deg)
        .logo
            justify-content: center
            margin-left: 0
        .menu-item,
        .button
            display: flex
            align-items: center
            justify-content: center
            width: 44px
            &:hover
                .sidebar-tooltip
                    opacity: 1
                    visibility: visible
                    pointer-events: all
        .menu-link
            padding: 10px
            justify-content: center

.collapse-button
    position: absolute
    width: 24px
    height: 24px
    top: 34px
    right: -12px
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid $gray-light
    border-radius: 50%
    background-color: $white
    transition: all 0.3s ease
    .sidebar-tooltip
        top: -6px
        left: 32px
        right: auto
    @media(any-hover:hover)
        &:hover
            .sidebar-tooltip
                opacity: 1
                visibility: visible
                pointer-events: all
    &:focus,
    &:active
        border: 1px solid $gray-light

.menu
    display: flex
    flex-direction: column
    gap: 4px
    margin-bottom: 4px

.menu-item
    position: relative
    border-radius: 100px
    transition: all 0.3s ease
    @media(any-hover:hover)
        &:hover
            background-color: rgba($gray-dark, 0.1)
    &.active
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
    &.active
        .text
            color: $white
        .menu-icon
            fill: $white
            ::v-deep path
                &:first-child
                    fill-opacity: 0.2

    .sidebar-tooltip
        top: 6px
        left: 57px

.menu-link
    display: flex
    justify-content: flex-start
    align-items: center
    gap: 12px
    padding: 10px 12px

.menu-icon,
.button-icon
    min-width: 24px
    min-height: 24px
    max-width: 24px
    max-height: 24px

.text
    font-size: 14px
    line-height: 20px
    font-weight: 450
    color: $black
    transition: all 0.3s ease

.buttons
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    margin-top: auto
    gap: 4px

.button
    position: relative
    display: flex
    align-items: center
    width: 100%
    max-height: 44px
    gap: 12px
    padding: 10px 12px
    background-color: $white
    border-radius: 100px
    transition: all 0.3s ease
    @media(any-hover:hover)
    &:hover
        background-color: rgba($gray-dark, 0.1)
    .sidebar-tooltip
        top: 6px
        left: 57px

.logo
    display: flex
    align-items: center
    justify-content: flex-start
    margin-bottom: 20px
    margin-left: 12px
</style>