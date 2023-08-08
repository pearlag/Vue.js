// index.js의 base url api를 받고,  게시판 관련 로직의 함수를 정의해서 내보내는 api.
import { posts } from '.';

export function getPosts(params) {
	return posts.get('/', { params });
}
// 단건 조회
export function getPostById(id) {
	return posts.get(`/${id}`);
}
// 등록
export function createPost(data) {
	return posts.post('', data);
}
// 수정
// export function updatePost(id, data) {
// 	return posts.put(`/${id}`, data);
// }
export function updatePost(id, data) {
	return posts.patch(`/${id}`, data);
}

// 삭제
export function deletePost(id) {
	return posts.delete(`/${id}`);
}
