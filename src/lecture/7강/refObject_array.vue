<template>
	<div>

	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup () {
		// ref를 object(객체)에서 사용한것
		const count = ref(0);
		const state = reactive({
			count,
		});
		count.value++;
		count.value++;
		console.log(count.value)
		console.log('state.count: ', state.count)

		// ref를 Array에서 사용한것
		const message = ref('hello');
		const arr = reactive([message]);
		console.log('arr[0]: ', arr[0].value);
		return {		}
	}
}
</script>

<style lang="scss" scoped>

</style>