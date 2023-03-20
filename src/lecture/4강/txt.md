setup()함수
CAPI 사용을 위한 진입점 역할.
컴포넌트 인스턴스가 생성되기 전에 실행되는 훅 . (in LC)

setup함수 안에 메서드나 반응형 상태를 선언하고 객체로 반환(return)하게 되면,
템플릿에 {{노출}}을 할 수 있게됨.

setup함수의 첫 번째 매개변수는 props.

두 번째는 context 객체가 넘어온다.
  setup 함수 안에서 유요하게 사용 가능하다.
  attrs
  slots
  emit
  expose