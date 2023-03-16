import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mellow-tanuki-cd47cc.netlify.app/api',
});
