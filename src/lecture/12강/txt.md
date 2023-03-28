디렉티브(v-) // 지시문
vue 내장 디렉티브
- v-text
    dom 엘리먼트의 textContent를 업데이트한다.
    문자열로 인식한다.


- v-html
  html로 보여줌.

- v-cloak
    ready 상태에서 있다가, 그 후엔 사라짐. ex)로딩바

v-show
v-if
v-else
v-else-if
v-for
- v-on
    이벤트를 연결함.
    v-on: = @

- v-bind
    단축표기 :

v-model
- v-slot
    단축표기 #
v-pre

- v-once
    엘리먼트와 컴포넌트를 한 번만 렌더링한다.(v-once 가지고 있는 컴포넌트는 수정이 안됨)
    업데이트 성능 최적화 


- v-memo
    성능과 관련됨.
    변경되는 데이터가 누적되다가, []안의 반응형 데이터가 변경되면 그때 누적되었던 데이터들이 반영된다.


* 디렉티브 구성

 v-on:submit.prevent="onSubmit"
 name/argument/modifiers/value
 디렉티브/전달인자/수식어/값 
