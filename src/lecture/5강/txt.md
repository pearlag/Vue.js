*텍스트 보간법
데이터 바인딩의  가장 기본 형태는 {{ }} (이중 중괄호 = 콧수염 괄호)

  v-once : 일회성 보간
    <p v-once>{{ message }}</p>


이중 중괄호는 데이터를 html이 아닌 일반 텍스트로 인식.
그럴 때 쓰는게 v-html
const rawHtml = ref('<strong>안냐세요</strong>'); 
선언 및 리턴하고,


<p v-html="rawHtml"></p> 써주면 됨