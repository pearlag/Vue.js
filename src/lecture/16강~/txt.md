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
        