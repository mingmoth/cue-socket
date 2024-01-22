import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.binance.com',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.response.use(response => ({
    status: response.status,
    statusText: response.statusText,
    data: response.data,
    error: response.error,
}))

export default axiosInstance