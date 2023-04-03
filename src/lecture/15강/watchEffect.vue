<template>
	<div>
		<form @submit.prevent>
			<input v-model.lazy="title" placeholder="title" type="text" /><br />
			<textarea v-model.lazy="cont" placeholder="cont"></textarea>
			<hr />
			<button @click="save(title, cont)">저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const cont = ref('');
		const save = (title, cont) => {
			console.log(`저장되었습니다. title: ${title}, cont: ${cont}`);
		};

		//데이터의 변경이 일어났을 때 콜백함수 호출됨.
		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, cont.value);
		});
		return { title, cont, save };
	},
};
</script>

<style lang="scss" scoped></style>
