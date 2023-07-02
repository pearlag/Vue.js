
# 목차
<sub>vue.js 기본편 강의를 들었지만 어려워서
자바스크립트 기본편 강의를 들은 후 재수강.
이번에는 잘 이해해서 실전편까지 넘어가보자!</sub>
1. [선수학습](#선수학습)   
2. [초기 설정](#초기-설정)   
3. [Vue란?](#vue란)   
4. [컴포넌트 이해하기](#컴포넌트-이해하기)   
5. [Options API vs Composition API](#options-api-vs-composition-api)

# 선수학습✨


### DOM(문서 객체 모델) Document Object Model.
> 트리 구조(document 안 구조) / 노드(각각의 객체)   
> document : dom tree 최상위 모델 (dom model진입점) 

### BOM(브라우저 객체 모델) Brouser oject model   
> 브라우저를 제어할 수 있도록 모델링하는것   
> window - 브라우저 창   
> document - 문서에 대한 정보 have   
> history 객체 - url history 제어   
> location - 문서의 주소와 관련된 객체. 문서 url 변경, 주소에 대한 정보 얻음   
> screen : 사용자의 화면에 대한 정보   
> navigator : 실행중인 브라우저에 대한 정보. 위치정보 버전. 이름 앱..    

### 자바스크립트 파일을 효과적으로 가져오는 법   
> html parsing ------script fetch--------script execution-----------→ ( X )   
> 동기처리로, 시간이 걸리고, 순서가 애매할수 있다.   
>   
> html parcing ----------→ script fetch + script execution  ( O )   
> 이 방법도 문제가 있다. 

#### defer로 해결할 수 있다. *일반적으로 사용함*   
> script 선언에  defer 속성을 선언해주면 된다.   
> html 파싱과 함께 비동기로 js파일을 불러온다.   
> html 파일을 불러온 후 script execution 진행한다.   
> 즉,   
> html parsing -------script fetch(비동기)-------→(파싱 끝난후)script execution      

#### async 속성 *꼭 필요할때 사용함.*
> html 파싱과 함께, 비동기로 js 파일을 불러온다.   
> html 파싱이 완료되지 않았더라도 먼저 로딩되는 js파일부터 실행이 된다.   
> js 파일을 실행할때는 html 파싱이 중단된다.   
> html parsing -------script fetch(비동기)-------→script execution(html 파싱 중지) ---→(다시 파싱)   

### this
> ES5 bind 메서드   
> 한 번만 사용할 수 있다.   
> 전역스코프에서 this는 window 객체다.   
> 화살표 함수는 자신을 감싸는 외부 스코프의 this를 물려받는다.  
>  >  객체 메서드를 선언할 때 사용하면 안됨.   
>  >  addEventListener 함수의 콜백함수에서 사용하면 안됨.    
> <b>엄격 모드(use strict)</b>에서는 호출한 놈이 없을 경우 기본값이 window가 아니라 undefined가 된다.
```js
function printThis(){
  console.log(this);
}

let person1 = {
  name = '홍길동',
};

let printThis1 = printThis.bind(person1);
printThis();

// {name: '홍길동'} 
```

### API란 무엇인가?
> 응용 프로그램에서 소통하기 위한 접점   
> 애플리케이션에서 데이터를 읽거나 쓰기 위해 사용하는 인터페이스.   
> #### HTTP API(통신 방법)   
> * Private API(사내 API)   
> * Public API(Open API)   

### 동기
> 답변을 기다리는 것(blocking)   
> 업무가 단순하다 but 자원 비효율적 사용   

### 비동기   
> 답변을 기다리지 않는 것(Non-blocking)   
> 대신, 결과를 확인할 수 없다.   
> 자원 효율적 사용 가능함.
> 업무가 복잡함.   

### 이벤트 전파   
> 캡쳐링   
> > 최상위 요소부터 하위 요소까지 이벤트 전파   
> 버블링   
> > 타겟 요소부터 이벤트가 전파되어 최상위 요소까지 올라가는 것   
```js
event.stopPropagation(); // 이벤트 전파 멈춤.
event.preventDefault();  // 기본 기능을 막음(ex. 앵커태그)
```

### Array API
#### map()
> 주어진 결과물이 리턴한 결과를 새로운 배열로 반환한다.   
```html
<script type="module" src="./main.js"></script>
```

```js:
//main.js
'use strict'; // 엄격 버전

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
```

#### some()
> 요소를 한 번씩 순회하며, 주어진 함수가 한 번이라도 true라도 나오면 true 반환한다.   
```js
const fruits = ["사과", "딸기", "배", "참외];
fruits.some((fruit) => fruit === "배"; )

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.some((number) => number >= 8)
```

#### every() 
> 배열 안의 모든 요소가 true일때 true 반환한다.   

#### filter() 
> 필터링 한 요소는 제거하고 새로운 배열을 만든다.   
```js 
numbers.filter((number) => number % 2 === 0) 
```

#### reduce(acc누적값, cur현재값, idx인덱스, src원본) 
> 누적값: 결과로 반환한 값을 다시 매개변수로 넣는다.   
> 현재값: 배열 안에 있는 요소   
> 인덱스: 배열의 인덱스   

#### 모듈 시스템 
> 분리된 js파일(모듈)과 그것을 불러오는 시스템(import)   
#### 장점
* 유지보수 용이   
* 네임스페이스화   
* 재사용성   

#### 종류
* AMD   
* CommonJS   
* UMD  
* ES Modul   

#### ES Module 방식(scss 파일 나누는거랑 똑같음) 
1. package.json에서 <code>"type" : "module"</code> 선언
2. script 태그에 <code>type="module"</code> 속성을 추가하면, 이 파일은 모듈로서 동작한다.
3. 외부에서 불러올 때는 import를 사용한다. <code>@import{ 함수명, 함수명, 함수명 } from './math.js';</code>
4. js파일에서 <code>export default 함수명;</code> 선언하면 부모 js 디렉티브에서 바로 받아올 수 있다. <code>import 함수명 from './math.js'</code>
5. 모아서 default 선언할수도 있다.
```js:
// math.js
// 위에서 sum, avg, subtract 변수를 선언한 상태
export default{
  sum,
  avg,
  subtract
}
```
```js
//index.js
import math from './math.js'

comsole.log(math.sum);
comsole.log(math.avg);
comsole.log(math.subtract);
```

#### CommonJS 방식 
> exports.함수명   
> modules

#### NPM node package manager 
> npm(모듈 모음)   
> 설치하는 방법 : npm install 모듈명   
> devDependencies : 개발할 때 필요한 라이브러리    
> dependencies : 운영할 때 필요한 라이브러리   
#### 명령어
> 기본값 입력 <code>npm init -y</code>    
> 특정 버전 설치는 @+버전<code>npm i ajs@1.10.7</code>   
> devDependencies에만 다운로드 <code>npm i --save-dev</code>   
> 전역 설치 <code>-g</code>

#### WebPack 기초 
> 모듈 증가 -> 로딩 시간 증가   
> 시간 줄이는 방법 : http 갯수를 줄인다.   
> 배포하기 전, 여러 개의 파일을 하나의 파일로 줄인다.(번들링) / 모듈 번들러로 작업한다. (웹팩)   
> 웹팩 설치 <code>npm i --save-dev webpack webpack-cli</code>   
> <code>npx webpack --entry ./index.js</code>index.js를 기준으로 번들링하겠다.    
> <code>--output-path ./dist</code>dist 폴더 안에 번들링 결과 파일을 저장함. 압축되어 생성하겠다.   
> <code>--mode development</code>압축 없이 생성하겠다.   
> <a href="webpack.js.org/guides/asset-management" target="_blank">셋팅 참고</a>   

#### webpack.config.js 파일 설정
> <code>npx webpack</code>명령어 입력시 webpack.config.js를 참고하여 번들링한다.   
> packages.json - script에   
> > <code>"build" : "webpack"</code> 셋팅 추가.   
> > 터미널에 <code>npm run build</code> 하면 webpack 실행.   
> > js 뿐만 아니라 image, css도 번들링한다.   
```js
// webpack.config.js
const path = require('path');

module.exports = {
mode : 'production' // development(압축 x) 
entry : 진입점을 설정한다.
output:{ 
    path: 번들링 파일을 저장할 경로
    filename : 파일 이름
  }
}
```

#### bootstrap 5 설치
UI 프레임워크

1. npm install bootstrap bootstrap-vue
2. main.js에 import 'bootstrap/dist/css/bootstrap.min.css';
3. main.js에 마운트 다음줄에 import 'bootstrap/dist/js/bootstrap.js';
4. npm run dev
5. getbootstrap.com에서 ui 가져오기

* vuetify
vue에 특화된 UI 프레임워크



# 초기 설정✨
## 로컬 저장소 - git 원격 저장소 연결
> git config --global user.email "이메일"   
> git config --global user.name "닉네임"   
> git init   
> git add .   
> git commit -m ""   
> git remote add origin '원격저장소 주소'   
> git push -u origin master   

## VScode 확장 프로그램 설치
> indent-rainbow   
> Auto Rename Tag   
> css peek   
> HTML to CSS autocompletion   
> HTML CSS Support   
> Live server   
> ESLint   
> Volar   
> Vue VSCode Snippets (SFC 빠르게 생성 가능)   

## chrome extension
> Vue.js devtools    

## vue 셋팅_직접 셋팅
### 터미널
> npm init -y   
> npm i vue vite @vitejs/plugin-vue  

### vite.config.js 셋팅
> 루트에 <code>vite.config.js</code> 생성   
> <a href="https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue">vite 공식문서</a>참고하여 내용 복붙   
### package.json 셋팅
> script에 "dev" : "vite"추가.   
> npm run dev로 local server ON!
### main.js 셋팅
```js
import { createApp } from 'vue' // 추가
import App from './App.vue'
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import AppView from './components/AppView.vue'
import BookComponent from './components/BookComponent.vue'

const app = createApp(App); // 수정 :: Vue.createApp ->createApp
app.component('AppHeader', AppHeader);
app.component('AppNav', AppNav);
app.component('AppView', AppView);
app.component('BookComponent', BookComponent);

app.mount('#app');

```
### style 분리 및 App.vue 셋팅
> html에 있던 css를 <code>asset/base.css</code>로 분리.   
> 컴포넌트의 제일 상위에 있는 App.vue의 style블럭에 import해오기.  
```vue
<style>
@import './asset/base.css';
</style>
```

## Vue 셋팅_자동화
### 터미널
> npm init vue 
> > 프로젝트 네임 정하기   
> > 모두 No로 하고, ESLint와 Prettier는 YES로 진행
> > 프로젝트 폴더가 생성된다.
> 프로젝트 폴더로 이동   
> npm i   
> npm run dev
> 프로젝트 폴더 구조가 셋팅되었다!
### vite.config.js
alias: 단축 url 지정. 
### 자동화로 구성된 폴더 구조에 대하여
> public: 정적 자산   
> src/assets: webpack이나 vite와 같은 빌드 도구의 영향을 받는 images나 css와 같은 정적 자산을 놓는 곳.   
> src/App.vue: 루트 컴포넌트.   
> > index.html 렌더링    
> > -> main.js 렌더링 
> > <code>import { createApp } from 'vue' </code>  
> > <code>import App from './App.vue'</code>   
> > <code>createApp(App).mount('#app')</code>   
> > createApp는 뷰 인스턴스를 생성하는 메서드.    
> > 루트 컴포넌트인 APP가 메서드 안에 들어감.   
> > 생성된 뷰 인스턴스는 #app에 마운트됨.   
> > 루트 컴포넌트가 렌더링 됨.   
### .eslintrc.cjs - ESLint 셋팅
#### plugin:vue/vue3-essential
> .eslintrc.cjs에 이미 설정된 것은 <a href="v3.ko.vuejs.org/style-guide" target="_blank" >스타일가이드 공식문서</a>에서 정의된 필수 요소(essential)만 추가된 것.   
#### eslint:recommended
> <a href="eslint.org/docs/rules" target="_blank" >eslint 공식문서</a>에 checked된 항목만 자동으로 검사하는 옵션.   
#### @vue/eslint-config-prettier/skip-formatting
> 충돌 방지용 패키지
### .eslintrc.cjs - prettier 셋팅
<a href="https://prettier.io/docs/en/options.html" target="_blank">prettier 공식문서</a>에서 Options 볼 수 있음.

```cjs
rules: {
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      semi: true,
      useTabs: true,
      tabWidth: 2,
      trailingComma: 'all',
      printWidth: 80,
      bracketSpacing: true,
      arrowParens: 'avoid',
    },
  ],
},
```

### rules 셋팅을 자동으로 파일에 수정저장 하는법
1. 설정 - 작업 영역 - eslint - Eslint: Validate
2. settings.json
```js
{
  "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
      // "html",  // 삭제
      "vue",
      "markdown"
  ],
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
}
```
3. npm run lint

4. 설정에서 format on Save 삭제




# Vue란?✨
> UI 개발을 위한 자바스크립트 프레임워크.   
> html 셋팅후 <script src="https://unpkg.com/vue@next"></script> 추가.   
> js에서는 데이터 바인딩을 하려면 돔 객체를 가져와서 넣어주고 함수를 만들어야 하는데, vue에서는 선언만 하면 된다.   
> 선언적 렌더링: 템플릿 구문을 이용하여 데이터를 출력.   
> 반응성 : 상태 변경을 자동으로 추적하여 자동 업데이트.   
> v- 를 <b>디렉티브</b>라고 한다.

## 바인딩(v-bind)
> 엘리먼트 속성에 데이터를 바인딩할 수 있다.   
> 반응형 동작. 최신 상태를 유지한다.   
> 값 연결. data 값 변경 -> value 변경 <b>단방향</b>

## 이벤트 핸들링(v-on)
> 사용자가 앱과 상호 작용할 수 있게 하기 위해 v-on 디렉티브를 사용하여 Vue 인스턴스의 메소드(methods)를 호출하는 이벤트 리스너를 추가 할 수 있습니다.   
> 이 방법은 직접적으로 DOM(p 엘리먼트)을 건드리지 않고 앱의 상태만 업데이트 합니다.

## 양방향 바인딩(v-model)
> v-bind는 단방향이라 data값이 변경되면 value값이 변경되지만, <b>반대로 </b>value값 변경시 data값은 변경되지 않는다.   
> value 변경시에 상태값도 변경하고 싶다면 v-model을 사용한다.   

## 조건문(v-if)
> 엘리먼트 표시여부는 v-if 특수 속성(디렉티브)으로 제어할 수 있습니다.   

## 반복문
> 배열에서 데이터를 가져와 아이템 목록을 표시하는데 사용할 수 있습니다.   


## 예제
```html
<div id="app">
  <input type="text" v-bind:placeholder="message" />
  <hr />
  <button v-on:click="reverMessage">click</button>
  <hr />
  <input type="text" v-model="username" />
  <hr />
  <p v-if="visible">보이나요?</p>
  <button type="button" v-on:click="visible = true">visible</button>
  <hr />
  <ul>
      <li v-for="item in items">{{ item }}</li>
  </ul>
</div>
```
```js
const app = Vue.createApp({
  data() {
      return{
          message: '값 입력',
          username: '진주은',
          visible: false,
          items: ['사과', '포도', '딸기']
      }
  },
  methods:{
      hello(){
          alert('hello');
      },
      reverMessage(){
          this.message = this.message.split('').reverse().join("");
      }
  }
})
app.mount('#app');
```

# 컴포넌트 이해하기✨
> 모듈 : js를 재사용할 수 있도록 분리한 것.   
> 컴포넌트 : ui를 재사용할 수 있도록 정의하다    
> 반복되는 코드를 <b>컴포넌트</b>로 만들면 편리하다.
> 실무에선 주로  SFC를 사용한다.   
> 네이밍은 <code>PascalCase</code> or <code>kebab-case</code>

## 컴포넌트 만들기
> 컴포넌트 정의 -> 컴포넌트 등록(지역/전역) -> 컴포넌트 사용

## 컴포넌트 만들기_문자열 템플릿
1. html에 반복되는 부분(또는 컴포넌트를 만들고 싶은 부분)을 찾는다.
 ```html
 <section>
    <article class="book">
        <div class="book_subtitle">제목</div>
        <div class="book_title">title</div>
    </article>
    <!-- 
      이게 무려 5개가 있음..
    -->
  </section>
 ```   
2. 변수로 템플릿 정의 + 하단에 컴포넌트 명과 컴포넌트 등록하기.
 ```js
 const BookComponent = {
    template: `
      <article class="book">
          <div class="book_subtitle">제목</div>
          <div class="book_title">title</div>
      </article>
    `,
  };
  const app = Vue.createApp({});
  app.component('BookComponent', BookComponent);
  app.mount('#app');
 ```
3. html에서 템플릿 불러오기
```html
<div id="app">
  <main>
      <section>
        <book-component></book-component>
        <book-component></book-component>
        <book-component></book-component>
        <book-component></book-component>
      </section>
  </main>
</div>
```   
4. 루트 컴포넌트 생성
* ui를 컴포넌트화 한다.   
* App에 템플릿을 다 정의해서 담아준다.   
* 하단 루트 컴포넌트 생성 옵션에 App을 담아준다.   
* html에 <code><div id="app"></div></code> 만 정의해도 ui가 다 나온다.   
```html
<style>
*{margin:0;padding:0;}
header{width:100%;height:40px;background-color: #eee;padding:20px;}
nav{display:inline-block;padding: 10px;background-color: #ccc;height: 100vh;width:200px}
main{display: inline-block;vertical-align: top;}
section{display: flex;gap:20px;margin:20px;}
.book{flex-basis: 10%;padding:10px;border:1px solid red;border-radius: 5px;}
.book_subtitle{text-align: center;}
.book_title{text-align: center;font-weight: bold;font-size: 30px;}
</style>
<body>
<div id="app"></div>
<script>
  const App = {
    template: `
    <app-header></app-header>
    <app-nav></app-nav>
    <app-view></app-view>
    `
  }
  const AppHeader = {
    template: `
      <header>
        <h1>header</h1>
      </header>
    `,
  };
  const AppNav = {
    template: `
      <nav>
        <ul>
          <li><a href="#none">메뉴1</a></li>
          <li><a href="#none">메뉴2</a></li>
          <li><a href="#none">메뉴3</a></li>
          <li><a href="#none">메뉴4</a></li>
          <li><a href="#none">메뉴5</a></li>
        </ul>
      </nav>
    `
  };
  const AppView = {
    template: `
      <main>
          <section>
            <book-component></book-component>
            <book-component></book-component>
            <book-component></book-component>
            <book-component></book-component>
          </section>
      </main>
    `
  }
  const BookComponent = {
    template: `
      <article class="book">
          <div class="book_subtitle">제목</div>
          <div class="book_title">title</div>
      </article>
    `,
  };

const app = Vue.createApp(App); //루트 컴포넌트 생성 옵션
app.component('AppHeader', AppHeader);
app.component('AppNav', AppNav);
app.component('AppView', AppView);
app.component('BookComponent', BookComponent);

app.mount('#app');
</script>
</body>
</html>
```   
5. 컴포넌트를 파일로 나누기
* <code>src/App.js</code>   
* <code>src/components/AppHeader.js</code> 등등 UI 나눈것 넣기   
* js파일 안에는 <code>export defalt{}</code> 블럭 안에 템플릿 정의한 내용을 넣는다.    
```js
export default{
  template: `
    <app-header></app-header>
    <app-nav></app-nav>
    <app-view></app-view>
  `
}
```
* <code>src/main.js</code> 파일을 만들고 html파일에서 component 정의한 내용을 넣어준다.
* 상단에는 나눠놓은 컴포넌트를 <code>@import</code>로 불러온다.
```js
import App from './App.js'
import AppHeader from './components/AppHeader.js'
import AppNav from './components/AppNav.js'
import AppView from './components/AppView.js'
import BookComponent from './components/BookComponent.js'


const app = Vue.createApp(App); //루트 컴포넌트 생성 옵션
app.component('AppHeader', AppHeader);
app.component('AppNav', AppNav);
app.component('AppView', AppView);
app.component('BookComponent', BookComponent);

app.mount('#app');
```

* 루트 디렉토리 index 파일의 script를 모두 지우고 main.js를 모듈  타입으로 불러온다.
<code><script type="module" src="./src/main.js"></script></code>

## 컴포넌트 만들기_SFC
> 확장자 .vue를 갖는다.
> 문자열 템플릿에서 <code>template: ``~~``</code> 안에 있던 태그를 그대로 <code><template></template></code> 안에 넣는다.   
> js 코드는 <code>export default{}</code>안에 넣는다.   
> style 태그는 <code><style></style></code>안에 넣는다.   
> html, js, css가 <code>캡슐화</code>되어있다.
```vue
<!-- 기본 구조 -->
<template>
  <header>
    <h1>header</h1>
  </header>
</template>
<script>
export default {
}
</script>
<style>
</style>
```

# Options API VS Composition API ✨
## Options API (vue2)
```vue
<template>
	<div>
		<button v-on:click="increment">counter: {{ counter }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		increment() {
			this.counter++;
		},
	},
	mounted() {
		console.log('컴포넌트가 마운트되었습니다.');
	},
};
</script>

<style lang="scss" scoped></style>
```
> data, methods, mounted 옵션에 따라 나눠놓음.
> 논리적 관심사를 처리하는 코드가 분산되어 있어 분석이 어렵다.

## Composition API (vue3)
```vue
<template>
	<div>
		<button v-on:click="increment">counter: {{ counter }}</button>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
	setup() {
		const counter = ref(0);
		const increment = () => counter.value++;
		onMounted(() => {
			console.log('컴포넌트가 마운트되었습니다.');
		});
		return {
			counter,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>

```
> setup 함수 안에 논리적 관심사대로 그룹핑해놓음. 분석이 쉽다.   
> >  counter.js / book.js.. 이렇게 파일을 나눠놓기 좋음. 
> > <b>재사용(Composable) 유용</b>. Options API의 Mixin 사용 안해도 됨.     
> 옵션을 선언하는 대신에 가져온 함수(ref, onMouted ,,)를 사용하여 Vue 컴포넌트를 작성할 수 있는 API 세트이다.   
> <a href="vuejs.org/api" target="_blank">api 공식문서</a>   
> 