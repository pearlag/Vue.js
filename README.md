
# 목차
<sub>vue.js 기본편 강의를 들었지만 어려워서
자바스크립트 기본편 강의를 들은 후 재수강.
이번에는 잘 이해해서 실전편까지 넘어가보자!</sub>
1. [선수학습](#선수학습)   
2. [초기 설정](#초기-설정)   
3. [Vue란?](#vue란)   
4. [컴포넌트 이해하기](#컴포넌트-이해하기)   
5. [Options API vs Composition API](#options-api-vs-composition-api)
6. [HTML 클래스 바인딩](#HTML-클래스-바인딩)   
7. [조건부 렌더링](#조건부-렌더링)   
8. [목록 렌더링](#목록-렌더링)   
9. [디렉티브](#디렉티브)   
10. [이벤트 처리](#이벤트-처리)   
11. [양방향 바인딩](#양방향-바인딩)   
12. [Watch WatchEffect](#Watch-WatchEffect)  
13. [컴포넌트 기초](#컴포넌트-기초)  
14. [SFC](#SFC)  
15. [Props](#Props-부모---data--->자식)  
16. [emit](#emit-자식---event--->부모)  


# 선수학습✨


### DOM(문서 객체 모델) Document Object Model.
> 트리 구조(document 안 구조) / 노드(각각의 객체)   
> document : dom tree 최상위 모델 (dom model진입점) 

### BOM(브라우저 객체 모델) Browser Object Model.   
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
> 최상위 요소부터 하위 요소까지 이벤트 전파   


> 버블링   
> 타겟 요소부터 이벤트가 전파되어 최상위 요소까지 올라가는 것   
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

const result = numbers.map((number) => number * 2);
console.log(
"영어 점수"
students.map((student) => student.en)
);

// 영어 점수 (4) [87, 22, 100, 50] 
```

#### some()
> 요소를 한 번씩 순회하며, 주어진 함수가 한 번이라도 true가 나오면 true를 반환한다.   
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
1. package.json에서 ```"type" : "module"``` 선언
2. script 태그에 ```type="module"``` 속성을 추가하면, 이 파일은 모듈로서 동작한다.
3. 외부에서 불러올 때는 import를 사용한다. ```@import{ 함수명, 함수명, 함수명 } from './math.js';```
4. js파일에서 ```export default 함수명;``` 선언하면 부모 js 디렉티브에서 바로 받아올 수 있다. ```import 함수명 from './math.js'```
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
> 기본값 입력 ```npm init -y```    
> 특정 버전 설치는 @+버전```npm i ajs@1.10.7```   
> devDependencies에만 다운로드 ```npm i --save-dev```   
> 전역 설치 ```-g```

#### WebPack 기초 
> 모듈 증가 -> 로딩 시간 증가   
> 시간 줄이는 방법 : http 갯수를 줄인다.   
> 배포하기 전, 여러 개의 파일을 하나의 파일로 줄인다.(번들링) / 모듈 번들러로 작업한다. (웹팩)   
> 웹팩 설치 ```npm i --save-dev webpack webpack-cli```   
> ```npx webpack --entry ./index.js```index.js를 기준으로 번들링하겠다.    
> ```--output-path ./dist```dist 폴더 안에 번들링 결과 파일을 저장함. 압축되어 생성하겠다.   
> ```--mode development```압축 없이 생성하겠다.   
> <a href="webpack.js.org/guides/asset-management" target="_blank">셋팅 참고</a>   

#### webpack.config.js 파일 설정
> ```npx webpack```명령어 입력시 webpack.config.js를 참고하여 번들링한다.   
> packages.json - script에   
> > ```"build" : "webpack"``` 셋팅 추가.   
> > 터미널에 ```npm run build``` 하면 webpack 실행.   
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
> 루트에 ```vite.config.js``` 생성   
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
> html에 있던 css를 ```asset/base.css```로 분리.   
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
> > ```index.html``` -> ```main.js``` 렌더링    
> > ```import { createApp } from 'vue' ```  createApp는 뷰 인스턴스를 생성하는 메서드.    
> > ```import App from './App.vue'```루트 컴포넌트인 APP가 메서드 안에 들어감.   
> > ```createApp(App).mount('#app')``` 생성된 뷰 인스턴스는 #app에 마운트됨.    
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
```js,
{
  "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",,,,
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
> 네이밍은 ```PascalCase``` or ```kebab-case```

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
* html에 ```<div id="app"></div>``` 만 정의해도 ui가 다 나온다.   
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
* ```src/App.js```   
* ```src/components/AppHeader.js``` 등등 UI 나눈것 넣기   
* js파일 안에는 ```export defalt{}``` 블럭 안에 템플릿 정의한 내용을 넣는다.    
```js
export default{
  template: `
    <app-header></app-header>
    <app-nav></app-nav>
    <app-view></app-view>
  `
}
```
* ```src/main.js``` 파일을 만들고 html파일에서 component 정의한 내용을 넣어준다.
* 상단에는 나눠놓은 컴포넌트를 ```@import```로 불러온다.
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
```<script type="module" src="./src/main.js"></script>```

## 컴포넌트 만들기_SFC
> 확장자 .vue를 갖는다.   
> 문자열 템플릿에서 ```template: `~~` ``` 안에 있던 태그를 그대로 ```<template></template>``` 안에 넣는다.      
> js 코드는 ```export default{}```안에 넣는다.     
> style 태그는 ```<style></style>```안에 넣는다.    
> html, js, css가 ```캡슐화```되어있다.   
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

<style scoped></style>
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

<style scoped></style>

```
> setup 함수 안에 논리적 관심사대로 그룹핑해놓음. 분석이 쉽다.   
> >  counter.js / book.js.. 이렇게 파일을 나눠놓기 좋음. 
> > <b>재사용(Composable) 유용</b>. Options API의 Mixin 사용 안해도 됨.     
> 옵션을 선언하는 대신에 가져온 함수(ref, onMouted ,,)를 사용하여 Vue 컴포넌트를 작성할 수 있는 API 세트이다.   
> <a href="vuejs.org/api" target="_blank">api 공식문서</a>   

### 반응형 API (Reactivity API)
반응하는 데이터와 관련된 API 세트.
* ```ref()```
* ```isRef()``` 반응형 데이터인지 검사하는 api.
* 아래 예시는 ref()를 활용하여 btn 클릭시 '!'를 추가하는 로직이다.
* 반응형 데이터와 일반 데이터의 로직을 비교해보길.
```vue
<template>
	<div>
		<h2>반응형 메시지</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMessage">Add Message</button>
		<h2>일반 메시지</h2>
		<p>{{ normalMessage }}</p>
		<button v-on:click="addNormalMessage">Add Message</button>
	</div>
</template>

<script>
import { ref, isRef } from 'vue';
export default {
	setup() {
		const reactiveMessage = ref('Hello Reactive Message');
		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};
		//반응형 데이터 유무 검사
		console.log('isRef(reactiveMessage):', isRef(reactiveMessage));
		// true

		let normalMessage = 'Hello Normal Message';
		const addNormalMessage = () => {
			normalMessage = normalMessage + '!';
		};
		//반응형 데이터 유무 검사
		console.log('isRef(normalMessage):', isRef(normalMessage));
		// false

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMessage,
			addNormalMessage,
		};
	},
};
</script>
```

### 라이프 사이클 훅(Lifecycle Hooks)
#### 라이프 사이클
Vue 인스턴스나 컴포넌트가 생성될 때 거치는 과정.
#### 라이프 사이클 훅
라이프사이클 단계에서 실행되는 함수.

### setup()
컴포넌트가 생성되기 이전에 실행되는 Hook.
#### 사용법
1. 반응형 상태를 선언한다.

```vue
import { ref } from 'vue'
export default{
  setup(){
    const count = ref(0)
    
    return{
      count
    }
  }
}
```
2. 템플릿에서 쓴다.
```vue
<template>
  <button @click="count++">{{ count }}</button>
</template>
```
2. 컴포넌트 인스턴스에서 사용한다. <br />
```this``` 키워드로 접근 가능하다.
```vue
...
  setup(){
    ...
  },
  mounted(){
    console.log(this.count)
  }
...
```

#### Props 접근
> setup()의 첫 번째 매개변수이다.   
> 반응형 객체이다.   
```vue
export default{
  props:{
    title: String
  },
  setup(props){
    console.log(props.title)
  }
}
```

#### Setup Context
> setup(props, context)   
> > context.attrs   
> > context.slot   
> > context.emit   
> > context.expose
또는 ```setup(props, {attrs, slots, emit, expose})```


### 종속성 주입(Dependency Infection)

### 템플릿 문법
이중 중괄호를 사용해 데이터에 바인딩할 수 있다.   

#### ```v-once``` 데이터가 변경되어도 갱신하지 않는 일회성 보간.
```vue
<p v-once>문자열: {{ message }}</p>
```
```vue
<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button @click="message = message + '!'">click!</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('안녕하세요!');
		return {
			message,
		};
	},
};
</script>

```

#### ```v-html``` <br />  
> 실제 HTML을 출력하려면 ```v-html``` 디렉티브를 사용한다.   
> XSS 취약점으로 이어질 수 있어, 신뢰할 수 있는 콘텐츠에서만 사용한다.   
```html
<p v-html="rawHtml"></p>

``` 
#### ```v-bind``` 속성 바인딩
v-bind / :
```vue
<template>
  <div v-bind:title="dynamicTitle">마우스를 올려보세요</div>

  <!-- 단축 속성 -->
  <div :title="dynamicTitle">마우스를 올려보세요</div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const dynamicTitle = ref('안녕하세요~~');
    return {
			dynamicTitle,
		};
  },
};
</script>
```
<br />

여러 개의 속성을 한꺼번에 바인딩할 수 있다.  
```vue
<template>
  <input v-bind="attrs" />

  <!-- 단축 속성 -->
  <input :="attrs" /> 
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const attrs = ref({
			type: 'password',
			value: '12345',
			disabled: false,
		});
    return {
			attrs,
		};
  },
};
</script>
```

<br />
자바스크립트 표현식을 출력할 수도 있다.

```vue

<template>
 {{ message.split('').reverse().join('') }}<!-- !요세하녕안 --> <br />
  {{ isInputDisabled ? '예' : '아니오' }}<!-- 예 -->
</template>

```

##### v-bind in css
SFC style태그는 v-bind css 기능을 사용하여, css 값을 동적으로 변경할 수 있다.
```vue
<template>
	<h5 class="red">Card title</h5>
</template>
<script>
import { ref } from 'vue';

export default {
	setup() {
		const color = ref('red');
		color.value = 'yellow';
		return { color };
	},
};
</script>

<style>
.red {
	color: v-bind(color);
}
</style>

```


### 반응형 상태 선언하기
> reactive()는 객체나 배열과 같은 레퍼런스타입. 즉 객체타입만 반응형 객체로 만들 수 있다. 
```vue
const state = reactive({
  count: 0,
  deep: {
    count: 0,
  },
});

<p>{{ message }}</p>
let message = reactive('hello vue');
<!-- 
이렇게 선언해야 작동됨.
-->
<p>{{ message.value }}</p>

let message = reactive({
			value: 'hello vue',
		});
```  
#### ref()로 원시값 반응형 데이터 생성하기
> ref()는 기본타입(number, string, boolean)을 반응형으로 만들 수 있다.
```vue
import { ref } from 'vue'
const count = ref()
```

#### 반응형 객체의 ref() unwrapping
> ref()로 선언한 데이터를 반응형 객체의 속성으로 주입하게 되면, 자동으로 unwrapping된다.
> 그럼에도 반응형은 연결되어 있다.

```vue

const count = ref(0);
const state = reactive({
  count,
});
console.log(count.value); // 1
console.log(state.count); // 1 
// state.count.value라고 적지 않아도 된다.

```


#### ref()가 반응형 배열 또는 Map과 같은 기본 컬렉션 타입의 요소로 접근될 때, wrapping 유지.
```vue

const message = ref('Hello');
const arr = reactive([message]);
console.log(arr[0].value);

```

#### 반응형 상태 구조 분해하기
>  큰 반응형 객체의 몇몇  속성을 사용할 때, ES6 구조분해할당을 이용한다.   
>  반응형 객체에서 구조분해 할당을 하게 되면 반응형 속성을 잃는다.   
> 아래 예시에서 검사창을 확인하면 반응형 속성이 동작하지 않는다.  
> typeof 검사를 해보면 string으로 나온다.
```vue
<template>
	<div>
		<p>author : {{ author }}</p>
		<p>title : {{ title }}</p>
	</div>
</template>

<script>
import { reactive } from 'vue';
export default {
	setup() {
		const book = reactive({
			author: '주으니',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 지금..',
			price: '18,000원',
		});

		const { author, title } = book;

		return {
			author,
			title,
			book,
		};
	},
};
</script>

```

##### 반응성을 잃지 않으면서 구조분해할당을 하려면?
###### ```toRefs()```
> 구조분해할당 여러개 할 때 사용.   
> 원래 있던 객체의 속성과, 구조분해해서 재할당한 반응형 상태는 서로 동기화된다.   

```vue

		const { author, title } = toRefs(book);

```


###### ```toRef()```
> 구조분해할당 한 개씩만 가져올 때 사용.   
> 두 번째 파라미터로 가져오고 싶은 속성을 넣으면 된다.   
```vue

		const author = toRef(book, 'author');
		const title = toRef(book, 'title');

```


#### ```readonly```
반응형 객체의 변경을 방지한다.

```vue
const copy = readonly(original);

```

### ```computed```
계산된 결과를 보여준다. 템플릿에 적으면 코드가 복잡하니 setup()안에 computed() 정의하여 코드를 깔끔하게 한다.
반응형 데이터(ref,reactive)의 종속 관계를 자동으로 세팅할 때.
> '캐시된다.' 계산된 결과를 보관하고 있다가 다음에 또 요청될때 캐시된 데이터를 돌려준다. (일반 메서드는 실행될 때마다 몇 번이고 계산된다.)   
> 반응형 데이터가 변경될 때, 캐시가 다시 계산된다.   
> 기본적으로 getter(읽기)전용이다. 새 값을 할당하려 하면 오류 표시된다.     
> > 쓰기가 필요하다면 getter(보내고), setter(받고) 함수를 적용시킨다.   
```vue
<script>
import { reactive, computed, ref } from 'vue';
export default {
	setup() {
		const teacher = reactive({
			name: '진주은',
			lectures: ['HTML/CSS', 'Javascript', 'Vue3'],
		});

		const hasLectures = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		});

		const existLectures = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		};

		const count = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');
		const fullName = computed({
			get() {
				// 원래 값 보내기
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				//쓰기 가능한 속성으로 만듬
				[firstName.value, lastName.value] = value.split(' ');
			},
		});
		console.log('Console 출력:', fullName.value);
		fullName.value = '짐 코딩';
		return {
			teacher,
			hasLectures,
			existLectures,
			count,
			fullName,
		};
	},
};
</script>

```


# HTML 클래스 바인딩✨
### ```v-bind / :```
> 일반 클래스와 바인드된 클래스는 공존할수 있다.   
> 여러 class를 넣으려면 콤마(,)로 구분한다.   
```vue

<div :class="{ active: isActive, 'text-danger': hasError }">text</div>

```
> 바인딩할 데이터가 많다면 오브젝트로 사용 가능하다.   
```vue
<div :class="classObject">text</div>

const classObject = reactive({
  active: true,
  'text-danger': false,
 });
```

> 배열로도 넣을 수 있다.   
```vue

<div :class="[activeClass, errorClass]">text</div>

```

### inline Style 
```vue
<div :style="styleObject">

...

const styleObject = reactive({
  color: 'red',
  fontSize: '13px',
});

```
> 속성명을 camelCase로 넣는다.   


### 동적으로 style 바인딩하기
```vue

<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam
			voluptatibus, aut unde odit accusantium consequatur voluptatum earum ullam
			a est dolores perspiciatis quaerat libero odio exercitationem sapiente
			voluptate. Vero!
		</div>
		<button @click="fontSize--">-</button>
		<button @click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });

		const fontSize = ref(13);

		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObject, fontSize };
	},
};
</script>

```

# 조건부 렌더링✨

### ```v-if```
> js 문법과 흡사하다. 참: 보임 / 거짓: 안보임      
> false일 때 렌더링조차 안 된다.   
> ```v-for```와 동시 사용 피하기.

### ```v-else```
> if, else

### ```v-else-if```
> if, else if, else

### ```<template v-if="">``` 여러 개의 HTML요소를 v-if 디렉티브로 연결하기
> 하나의 조건으로 여러 노드 컨트롤

### ```v-show```
> 노드는 그대로 있고, style의 display 여부로 표시 여부를 결정한다.

### ```v-if``` vs ```v-show```

#### ```v-if```   
> 실제로 렌더링된다. 전환 비용이 높다.   
> 초기 렌더링 시, false이면 아무 작업도 하지 않는다.   
> 자주 전환하는 노드일 때 사용하기.   

#### ```v-show```  
> 일단 엘리먼트를 생성한다. 초기 비용이 높다.   
> 조건에 따라 display block/none으로 속성을 전환한다.   
> 런타임 시 조건이 변경되지 않을 때 사용하기.

#### 예제
```vue

<template>
	<div>
		<h2 v-if="visible">Hello Vue3</h2>
		<h2 v-else>this is false.</h2>
		<button @click="visible = !visible">toggle</button>

		<hr />

		<button @click="type = 'A'">A</button>
		<button @click="type = 'B'">B</button>
		<button @click="type = 'C'">C</button>
		<button @click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>A, B, C가 아닙니다.</h2>

		<hr />
		<template v-if="visible">
			<h1>title</h1>
			<p>hi, hello</p>
			<p>hi, hello</p>
		</template>
		<hr />

		<h1 v-show="on">title 입니다.</h1>
		<button @click="on = !on">Show title</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const visible = ref(false);
		const type = ref('A');
		const on = ref(true);
		return { visible, type, on };
	},
};
</script>

<style scoped></style>


```

# 목록 렌더링✨

### ```v-for```
> 배열인 목록을 렌더링할 수 있다.
> ```v-for="item in items"``` 배열에서 항목을 순차적으로 할당한다.
> ```v-for="(item, index) in items" :key="item.id"```
> > 배열 인덱스 가져오기
> > ```:key``` 속성에 고유한 값 지정해야 함.
### 예제
```vue
<template>
	<div>
		<ul>
			<template v-for="(item, index) in evenItems" :key="item.id">
				<!-- <li v-if="item.id % 2 === 0"> -->
				<li>ID : {{ item.id }}, 인덱스: {{ index }}, {{ item.message }}</li>
			</template>
		</ul>

		<hr />

		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }}-{{ key }}-{{ value }}
			</li>
		</ul>
	</div>
</template>
<script>
import { computed, reactive } from 'vue';
export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'css' },
			{ id: 4, message: 'JavaScript' },
		]);

		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			pub: '2022-03-22',
		});
		return { items, evenItems, myObject };
	},
};
</script>
```

# 디렉티브✨

## 디렉티브 구성
- v-on:submit.pervent="onSubmit"
- 디렉티브:전달인자.수식어="값"

## v- 접두사가 있는 특수 속성
### v-text
### v-html
### v-cloak
> 컴포넌트가 준비되지 않았을 때, 라이브러리나 외부 자산이 로딩되지 않은 깨진 화면을 보여주기 싫을 때
> 로딩중인 화면을 보여줄 때
> style에 [v-cloak] 속성에 로딩에 관한 속성이나 display none이나.. 이런 속성을 넣어주면, 로딩중일 때 해당 속성을 보여준다.

### v-once
>	엘리먼트, 컴포넌트를 한 번만 렌더링한다. 이후 재렌더링 시, 엘리먼트, 컴포넌트 및 모든 하위 엘리먼트는 정적 컨텐츠로 처리되고 건너뛴다. 업데이트 성능을 최적화한다. 

### v-memo="[x, y, z]"
>	데이터 변경에 대한 캐시를 쌓아놨다가 따로 적어놓은 배열 값 x,y,z이 업데이트 되었을때만 한꺼번에 데이터를 변경한다.


# 이벤트 처리✨
### ``` v-on(@) ```

### 메소드 이벤트 핸들러 
v-on 디렉티브에서 메소드를 호출할 수 있다. 이 때, 매개변수로 event 객체를 받는다.
```
const eventInfo = (message) => {
	console.log...
}
<button @click="eventInfo"></button> 

```



### 이벤트 객체(다이렉트로)접근

```vue
const eventInfo = (message, sign) => {
	console.log...
}
<button @click="eventInfo('hello world!', $sign)"></button> 
```


vue에서는 이벤트 이름 앞에 v-on 디렉티브를 사용함으로, 이벤트를 연결할 수 있다.
키보드 이벤트의 예시를 보자.
```vue

<input type="text" @keyup="onKeyupHandler" />

const onKeyupHandler = event => {
		console.log('event.key: ', event.key);
	};
	
```
input에 키보드로 입력할 때마다 onKeyupHandler 이벤트가 연결되어 console창에 키보드로 입력하는 key들이 출력된다.


### 이벤트 수식어
>	e.preventDefault() , e.stopPropagation()는 비효율적이라 그 대신에 Vue는 ```v-on``` 이벤트에 다양한 수식어를 제공한다.   
>	 여러 기능을 함께 사용 가능.  
>  ```<a href="https://naver.com" @click.prevent.stop="clickA">A영역</a>```   
- ```.stop``` = ```e.stopPropagation()``` 이벤트 버블링을 막는다.
-	```.prevent``` = ```e.preventDefault()``` tag가 가지고 있는 기능을 막는다.
-	```.capture``` 캡쳐 모드를 사용해 이벤트 리스너를 사용 가능하다. 먼저 이벤트를 실행할 때 사용한다.
-	```.self``` 오로지 자기 자신만 호출한다. 타깃요소가 self(나 자신)일때 발동.
- ```.once``` 한 번만 실행한다.
- ```.passive``` 모바일 장치의 성능을 개선하기 위해 터치이벤트 리스너와 사용된다. 
		```<div @scroll.passive="onScroll">..</div>```


#### 키 수식어
키보드 이벤트를 수신할 때 특정 키를 확인해야 하는 경우.
- ```.enter```
- ```.tag```
- ```.delete```
- ```.esc```
- ```.space```
- ```.up```
- ```.down```
- ```.left```
- ```.right```

#### 시스템 키 수식어
해당 수식어 키가 눌러진 경우에만 mouse 또는 keyboard 이벤트 리스너를 트리거할 수 있다.
- ```.ctrl```
- ```.alt```
- ```.shift```
- ```.meta``` MAC:command / Window: Win


# 양방향 바인딩✨
FE에서 입력 양식을 처리할 때, value상태와 js의 반응형 상태를 동기화해야할 경우가 있다. js로 처리할 수 있지만, v-model 디렉티브로 간단히 처리할 수 있다.

### ```v-model```
#### js로 처리
```html
<input type="text" :value="inputValue" @input="event => (inputValue = event.target.value)" />
```
#### v-model 디렉티브로 처리
```html
<input type="text" v-model="inputValue" />
```

v-model은 내부적으로 html요소에 따라 서로 다른 속성과 이벤트를 사용한다.
#### ```checkbox, radio, select```
- @change
- checkbox에서 true-value="값", false-value="값" 속성을 넣으면, true/false일 때 출력할 값을 정할 수 있다.

#### v-model 수식어

##### ```.lazy```
default는 input 이벤트 후 입력과 데이터를 동기화한다. .lazy 수식어를 추가하여 change 이벤트 이후에 동기화할 수 있다. (변경하는 중엔 동기화가 안 되고, 포커스가 떨어졌을 때 동기화된다.)

#### ```.number```
자동으로 number 타입으로 형변환. 


#### ```.trim```
앞뒤 공백 제거.


# Watch WatchEffect✨

### Watch
반응형 '상태가 변경될 때'마다 '특정 작업'을 수행한다.
또다른 DOM을 조작하고, 또다른 API를 호출해서 상태를 변경할 때 그것을 추적한다.
 명시적이다.'어떠한 데이터를 감시하겠다'
```vue
const message = ref('hello Vue3')

watch(message, (newValue, oldValue) => {
	console.log('newValue: ', newValue);
	console.log('oldValue: ', oldValue);
});


watch(감지할 반응형 데이터, (변경된 새로운 값, 이전 값) => {

})

```

#### 감지할 데이터
ref, reactive, computed, getter(), array..

#### getter
특정 오브젝트의 속성(ex:number)를 감지하려면 getter함수를 넣는다.
getter함수로부터 받은 값이 변경되었을때만 감지한다.
```vue
watch(
			() => obj.count,
			(newValue, oldValue) => {
				console.log('newValue: ', newValue);
			},
		);
```

#### deep option
반응형 객체를 직접 watch()하면 깊은 감시자가 생성된다.
모든 중첩된 속서에도 트리거된다.

#### immediate 즉시 실행
최초에 즉시 실행.
watch함수의 매개변수로 넣는다.
immediate: true,

또는 변수 안에 함수로 담아서 watch함수의 두 번째 매개변수로 넣고,
함수를 선언 및 return.한다.
```vue
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('hello');
		const reverseMessage = ref('');

		const reverseFunction = () => {
			reverseMessage.value = message.value.split('').reverse().join('');
		};

		watch(message, reverseFunction);
		reverseFunction();
		return { message, reverseMessage };
	},
};
```

### WatchEffect
최초로 즉시 실행된다.
콜백함수 안에서 사용한 반응형 api만 감시한다.
```vue
watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});
```

### bootstrap 5 설치
UI 프레임워크

1. npm install bootstrap bootstrap-vue
2. main.js에 import 'bootstrap/dist/css/bootstrap.min.css';
3. main.js에 마운트 다음줄에 import 'bootstrap/dist/js/bootstrap.js';
4. npm run dev
5. getbootstrap.com에서 ui 가져오기

* vuetify
vue에 특화된 UI 프레임워크


# 컴포넌트 기초✨

### 전역 등록
컴포넌트를 사용하지 않더라도 최종 빌드에 해당 컴포넌트가 포함되어 파일의 크기를 증가시킨다.
컴포넌트간 종속 관계를 확인하기 힘들다.
```app.component()```
```vue
import { createApp } from 'vue';
import App from './App.vue';

import GlobalComponent from './components/GlobalComponent.vue';

const app = CreateApp(App)
// 한 개일 경우
app.component('GlobalComponent', GlobalComponent)

//여러 개일 경우
app
	.component('ComponentA', ComponentA)
	.component('ComponentB', ComponentB)
	.component('ComponentC', ComponentC)

app.mount('#app');

```

### 지역 등록
부모 컴포넌트 안에서만 사용 가능하다.
```vue
import ChildComponent from './ChildComponent.vue'

export default {
	components:{
		ChildComponent
	},
	setup(){
		..
	}
}

```


### 파일 명
- 케밥 케이스나 파스칼 케이스로 짓는다.
- 베이스 컴포넌트 이름(button, icon, table..) 접두사로는 Base, App, V를 붙인다. VButton, VTable, VIcon..
- 싱글 인스턴스 컴포넌트 이름은 (layout, header, sidenav..) 접두사로 The를 붙인다. TheNav, TheHeader, TheFooter..


# SFC ✨
template + script + style 세 개의 블록을 갖고 있다.

### <template>
>	각 *.vue 파일은 오직 하나의 top-level <template></template> 블록을 포함한다.   
>	콘텐츠는 추출되어 ```@vue/compiler-dom``` 으로 전달되고, JS 렌더 기능으로 사전 컴파일되고, render 옵션으로 내보내어 컴포넌트에 첨부된다.

### <script>와 <script setup>
> 이 둘은 따로국밥이다. 한 파일에 공존이 가능하다. 한 파일에 각각 한 개씩만 포함할 수 있다.   
> script setup은 사전에 처리되어 컴포넌트의 setup()함수로 사용된다. 

### <style>
>	여러 개의 스타일 블럭이 포함될 수 있다.
>	스타일 모듈화를 위해 scoped 또는 module 속성을 가질 수 있다.
#### scoped
현재 컴포넌트의 요소에만 적용된다.
특수 속성이 선언되고, 그 속성을 갖고 있는 엘리먼트에게만 스타일이 적용된다.
```css
<style scoped>
.red {
	color: red !important;
}
</style>
```

#### module
class에 바인딩하여 쓴다.
```vue
<template>
	<p :class="$style.red">text</p>
</template>

<style module>
.red {
	color: red !important;
}
</style>
```
모듈 속성에 값을 지정하여 주입된 클래스 객체의 속성 키를 변경할 수 있다.
```vue
<template>
	<p :class="classes.red">text</p>
</template>

<style module="classes">
.red {
	color: red !important;
}
</style>
```




### 사용자 정의 블록
- vue-i18n : 다국어 지원 블록

### 전처리기
```lang``` 속성을 사용하여 전처리기 언어를 선언할 수 있다. script엔 보통 ts를 선언한다.
```js
<script lang="ts">
	//use TS
</script>
```
style태그에 scss를 선언할 수도 있다.
```scss
<style lang="scss">
// use scss
</style>
```


# Props 부모---data--->자식 ✨ 
> 컴포넌트에 등록할 수 있는 사용자 정의 속성.   
> 부모 컴포넌트에서 자식 컴포넌트에서 데이터를 전달하는 방법.   
> 외부에서 데이터를 전달받을 수 있다.   

##### 자식 컴포넌트 (AppCard.vue)
1. script에 props 옵션 선언
```js
export default{
	props: ['title', 'contents'],
}
```
2.  템플릿 안에서 문자열 템플릿 삽입
```html
<h5>{{ title }}</h5>
<p>{{ contents }}</p>
```

##### 부모 컴포넌트 (TheView.vue)
3. [정적] 자식 컴포넌트 속성에 값 넣기.
```html
<div><AppCard title="제목1" contents="내용1"></AppCard></div>
```

3. [동적] 자식 컴포넌트 속성에 v-bind로 값 넣기.
```html
<div><AppCard :title="post.title" :contents="post.contents"></AppCard></div>
...
```
```js
setup(){
	const post = reactive({
		title: "제목1",
		contents: "내용1"
	})
	return { post }
}
```

3. [배열] v-for 사용. 가장 효율적인 방법.

```html
<div v-for="post in posts" key="post.id"><AppCard :title="post.title" :contents="post.contents"></AppCard></div>
...
```
```js
setup(){
	const posts = reactive([
		{id: 1, title: "제목1", contents: "내용1"},
	...
		{id: 5, title: "제목5", contents: "내용5"},
	])
	return { posts }
}
```

4. [조건] 연산자를 이용해 조건에 따라 출력.
- 자식 컴포넌트에서 조건 설정
```html
<span class="badge bg-secondary">{{ type === 'news' ? '뉴스' : '공지사항'}}</span>
// type이 'news'이면 '뉴스'를 출력하고, 그게 아니라면 '공지사항'을 출력한다.
```
- 부모 컴포넌트에서 배열의 값 설정
```js
const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: false, type: 'news' },
			{
				id: 2,
				title: '제목2',
				contents: '내용2',
				isLike: true,
				type: 'notice',
			},
....
```

- 부모 컴포넌트의 템플릿에서 v-bind 데이터 바인딩.
```html
<AppCard
		:title="post.title"
		:contents="post.contents"
		:type="post.type"
		:isLike="post.isLike"
	></AppCard>
```


#### Props 선언
> 문자열 배열 선언과 객체타입 선언이 있는데, 객체타입으로 가능한 상세하게 정의해야 한다.   
> 컴포넌트에 ```props``` 옵션을 사용하여 선언한다.   
> 객체 타입으로 선언할 때의 속성(파스칼 표기법으로, 맨 앞은 꼭 영어 대문자.)   
>	> type : String, Number, Boolean, Array, Object, Date, Function, Symbol 모든 기본 생성자 또는 모든 사용자 정의 타입이 올 수 있다.(Person Animal)   
>	> default : 속성값이 비어있거나 undefined를 전달 받는경우 기본값을 선언할 수 있다.    
>	>	> 객체나 배열과 같은 레퍼런스 타입의 default를 설정할 경우에는 기본값을 반환하는 팩토리함수를 설정해야 한다.   
>	> required : 속성이 필수값이라면 true로 설정.     
>	> validator : 유효성 검사가 필요할 때 사용한다.   

```js
props: {
	type: {
		type: String,
		default: 'news',
		validator: value => {
			return ['news', 'notice'].includes(value); //값에  news와 notice만 포함한다. 그 외에는 console에 경고문 뜬다.
		},
	},
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		required: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
	// 객체나 배열과 같은 레퍼런스 타입의 default를 설정할 경우에는 기본값을 반환하는 팩토리함수를 설정해야 한다.
	obj: {
		type: Object,
		default: () => ({})
	}
},
```

#### Props 사용
> 선언된 props를 template에서 바로 사용할 수 있다.  ```<p>{{ title }}</p>```   
> setup()함수의 첫 번째 매개변수로 props 객체를 받아 사용할 수 있다.

##### v-if를 props의 class 데이터 바인딩(computed, v-bind)을 사용하여 클린하게 변경하기 

원래 코드
```html
<span class="badge bg-secondary">{{ type === 'news' ? '뉴스' : '공지사항'}}</span>
<a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>
<a v-else href="#" class="btn btn-outline-danger">좋아요</a>
```

수정된 코드
```html
<span class="badge bg-secondary">{{ typeName }}</span>
<a href="#" class="btn" :class="isLikeClass">좋아요</a>
```

```js
setup(props) {
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);
		return { isLikeClass, typeName };
	},
```

##### 객체를 사용하여 다중 속성 전달
v-bind로 사용해서 전달할 수 있다.(위에서 서술)

##### 단방향 데이터 흐름
> 모든 props는 상위속성과 하위 속성간에 단방향 바인딩으로 형성되어있다.   
> 상위 속성이 업데이트되면 하위 속성이 업데이트되지만, 하위에서 상위로의 업데이트는 안된다.   
> 자식 컴포넌트에서 상위 컴포넌트로 이벤트를 전달하려면 emit을 사용한다.  

##### 객체 / 배열 Props 업데이트
이러한 레퍼런스 타입을 속성으로 전달할 때 주의할 점이 있다.

#### Boolean Casting

# emit 자식---event--->부모 ✨
자식 컴포넌트에서 부모 컴포넌트로 데이터 전달 또는 트리거
```emit``` 메서드로 구현 가능하다.

부모 컴포넌트
```html
<PostCreate @create-post="createPost"></PostCreate>
```
```js
const createPost = (a, b, c, d) => {
	console.log('createPost', a, b, c, d);
};
```

```자식 컴포넌트```는 세 가지 방법으로 구현할 수 있다.

1. 컴포넌트 내장 메서드로 구현하는 방법
> 이벤트를 부모에게 올릴 때, 변수 뿐만 아니라 파라미터도 넘길 수 있다.   

```html
<button class="btn btn-primary" @click="$emit('createPost', 1, 2, 3, '냥냥')">button</button>
```


2. setup()의 두 번째 파라미터인 context 객체의 emit 메서드로 구현하는 방법
> 자식에게 파라미터 값이 있으면 이벤트와 함께 받을 수 있다.
```html
<button class="btn btn-primary" @click="createPost">button</button>
```
```js
export default {
	setup(props, context) {
		const createPost = () => {
			context.emit('createPost', 1, 2, 3, '냥냥');
		};
		return { createPost };
	},
};
```

3. 구조분해할당 
> 객체로 emit 메서드를 가져온다.
> 마크업은 위와 동일.      
```js
export default {
	setup(props, { emit }) {
		const createPost = () => {
			emit('createPost', 1, 2, 3, '냥냥');
		};
		return { createPost };
	},
};
```

## emits 이벤트 선언 (vue3)
이벤트를 선언하지 않아도 동작하지만, 잘 문서화하기 위해서 이벤트를 선언해야 한다.

1. 문자열 배열 선언
```js
export default {
emits: ['createPost'],
..
```
2. 객체문법 선언
> validation 로직 추가 가능. 필요없으면 null 선언
> 이벤트명 선언(createPost)
> 우리가 넘기는 파라미터(newTitle)가 이벤트명의 매개변수가 된다.
> 유효성 체크에 걸려도 이벤트가 발생은 되지만 console에 경고가 뜬다.
```js
export default {

	emits: {
		createPost: newTitle => {
			console.log('validator: ', newTitle);
			if (!newTitle) { //값이 없다면
				return false; // 경고창 뜸
			}
			return true;
		},
	},

	setup(props, { emit }) {
		const title = ref('');
		const createPost = () => {
			emit('createPost', title.value);
		};
		return { createPost, title };
	},
};
```

유효성 체크가 없는 경우
```js
emits: {
	createPost: null,
},
```
### v-model
vue3


#### 기본값
modelvalue라는 props로 값을 입력받아 (vue2: value)
update:modelValue로 이벤트를 발생시킬 수 있다.(vue2: @input)
```js
props:['modelValue'],
emits:['update:modelValue']
```

```전달인자```를 사용하면 이름을 수정할 수 있다.
modelvalue -> title로 이름 변경.

부모 컴포넌트
```html
<LabelTitle v-model:title="mainTitle"></LabelTitle>
```

자식 컴포넌트
```html
<input
	type="text"
	:value="title"
	@input="$emit('update:title', $event.target.value)",
/>
```
```js
import { computed } from 'vue';
export default {
	props: ['title'],
	emits: ['update:title'],
...

```

### computed
get, set 으로 읽고 쓰기

부모 컴포넌트
```html
<LabelTitle v-model:title="username" label="제~목"></LabelTitle>
```

자식 컴포넌트
```html
<input v-model="value" type="text" />
```
```js
import { computed } from 'vue';
export default {
	props: ['title', 'label'],
	emits: ['update:title'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});
		return { value };
	},
};
```
