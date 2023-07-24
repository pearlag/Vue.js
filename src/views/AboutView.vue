<template>
	<div>
		<h2>About View</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">Home Go</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const route = useRouter();
console.log('route.path', route.path);
</script>

<style scoped></style>
