# 이벤트 처리
v-on 디렉티브로 사용.
@로 단축해서 사용할 수 있음


*이벤트 객체 접근 $event

keyup
어떤 키를 눌렀는지 알 수 있는 메서드


v-on이벤트엔 다양한 수식어가 있다.

.stop = e.stopPropagation() // 이벤트 버블링을 막는다
.prevent = e.preventDefault() // 기본 기능을 차단한다
.capture = 
 이벤트의 flow :  캡쳐링으로 시작되어 버블링으로 마무리됨.
 만약 div 태그 먼저 실행하고싶다면, 캡쳐링이 방법.


.self
=오로지 자기 자식만 호출한다. 타깃요소가 self일때 발동.
클릭한 요소가 나 자신일때 이벤트를 호출한다.

.once
한 번만 실행한다.

.passive
= 보통, 모바일 장치의 성능을 개선하기 위해 터치 이벤트 리스너와 함께 사용됨.
@scroll.passive="" 실무에서는 주로 이렇게 사용한다.


# 키 수식어
키보드 이벤트를 수신할 때 특정 키를 확인해야 하는 경우

@keyup.enter // 엔터를 해야 출력
.tab
.delete (delete && backspace)
.esc
.space
.up
.down
.left
.right


# 시스템 키 수식어
.ctrl
.alt
.shift
.meta(window key)
