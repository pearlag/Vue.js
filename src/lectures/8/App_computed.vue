<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의 유무</h3>
		<p>{{ hasLectures }}</p>
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음' : '없음' }}</p> -->
		<p>{{ existLectures() }}</p>
		<!-- 메서드이기 때문에 끝에 ()를 넣어준다. -->
		<button @click="count++">count : {{ count }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';
export default {
	setup() {
		const teacher = reactive({
			name: '진주은',
			lectures: ['HTML/CSS', 'Javascript', 'Vue3'],
		});

		const hasLectures = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		});

		const existLectures = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		};

		const count = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');
		const fullName = computed({
			get() {
				// 원래 값 보내기
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				//쓰기 가능한 속성으로 만듬
				[firstName.value, lastName.value] = value.split(' ');
			},
		});
		console.log('Console 출력:', fullName.value);
		fullName.value = '짐 코딩';
		return {
			teacher,
			hasLectures,
			existLectures,
			count,
			fullName,
		};
	},
};
</script>

<style scoped></style>
