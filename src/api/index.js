// axios를 가져오고, 게시판 url의 기본 값을 설정하기 위한 api 파일.
import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));
	return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}/posts`);
// dev http://localhost:5000/posts/
// 운영 http://localhost:5001/posts/
