<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
			<LabelInput label="이름" data-id="이름"></LabelInput>
			<hr />

			<FancyButton>click!!<span style="color: red">@@</span></FancyButton>
			<FancyButton #="{ fancyMessage }">
				{{ fancyMessage }}
			</FancyButton>

			<FancyButton>
				<template #="{ fancyMessage }">{{ fancyMessage }}</template>
			</FancyButton>

			<hr />
			<AppCard>
				<!-- <template #[slotArgs]>제목</template> -->
				<!-- 이 부분은 암시적으로 default 슬롯으로 출력
				<template #footer>푸터..</template> -->
				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>

				<template #default="{ childMessage, helloMessage }">
					디폴트입니다.
					<br />
					{{ message }}
					<br />
					{{ childMessage }}
					<br />
					{{ helloMessage }}
				</template>

				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
			</AppCard>
			<hr />
			<AppCard> 게시글입니다. </AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';
export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요.');
		};
		const slotArgs = ref('header');
		const message = ref('hello');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style scoped></style>
