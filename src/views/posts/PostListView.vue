<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		/>
		<hr class="my-4" />
		<AppLoading v-if="loading" />
		<AppError v-else-if="error" :message="error.message" />
		<template v-else>
			<AppGrid :items="posts">
				<template v-slot="{ item }">
					<PostItem
						:title="item.title"
						:content="item.content"
						:created-at="item.createdAt"
						@click="goPage(item.id)"
						@modal="openModal(item)"
					></PostItem>
				</template>
			</AppGrid>
			<AppPagination
				:current-page="params._page"
				:page-count="pageCount"
				@page="page => (params._page = page)"
			/>
		</template>
		<!-- Modal -->
		<teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:content="modalContent"
				:createdAt="modalCreatedAt"
			/>
		</teleport>
		<template v-if="posts && posts.length > 0">
			<hr class="my-5" />
			<AppCard>
				<PostDetailView :id="posts[0].id"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_limit: 3,
	_page: 1,
	title_like: '',
});
const {
	response,
	data: posts,
	error,
	loading,
} = useAxios('/posts', { params });
//paganation
const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

// modal
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');
const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
