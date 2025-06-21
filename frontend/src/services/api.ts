// src/services/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // CONFIRMA se seu backend Spring Boot está nessa porta
});

export default api;
