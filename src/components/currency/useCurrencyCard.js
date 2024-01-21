import { computed, unref } from 'vue';
import useBinanceWSTicker from '../../hooks/useBinanceWSTicker';

export default function useCurrency(key) {

    const { data, stream, connected } = useBinanceWSTicker(key);

    const formatNum = (num) => Number((parseFloat(unref(num))) || 0).toFixed(2);
    const getValue = (field) => computed(() => formatNum(data.value?.[field]));

    const change = getValue('P');
    const high = getValue('h');
    const low = getValue('l');
    const percent = getValue('p');
    const price = getValue('c');
    const symbol = computed(() => data.value?.s);
    const volume = getValue('q');

    return { change, connected, high, low, percent, price, stream, symbol, volume }
}