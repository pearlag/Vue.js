<template>
	<main>
		<div class="container text-center py-4">
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
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive } from 'vue';
export default {
	components: {
		AppCard,
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
		return { posts };
	},
};
</script>

<style lang="scss" scoped></style>
