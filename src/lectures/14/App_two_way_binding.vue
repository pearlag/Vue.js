<template>
	<div>
		<h2>Input Value</h2>
		<input type="text" v-model.trim="inputValue" />
		<!--	number 수식어 
		<input type="text" v-model.number="inputValue" />
		-->
		<!--	lazy 수식어 
		<input type="text" v-model.lazy="inputValue" />
		-->
		<!--	js로 처리
			<input type="text" :value="inputValue" @input="event => (inputValue = event.target.value)" />
		-->
		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>

		<h2>Textarea Value</h2>
		<textarea v-model="textareaValue"></textarea>
		<!-- js로 처리
			<textarea :value="textareaValue" @input="event => (textareaValue = event.target.value)"></textarea>
		-->

		<h2>Checkbox Value</h2>
		<input
			type="checkbox"
			id="chk01"
			v-model="checkboxValue"
			true-value="Yes"
			false-value="No"
		/>
		<!-- js로 처리 
		<input
			type="checkbox"
			id="chk01"
			:checked="checkboxValue"
			="event => (checkboxValue = event.target.checked)"
		/>
		-->
		<label for="chk01">{{ checkboxValue }}</label>

		<h2>Checkbox Values</h2>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />HTML
		</label>
		<label>
			<input type="checkbox" value="CSS" v-model="checkboxValues" />CSS
		</label>
		<label>
			<input type="checkbox" value="JS" v-model="checkboxValues" />JS
		</label>
		<div>{{ checkboxValues }}</div>

		<h2>Radio Value</h2>
		<input type="radio" name="type" id="rdo01" value="O" v-model="radioValue" />
		<!-- js로 처리
			:checked="radioValue === 'O'"
			@change="event => (radioValue = event.target.value)" 
		-->
		<label for="rdo01">O형</label>
		<input type="radio" name="type" id="rdo02" value="A" v-model="radioValue" />
		<!-- js로 처리
			:checked="radioValue === 'O'"
			@change="event => (radioValue = event.target.value)" 
		-->
		<label for="rdo02">A형</label>
		<div>{{ radioValue }}</div>

		<h2>Select Value</h2>
		<select v-model="selectValue">
			<!-- js로 처리
			<select
			:value="selectValue"
			@change="event => (selectValue = event.target.value)">
		-->
			<option value="html">html</option>
			<option value="css">css</option>
			<option value="js">js</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref(true);
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');
		return {
			inputValue,
			textareaValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style scoped></style>
