<template>
	<div class="container py-4">
		{{ msg }}
		<hr />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello()">click</button>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem
		><PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem
		><PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem
		><PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';

const msg = 'Hello!';
const message = ref('');
const sayHello = () => {
	alert('Hello');
};
const child = ref(null);
defineExpose({
	msg,
});
const response = await axios(
	'	https://dummy.restapiexample.com/api/v1/employees',
);
console.log('response: ', response);
</script>

<style lang="scss" scoped></style>
