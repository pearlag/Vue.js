# 양방향 바인딩

입력 요소의 상태와 자바스크립트의 상태를 동기화해야하는 경우.
* v-model

    - textarea에서도 쓸 수 있음.
    - HTML 요소에 따라서 쓰는게 다름..
    - input type=text, textarea : value 속성, input 이벤트
    - checkbox, radio : checked 속성, change 이벤트
    - select : value 속성, change 이벤트

실무에서 v-model을 풀어서 사용해야 될 수도 있음.
<select :value="selectValue" @change="event => (event.target.value)">

수식어
 
.lazy : change 이후에 이벤트 동기화.(입력중에 X. 입력 후 포커스 떨어졌을때)

.number : 기본적으로 입력받은 값은 string. 숫자를 입력했을때 이것을 num으로 형변환. 사칙연산 수행시 유용하다.

.trim : 사용자가 입력한 내용에서 앞뒤 공백 제거
