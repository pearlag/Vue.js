<template>
	<div>
		<h2>반응형 메시지</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMessage">Add Msg</button>
		<h2>일반 메시지</h2>
		<p>{{ nomalMessage }}</p>
		<button v-on:click="addNomalMessage">Add Msg</button>
	</div>
</template>

<script>
import { isRef, ref, onMounted, onBeforeMount } from 'vue';

export default {
	setup() {
		console.log('setup()');
		const reactiveMessage = ref('Hello Rm');
		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};
		// console.log('isRef(reactiveMessage): ', isRef(reactiveMessage));

		let nomalMessage = 'hello nm';
		const addNomalMessage = () => {
			nomalMessage = nomalMessage + '!';
		};
		// console.log('isRef(nomalMessage): ', isRef(nomalMessage));

		/*라이프사이클 실습 */
		onMounted(() => {
			console.log('onMounted');
		});

		onBeforeMount(() => {
			console.log('onBeforeMounted');
		});

		return {
			reactiveMessage,
			nomalMessage,
			addReactiveMessage,
			addNomalMessage,
		};
	},
};
/*
nomalMessage에 ref함수를 선언하지 않았기 때문에, addNomalMessage는 작동되지 않는다.
isRef : 반응형 데이터인지 알려주는 함수.
reactiveMessage는 true,
nomalMessage는 false가 나온다.

*/
</script>

<style lang="scss" scoped></style>
