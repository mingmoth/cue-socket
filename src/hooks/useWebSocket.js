import { onUnmounted, ref } from 'vue';

export default function useWebSocket(url) {

    let data = ref(null)
    let connected = ref(false)

    const ws = new WebSocket(url)

    ws.onmessage = (res) => {
        if(!res) return;
        const response = JSON.parse(res?.data)
        data.value = response;
    }

    ws.onopen = () => {
        connected.value = true
        return ws;
    }

    ws.onclose = () => {
        connected.value = false
        return ws;
    }

    ws.onerror = (err) => {
        console.error(err);
        connected.value = false
        return ws
    }

    onUnmounted(() => {
        ws.close()
    })

    return { connected, data }
}