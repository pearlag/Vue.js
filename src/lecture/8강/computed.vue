<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음' : '없음' }}</p> -->
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>

		<h2>이름</h2>
		<p>{{ fullName }}</p>

	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
	setup () {
		const teacher = reactive({
			name: '짐코딩',
			lectures:[
				'html/css',
				'javascript',
				'vue3'
			],
		});
		
		/* const hasLecture = computed(() => {
			return teacher.lectures.length > 0 ? '있음' : '없음'
		}) 명령어가 하나일 때는 return과 중괄호를 생략할 수 있다. */

		const hasLecture = computed(() => teacher.lectures.length > 0 ? '있음' : '없음'); // computed 콜백함수

		const existLecture = () => 
			teacher.lectures.length > 0 ? '있음' : '없음';  //메서드

		const firstName = ref('홍');
		const lastName = ref('길동');

		const fullName = computed({
			get(){
				return firstName.value + ' ' + lastName.value;
				// 4. 반응형 데이터의 값이 바뀌었기 때문에 다시 갱신되어서 출력됨.
			},
			set(value){ // 2. 다시 쓴 값이 넘어옴
				[firstName.value, lastName.value] = value.split(' ');
				//3. 구조분해 할당
			},
		});// 객체함수

		console.log('console 출력 :', fullName.value);
		fullName.value = '짐 코딩'; // 1. 다시 쓰기


		return {
			teacher,
			hasLecture,
			existLecture,
			fullName,
			lastName,
		};
	},
};
</script>

<style lang="scss" scoped>

</style>