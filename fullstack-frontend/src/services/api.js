import axios from 'axios';

// BACKEND API INTEGRATION POINT
// Replace this URL with your actual Spring Boot backend URL
const BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const projectsAPI = {
  getAll: () => api.get('/api/projects'),
  create: (projectData) => api.post('/api/projects', projectData),
};

export const clientsAPI = {
  getAll: () => api.get('/admin/clients'),
  create: (clientData) => api.post('/admin/clients', clientData),
};

export const contactAPI = {
  submit: (contactData) => api.post('/contact', contactData),
  getAllForAdmin: () => api.get('/contact/admin'),
};

export const newsletterAPI = {
  subscribe: (email) => api.post('/newsletter', { email }),
  getAllForAdmin: () => api.get('/newsletter/admin'),
};

export default api;
