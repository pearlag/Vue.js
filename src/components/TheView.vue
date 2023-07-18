<template>
	<main>
		<div class="container text-center py-4">
			<PostCreate @create-post="createPost"></PostCreate>

			<hr class="my-4" />

			<div class="row g-3">
				<div class="col col-4" v-for="post in posts" key="post.id">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:isLike="post.isLike"
					></AppCard>
				</div>
			</div>

			<hr class="my-4" />

			<LabelInput v-model="username" label="이~름"></LabelInput>
			<LabelTitle v-model:title="username" label="제~목"></LabelTitle>

			<hr class="my-4" />

			<Username
				v-model:firstname="firstname"
				v-model:lastname="lastname"
			></Username>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import Username from '@/components/Username.vue';
import { ref, reactive } from 'vue';
export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
		LabelTitle,
		Username,
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

<style lang="scss" scoped></style>
