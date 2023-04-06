<template>
	<label class="form-label" id="child-id">
		{{ label }}
	</label>
	<input v-model="value" v-bind="$attrs" type="text" class="form-control" />
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'], //값을 입력받아, // value
	emits: ['update:modelValue'], // 이벤트 발생시킴. -> v-model로 구현. //@input
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});

		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
