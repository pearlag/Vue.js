<template>
	<div :style="styleObject">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi eveniet reprehenderit sunt perspiciatis. Culpa libero optio vero! Deleniti, beatae! Doloremque assumenda ipsam unde, corporis labore eveniet. Natus, recusandae quam.</p>
	</div>
	<button v-on:click="fontSize--">-</button>
	<button v-on:click="fontSize++">+</button>
</template>

<script>
import { ref, computed  } from 'vue';

export default {
	setup () {
		/*
		const styleObject = reactive({
			color: 'red',
			fontSize: '13px',
		});
		*/

		const fontSize = ref(13);
		const styleObject = computed(() => {
			return{
				color: 'red',
				fontSize: fontSize.value + 'px',
			}
		});
		

		return {
			styleObject, 
			fontSize,
		}
	}
}
</script>

<style lang="scss" scoped>

</style>