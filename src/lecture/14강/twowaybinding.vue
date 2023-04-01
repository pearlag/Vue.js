<template>
	<div>
		<h2>input value</h2>
		<!-- <input type="text" v-model.lazy="inputValue" /> -->
		<!-- <input type="text" v-model.number="inputValue" /> -->
		<input type="text" v-model.trim="inputValue" />
		<!-- <input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/> -->
		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>

		<h2>textarea value</h2>
		<textarea :value="textAreaValue"></textarea>
		<div>{{ textAreaValue }}</div>

		<hr />
		<h2>checkbox value</h2>
		<label for="chk01">{{ checkboxValue }}</label>
		<!-- <input type="checkbox" name="check" id="chk01" :checked="checkboxValue" @change="event => (checkboxValue = event.target.checked)" /> -->
		<input type="checkbox" name="check" id="chk01" v-model="checkboxValue" true-value="Yes" false-value="No"/>

		<hr />
		<h2>checkbox values</h2>
		<label>
			<input type="checkbox" name="check" id="chk02" value="html" v-model="checkboxValues"/>
			html
		</label>
		<label>
			<input type="checkbox" name="check" id="chk02" value="css" v-model="checkboxValues"/>
			css
		</label>
		<label>
			<input type="checkbox" name="check" id="chk02" value="js" v-model="checkboxValues"/>
			js
		</label>
		<div>{{ checkboxValues }}</div>

		<hr />
		<h2>radio value</h2>
		<!-- 
		<label>
			<input type="radio" name="rad" value="O" :checked="radioValue === 'O'" @change="event => (radioValue = event.target.value)"/>
			O형
		</label>
		-->
		<label>
			<input type="radio" name="rad" value="O" v-model="radioValue" />
			O형
		</label>
		<label>
			<input type="radio" name="rad" value="A" v-model="radioValue" />
			A형
		</label>
		<div>{{ radioValue }}</div>

		<hr />
		<h2>select value</h2>
		<!-- <select :value="selectValue" @change="event => (event.target.value)"> -->
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>



	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textAreaValue = ref('');
		const checkboxValue = ref('Yes');
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');
		return { inputValue, textAreaValue, checkboxValue, radioValue, selectValue, checkboxValues };
	},
};
</script>

<style lang="scss" scoped></style>
