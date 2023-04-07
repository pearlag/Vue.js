<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="헤더 메시지"></slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot :child-message="childMessage" hello-msg="안녕하세요"></slot>
		</div>
		<div v-if="hasFooter" class="card-footer">
			<slot name="footer" footer-message="푸터 메시지"></slot>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
	setup(props, { slots }) {
		const headerMessage = ref('헤더 컴포넌트 메시지');
		const childMessage = ref('자식 컴포넌트 메시지');
		const footerMessage = ref('푸터 컴포넌트 메시지');
		const hasFooter = computed(() => !!slots.footer); // 푸터를 가지고 있다면 true , 그렇지 않다면 false 반환
		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
