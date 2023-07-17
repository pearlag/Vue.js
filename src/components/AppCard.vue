<template>
	<div class="card">
		<div class="card-body">
			<!-- type: news, notice -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn" :class="isLikeClass">좋아요</a>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	props: {
		type: {
			type: String,
			default: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value); //값에  news와 notice만 포함한다. 그 외에는 console에 경고문 뜬다.
			},
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		// 객체나 배열과 같은 레퍼런스 타입의 default를 설정할 경우에는 기본값을 반환하는 팩토리함수를 설정해야 한다.
		obj: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props) {
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);
		return { isLikeClass, typeName };
	},
};
</script>

<style></style>
