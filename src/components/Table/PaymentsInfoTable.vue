<template lang="pug">
.table
    .item(
        v-for="item in items" 
        :key="item.title"
    ) 
        slot(
            :name="item.key"
            :item="item"
        )
            .title {{ item.title }}
            .value {{ item.value }}
</template>

<script>
export default {
    name: 'PaymentsInfoTable',

    props: {
        items: {
            type: Array,
            default: () => [],
        },
    }
};
</script>

<style lang="sass" scoped>
.table
    padding: 0 12px

.item
    display: flex
    align-items: center
    justify-content: space-between
    padding: 10px 0
    font-size: 12px
    line-height: 20px
    &:not(:first-child)
        border-top: 1px solid $gray-light

.title
    flex: 0 1 50%
    font-weight: 600

.value
    flex: 0 1 50%
    text-align: left

@media(max-width: 767px)
    .item
        gap: 20px
</style>