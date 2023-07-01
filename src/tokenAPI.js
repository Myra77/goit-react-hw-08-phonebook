import axios from 'axios';

export const baseInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
});

export const setAuthHeader = token => {
    baseInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    baseInstance.defaults.headers.common.Authorization = '';
};