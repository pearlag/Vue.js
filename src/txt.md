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
        

# Non-Prop(fallthorugh) 속성
  - class, style id..
  - 자식의 루트 컴포넌트에 이미 속성이 정의되어 있고, 부모 컴포넌트에 정의된 자식 컴포넌트에도 속성이 정의되어 있다면
    - class, style은 둘 다 출력(병합)된다.
    - id는 부모에서 받은 값으로 덮어씌워진다.

  - v-on도 상속된다.

  - 이벤트 리스너도, 동일하게 컴포넌트의 루트 엘리먼트에 상속된다.
   
  - 속성 상속 비활성화
    inheritAttrs: false,

  - Fragments
   다중 루트 컴포넌트
   vue3에서는 다중 루트 컴포넌트를 가질 수 있게 됨.
    - 그럼 non-prop 속성을 어디에 상속하느냐?
     자식 컴포넌트에서, 속성을 상속할 곳에 v-bind="$attrs" 로 명시적으로 표시해줘야 함.

     이벤트를 발생시킬 땐 emit 옵션에 반드시 선언해야, 상위 박스에 이벤트가 걸리지 않는다.

# Slot
컴포넌트에 콘텐츠를 전달할 수 있음.
 - fallback content
  부모 컨텐츠에서 슬롯 콘텐츠가 제공되지 않을 때, 슬롯에 대한 폴백(기본 콘텐츠) 제공.
   --> <slot></slot> 태그 안에 기본으로 들어갈 콘텐츠를 넣어주면 된다.
 - Named Slots(#으로 단축할수 있음.)
    
    특정 슬롯 콘텐츠가 렌더링 되어야 할 위치를 설정할 수 있다.
    name이 없는 slot의 이름은 default이다.
    <div class="card-footer">
			<slot name="footer">#footer</slot>
		</div>
    <AppCard>
      <template #header>제목입니다</template>
      <!-- <template #default>내용입니다</template> -->
      암시적으로 default 슬롯입니다.
      <template #footer>푸터입니다</template>
    </AppCard>

  - 동적 변경 가능
    1. 변수에 ref함수로 name값을 할당한 다음에
        const slotArgs = ref('header');
    2.  template 속성에 #[변수이름] 넣고 컨텐츠를 삽입한다.
        <template #[slotArgs]>제목입니다</template>
    3. vue devtools에서 변수의 name값을 변경하면 컨텐츠를 다른 슬롯으로 넣을 수 있다.
  
  - Render Scope
  슬롯 컨텐츠에서 슬롯 컴포넌트의 데이터는 참조할 수 있으나, 자식 컴포넌트의 데이터는 참조할 수 없다. 그렇다면 그 방법은
  - Scoped Slots 이다.
   props를 전달하는 것처럼 속성을 전달한다.


# Provide / Inject
 - Prop Drilling의 문제를 해결할 수 있다.
 부모 컴포넌트는 계층 구조의 깊이에 관련없이, 원하는 자식 컴포넌트에 데이터를 전달할 수 있다.
 1. provider 역할을 하는 상위 컴포넌트 setup()함수 내부에 선언.
 provide(주입할 키, 제공하는 값)
 2. 가져올 자식 컴포넌트에서 setup()함수 내부에 inject 선언
 const 제공하는값 = inject(주입키, 디폴트값)
- Provide / Inject를 반응성 데이터로 제공할 때, 가능한 모든 변경을  Provider 내부에서 하는 것이 좋다.

# Symbol
 - 충돌 피하기

# App-Level Provide
- App은 루트 컴포넌트이다. 여기서 데이터를 제공(Provide)하게 되면 모든 컴포넌트에서 사용(Inject)할 수 있다.

# this
- globalProperties :: 모든 컴포넌트에서 접근하고싶은 라이브러리와 같은 객체 추가.
  main.js 에서 추가 - > 컴포넌트 인스턴스에서 mounted함수에 this 불러오기.
- mounted 라이프사이클 훅은 컴포넌트 인스턴스가 생성된 후이기 때문에 this로 접근이 가능하다. but Vue3의 컴포지션 API의 setup함수에서는 컴포넌트 인스턴스가 생성되기 전이라서 this로 접근할 수 없다.
--->  이럴 때 provide와 inject 활용이 가능하다.


# 라이프사이클 훅 
- 단계별 기능, 함수를 말한다.

Creation(컴포넌트 인스턴스 생성)
컴포넌트 초기화 단계이며, 가장 먼저 실행된다.
컴포넌트가 DOM에 추가되기 전이므로, DOM에 접근할 수 없다.


  - setup
    가장 먼저 실행됨

  - beforeCreate
    2번째로 실행됨
    컴포넌트가 초기화될 때 실행되는 훅이다. 인스턴스(this)접근 가능.

  - created 
    3번째로 실행됨



Mounting(장착)
DOM에 컴포넌트를 삽입하는 단계.

  - OnBeforeMount
    컴포넌트가 마운트되기 직전에 호출

  - OnMounted
    컴포넌트가 마운트된 후에 호출됨. (모든 자식 컴포넌트가 마운트 되었다는 뜻)
    DOM에 접근할 수 있다.
    

Updating(변경)
컴포넌트에서 사용되는 반응형 데이터가 변경되거나, 재렌더링 발생될 때 호출.
디버깅할때 씀.

  - OnBeforUpdate
    반응형 상태 변경으로 인해 컴포넌트가 DOM 트리를 업데이트하기 직전에 호출됨.

  - OnUpdated
    DoM 트리를 업데이트 한 후에 호출됨.

Destruction(소멸)
  - OnBeforeUnmount
    마운트가 해제되기 직전에 호출

  - OnUnmounted
    마운트가 해제된 후 호출됨. (DOM을 못 가져온다.)

- Options API, Composition API에서도 지원된다.

# Template refs
기본 DOM 요소에 직접 접근할 때.
'ref'

- v-for 내부 참조
  여러개의 돔 요소를 직접 참조한다.

  문자열  키를 할당할 수도, 
  <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li>
  itemRefs.value.forEach(item => console.log('item: ', item.textContent));

  함수로 넣을 수도 있다.
  <li
    v-for="fruit in fruits"
    :key="fruit"
    :ref="el => itemRefs.push(el.textContent)"
  >
    {{ fruit }}
  </li>
  itemRefs.value.forEach(item => console.log('item: ', item));


- 컴포넌트 Refs
but 일반적으로 props나 emit을 사용해야 한다.

- 자식 -> 부모 접근 $parents


# script setup

<script setup>

</script>

이 안에 쓰면. setup함수 안에 컴파일이 된다.
선언과 리턴을 축약해준다. 편리하다.

 - 여기선 props와 emits을 어떻게 선언할까?
defineProps()
defineEmits()
import 필요없음.

 - 기본적으로 컴포넌트간 통신이 닫혀 있음.
 내부의 데이터를 명시적으로 노출하려면 defineExpose() 메서드를 사용해야 함.

- 일반 <script> 함께 사용 가능.
  한 번만 호출하고싶은 함수가 있을 때 nomal script block과 함께 사용한다. 


- top level에서 await 사용 가능.
원래 async와 함께 사용해야하는데 script setup이라 가능

 npm i axios
 dummy sample rest api
 eslint vue plugin