import { computed, unref } from 'vue';
import useBinanceWSTicker from '../../hooks/useBinanceWSTicker';

export default function useCurrency(key) {

    const { data, stream, connected } = useBinanceWSTicker(key);

    const formatNum = (num) => Number((parseFloat(unref(num))) || 0).toFixed(2);
    const getValue = (field) => computed(() => formatNum(data.value?.[field]));

    const change = getValue('p');
    const high = getValue('h');
    const low = getValue('l');
    const percent = getValue('P');
    const price = getValue('c');
    const symbol = getValue('symbol');
    const volume = getValue('q');

    return { change, connected, high, low, percent, price, stream, symbol, volume }
}