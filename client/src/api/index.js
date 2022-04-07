import axios from 'axios'
const API = axios.create({baseURL: "http://localhost:5000"});

export const getList = () => API.get('/');
export const createElement = (element) => API.post('/', element)