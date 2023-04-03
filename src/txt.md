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
- 네이밍은 파스칼 or 카멜케이스

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
