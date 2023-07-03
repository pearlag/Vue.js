<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';
export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		const copy = readonly(original);
		original.count++;
		copy.count++; //  readonly 처리했기 때문에 문제가 되는 부분
		console.log(original.count);
		console.log(copy.count);
		return {
			original,
			copy,
		};
	},
};
</script>

<style lang="scss" scoped></style>
