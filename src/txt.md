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
