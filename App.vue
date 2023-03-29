<template>
	<div>
		<h2>input value</h2>
		<input type="text" v-model="inputValue" />
		<!-- <input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/> -->
		<div>{{ inputValue }}</div>

		<h2>textarea value</h2>
		<textarea :value="teatAreaValue"></textarea>
		<div>{{ teatAreaValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const teatAreaValue = ref('');
		return { inputValue, teatAreaValue };
	},
};
</script>

<style lang="scss" scoped></style>
