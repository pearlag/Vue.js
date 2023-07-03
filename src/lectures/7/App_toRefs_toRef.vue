<template>
	<div>
		<p>author : {{ author }}</p>
		<p>title : {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';
export default {
	setup() {
		const book = reactive({
			author: '주으니',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 지금..',
			price: '18,000원',
		});

		// const { author, title } = toRefs(book);
		const author = toRef(book, 'author');
		const title = toRef(book, 'title');

		return {
			author,
			title,
			book,
		};
	},
};
</script>

<style lang="scss" scoped></style>
