import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));
	return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}/posts`);
// dev http://localhost:5000/posts/
// 운영 http://localhost:5001/posts/
