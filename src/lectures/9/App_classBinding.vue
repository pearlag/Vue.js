<template>
	<div>
		<div :class="[isActive ? 'active' : 'class', errorClass, classObject]">
			text
		</div>
		<button @click="toggle">toggle</button>
		<button @click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// const classObject = reactive({
		//	active: true,
		//	'text-danger': false,
		// });

		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};
		return { isActive, toggle, hasError, classObject, activeClass, errorClass };
	},
};
</script>

<style scoped>
.active {
	font-weight: bold;
}
.text-danger {
	color: red;
}
.error {
	text-decoration-line: line-through;
}
</style>
