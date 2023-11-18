import axios from 'axios';

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
};

const request = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers,
});

export default request