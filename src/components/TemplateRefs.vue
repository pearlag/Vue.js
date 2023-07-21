<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}, {{ $refs.input === input }}
		</p>
		<hr />
		문자열 바인딩
		<!-- <ul>
			<li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li>
		</ul> -->
		<hr />
		함수 바인딩
		<ul>
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
	setup() {
		const input = ref(null); // 위에 선언한 ref 값과 동일한 함수명 선언
		console.log('setup: ', input.value); // null

		onMounted(() => {
			input.value.value = 'hellowwww';
			console.log('onMounted: ', input.value.value); // <input type="text">

			// itemRefs.value.forEach(item => console.log('item:', item.textContent));
			itemRefs.value.forEach(item => console.log('item:', item));
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);
		return { input, fruits, itemRefs };
	},
};
</script>

<style lang="scss" scoped></style>
