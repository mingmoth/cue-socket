import axiosInstance from './axios'

export const klines = (symbol, interval, limit = 145) => axiosInstance({
    method: 'get',
    url: '/api/v3/klines',
    params: {
        symbol: symbol,
        interval: interval,
        limit: limit
    }
})