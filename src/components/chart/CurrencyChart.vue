<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';

// helper
import { klines } from '../../helpers/binanceApi'
import { getChart } from '../../helpers/chart'
// components
import CurrencyIntervals from './CurrencyIntervals.vue';
import LayoutList from '../layout/LayoutList.vue';
// hooks
import useCurrencyCard from '../currency/useCurrencyCard';

const currentInterval = ref('1h')

// kline data
const isLoading = ref(false)
const priceScale = ref(2)
const priceUnit = ref('USDT')
const symbol = ref('BTCUSDT')
const fetchFn = ref(null)

const { price: tick } = useCurrencyCard('btcusdt');

async function fetchKlines() {
    isLoading.value = true
    try {
        const response = await klines(symbol.value, currentInterval.value)
        const ticks = response.data.map(([t, o, h, l, c]) => [t, c])

        isLoading.value = false
        nextTick(() => {
            fetchFn.value = getChart(ticks, {
                priceScale: priceScale.value,
                priceUnit: priceUnit.value,
                width: document.getElementById('price-chart').offsetWidth
            })
        })
    } catch (error) {
        console.error(error)
    }
}

onMounted(() => {
    fetchKlines();
})

watch(tick, (val) => {
    if(!fetchFn.value) {
        return
    }
    fetchFn.value.update(val)
})

watch(currentInterval, (val) => {
    fetchFn.value = null;
    fetchKlines();
})

</script>

<template>
    <LayoutList
        class="chart-container"
        gap="12"
    >
        <h2>Currency Chart</h2>
        <CurrencyIntervals
            :current-interval="currentInterval"
            @update:currentInterval="currentInterval = $event"
        />
        <div
            v-if="!isLoading"
            ref="chart"
            id="price-chart"
            class="currency-chart"
        >
        </div>
        <div
            v-else
            class="currency-chart--loading"
        ></div>
    </LayoutList>
</template>

<style scoped>
.chart-container {
    margin-top: 16px;
}

.currency-chart {
    width: 100%;
}

.currency-chart svg {
    width: 100%;
}

.currency-chart--loading {
    width: 100%;
    aspect-ratio: 0.5625;
    background-color: lightgray;
    border-radius: 8px;
}
</style>