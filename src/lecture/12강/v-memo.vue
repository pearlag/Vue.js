<template>
	<div v-memo="[subscribe]">
		<p> subscribe : {{  subscribe }}</p>
		<p> views : {{  views }}</p>
		<p> likes : {{  likes }}</p>
	</div>
	<button @click="subscribe++">subscribe++</button>
	<button @click="views++">views++</button>
	<button @click="likes++">likes++</button>
	<div>
		<p> subscribe : {{  subscribe }}</p>
		<p> views : {{  views }}</p>
		<p> likes : {{  likes }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup () {
		const subscribe = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return { subscribe, views, likes }
	}
}
</script>

<style lang="scss" scoped>

</style>