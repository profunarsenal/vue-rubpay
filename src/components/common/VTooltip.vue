<template>
    <div class="tooltip">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'VTooltip',
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
        top: 50%
        left: -6px
        background-color: $gray-dark
        width: 9px
        height: 9px
        transform: rotate(45deg) translateY(-50%)
</style>