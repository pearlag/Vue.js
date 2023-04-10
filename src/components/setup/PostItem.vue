<template>
	<div class="card">
		<div class="card-body">
			<!-- {{ $props }} -->
			<!--type : news, notice -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ cont }}
			</p>
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
	type: {
		type: String,
		default: 'news', // 속성이 null or undefined일 때
		validator: value => {
			return ['news', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true, //필수
	},
	cont: {
		type: String,
		// required: true, //필수
	},
	isLike: {
		type: Boolean,
		default: false,
	},
	obj: {
		type: Object,
		default: () => ({}),
	},
});

const emit = defineEmits(['toggleLike']);

// console.log('props.title: ', props.title);
const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));
const toggleLike = () => {
	// props.isLike = !props.isLike;
	emit('toggleLike');
};
</script>

<style></style>
