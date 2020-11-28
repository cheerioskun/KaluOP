import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchMenu = () => axios.get(url + '/menu/', { 'Access-Control-Allow-Origin': '*' });