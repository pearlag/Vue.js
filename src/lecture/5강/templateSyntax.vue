<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button v-on:click="message = message + '!'">click</button>
		<hr />
		<h2>v-html</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div v-bind:title="dynamicTitle">마우스를 올려보세요</div>
		<input type="text" value="홍길동" v-bind:disabled="isInputDisabled" >

		<div :title="dynamicTitle">마우스를 올려보세요</div>
		<input type="text" value="홍길동" :disabled="isInputDisabled" >
		<!-- v-bind 생략하고 :(콜론)으로 사용 가능:: 단축속성 -->

		<input v-bind="attrs">
		<input :="attrs">
		<!--
			다중 속성을 한꺼번에 바인딩 가능하다.
		-->
		<hr />
		<h2>Javascript</h2>
		{{ message.split('').reverse().join('') }}
		<br />
		{{ isInputDisabled ? '예' : '아니오' }}
		<!-- 
			이중 중괄호 안에 자바스크립트 표현식 사용해서 출력 가능
			삼항 연산자도 사용 가능. 
			isInputDisabled가 true이면 예를 출력하고, false 이면 아니오를 출력하라.
		-->

	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('안녕하세요');
		const rawHtml = ref('<strong>안냐세요</strong>');
		const dynamicTitle = ref('안녕하세요');
		const isInputDisabled = ref(false); // false값이면 disabled가 false이니 text 수정 가능.
		const attrs = ref({
			type: 'text',
			value: '12345678',
			disabled: false,
		}); // 다중 속성을 한꺼번에 바인딩 가능하다.
		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>
<!-- 
v-once 디렉티브 메시지는 btn을 눌러도 변경되지 않는다. 일회성 보간이기 때문

-->

<style lang="scss" scoped></style>
