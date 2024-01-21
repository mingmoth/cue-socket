<script setup>
import { ref } from 'vue';
// components
import CurrencyCard from './CurrencyCard.vue'

const currencies = ref([
    {
        key: 'btcusdt',
        name: 'BTC/USDT',
    },
    {
        key: 'ethusdt',
        name: 'ETH/USDT',
    },
])

</script>

<template>
    <div class="currency-view">
        <CurrencyCard
            v-for="currency in currencies"
            :key="currency.key"
            :currency="currency"
        />
    </div>
</template>

<style scoped>
.currency-view {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
}

@media (min-width: 500px) {
    .currency-view {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 768px) {
    .currency-view {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>