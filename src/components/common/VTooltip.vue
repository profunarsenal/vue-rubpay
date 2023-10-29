<template>
    <div :class="['tooltip', `tooltip-${position}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'VTooltip',

    props: {
        position: {
            type: String,
            default: 'left',
        },
    },
};
</script>

<style lang="sass" scoped>
.tooltip
    position: absolute
    z-index: 99
    padding: 8px 10px
    font-size: 12px
    line-height: 16px
    color: $white
    border-radius: 10px
    background-color: $gray-dark
    white-space: nowrap
    opacity: 0
    visibility: hidden
    pointer-events: none
    transition: all 0.3s ease
    &::after
        content: ''
        position: absolute
        background-color: $gray-dark
        width: 9px
        height: 9px
        top: 50%
        transform: rotate(45deg) translateY(-50%)
    &-left
        &::after
            left: -6px
    &-right
        &::after
            right: 0
</style>