<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>

			<hr class="my-4" />

			<div class="row g-3">
				<div class="col col-4" v-for="post in posts" key="post.id">
					<PostItem
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:isLike="post.isLike"
					></PostItem>
				</div>
			</div>

			<hr class="my-4" />

			<LabelInput
				v-model="username"
				label="이~름"
				class="parent-class"
				style="color: red"
				id="parent-id"
			></LabelInput>
		</div>
	</main>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import { ref, reactive } from 'vue';
export default {
	components: {
		PostItem,
		PostCreate,
		LabelInput,
	},
	setup() {
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: false, type: 'news' },
			{
				id: 2,
				title: '제목2',
				contents: '내용2',
				isLike: true,
				type: 'notice',
			},
			{ id: 3, title: '제목3', contents: '내용3', isLike: false, type: 'news' },
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: true,
				type: 'notice',
			},
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: true,
				type: 'notice',
			},
		]);
		const createPost = newPost => {
			console.log('createPost');
			console.log('newPost: ', newPost);
			posts.push(newPost);
		};

		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return { posts, createPost, username, firstname, lastname };
	},
};
</script>

<style scoped></style>
