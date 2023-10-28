<template>
    <date-picker 
        class="datepicker"
        v-model:value="date"
        :langString="langString"
        value-type="format"
        @clear="clearInput"
        range
    >
        <template #input>
            <v-input
                v-model="date"
                placeholder="Дата"
                isReadonly
            />
        </template>
        <template #icon-calendar>
            <inline-svg class="icon" src="/icons/calendar.svg"/>
        </template>
        <template #icon-clear>
            <inline-svg class="icon-close" src="/icons/close.svg"/>
        </template>
    </date-picker>
</template>

<script>
import VInput from '@/components/common/VInput';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import 'vue-datepicker-next/locale/ru.es';

export default {
    name: 'VDatepicker',

    components: {
        DatePicker,
        VInput,
    },

    props: {
        value: {
            type: [String, Array],
            default: ''
        },
    },

    data() {
        return {
            langString: 'ru-es',
            date: this.value || '',
        };
    },

    watch: {
        date(value) {
            this.$emit('setDate', value);
        },
    },

    methods: {
        clearInput() {
            this.date = '';
        },
    }
}
</script>

<style lang="sass" scoped>
.datepicker
    width: 100%

.icon
    width: 24px
    height: 24px

.icon-close
    width: 24px
    height: 24px
    fill: rgba($gray-dark, 0.5)
    @media(any-hover:hover)
        &:hover
            fill: $gray-dark
</style>