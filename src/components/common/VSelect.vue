<template>
    <div :class="selectClasses">
        <p 
            v-if="placeholder"
            class="placeholder"
        >
            {{ placeholder }}
        </p>

        <p 
            class="field"
            @click="toggleSelect"
        >
            {{ selected.name }}
        </p>

        <p 
            v-if="description" 
            class="description"
        >
            {{ description }}
        </p>

        <img
            src="/icons/mark.svg"
            class="icon"
        >

        <div class="list-wrapper">
            <ul class="list">
                <li 
                    v-for="option in options" 
                    :key="option.value" 
                    :class="['list-item', {selected: option.value === selected.value}]"
                    @click="selectOption(option)"
                >
                    <slot :option="option">{{ option.name }}</slot>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VSelect',

    props: {
        selected: {
            type: Object,
            default: () => ({}),
        },

        placeholder: {
            type: String,
            default: '',
        },

        description: {
            type: String,
            default: '',
        },

        isError: {
            type: Boolean,
            default: false,
        },

        isReadonly: {
            type: Boolean,
            default: false,
        },

        options: {
            type: Array,
            default: () => [],
        },
    },

    data() {
        return {
            isOpen: false,
        };
    },

    computed: {
        selectClasses() {
            return [
                'select',
                { open: this.isOpen },
                { error: this.isError },
                { focused: this.isFocused && !this.isReadonly },
            ];
        },

        isFocused() {
            return this.isOpen || !!this.selected.name;
        },
    },

    methods: {
        toggleSelect() {
            this.isOpen = !this.isOpen;
        },

        selectOption(option) {
            if (this.isReadonly) {
                return;
            }

            this.isOpen = false;
            this.$emit('select', option);
        },
    },
};
</script>

<style lang="sass" scoped>
.select
    position: relative
    min-width: 280px
    &.focused
        .placeholder
            top: 30%
            font-size: 12px
            line-height: 12px
        .field
            padding: 18px 12px 6px 12px
    &.open
        .icon
            transform: rotate(180deg)
        .list
            min-height: max-content
            max-height: 202px
            opacity: 1
            visibility: visible
            pointer-events: all
            top: 7px
    &.error
        .description
            color: $red
        .field
            border: 1px solid $red
            background: rgba($red, 0.04)

.field
    padding: 12px
    width: 100%
    font-size: 14px
    line-height: 22px
    min-height: 48px
    border-radius: 12px
    border: 1px solid $gray-light
    background-color: $white
    cursor: pointer
    @media(any-hover:hover)
        &:hover
            border: 1px solid rgba($gray-dark, 0.40)
    &:focus
        border: 1px solid $blue
    &:disabled
        background-color: rgba($gray-light, 0.30)
        @media(any-hover:hover)
            &:hover
                border: 1px solid $gray-light

.placeholder
    position: absolute
    top: 50%
    left: 12px
    font-size: 14px
    font-weight: 450
    line-height: 22px
    color: rgba($gray-dark, 0.8)
    transform: translateY(-50%)
    pointer-events: none

.description
    position: absolute
    z-index: 5
    bottom: -12px
    left: 0
    color: rgba($gray-dark, 0.80)
    font-size: 12px
    line-height: 12px

.icon
    position: absolute
    top: 12px
    right: 12px
    pointer-events: none
    transition: transform 0.3s ease

.list-wrapper
    position: relative

.list
    position: absolute
    z-index: 5
    top: -7px
    left: 0
    width: 100%
    min-height: 0
    max-height: 0
    padding: 6px
    border-radius: 16px
    background-color: $white
    box-shadow: 0px 6px 34px 0px rgba($black, 0.12)
    border: 1px solid $gray-light
    transition: top 0.4s ease, opacity 0.4s ease
    opacity: 0
    visibility: hidden
    pointer-events: none
    overflow-y: auto

.list-item
    position: relative
    padding: 12px 16px
    border-radius: 12px
    font-size: 14px
    font-weight: 500
    line-height: 20px
    cursor: pointer
    transition: all 0.4s ease
    @media(any-hover:hover)
        &:hover
            background-color: rgba($gray-light, 0.40)
    &:not(:last-child)
        margin-bottom: 4px
    &.selected
        background-color: rgba($gray-light, 0.40)
        &::after
            content: url("@/assets/img/selected.svg")
            position: absolute
            top: 12px
            right: 16px
</style>