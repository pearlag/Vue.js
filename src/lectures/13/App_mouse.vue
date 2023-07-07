<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv">
				DIV영역
				<p @click.self="clickP">
					P영역
					<!-- <span @click.stop="clickSpan">SPAN영역 </span> -->
					<span @click="clickSpan">SPAN영역 </span>
					<a href="https://naver.com" @click.prevent.stop="clickA">A영역</a>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
			//	alert('좋아요');
		};
		const clickA = () => {
			console.log('clickA');
		};
		return { clickDiv, clickP, clickSpan, clickA };
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>
