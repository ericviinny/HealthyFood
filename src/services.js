import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'https://viacep.com.br/ws'
});