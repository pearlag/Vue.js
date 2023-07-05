<template>
	<div>
		<h2 v-if="visible">Hello Vue3</h2>
		<h2 v-else>this is false.</h2>
		<button @click="visible = !visible">toggle</button>

		<hr />

		<button @click="type = 'A'">A</button>
		<button @click="type = 'B'">B</button>
		<button @click="type = 'C'">C</button>
		<button @click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>A, B, C가 아닙니다.</h2>

		<hr />
		<template v-if="visible">
			<h1>title</h1>
			<p>hi, hello</p>
			<p>hi, hello</p>
		</template>
		<hr />

		<h1 v-show="on">title 입니다.</h1>
		<button @click="on = !on">Show title</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const visible = ref(false);
		const type = ref('A');
		const on = ref(true);
		return { visible, type, on };
	},
};
</script>

<style scoped></style>
