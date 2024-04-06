import axios from 'axios';

const client = axios.create({
    baseURL: "http://10.10.6.131:8080",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
});

client.interceptors.request.use((config) => {
    if (!config.headers) return config;

    let token: string | null = null;

    token = localStorage.getItem('accessToken');

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default client;