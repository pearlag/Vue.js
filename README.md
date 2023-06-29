#선수지식 

DOM(문서 객체 모델) Document Object Model.

트리 구조(document 안 구조) / 노드(각각의 객체)

document : dom tree 최상위 모델 (dom model진입점)

 

BOM(브라우저 객체 모델) Brouser oject model

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

-defer로 해결할 수 있다. ( 일반적으로 사용)

script 선언에  defer 속성을 선언해주면 된다. - html 파싱과 함께 비동기로 js파일을 불러온다. -. html 파일을 불러온 후 script execution 진행한다.

즉,

html parsing -------script fetch(비동기)-------→(파싱 끝난후)script execution

 

 

-async 속성

html 파싱과 함께, 비동기로 js 파일을 불러온다. html 파싱이 완료되지 않았더라도 먼저 로딩되는 js파일부터 실행이 된다.

js 파일을 실행할때는 html 파싱이 중단된다.

html parsing -------script fetch(비동기)-------→script execution(html 파싱 중지) ---→(다시 파싱)

꼭 필요할때 사용함. 
