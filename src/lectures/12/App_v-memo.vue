<template>
	<div>
		<div v-memo="[subscribe]">
			<p>subscribe: {{ subscribe }}</p>
			<p>view: {{ view }}</p>
			<p>like: {{ like }}</p>
		</div>
		<button @click="subscribe++">subscribe++</button>
		<button @click="view++">view++</button>
		<button @click="like++">like++</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const subscribe = ref(4000);
		const view = ref(400);
		const like = ref(20);
		return { subscribe, view, like };
	},
};
</script>

<style lang="scss" scoped></style>
