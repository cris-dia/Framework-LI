import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // URL-ul backend-ului Laravel
    headers: {
        'Content-Type': 'application/json',
    },
});

// Adaugă token-ul în cererile autorizate
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
