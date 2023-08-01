<template>
	<!-- <Transition name="slide">
		<div v-if="show" class="app-alert alert" role="alert" :class="typeStyle">
			{{ message }}
		</div>
	</Transition> -->
	<div class="app-alert">
		<transition-group name="slide">
			<div
				v-for="({ message, type }, index) in items"
				:key="index"
				class="alert"
				role="alert"
				:class="typeStyle(type)"
			>
				{{ message }}
			</div>
		</transition-group>
	</div>
</template>

<script setup>
import { computed } from 'vue';

defineProps({
	items: Array,
});

const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-primary');
</script>

<style scoped>
.app-alert {
	position: absolute;
	top: 50%;
	left: 50%;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
</style>
