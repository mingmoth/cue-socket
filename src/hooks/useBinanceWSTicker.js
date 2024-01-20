
import { ref, watch, unref } from 'vue';
import useWebSocket from './useWebSocket';

export default function useBinanceWSTicker(key) {
    const BASE_URL = 'wss://stream.binance.com:9443'

    const stream = ref(null);
    const data = ref(null)

    const { data: binanceData, connected } = useWebSocket(`${BASE_URL}/stream?streams=${unref(key)}@ticker`);

    watch(
        binanceData,
        (val) => {
            if(!!data) {
                const { stream: streamResponse, data: dataResponse } = val
                stream.value = streamResponse;
                data.value = dataResponse
            }
        },
        { deep: true }
    )

    return { data, stream, connected };
}