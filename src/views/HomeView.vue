<template>
	<div>
		<h2>Home View</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAboutPage()">About Go</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push({
		name: 'About',
	});
};
</script>

<style scoped></style>
