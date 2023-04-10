<template>
	<div class="p-3 bg-danger">
		<!-- v-bind="$attrs" -->
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button {{ message }}
		</button>
		<!-- {{ $attrs }} -->
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
};
</script>

<script setup>
import { ref } from 'vue';

const message = ref('message');
</script>

<style lang="scss" scoped></style>
