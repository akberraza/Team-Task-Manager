import API from './api';

export const register = (data) => API.post('/api/auth/register', data);
export const login = (data) => API.post('/api/auth/login', data);
export const logout = () => API.post('/api/auth/logout');