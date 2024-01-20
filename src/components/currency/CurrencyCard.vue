<script setup>
import { computed, toRefs, unref } from 'vue';
// components
import Card from 'primevue/card';
// hooks
import useCurrencyCard from './useCurrencyCard';

const props = defineProps({
    currency: {
        type: Object,
        default: () => ({}),
    },
})

const { key, name } = toRefs(props.currency)

const { change, connected, high, low, price, percent, stream, symbol, volume } = useCurrencyCard(key)

</script>

<template>
    <Card>
        <template #title>
            {{ name }}
        </template>
        <template #content>
            <h4>Price: {{ price }}</h4>
            <div>Change: {{ change }}</div>
            <div>Percent: {{ percent }}%</div>
            <div>High: {{ high }}</div>
            <div>Low: {{ low }}</div>
        </template>
    </Card>
</template>