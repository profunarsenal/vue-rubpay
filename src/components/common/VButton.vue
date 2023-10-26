<template>
    <button
        :class="buttonClasses"
        :disabled="isDisabled"
        @click="$emit('onClick')"
    >
        <slot />
        <div 
            v-if="iconSrc"
            class="icon"
        >
            <img
                v-svg-inline
                :src="iconSrc"
                alt="Кнопка"
                class="icon"
            >
        </div>
    </button>
</template>

<script>
export default {
    name: 'VButton',

    props: {
        type: {
            type: String,
            default: 'primary',
        },
        
        iconSrc: {
            type: String,
            default: '',
        },

        isDisabled: {
            type: Boolean,
            default: false,
        },

        isIconOnly: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        buttonClasses() {
            return [
                'button',
                this.type,
                { 'icon-right': this.iconSrc },
                { 'icon-only': this.isIconOnly },
            ];
        },
    }
};
</script>

<style lang="sass" scoped>
.button
    position: relative
    padding: 12px 24px
    font-weight: 500
    font-size: 14px
    line-height: 20px
    border-radius: 100px
    transition: all 0.3s ease
    max-height: 44px
    white-space: nowrap
    &.icon-right
        display: flex
        align-items: center
        gap: 12px
        padding: 12px 16px 12px 20px
    &.primary
        color: $white
        background-color: $blue
        @media(any-hover:hover)
            &:hover
                background-color: rgba($blue, 0.8)
        &:active
            background-color: rgba($blue, 0.8)
        &:disabled
            background-color: rgba($blue, 0.5)
    &.secondary
        color: $gray-dark
        background-color: rgba($gray-light, 0.6)
        @media(any-hover:hover)
            &:hover
                background-color: $gray-light
        &:active
            background-color: $gray-light
        &:disabled
            color: rgba($gray-dark, 0.5)
            background-color: rgba($gray-light, 0.6)
    &.tertiary
        color: $blue
        background-color: rgba($blue, 0.04)
        border: 1px solid $blue
        @media(any-hover:hover)
            &:hover
                background-color: rgba($blue, 0.12)
        &:active
            background-color: rgba($blue, 0.12)
        &:disabled
            color: rgba($blue, 0.50)
            border: 1px solid rgba($blue, 0.50)
            background-color: rgba($blue, 0.04)
    &.outline
        color: $gray-dark
        background-color: rgba($gray-light, 0.15)
        border: 1px solid $gray-light
        @media(any-hover:hover)
            &:hover
                background-color: rgba($gray-light, 0.5)
        &.active,
        &:active
            background-color: rgba($gray-light, 0.5)
        &:disabled
            color: rgba($gray-dark, 0.5)
    &.icon-only
        display: flex
        align-items: center
        justify-content: center
        max-width: 44px
        max-height: 44px
        padding: 12px

.icon
    min-width: 20px
    max-width: 20px
    min-height: 20px
    max-height: 20px

@media(max-width: 767px)
    .button
        max-height: 40px
        padding: 10px 16px
</style>