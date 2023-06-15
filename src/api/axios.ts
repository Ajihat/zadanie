import axios from 'axios';
import { API_URL } from './constants';

export const axiosInstance = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	baseURL: API_URL,
});

export { axiosInstance as axios };
