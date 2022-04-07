import axios from 'axios'
const API = axios.create({baseURL: "http://localhost:5000"});

export const getList = () => API.get('/');
export const createElement = (element) => API.post('/', element)
export const updateElement = (id,updatedElement) => API.patch(`/${id}`, updatedElement)
export const deleteElement = (id) => API.delete(`/${id}`);