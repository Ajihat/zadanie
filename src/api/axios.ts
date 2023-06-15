import axios from 'axios';

export const axiosInstance = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	baseURL: 'ttps://jsonplaceholder.typicode.com',
});

export { axiosInstance as axios };
