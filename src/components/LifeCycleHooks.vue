<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello" />
		<hr />
		<button @click="visiable = !visiable">Toggle Child</button>
		<LifeCycleChild v-if="visiable"></LifeCycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onMounted, ref, onBeforeUpdate, onUpdated } from 'vue';
import LifeCycleChild from './LifeCycleChild.vue';
export default {
	components: {
		LifeCycleChild,
	},
	setup() {
		// console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		const visiable = ref('');
		/*
		onBeforeMount(() => {
			console.log('onBeforeMount');
		});
		onMounted(() => {
			console.log('onMounted', inputRef.value.value);
		});
    */
		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log(
		// 		'DOM content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		return { inputRef, message, visiable };
	},
	/*
	beforeCreate() {
		console.log('beforeCreate');
	},
	created() {
		console.log('created');
	},
  */
};
</script>

<style scoped></style>
