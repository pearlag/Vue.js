# 선수학습


- DOM(문서 객체 모델) Document Object Model.

트리 구조(document 안 구조) / 노드(각각의 객체)

document : dom tree 최상위 모델 (dom model진입점)



- BOM(브라우저 객체 모델) Brouser oject model

브라우저를 제어할 수 있도록 모델링하는것

window - 브라우저 창

document - 문서에 대한 정보 have

history 객체 - url history 제어

location - 문서의 주소와 관련된 객체. 문서 url 변경, 주소에 대한 정보 얻

screen : 사용자의 화면에 대한 정보

navigator : 실행중인 브라우저에 대한 정보. 위치정보 버전. 이름 앱..



자바스크립트 파일을 효과적으로 가져오는 법
html parsing ------script fetch--------script execution-----------→ ( X ) 동기처리로, 시간이 걸리고, 순서가 애매할수 있다.

html parcing ----------→ script fetch + script execution  ( O ) 이 방법도 문제가 있다. 

- defer로 해결할 수 있다. ( 일반적으로 사용)

script 선언에  defer 속성을 선언해주면 된다. - html 파싱과 함께 비동기로 js파일을 불러온다. -. html 파일을 불러온 후 script execution 진행한다.

즉,

html parsing -------script fetch(비동기)-------→(파싱 끝난후)script execution





- async 속성

html 파싱과 함께, 비동기로 js 파일을 불러온다. html 파싱이 완료되지 않았더라도 먼저 로딩되는 js파일부터 실행이 된다.

js 파일을 실행할때는 html 파싱이 중단된다.

html parsing -------script fetch(비동기)-------→script execution(html 파싱 중지) ---→(다시 파싱)

꼭 필요할때 사용함. 

- this
ES5 bind 메서드
한 번만 사용할 수 있다.
전역스코프에서 this는 window 객체다.
화살표 함수는 자신을 감싸는 외부 스코프의 this를 물려받는다. 
  <ul>
    <li>객체 메서드를 선언할 때 사용하면 X</li>
    <li>addEventListener 함수의 콜백함수에서 사용하면 X</li>
  </ul>
엄격 모드(use strict)에서는 호출한 놈이 없을 경우 기본값이 window가 아니라 undefined가 된다.
<code>
function printThis(){
  console.log(this);
}

let person1 = {
  name = '홍길동',
};

let printThis1 = printThis.bind(person1);
printThis();

// {name: '홍길동'}


- API란 무엇인가?

응용 프로그램에서 소통하기 위한 접점
애플리케이션에서 데이터를 읽거나 쓰기 위해 사용하는 인터페이스.

HTTP API(통신 방법)
Private API(사내 API)
Public API(Open API)

- 동기

답변을 기다리는 것(blocking)
업무가 단순하다 but 자원 비효율적 사용

- 비동기

답변을 기다리지 않는 것(Non-blocking)
대신, 결과를 확인할 수 없다.
자원 효율적 사용 but 업무가 복잡하다

- 이벤트 전파
<dl>
  <dt>캡쳐링</dt>
  <dd>최상위 요소부터 하위 요소까지 이벤트 전파</dd>
  <dt>버블링</dt>
  <dd>타겟 요소부터 이벤트가 전파되어 최상위 요소까지 올라가는 것</dd>
</dl>
</code>

event.stopPropagation(); 쓰면 이벤트 전파 멈춤.
event.preventDefault();  기본 기능을 막음(ex. 앵커태그)

# Array API
<strong>map()</strong>
주어진 결과물이 리턴한 결과를 새로운 배열로 반환한다.
<code>
<script type="module" src="./main.js"></script>
</code>

<code>
// main.js
'use strict';

class Student{
  constructor(name, kr, en, math){
    this.name = name;
    this.kr = kr;
    this.en = en;
    this.math = math;
  }
}

const student1 = new Student("쯔위", 95, 87, 75);
const student2 = new Student("미나", 75, 22, 22);
const student3 = new Student("채영", 45, 100, 65);
const student4 = new Student("나연", 11, 50, 75);

const students = [student1, student2, student3, student4];

cosnt result = numbers.map((number) => number * 2);
console.log(
  "영어 점수"
  students.map((student) => student.en)
);

// 영어 점수 (4) [87, 22, 100, 50] 
</code>

<strong>some()</strong>
요소를 한 번씩 순회하며, 주어진 함수가 한 번이라도 true라도 나오면 true 반환한다.
<code>
const fruits = ["사과", "딸기", "배", "참외];
fruits.some((fruit) => fruit === "배"; )

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.some((number) => number >= 8)
</code>

<strong>every()</strong>
배열 안의 모든 요소가 true일때 true 반환한다.

<strong>filter()</strong>
필터링 한 요소는 제거하고 새로운 배열을 만든다.
numbers.filter((number) => number % 2 === 0)

<strong>reduce(acc누적값, cur현재값, idx인덱스, src원본)</strong>
누적값: 결과로 반환한 값을 다시 매개변수로 넣는다
현재값: 배열 안에 있는 요소
인덱스: 배열의 인덱스

<strong>모듈 시스템</strong>
분리된 js파일(모듈)과 그것을 불러오는 시스템(import)
종류
<ul>
  <li>유지보수 용이</li>
  <li>네임스페이스화</li>
  <li>재사용성</li>
</ul>
모듈 시스템 종류에는 AMD, CommonJS, UMD, ES Module이 있다.

<strong>ES Module 방식(scss 파일 나누는거랑 똑같음)</strong>
- package.json에서 "type" : "module" 선언
- script 태그에 type="module" 속성을 추가하면, 이 파일은 모듈로서 동작한다.
- 외부에서 불러올 때는 import를 사용한다. <code>@import{ 함수명, 함수명, 함수명 } from './math.js';</code>
- js파일에서 <code>export default 함수명;</code> 선언하면 부모 js 디렉티브에서 바로 받아올 수 있다. <code>import 함수명 from './math.js'</code>
- 모아서 default 선언할수도 있다.
ex))))
<code>
// math.js
// 위에서 sum, avg, subtract 변수를 선언한 상태
export default{
  sum,
  avg,
  subtract
}
</code>
<code>
//index.js
import math from './math.js'

comsole.log(math.sum);
comsole.log(math.avg);
comsole.log(math.subtract);
</code>

<strong>CommonJS 방식</strong>
exports.함수명
modules

<strong>NPM node package manager</strong>
npm(모듈 모음)
npm install 모듈명
devDependencies 개발할 때 필요한 라이브러리
dependencies 운영할 때 필요한 라이브러리
- 명령어
npm init -y 기본값 입력
npm i ajs@1.10.7 특정 버전 설치는 @+버전
npm i --save-dev는 devDependencies에만 다운로드.
-g 전역 설치

<strong>WebPack 기초</strong>
모듈 증가 -> 로딩 시간 증가
시간 줄이는 방법은? http 갯수를 줄인다.
배포하기 전, 여러 개의 파일을 하나의 파일로 줄인다.(번들링) 모듈 번들러로 작업한다. (웹팩)
npm i --save-dev webpack webpack-cli
npx webpack --entry ./index.js( 어떤 파일을 기준으로 번들링할 것이냐?) --output-path ./dist(dist 폴더 안에 번들링 결과 파일을 저장함. 압축되어 생성된다.) --mode development(압축 없이 생성)

webpack.js.org/guides/asset-management
- webpack.config.js
<code>
const path = require('path');

module.exports = {
  mode : 'production' // development(압축 x) 
  entry : 진입점을 설정한다.
  output:{ 
    path: 번들링 파일을 저장할 경로
    filename : 파일 이름
  }
}

npx webpack //명령어 입력시 webpack.config.js를 참고하여 번들링.

packages.json -script에
"build" : "webpack"

npm run build 하면 webpack 실행.

js 뿐만 아니라 image, css도 번들링한다.
</code>


# bootstrap 5 설치
UI 프레임워크

1. npm install bootstrap bootstrap-vue
2. main.js에 import 'bootstrap/dist/css/bootstrap.min.css';
3. main.js에 마운트 다음줄에 import 'bootstrap/dist/js/bootstrap.js';
4. npm run dev
5. getbootstrap.com에서 ui 가져오기

* vuetify
 vue에 특화된 UI 프레임워크


# 컴포넌트 기초 - 등록 및 사용
- 컴포넌트는 UI를 재사용하기 위해 정의한 것.
- UI를 나눔으로써 클린 코드.
- 네이밍은 파스칼 or 케밥케이스

- 컴포넌트 정의 -> 등록 -> 사용

* 컴포넌트 정의
- SFC ( 실무에서 일반적으로 사용)
  .vue 확장자를 갖는다.
  .vue 파일 안에 template, script, style
- string template
  - 자바스크립트 객체로 정의함.


# 컴포넌트 등록
- 전역 등록
  편리하지만, 최종 빌드에 해당 컴포넌트가 포함되어 파일의 용량이 커진다.
  소스코드를 볼 때 종속관계 파악이 힘들다.

- 지역 등록


# 컴포넌트 사용
- 사용할 때마다 해당 컴포넌트의 새 인스턴스 생성 = 사용할 때마다 setup()함수 실행.

# 네이밍
- 베이스 컴포넌트 이름
  이름 앞에 Base, App, Vue 붙이는 것을 권장.

- 싱글 인스턴스 컴포넌트 이름
  오직 하나의 인스턴스만 있음을 알도록 The 접두사로 시작한다.
  TheSidebar.vue, TheHeading.vue

# SFC
- template + script + style

- template은 루트에서 한 블록만 있을 수 있다.
- .vue 파일은 하나의 script 블럭만 포함 가능함.
- .vue 파일은 하나의 script setup 블럭만 포함 가능함.
  - 컴포넌트의 setup()함수로 사용된다.

- script의 lang 속성으로 전처리기 언어 선언 가능.
  - <script lang="ts"> // TypeScript 선언
- lang 속성은 모든 블록에 적용 가능하다.
- src 속성으로 파일을 가져올 수 있다.
- css 기능
  - scoped 속성이 있는 경우, 해당 css는 현재 컴포넌트의 요소에만 적용.
    <style scoped>
  - module 속성
    css 클래스를 $style로 노출
    <p class="card-text" :class="$style.red"></p>
    <style module>
    .red {
      color: red;
    }
    </style>
  - 값을 지정해서 이름 변경 가능.


 - v-bind로 동적인 css 사용 가능.
    <style>
    .red {
      color: v-bind(color);
    }
    </style>
    color 변수 선언하고, value값 바꿔주면서 컨트롤.

# Props

  - 컴포넌트별로 원하는 데이터를 보여주기 위해선, 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달해야 한다. -> props
  - 컴포넌트에 등록할 수 있는 '사용자 정의 속성' 이다.
  1. 자식 컴포넌트에서 export default 안에 props를 선언해야 한다.
  export default {
      props: ['title', 'cont'],
    또는 setup()함수의 첫 번째 매개변수로 props 객체를 받는다.
     export default {
      setup (props){

  2. 자식 컴포넌트에서 html에서 원하는 부분에 템플릿 문법으로 선언한다.
      <h5>{{ title }}</h5>
  3. 부모 컴포넌트에서 값을 넣는다.
    <AppCard title="제목1" cont="내용1"></AppCard>
     또는 변수 선언후 v-nind 한다.
    <AppCard :title="post.title" :cont="post.cont"></AppCard>
  4. 여러 개의 데이터를 루프화 시키려면, 변수에 reactive 함수로 루프할 데이터들을 넣은 후,  v-for함수 사용한다.
    <div v-for="post in posts" :key="post.id" class="col col-4">
      <AppCard :title="post.title" :cont="post.cont"></AppCard>
    </div>
    const posts = reactive([
			{ id: 1, title: '제목1', cont: '내용1' },
			{ id: 2, title: '제목2', cont: '내용2' },
			{ id: 3, title: '제목3', cont: '내용3' },
			{ id: 4, title: '제목4', cont: '내용4' },
			{ id: 5, title: '제목5', cont: '내용5' },
		]);

  - 객체문법을 선언할수도 있다.
    - 디테일하게 선언해야 한다.
    - type, default, required, validator 속성이 있다.
    - type: 데이터 타입 정의.
      String, Number, Boolean, Array, Object, Date, Function, Symbol,모든 기본 생성자 또는 모든 사용자 정의 타입(Person, Animal)
    - default : 속성값이 null / undefined일 때 적용할 기본값 선언.
    - required : true로 하여 필수값 설정.
    - validator : 유효성 검사.
    - 디폴트를 설정할때는, 기본값을 반환하는 팩토리함수를 선언해야 함.

function()을
() => 로 바꿔쓸 수 있음. (화살표함수)
  - Options API에서 this.$props 객체로 접근할 수 있다.

값을 전달할 때는 케밥-케이스

  - 객체를 사용하여 다중 속성 전달할 때는 v-bind 사용

  - 단방향 데이터 흐름
    상위 속성 업데이트 -> 하위 속성도 업데이트됨. *반대는 안됨!
     - 레퍼런스타입의 속성은 반대로도 가능하다.

  - 양방향 데이터 흐름
    자식컴포넌트에서 부모컴포넌트로 이벤트를 올려서, 부모컴포넌트에서 스스로 속성을 변경하게끔 하려면 어떻게 해야 할까?
    1. setUp함수의 파라미터로 값을 선언한다.
      setup(context) {

    2. 그 값을 변수 안에 넣고 emit함수를 선언한다.
      const toggleLike = () => {
        context.emit('toggleLike');
      };
    3. 부모 컴포넌트로 가서, 이벤트를 전달할 노드에 이벤트를 넣는다.
     <AppCard	@toggle-like="post.isLike = !post.isLike"></AppCard>

  - 객체 / 배열 데이터 흐름
   
  - Boolean Casting


  # Events
  - 자식 컴포넌트에서 부모 컴포넌트로 이벤트를 전달하는 방법에 대해 알아보자.
  - 컴포넌트의 emit 메서드로 할 수 있다. 파라미터 또한 넘길 수 있다.
  - 사용 방법
    1. 자식 컴포넌트에서 클릭이벤트 연결
      <button class="btn btn-primary" @click="$emit('createPost')">button</button>
    2. 부모 컴포넌트에서 v-on으로 클릭이벤트 받기
        @로 줄여서 쓸 수 있음
      <PostCreate @create-post="createPost"></PostCreate>
    3. 부모 컴포넌트에서 메서드 선언 후 리턴
      const createPost = () => {
        console.log('createPost');
      };

  - vue3에선 emits옵션 사용 가능하다.

  - 객체문법으로 선언할 경우 validation 로직 추가 가능.
    - 유효성 체크가 없을 경우  null로 표시하기.
      emits: {
        createPost: null,
      },
    - 컴포넌트를 잘 문서화하기 위해, 모든 이벤트를 정의해야 한다.
      emits:{},

    - v-model="username"
      = 
      :value="username" @input="event => (username = event.target.value)"


    - 컴포넌트 안에서 computed로 v-model 구현 가능.
    computed는 읽기 전용이지만, get, set을 활용하면 쓰기도 가능하다.

    - v-model 전달인자
     기본적으로 v-model은 컴포넌트에서 modelValue props와
     update:modelValue 이벤트로 사용.
     but, 전달인자(Arguments)를 사용하여 이러한 이벤트 이름을 수정할 수 있다.
     <BookComponent v-model:title="bookTitle" / >

    - vue3에서는 전달인자를 사용하여 여러 개의 v-model을 바인딩할 수 있다.
      <BookComponent 
      v-model:title="bookTitle"
      v-model:author="bookAuthor"
       / >

    - 정리 
      - 상위컴포넌트 ---(props로 데이터 전달)----> 하위 컴포넌트

      - 하위컴포넌트 ---(emit으로 데이터 전달)----> 상위 컴포넌트
        - 1. 템플릿 안에서 사용할 시 $emit으로 이벤트 올림
            <button @click="$emit('someEvent')">버튼</button>
          2. 그 후에, 부모에서는 v-on(@)로 이벤트 수신.
            <MyComponent @some-event="callFunction" />
            * . once 수식어는 컴포넌트 커스텀 이벤트에서도 지원됨! 
            <MyComponent @some-event.once="callFunction" />
        - $emit에 파라미터를 전달할 경우
          1. 자식 컴포넌트에서 파라미터 전달
            <button @click="$emit('someEvent', 'hello', 'world', '!')">버튼</button>
          2. 부모 컴포넌트(setup함수 안에 선언)에서 파라미터 받기
            const callFunction = (word1, word2, word3) =? {
              //명령
            };

      - emits 옵션으로 이벤트 선언하기
        1. 문자열 배열 선언
          - export default{
              emits: ['someEvent'],
              setup(props, {emit} ){
                emit('someEvent', 'Hello World!')
              }
            }
        2. 객체문법 선언
            * validation(유효성검사) 로직 추가 가능. 값이 없다면 null로 설정.
          - export default{
              emits: {
                // 유효성 검사 X
                someEvent: null,

                // 유효성 검사 O. 객체 문법으로 선언.
                someSubmit: (result) => {
                  if(email && password) {
                    return true
                  }else{
                    console.warn('result 값이 비었습니다.')
                    return false
                  }
                }
              },
              setup(props, context){
                context.emit('someEvent', 'Hello World!')
              }
            }
        