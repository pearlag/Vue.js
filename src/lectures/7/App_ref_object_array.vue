<template>
	<div></div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
	setup() {
		// ref를 객체에서 사용한 것
		const count = ref(0);
		const state = reactive({
			count,
		});
		count.value++;
		count.value++;
		// console.log(count.value);
		// console.log(state.count);

		// ref를 array에서 사용한 것
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log(arr[0].value);

		return {
			message,
			arr,
		};
	},
};
</script>

<style lang="scss" scoped></style>
