import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });

const token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjgwNDA3NzAsImV4cCI6MTY2ODEyNzE3MCwic3ViIjoiM2MwZTU4OWQtZGFhMi00N2Q2LTg5MGItM2EyNGMxMzZiNDIzIn0.jUYe1nZV5NKop0wka4jtdTjvSsBsO-e-fgGGGAPJaXA';

(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;