<template>
	<div>
		<button @click="printEventInfo('hello', $event)">
			inline event handler
		</button>
		<hr />
		<input type="text" @keyup="onKeyupHandler" />
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log('message: ', message);
			console.log('event.target: ', event.target); // event.target: <button> inline event handler </button>
			console.log('event.target: ', event.target.tagName); // event.target: BUTTON
		};

		const onKeyupHandler = event => {
			console.log('event.key: ', event.key);
		};
		return { printEventInfo, onKeyupHandler };
	},
};
</script>

<style lang="scss" scoped></style>
