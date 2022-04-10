import axios from 'axios'
const API = axios.create({baseURL: "http://localhost:5000"});

API.interceptors.request.use((req)=>{
  if(localStorage.getItem('profile')){
    req.headers.authid = localStorage.getItem('profile')
  }
  return req;
})

export const getList = () => API.get('/');
export const getUserList = (id)=> API.get(`/${id}`)
export const getListByFilter = (category) => API.get(`/search?category=${category}`)
export const createElement = (element) => API.post('/', element)
export const updateElement = (id,updatedElement) => API.patch(`/${id}`, updatedElement)
export const deleteElement = (id) => API.delete(`/${id}`);

// user
export const registerNewUser = (profile) => API.post('/user/register', profile);