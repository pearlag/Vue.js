<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button v-on:click="message = message + '!'">click</button>
		<hr />
		<h2>v-html</h2>
		<p v-html="rawHtml"></p>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('안녕하세요');
		const rawHtml = ref('<strong>안냐세요</strong>');
		return {
			message,
			rawHtml,
		};
	},
};
</script>
<!-- 
v-once 디렉티브 메시지는 btn을 눌러도 변경되지 않는다. 일회성 보간이기 때문

-->

<style lang="scss" scoped></style>
