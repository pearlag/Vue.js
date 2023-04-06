<template>
	<div class="p-3 bg-danger">
		<!-- v-bind="$attrs" -->
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button
		</button>
		<!-- {{ $attrs }} -->
	</div>
</template>

<script>
export default {
	// inheritAttrs: false,
	emit: ['click'], //이벤트를 발생시킬 땐 emit 옵션에 반드시 선언해야, 상위 박스에 이벤트가 걸리지 않는다.
	setup(props, { emit }) {
		// console.log('context.attrs: ', context.attrs);
		// console.log('class: ', context.attrs.class);
		// console.log('id: ', context.attrs.id);
		// console.log('onClick: ', context.attrs.onClick);
		const sayHello = () => {
			emit('sayHello'); //이벤트 발생
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
