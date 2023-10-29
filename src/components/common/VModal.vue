<template lang="pug">
transition(name="modal")
    .modal(
        v-if="isOpened"
        :class="modalClasses"
    )
        component(
            :is="component"
            :componentData="componentData"
        )
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex';

export default {
    name: 'VModal',

    components: {
        ModalCheckout: defineAsyncComponent(() => import('@/components/Modal/ModalCheckout')),
        ModalCheckoutInfo: defineAsyncComponent(() => import('@/components/Modal/ModalCheckoutInfo')),
        ModalCreatePayment: defineAsyncComponent(() => import('@/components/Modal/ModalCreatePayment')),
        ModalExport: defineAsyncComponent(() => import('@/components/Modal/ModalExport')),
        ModalRequestPayout: defineAsyncComponent(() => import('@/components/Modal/ModalRequestPayout')),
        ModalPaymentInfo: defineAsyncComponent(() => import('@/components/Modal/ModalPaymentInfo')),
        ModalExit: defineAsyncComponent(() => import('@/components/Modal/ModalExit')),
        ModalCloseSession: defineAsyncComponent(() => import('@/components/Modal/ModalCloseSession')),
    },

    computed: {
        ...mapState({
            componentData: state => state.modal.componentData,
            component: state => state.modal.component,
            positionCenter: state => state.modal.positionCenter,
        }),

        isOpened() {
            return this.component ? true : false;
        },

        modalClasses() {
            return { center: this.positionCenter };
        },
    },

    methods: {
        close() {
            this.$store.commit('modal/close');
        },
    },
};
</script>

<style lang="sass" scoped>
.modal
    position: fixed
    z-index: 999
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba($black, 0.5)
    overflow-y: scroll
    &.center
        display: flex
        align-items: center
        justify-content: center

.modal-enter-active,
.modal-leave-active
    transition: opacity 0.3s ease

.modal-enter-from,
.modal-leave-to
    opacity: 0
    .wrapper
        top: -50px

.modal-enter-to,
.modal-leave-from
    opacity: 1
</style>