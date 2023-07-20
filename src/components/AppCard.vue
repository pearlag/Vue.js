<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="자식헤더메시지"></slot>
		</div>
		<!-- {{$slot}} -->
		<div class="card-body">
			<slot :child-message="childMessage" hello-message="안녕하세용!"
				>#body</slot
			>
		</div>
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer" footer-message="자식푸터메시지"></slot>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
	setup(props, { slots }) {
		const childMessage = ref('자식컴포넌트의메시지');
		const hasFooter = computed(() => slots.footer);
		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
