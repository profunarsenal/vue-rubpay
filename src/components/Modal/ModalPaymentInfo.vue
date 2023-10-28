<template>
    <div class="content">
        <h4 class="title">Информация о платеже №101639213</h4>
        <payments-info-table :items="items"/>
    </div>
</template>

<script>
import PaymentsInfoTable from '@/components/Table/PaymentsInfoTable';

export default {
    name: 'ModalPaymentInfo',

    components: {
        PaymentsInfoTable,
    },

    props: {
        componentData: {
            type: Object,
            default: () => ({}),
        },
    },

    computed: {
        items() {
            return this.componentData?.items;
        },
    },
};
</script>

<style lang="sass" scoped>
.content
    min-width: 434px

.title
    margin-bottom: 24px
    font-weight: 500
    font-size: 20px
    line-height: 28px
    text-align: center

.labels
    display: flex
    flex-direction: column
    gap: 20px
    margin-bottom: 24px

.buttons
    display: flex
    gap: 8px
    ::v-deep
        .button
            flex: 1 1 50%

@media(max-width: 767px)
    .content
        min-width: 100%
</style>