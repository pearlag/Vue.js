<template>
	<div>
		<button v-on:click="increment">counter: {{ counter }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		increment() {
			this.counter++;
		},
	},
	mounted() {
		console.log('컴포넌트가 마운트되었습니다.');
	},
};
</script>

<style scoped></style>
