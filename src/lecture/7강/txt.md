자바스크립트에서 반응형 객체를 쓰려면 reactive()함수를 써야함.

자바스크립트의 자료형은 크게 원시 타입과 참조 타입으로 나뉜다.

원시 타입 (Primitive Type)
원시 타입은 모두 하나의 값을 담고 있습니다.
- 문자(string)
- 숫자(number)
- bigint
- 불리언(boolean)
- null
- undefined
- 심볼(symbol) => ES6부터 추가된 타입

원시 자료형은 값 자체에 대한 변경이 불가능(immutable) 하지만, 변수에 데이터를 재할당할 수 있습니다. 하나의 메모리에 하나의 데이터를 보관합니다. 변수를 재할당 해도 변수의 항당 값에 영향을 주지 않습니다.

참조 타입 (Reference Type)
참조 타입은 변수에 할당할 때에는 값이 아닌 '주소'를 저장합니다. 배열, 객체, 함수가 대표적입니다. 변수는 주소를 저장하고, 주소는 특별한 동적인 데이터 보관함에 보관되는데 이 데이터 보관함을 메모리 힙 이라고 합니다. 값을 재할당 할 경우 주소는 참조한 모든 값이 영향을 받습니다. 즉, 값이 공유됩니다.

값 자체를 새로 바꿔버리기 때문이다.
message를 서로 동기화를 하려면, 메모리 주소를 이 메시지가 갖고있고, 공유해야 하는데
값 자체를 바꿔버리기 때문에 당연한 결과다.

그러면 reactive()로 Primitive Type을 다룰 수 없을까?
이미 약속된 속성(value)을 선언하고, 이 안에 선언한다.
const message = reactive('hello vue!');
->
const message = reactive({
			value: 'Hello Vue!',
		}); 
로 바꾸고,
message -> message.value로 변환

결국 원시 타입을 선언한게 아니라 객체를 선언한것임.
그래서 반응형 API에서는 원시 타입을 선언할 수 있는 ref함수를 제공한다.

ref함수는 원시 타입의 반응형 데이터를 만들 때 사용한다.
reactive()함수는 위처럼 객체타입에만 동작하지만,
ref함수는 원시타입의 반응형 상태를 만들 때 사용하는, 반응형 API다.


-------------------------

ref로 선언한 데이터를 
반응형 데이터(reactive)의 속성으로 주입하게 되면 
.value가 언래핑되어 일반 속성을 사용하듯이 쓰면 된다.

반응형은 계속 연결되어있다.


반응형상태를 배열 array 에 넣었을때
이 배열에 접근하기 위해서는 .value를 넣어야 한다.

*compile-time transforms을 사용하면 적절한 위치에 .value를 자동으로 추가한다. (아직은 실험적인 단계)
<script setup>
let count = $ref(0)

function increment() {
  // no need for .value
  count++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>

--------------------------
반응형 상태 구조 분해 할당하기
author 의 타입은 string이다.
반응성을 잃어버렸다.

반응성을 잃지 않으면서 구조분해할당이 가능할까?
toRef, toRefs를 사용하면 된다.

vue devtools에서 값이 잘 변경된다.
torefs를 사용하게 되면, book에 있는  속성과,  구조분해해서 재할당한 반응형상태는 서로 동기화가 된다.

만약 구조분해할당 말고 구조에서 !!하나만!! 가져오고싶다면 toRef 를 사용하면된다.

여러개 가져올때는 toRefs, 하나만 가져올때는 toRef

====

redonly
반응형 객체의 변경을 방지한다.
원본을 유지할때 사용한다.