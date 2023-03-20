composition API는 
코드를 그룹핑할 수 있어서 유지보수에 용이하다.
vue3에서 사용이 권장된다.
vuejs.org  공식홈페이지에서 toggle btn으로 options API / composition API 비교 가능
vuejs.org/examples 에서는 여러 개의 예제가 있다.  oA / cA 비교 가능하며, playground에서 바로바로 확인 가능.

*composition API*

  -반응형 API
    반응하는 데이터와 관련된  api


  - Life cycle
    vue 인스턴스나 컴포넌트가 생성될 때, 미리 사전에 정의된 몇 단계의 과정을 거치는 것
    이 단계에서 실행되는 함수를 Life cycle hooks이라고 한다.

  - 종속성 주입