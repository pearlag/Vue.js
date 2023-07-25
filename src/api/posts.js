//axios
const posts = [
	{
		id: 1,
		title: '오늘의 일기',
		content: '혜진이가 혼났던 그날',
		createdAt: '2021-01-01',
	},
	{
		id: 2,
		title: '뉴진스 본 후기',
		content: '안녕하세요! 오늘은..',
		createdAt: '2022-02-02',
	},
	{
		id: 3,
		title: '식단 일기',
		content: '요즘은 견과류를 먹는다. 오늘의 점심은..',
		createdAt: '2023-03-03',
	},
	{
		id: 4,
		title: '메일 쓰는 꿀팁',
		content: '우선 보낼 사람을 정하는데 그 중에서..',
		createdAt: '2024-04-04',
	},
	{
		id: 5,
		title: '커피타임',
		content: '버그파이터 하는 날',
		createdAt: '2025-05-05',
	},
];

export function getPosts() {
	return posts;
}

export function getPostById(id) {
	return posts.find(item => item.id === id);
}
