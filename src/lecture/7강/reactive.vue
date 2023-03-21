<!-- 
	자바스크립트에서 reactive 함수로 원시 타입을 반응형 객체로 만드는 법
-->
<template>
	<div>
		<p>{{ message.value }}</p>
		<button v-on:click="addMessage">add click</button>
	</div>
</template>

<script>
import { reactive } from 'vue';
export default {
	setup () {
		const message = reactive({
			value: 'Hello Vue!',
		}); 
		// const message = reactive('hello vue!'); 에서 변환
		let addMessage = () => {
			message.value = message.value + '!';
		};
		return {
			message,
			addMessage,
		}
	}
}
</script>

<style lang="scss" scoped>

</style>