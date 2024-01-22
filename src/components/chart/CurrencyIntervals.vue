<script setup>
import { ref } from 'vue';
const intervals = ref(['1m', '5m', '15m', '1h', '4h', '6h', '1d', '1w'])

const props = defineProps({
    currentInterval: {
        type: String,
        default: '1h'
    }
})
</script>

<template>
    <ul class="currency-intervals">
        <li
            v-for="interval in intervals"
            :key="interval"
            role="tab"
            aria-disabled="false"
            :class="[
                'currency-interval',
                interval === currentInterval && 'currency-interval--active'
            ]"
            @click="$emit('update:currentInterval', interval)"
        >
            {{ interval }}
        </li>
    </ul>
</template>

<style scoped>
.currency-intervals {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 4px;
    gap: 8px;
    list-style-type: none;
    width: min-content;
    background-color: lightgray;
    border-radius: 4px;
}

.currency-interval {
    padding: 4px;
    color: dimgrey;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
}

.currency-interval:hover,
.currency-interval--active {
    background-color: white;
}
</style>