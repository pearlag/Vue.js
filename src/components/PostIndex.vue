<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>
			<hr class="my-4" />
			<div class="row g-3">
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<PostItem
						:title="post.title"
						:cont="post.cont"
						:type="post.type"
						:isLike="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
						:obj="obj"
					></PostItem>
				</div>
			</div>

			<hr class="my-4" />

			<LabelInput
				v-model="personName"
				label="이름"
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
		const obj = reactive({
			title: '제목2',
			cont: '내용2',
		});

		const posts = reactive([
			{ id: 1, title: '제목1', cont: '내용1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', cont: '내용2', isLike: true, type: 'news' },
			{ id: 3, title: '제목3', cont: '내용3', isLike: true, type: 'news' },
			{ id: 4, title: '제목4', cont: '내용4', isLike: false, type: 'notice' },
			{ id: 5, title: '제목5', cont: '내용5', isLike: false, type: 'notice' },
		]);

		const createPost = newPost => {
			console.log('newPost: ', newPost);
			posts.push(newPost);
		};
		const personName = ref('');
		const firstname = ref('');
		const lastname = ref('');

		return { obj, posts, createPost, personName, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
