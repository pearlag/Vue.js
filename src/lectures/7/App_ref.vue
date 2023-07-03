<template>
	<div>
		<p>{{ message }}</p>
		<button @click="addMessage">Click!</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		let message = ref('hello vue');

		const addMessage = () => {
			message.value = message.value + '!';
		};
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
