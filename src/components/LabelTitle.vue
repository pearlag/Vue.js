<template>
	<label>
		{{ label }}
		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['title', 'label'], //값을 입력받아, // value
	emits: ['update:title'], // 이벤트 발생시킴. -> v-model로 구현. //@input
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});

		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
