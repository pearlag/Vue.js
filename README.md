<sub>실전편도 매일 꾸준히 공부해서 실무에 적용할 수 있도록 해보자! </sub>

# 목차
1. [VueRouter](#VueRouter) 

# VueRouter
Vue.js를 이용하여 SPA을 구현할 때 사용하는 Vue.js의 공식 라우터.

### Router
url에 따라 어떤 페이지를 보여줄지 mapping해주는 라이브러리

```bash
npm i vue-router
```

src/views  페이지
src/components  재사용할 컴포넌트

### 사용법
1. \src\router\**index.js**
router 정보 설정
```js
'vue-router';
import Homeview from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Homeview,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
```

2. \src\main.js
app.use(router) 호출
```js
import router from '@/router';

createApp(App).use(router).mount('#app');
```

3. 모든 자식 컴포넌트에 router, route 객체 사용가능.


### RouterLink a태그 대신 사용
> 페이지를 리로딩하지않고, url매핑된 페이지 렌더링   
> active-class : 활성화된 상태에서 추가하는 class 설정 가능.   
> v-slot 속성 사용 가능.   
```html
<router-link class="nav-link" active-class="active" to="/">Home</router-link>
```

### $route 내장객체
> useRouter 임포트하고,    
> $route로 현재 페이지에 대한 정보를 접근할 수 있다.
```vue
<template>
	<div>
		<h2>About View</h2>
		<p>{{ $route.path }}</p><!-- /about -->
		<p>{{ $route.name }}</p><!-- About -->
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const route = useRouter();
console.log('route.path', route.path);
</script>
```


### router 링크 이동하는 방법

1. $router에 push
```html
<button class="btn btn-primary" @click="$router.push('/')">Home Go</button>
```

2. 변수에 함수로 담기
```html
<button class="btn btn-primary" @click="goAboutPage()">About Go</button>
...

import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};
```
3. 라우트 name으로 이동 ( 권장 )
```html
<button	@click="goDetailPage">취소</button>
..

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const goDetailPage = () => {
	router.push({
		name: 'PostDetail',
		params: { id },
	});
};
</script>

```


### 현재 라우트 이름 name 설정
index.js
```
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Homeview,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
];
```


# 동적 라우트 매칭
```path: '/posts/:id'```
> 동적 url   
> 유저마다 다른 여러개의 url을 하나의 페이지에 매핑.    
```{{ $route.params }}```
> params의 값은 route에서 설정한 path에서 ':id' 이부분!   
> 만약 ':abc'로 했으면 abc로 나옴.   


### query
```
#route.query 
/users?searchText=love
query: { searchText: love }
```

### hash
```
$route.hash
/users/#profile
hash: { profile }
```

ex)
/posts/ddd?searchText=Vue3bible#profile

```html
<p>params: {{ $route.params }}</p>
<p>query: {{ $route.query }}</p>
<p>searchText: {{ $route.query.searchText }}</p>
<p>hash: {{ $route.hash }}</p>
..

//출력
params: { "id": "ddd" }
query: { "searchText": "Vue3bible" }
searchText: Vue3bible
hash: profile
```

### ui 컴포넌트 파악 tip
1. grid시스템 살펴보기
2. 사전에 정의해놓은 class들(help-class) 살펴보기



# id값 다르게 상세 이동
1. 하드코딩
```js
@click="goPage(post.id)"
...
const goPage = id => {
	router.push(`/posts/${id}`);
};
```
2. 이름을 가지는 라우트
```js
@click="goPage(post.id)"
...
const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
```

3. 쿼리, 해쉬와 함께 사용
/posts/1?searhText=hello#world
/posts/2?searhText=hello#world
...
```js
router.push({
  name: 'PostDetail',
  params: {
    id,
  },
  query: {
    searhText: 'hello',
  },
  hash: '#world',
});
```

# 404 page Component
엉뚱한 url로 이동했을 때 이동할 페이지를 설정한다.
index.js
```js
const routes = [
	{
		path: '/:pathMatch(.*)*',
	// path: '/user-:afterUser(.*)', 특정 문자열 뒤에 정규식 표현할 때
		name: 'NotFound',
		component: NotFoundView,
	},
];
```

### 중첩된 라우트
> nav에서 선택된 메뉴의 컨텐츠가 이미 보여지고 있는데   
> 그 컨텐츠에 또 탭이 있어서 그 탭에 해당되는 컨텐츠가 보여져야할 때.  

1. 부모 컴포넌트에 ```<router-view></router-view>```를 넣는다.

2. 라우트 설정에서 부모 컴포넌트 안에 children 속성을 넣어, 딸린 페이지들을 연결한다.
```js
{
	path: '/Nested',
	name: 'Nested',
	component: NestedView,
	children: [
		{
				path: '', // /Neseted 페이지, 즉 기본 페이지
				name: 'NestedHome',
				component: NestedHomeView,
			},
		{
			path: 'one',
			name: 'NestedOne',
			component: NestedOneView,
		},
		{
			path: 'two',
			name: 'NestedTwo',
			component: NestedTwoView,
		},
	],
},
```

### router.replace
= router.push

> 현재 페이지 컴포넌트를 '대체'한다.   
> 히스토리에 쌓이지 않는다.   
> 예를 들면, 페이지 이동을 about -> nested -> nested/one 페이지로 이동했다고 하자.   
> nested에 딸린 페이지 one, two는 link를 router.replace로 처리하였다.   
> 이 때, one과 two 페이지는 nested 페이지를 대체한다.   
> 그래서 one(또는 two, three four..) 페이지에서 뒤로 가기를 누르면 about 페이지가 나온다.   
```html
// replace 사용 안함
<router-link to="/nested/one">Nested One</router-link>

//replace 사용
<router-link :to="{ name: 'NestedOne', replace: true }">Nested One</router-link>
```



# 페이지 컴포넌트에 Props 전달

0. api 데이터 내보내기
```js
export function getPostById(id) {
	const numberID = parseInt(id); // string -> number 변환
	return posts.find(item => item.id === id);
}
```

1. 데이터를 가져올 컴포넌트
```js
import { getPostById } from '@/api/posts';
..
const id = route.params.id;
const form = ref({});

const fetchPost = () => {
	const data = getPostById(id);
	form.value = { ...data };
};
```



### reactive()와 ref() 의 차이

#### ref() 레퍼런스,프리미티브 모두 할당 가능.
장점
- 한꺼번에 객체 할당 가능 + 반응형 살아있음
form.value = {...data}
- 일관성 유지

단점
- .value를 계속 붙여야 한다.
form.value.title, form.value.content


#### reactive()레퍼런스 타입만 할당이 가능.
장점
- value를 안 붙여도 된다.
form.title, form.content

단점
- 객체할당을 하면 반응성을 잃는다.
form.title = data.title;
form.content = data.content;

### 게시판 상세 미리보기 만들기!
목록들이 간략하게 카드 형태로 나열되어 있고,
하단 섹션에는 게시판 상세 내용 미리보기 영역이 있다.

파라미터 값은 라우트 객체에 의존되어있다.
라우트에서 ```props:true```를 넣어주면
파라미터(id값)가 해당 페이지 컴포넌트에 props로 전달된다.

```index.js```
```js
{
	path: '/posts/:id', // 동적 url. 유저마다 다른 여러개의 url을 하나의 페이지에 매핑.
	name: 'PostDetail',
	component: PostDetailView,
	props: true,
},
```

해당 페이지 컴포넌트에서 ```defineProps``` 정의
```PostDetailView.vue```
```js

// 라우트에서 props로 넘겨줬기 때문에 props로 받기.
const props = defineProps({
	id: String,
});
..
//하단에 id로만 정의되어있는 부분에 props.id로 수정
const fetchPost = () => {
	const data = getPostById(props.id);
	form.value = { ...data };
};
..
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });

```



### id값을 여기저기 보낼 경우, ```index.js```
보낼 id가 있는 컴포넌트의 라우터에서 ```props:true```

#### 객체 모드로 넘길수도 있음.
```props:{word: 'hello'}```

#### 함수 모드로 넘기기.
props에서 속성도 넘길 수 있다.
```js
props: (route) => {
	return {
		id : parseInt(route.params.id),
		other: route.query..
	}
}

// other은 삭제하고 단축해서 적으면..
props: route => ({ id: parseInt(route.params.id) }),
```


#### 보여 줄 id를 정한다
PostListView.vue
```
<PostDetailView :id="1"></PostDetailView>
```



# 다양한 History 모드

## 우선 알아야 할 것

### SPA 
빌드 파일 생성 /dist
```bash
npm run build
```
생성되면 파일이 하나다. 구조도 코드도 단촐하다. 난 분명 페이지를 많이 만들었는데. 왜??

이것은, 뷰,리액트,앵귤러 프레임워크는 SPA 기반의 프웍이기 때문이다. => 빌드된 결과물은 하나의 페이지에서 작동한다.(리로딩X) 빠르게 UI를 보여준다.

### 서버 사이드 렌더링
ui에서 보여질 html문서를 서버에서 만들어 내려주는 것

### 클라이언트 사이드 렌더링
프웍처럼 js코드로 html를 생성해 사용자에게 보여줌.

### Hash 모드와 History 모드
Hash모드, History 모드의 차이는 운영서버에 배포할 때 일어난다.

index.js
```js
const router = createRouter({
	history: createWebHistory('/'), // ('/base')로 설정하면, url root에 기본으로 붙는다. /base/about, /base/home..
	history: createWebHashHistory(),// #이 붙는다.
	routes,
});
```

#### Hash 모드
createWebHashHistory()
> 운영서버 배포할 때 ```index.html``` 이 파일만 배포.   
> 요청은 뒤에 url 제거 (해쉬)   
> 루트로만 요청하면 index.html 파일 돌려줌.   
> 어차피 서버에 요청을 루트로 보내니, 서버 설정 없이 배포할수있다.   
> 웹사이트 크롤링 X. SEO X. 크롤링 봇이 해시를 무시할때가 많다.(치명적 단점)   
 

#### History 모드
CreateWebHistory()
> 전체 경로 포함해서 요청한다.   
> 이 경로는 404 뜸.   
> 그래서 서버 설정을 추가로 해야 한다. 공식문서 가이드 있음.   
> 대부분 이걸 사용해서 배포.   
