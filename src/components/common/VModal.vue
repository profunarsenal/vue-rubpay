<template>
    <div :class="modalClasses">
        <div class="wrapper">
            <button class="close" @click="close">
                <img src="/icons/close.svg/">
            </button>
            <component
                :is="component"
                :componentData="componentData"
            />
        </div>
    </div>
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
            isOpen: state => state.modal.isOpen,
            componentData: state => state.modal.componentData,
            component: state => state.modal.component,
            positionCenter: state => state.modal.positionCenter,
        }),

        modalClasses() {
            return [
                'modal',
                { open: this.isOpen },
                { center: this.positionCenter }
            ];
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
    opacity: 0
    visibility: hidden
    pointer-events: none
    transition: none
    background-color: rgba($black, 0.5)
    overflow-y: scroll
    &.open
        opacity: 1
        visibility: visible
        pointer-events: all
        transition: all 0.3s ease
        .wrapper
            top: 0
            transition: all 0.3s ease
    &.center
        display: flex
        align-items: center
        justify-content: center

.wrapper
    position: relative
    top: -50px
    width: min-content
    margin: 40px auto
    padding: 20px 16px 16px 16px
    background-color: $white
    border-radius: 28px
    transition: none

.close
    position: absolute
    width: 24px
    height: 24px
    top: -18px
    right: -18px
    background-color: transparent

@media(max-width: 767px)
    .wrapper
        width: 90%
    .close
        top: -18px
        right: -14px
</style>