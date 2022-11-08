import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });

const token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MzI5OTcsImV4cCI6MTY2ODAxOTM5Nywic3ViIjoiM2MwZTU4OWQtZGFhMi00N2Q2LTg5MGItM2EyNGMxMzZiNDIzIn0.ETJFVpoWY9C_VBM10afMPbL8NM0BYBAMStCLxaLkaxM';

(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;