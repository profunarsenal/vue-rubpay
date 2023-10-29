<template>
    <div class="search">
        <inline-svg
            class="icon"
            src="/icons/search.svg"
        />
        <button
            v-if="modelValue"
            class="clear"
            @click="$emit('clear')"
        >
            <inline-svg
                class="clear-icon"
                src="/icons/close.svg"
            />
        </button>
        <input 
            class="input"
            :value="modelValue"
            :type="type"
            :placeholder="placeholder"
            @input="update"
        >
    </div>
</template>

<script>
export default {
    name: 'VSearch',

    emits: ['update:modelValue', 'clear'],

    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },

        placeholder: {
            type: String,
            default: 'Поиск',
        },

        type: {
            type: String,
            default: 'text',
        },
    },

    methods: {
        update(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>

<style lang="sass" scoped>
.search
    position: relative

.icon
    position: absolute
    top: 12px
    left: 12px

.clear
    position: absolute
    top: 12px
    right: 12px
    width: 20px
    height: 20px
    transition: all 0.3s ease
    background-color: transparent
    @media(any-hover:hover)
        &:hover
            .clear-icon
                fill: $gray-dark

.clear-icon
    fill: rgba($gray-dark, 0.6)
    transition: all 0.3s ease

.input
    width: 248px
    max-height: 44px
    font-weight: 450
    font-size: 14px
    line-height: 20px
    padding: 12px 16px 12px 44px
    border-radius: 100px
    background-color: rgba($gray-light, 0.15)
    border: 1px solid $gray-light
    transition: all 0.3s ease
    @media(any-hover:hover)
        &:hover
            background-color: rgba($gray-light, 0.15)
            border: 1px solid rgba($gray-dark, 0.40)
    &:focus
        background-color: rgba($gray-light, 0.15)
        border: 1px solid $blue
    &::placeholder
        color: rgba($gray-dark, 0.60)

@media(max-width: 992px)
    .input
        width: 253px

@media(max-width: 767px)
    .icon,
    .clear
        top: 10px

    .input
        max-height: 40px
        max-width: 100%
        padding: 10px 16px 10px 44px
</style>