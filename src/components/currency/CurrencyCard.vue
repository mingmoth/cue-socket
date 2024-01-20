<script setup>
import { computed, toRefs, unref } from 'vue';
// components
import LayoutFlexRow from '../layout/LayoutFlexRow.vue';
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

const cryptoName = computed(() => unref(name).split('/')[0])
const cryptoImg = computed(() => {
    return `@/assets/img/${ cryptoName.value.toLowerCase() }.png`
})
const changeColor = computed(() => {
    return change.value > 0 ? 'green' : 'red'
})
</script>

<template>
    <LayoutFlexRow
        gap="12"
        padding="12"
        class="currency-card"
    >
        <template #left>
            <img
                :src="cryptoImg"
                alt="currency-img"
                class="currency-img"
            >
        </template>
        <template #remain>
            <div class="card-body">
                <div class="currency-name">
                    {{ cryptoName }}
                </div>
                <div>{{ name }}</div>
            </div>
        </template>
        <template #right>
            <div class="card-base">
                <div class="currency-price">{{ price }}</div>
                <div class="currency-change">{{ change }}%</div>
            </div>
        </template>
    </LayoutFlexRow>
</template>

<style scoped>
.currency-card {
    border-radius: 8px;
    box-shadow: 0px 1px 4px 0px rgba(38,50,56,0.12);
    min-width: max-content;
}

.currency-img {
    width: 40px;
    height: 40px;
    background: lightgray;
    border-radius: 50%;
}

.currency-name {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: #000000;
}

.currency-price {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #000000;
}

.currency-change {
    color: v-bind(changeColor);
}

.card-body {
    display: block;
}

.card-base {
    display: block;
    text-align: right;
}
</style>