<template>
    <div :class="inputClasses">
        <p 
            v-if="placeholder"
            class="placeholder"
        >
            {{ placeholder }}
        </p>

        <input
            class="field"
            :value="modelValue"
            :type="type"
            :readonly="isReadonly"
            @focus="focus"
            @blur="blur"
            @input="update"
        >

        <p 
            v-if="description" 
            class="description"
        >
            {{ description }}
        </p>

        <div v-if="iconSrc">
            <img
                v-svg-inline
                :src="iconSrc"
                class="icon"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'VInput',

    emits: ['update:modelValue'],

    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },

        placeholder: {
            type: String,
            default: '',
        },

        type: {
            type: String,
            default: 'text',
        },

        description: {
            type: String,
            default: '',
        },

        iconSrc: {
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
    },

    data() {
        return {
            isFocused: !!this.modelValue,
        };
    },

    computed: {
        inputClasses() {
            return [
                'input',
                { focused: this.isFocused },
                { error: this.isError },
            ];
        },
    },

    methods: {
        update(event) {
            this.$emit('update:modelValue', event.target.value);
        },

        focus() {
            this.isFocused = true;
        },

        blur(event) {
            this.isFocused = event.target.value ? true : false;
        },
    },
};
</script>

<style lang="sass" scoped>
.input
    position: relative
    &.focused
        .placeholder
            top: 30%
            font-size: 12px
            line-height: 12px
        .field
            padding: 18px 12px 6px 12px
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
</style>